import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer } from '@react-navigation/native';
import screenName from '../theme/screenName';
import SplashScreen from '../screens/SplashScreen';
import CustomDrawer from './CustomDrawer/CustomDrawer';
import PaymentScreen from '../screens/PaymentScreen';
import PaymantFailedScreen from '../screens/PaymantFailedScreen';
import BottomTabs from './BottomTab/BottomTabNavigator';
import WelcomeScreen from '../screens/WelcomeScreen';
import OnBordingScreen from '../screens/OnBordingScreen';
import Secandry from '../screens/OnBordingScreen/Secandry';
import PermissionScreen from '../screens/PermissionScreen';
import AgeVerificationScreen from '../screens/AgeVerificationScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import AllowPermissionScreen from '../screens/AllowPermissionScreen';
import OneTimeVerficationScreen from '../screens/OneTimeVerficationScreen';
import ChatScreen from '../screens/ChatScreen';
import CameraAnGalleryPermissionScren from '../screens/CameraAnGalleryPermissionScren';
import LocationScreen from '../screens/LocationScreen';
import CustomDrawerHome from './CustomDrawer/CustomDrawerHome';
import IdentityVerificationScreen from '../screens/IdentityVerificationScreen';
import IdentityVerificationSecandScreen from '../screens/IdentityVerificationScreen/secand';

enableScreens();
const stack = createNativeStackNavigator();
const MainStack = () => {
	const linking = {
        prefixes: ['https://20.219.19.207:3000/api/v1','http://20.219.19.207:3000/api/v1'],
        config: {
            screens: {
                splash_screen: screenName.screenName.splash_screen,
                paymant_screen: screenName.screenName.paymant_screen,
                paymentFailed_screen: screenName.screenName.paymentFailed_screen,
            }
        }
    };
	return (
		<NavigationContainer linking={linking}>
		<stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={screenName.screenName.splash_screen}>
				<stack.Screen name={screenName.screenName.splash_screen} component={SplashScreen} />
				<stack.Screen name={screenName.screenName.paymant_screen} component={PaymentScreen} />
				<stack.Screen name={screenName.screenName.paymentFailed_screen} component={PaymantFailedScreen} />
				<stack.Screen name={screenName.screenName.custom_drawer_home} component={CustomDrawerHome} />
				<stack.Screen name={screenName.screenName.welcome_screen} component={WelcomeScreen} />
				<stack.Screen name={screenName.screenName.onbording_screen} component={OnBordingScreen} />
				<stack.Screen name={screenName.screenName.onbording_screen2} component={Secandry} />
				<stack.Screen name={screenName.screenName.premission_screen} component={PermissionScreen} />
				<stack.Screen name={screenName.screenName.ageVerification_screen} component={AgeVerificationScreen} />
				<stack.Screen name={screenName.screenName.createAccount_screen} component={CreateAccountScreen} />
				<stack.Screen name={screenName.screenName.allowPremission_screen} component={AllowPermissionScreen} />
				<stack.Screen name={screenName.screenName.oneTimeVerification_screen} component={OneTimeVerficationScreen} />
				<stack.Screen name={screenName.screenName.chat_screen} component={ChatScreen} />
				<stack.Screen name={screenName.screenName.location_screen} component={LocationScreen} />
				<stack.Screen name={screenName.screenName.cameraAndgallery_permissionScren} component={CameraAnGalleryPermissionScren} />
				<stack.Screen name={screenName.screenName.Identity_verification_screen} component={IdentityVerificationScreen} />
				<stack.Screen name={screenName.screenName.Identity_verification_secand_screen} component={IdentityVerificationSecandScreen} />

			</stack.Navigator>
		</NavigationContainer>
	);
};
export default MainStack;
