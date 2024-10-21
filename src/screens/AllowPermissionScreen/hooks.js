
import {
    requestLocationPermission,
    requestNotificationPermission,
    requestCalendarPermission,
    requestCameraPermission,
    requestGalleryPermission,
    requestAudioPermission,
} from '../../utils/permissions';
import { Alert, Platform, ToastAndroid } from 'react-native';
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import screenName from '../../theme/screenName';
import deviceInfoAndLocation from '../../utils/deviceInfoAndLocaton';
import { loaderRequest } from '../../stores/action/loaderAction';
import { useDispatch } from 'react-redux';
import { loginApiSection, signUpApiSection } from '../../utils/LoginFlowSection';
import React from 'react';
import { loginRequest } from '../../stores/action/loginActions';
import { userExistRequest } from '../../stores/action/userExistAction';
import { deviceAndLocationRequest } from '../../stores/action/deviceAndLocationAction';
const hooks = () => {
   const navigation = useNavigation()
   const route = useRoute()
   const dispatch = useDispatch()
   const [customModalVisibility, setCustomModalVisibility] = React.useState({
    visibility: false,
    title: '',
    description: '',
    leftButtonText: '',
    rightButtonText: '',
    closeModalEvent: () => { },
    rightModalEvent: () => { },
  })

  const closeModal = () => {
    dispatch(loaderRequest(false));
    setCustomModalVisibility({
      ...customModalVisibility,
      visibility: false
    })
  }

  const navigationToLocation = () => {
    closeModal()
    navigation.navigate(screenName.screenName.location_screen)
  }


  const rightModal = () => {
    dispatch(loaderRequest(false));
    setCustomModalVisibility({
      ...customModalVisibility,
      visibility: false
    })
    navigation.navigate(screenName.screenName.createAccount_screen,{flag1:1})
  }

  const rightModal1 = () => {
    dispatch(loaderRequest(false));
    setCustomModalVisibility({
      ...customModalVisibility,
      visibility: false
    })
    navigation.navigate(screenName.screenName.createAccount_screen)
  }


  

   const loginApi = async (userData) => {
     const loginData = await loginApiSection(userData);
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
          dispatch(loaderRequest(false));
          navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [{ name: screenName.screenName.Identity_verification_screen, params: { userData: userData } }],
          }))
        }
      }))
    }
   } 

   const signUPAPi = async (userData) => {
    let userExistBody = {
      "email": userData.userInfo.user.email,
    }
    await dispatch(userExistRequest(userExistBody, async (response) => {
      if (response.message != 'This account already exists. Please log-in with your existing account.') {
    const signUp = await signUpApiSection(userData);
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
     navigation.navigate(screenName.screenName.Identity_verification_screen,{userData:userData});
    }
 } else {
   setCustomModalVisibility({
     visibility: true,
     title: 'Your Account Already Exists',
     description: response.message,
     leftButtonText: 'Cancel',
     rightButtonText: 'Log In',
     closeModalEvent: closeModal,
     rightModalEvent: rightModal1,
     bachLogo: true
   })
 }
}))
 
   }

   const acceessPermission = async () => {
    try {
        const locationGranted = await requestLocationPermission();
        const notificationGranted = await requestNotificationPermission();
        const cameraGranted = await requestCameraPermission();
        const microphoneGranted = await requestAudioPermission();
        if (Platform.OS === 'ios'){
          const libraryGranted =  requestGalleryPermission()
        }
        // let calendarGranted = true
        // if (route?.params?.signInFlag === undefined) {
        //     calendarGranted =  await requestCalendarPermission();
        // }
        dispatch(loaderRequest(true));
        if (locationGranted  && notificationGranted  && cameraGranted && microphoneGranted) {
            if (route?.params?.signInFlag !== undefined) {
                loginApi(route?.params?.userInfo)
            }else{
              signUPAPi(route?.params?.userInfo)
            }
        } else {
            dispatch(loaderRequest(false));
            console.log('Permission Error: Some permissions were not granted.');
        }
    } catch (error) {
        dispatch(loaderRequest(false));
        console.log('An error occurred while checking permissions:', error);
    }
};
   
  return {acceessPermission,customModalVisibility}
}
export default hooks
