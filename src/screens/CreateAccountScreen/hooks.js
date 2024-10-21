import { CommonActions, useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import screenName from "../../theme/screenName";
import { Alert, ToastAndroid } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as Keychain from 'react-native-keychain';
import useGoogleSignIn from "../../utils/signInWithGoogle";
import { deviceAndLocationRequest } from "../../stores/action/deviceAndLocationAction";
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { loaderRequest } from "../../stores/action/loaderAction";
import deviceInfoAndLocation from "../../utils/deviceInfoAndLocaton";
import { loginRequest } from "../../stores/action/loginActions";
import {
  checkAudioPermission,
  checkCalendarPermission,
  checkCameraPermission,
  checkLocationPermission,
  checkNotificationPermission
} from "../../utils/permissions";
import { userExistRequest } from "../../stores/action/userExistAction";
import { loginApiSection, signUpApiSection } from "../../utils/LoginFlowSection";

const hooks = () => {
  const { signInWithGoogle } = useGoogleSignIn();
  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [signUpState, setSignUpState] = useState(true);
  const toggleSignUp = () => setSignUpState(!signUpState);
  const { user, loading, error } = useSelector((state) => state.auth);
  const [customModalVisibility, setCustomModalVisibility] = useState({
    visibility: false,
    title: '',
    description: '',
    leftButtonText: '',
    rightButtonText: '',
    closeModalEvent: () => { },
    rightModalEvent: () => { },
  })
  const navigateToWelcome = () => {
    navigation.navigate(screenName.screenName.Identity_verification_screen);
  };


  const resetStackAndGoToHome = CommonActions.reset({
    index: 0,
    routes: [{ name: screenName.screenName.custom_drawer_home }],
  });
  const closeModal = () => {
    dispatch(loaderRequest(false));
    setCustomModalVisibility({
      ...customModalVisibility,
      visibility: false
    })
  }

  const rightModal = () => {
    dispatch(loaderRequest(false));
    toggleSignUp();
    googleSignOut();
    setCustomModalVisibility({
      ...customModalVisibility,
      visibility: false
    })
  }
  const googleSignOut = async () => {
    await GoogleSignin.signOut();
  };

  // const checkUserExist = async() => {
  //   let userExistBody = {
  //     "email": userInfo.userInfo.user.email,
  //   }
  //   await dispatch(userExistRequest(userExistBody, async (response) => {
  //     let responseVal = response.message != 'This account already exists. Please log-in with your existing account.'
  //     return responseVal
  //   }))
  // }


  const navigationToLocation = () => {
    closeModal()
    navigation.navigate(screenName.screenName.location_screen)
  }
  const siginInWithGoogle = async () => {
    googleSignOut()
    try {
      const [locationGranted, notificationGranted] = await Promise.all([
        checkLocationPermission(),
        checkNotificationPermission()
      ]);
      dispatch(loaderRequest(true));
      const userInfo = await signInWithGoogle();
      if (!locationGranted || !notificationGranted) {
        dispatch(loaderRequest(false));
        navigation.navigate(screenName.screenName.premission_screen, { signInFlag: 1,userInfo:userInfo });
        return;
      }
      else{
        const loginData = await loginApiSection(userInfo);
        if (loginData == 're-Hit') {
          dispatch(loaderRequest(false));
          setCustomModalVisibility({
            visibility: true,
            title: 'Coordinates Unavailable',
            description: 'We couldn’t retrieve the coordinates at the moment. Please select coordinate on location screen.',
            rightButtonText: 'OK',
            rightModalEvent: navigationToLocation,
            backLogo: true 
        });
        }else{
          await dispatch(loginRequest(loginData, (response) => {
            if (response?.success == false) {
              dispatch(loaderRequest(false));
              setCustomModalVisibility({
                visibility: true,
                title: 'Account Not Found',
                description: response.message,
                leftButtonText: 'Cancel',
                rightButtonText: 'Sign Up',
                closeModalEvent: closeModal,
                rightModalEvent: rightModal,
                bachLogo: true
              })
            } else {
              ///Set On Api
              dispatch(loaderRequest(false));
              navigation.dispatch(resetStackAndGoToHome)
            }
          }))
        }
      }
    } catch (error) {
      dispatch(loaderRequest(false));
      console.error('Google Sign-In error:', error);
    } 
  };



  const siginUpWithGoogle = async () => {
    googleSignOut()
    try {
      dispatch(loaderRequest(true));
      await GoogleSignin.hasPlayServices();
      const userInfo = await signInWithGoogle();
      let userExistBody = {
        "email": userInfo.userInfo.user.email,
      }
      await dispatch(userExistRequest(userExistBody, async (response) => {
        if (response.message != 'This account already exists. Please log-in with your existing account.') {
            const [locationGranted, notificationGranted,cameraGranted,audioGranted] = await Promise.all([
            checkLocationPermission(),
            checkNotificationPermission(),
            checkCameraPermission(),
            checkAudioPermission()
          ]);
          if (!locationGranted || !notificationGranted || !cameraGranted || !audioGranted) {
            dispatch(loaderRequest(false));
            navigation.navigate(screenName.screenName.premission_screen,{userInfo:userInfo });
            return;
          }
           const signUp = await signUpApiSection(userInfo);
           if (signUp == 're-Hit') {
            dispatch(loaderRequest(false));
            setCustomModalVisibility({
              visibility: true,
              title: 'Coordinates Unavailable',
              description: 'We couldn’t retrieve the coordinates at the moment. Please select coordinate on location screen.',
              rightButtonText: 'OK',
              rightModalEvent: navigationToLocation,
              backLogo: true 
          });
           }else{
            const convertDataIntoString = JSON.stringify(signUp);
            dispatch(deviceAndLocationRequest(convertDataIntoString));
            dispatch(loaderRequest(false));
            navigation.navigate(screenName.screenName.Identity_verification_screen);
           }
        } else {
          setCustomModalVisibility({
            visibility: true,
            title: 'Your Account Already Exists',
            description: response.message,
            leftButtonText: 'Cancel',
            rightButtonText: 'Log In',
            closeModalEvent: closeModal,
            rightModalEvent: rightModal,
            bachLogo: true
          })
        }
      }))
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.warn('User cancelled the sign-in');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.warn('Sign-in is in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.warn('Play services not available or outdated');
      } else {
        console.error('Google Sign-In error:', error);
      }
    }
  };

  const navigateToSiginUp = () => {
    toggleSignUp();
  };


  const siginInWithApple = async () => {
    Alert.alert('Alert', 'Under Development');
  };

  React.useEffect(() => {
    if (route?.params?.flag !== undefined) {
      setSignUpState(false);
    }
    if (route?.params?.flag1 !== undefined) {
      setSignUpState(true);

    }
  }, [route.params]);


  // const test = async() => {
  //   const credential1 = await Keychain.getGenericPassword({ service: 'myDevicInfo' });
  //   if (!credential1) {
  //     throw new Error('No credentials found');
  //   }
  //   const convertIntoParse = JSON.parse(credential1.username);
  //  setTest1(JSON.stringify(convertIntoParse, null, 4))
  // }

  // React.useEffect(() => {
  //   test()
  // }, [signUpState]);

  return {
    signUpState,
    toggleSignUp,
    navigateToWelcome,
    siginInWithGoogle,
    siginUpWithGoogle,
    siginInWithApple,
    navigateToSiginUp,
    customModalVisibility,
  };
};

export default hooks;
