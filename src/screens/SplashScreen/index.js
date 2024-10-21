import React, { useEffect, useRef } from 'react';
import { Animated, ImageBackground, Text, View } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import AppLogo from '../../assets/svg/logo.svg';
import metrics from '../../theme/metrics';
import screenName from '../../theme/screenName';
import { styles } from './styles';
import { axiosInstance, setAdditionalHeaders } from '../../utils/axiosInstance';
// import { webIndexRequest } from '../../stores/action/webIndexAction';
import { useDispatch } from 'react-redux';
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar';
import colors from '../../theme/color';
import deviceInfoAndLocation from '../../utils/deviceInfoAndLocaton';
import * as Keychain from 'react-native-keychain';

const SplashScreen = () => {
  const appName = 'HALFIE';
  const navigation = useNavigation();
  const logoOpacity = useRef(new Animated.Value(1)).current;
  const dispatch = useDispatch();



  // const resetStackAndGoToBottomTab = (credentials) => CommonActions.reset({
  //   index: 0,
  //   routes: [
  //     { 
  //       name: screenName.screenName.custom_drawer,
  //       params: { credentials } 
  //     }
  //   ],
  // });



  const resetStackAndGoToOnboarding = CommonActions.reset({
    index: 0,
    routes: [{ name: screenName.screenName.onbording_screen }],
  });

  const resetStackAndGoToBottomTab = CommonActions.reset({
    index: 0,
    routes: [{ name: screenName.screenName.custom_drawer_home }],
  });

  const checkUserIsLoginOrNot = async () => {
    try {
    const credentials = await Keychain.getGenericPassword({ service: 'userLoginData' });
    const convertIntoParse = JSON.parse(credentials.username);
    if (convertIntoParse?.accessToken) {
      const { location,address } = await deviceInfoAndLocation()
      if (location && address) {
        let updateWenIndexCoordinateBody = {
          address,
          location
        }
        console.warn("===2=====token=====",updateWenIndexCoordinateBody);
        setAdditionalHeaders(convertIntoParse.accessToken)
        console.warn("===3=====token=====");
        // await dispatch(webIndexRequest(updateWenIndexCoordinateBody));
        navigation.dispatch(resetStackAndGoToBottomTab);
      }
    } else {
      navigation.dispatch(resetStackAndGoToOnboarding);
    }
    } catch (error) {
      console.log("checkUserIsLoginOrNot error ==s", error.message);
      navigation.dispatch(resetStackAndGoToOnboarding);
    }
  };
  


  useEffect(() => {
    const blinkAnimation = () => {
      Animated.sequence([
        Animated.timing(logoOpacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(({ finished }) => {
        if (finished) {
          checkUserIsLoginOrNot();
        }
      });
    };

    blinkAnimation();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={require('../../assets/images/gridentImage.png')} style={styles.subContainer}>
        <View style={styles.alignCenter}>
          <Animated.View
            style={{
              opacity: logoOpacity,
            }}
          >
            <AppLogo height={metrics.changeByMobileDPI(90)} width={metrics.changeByMobileDPI(90)} style={styles.appIconStyle} />
          </Animated.View>
          <Text style={styles.appFontStyle}>{appName}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
