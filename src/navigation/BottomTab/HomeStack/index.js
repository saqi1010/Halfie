import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screenName from '../../../theme/screenName';
import SubscriptionScreen from '../../../screens/SubscriptionScreen';
import PaymentScreen from '../../../screens/PaymentScreen';
import PaymantFailedScreen from '../../../screens/PaymantFailedScreen';
import SubcriptionFormScreen from '../../../screens/SubcriptionFormScreen';
import HobbieScreen from '../../../screens/HobbieScreen';
import DetailScreen from '../../../screens/DetailScreen';
import MatchFoundScreen from '../../../screens/MatchFoundScreen';
import HideMyInformation from '../../../screens/HideMyInformation';

enableScreens();
const stack = createNativeStackNavigator();
const HomeStack = () => {
	return (
		<stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={screenName.screenName.subscription_screen}>
			<stack.Screen name={screenName.screenName.subscription_screen} component={SubscriptionScreen} />
			<stack.Screen name={screenName.screenName.paymant_screen} component={PaymentScreen} />
			<stack.Screen name={screenName.screenName.paymentFailed_screen} component={PaymantFailedScreen} />
			<stack.Screen name={screenName.screenName.subScriptionForm_screen} component={SubcriptionFormScreen} />
			<stack.Screen name={screenName.screenName.hobbies_screen} component={HobbieScreen} />
			<stack.Screen name={screenName.screenName.detail_screen} component={DetailScreen} />
			<stack.Screen name={screenName.screenName.match_found_screen} component={MatchFoundScreen} />
			<stack.Screen name={screenName.screenName.hide_myInformation_screen} component={HideMyInformation} />
		</stack.Navigator>
	);
};
export default HomeStack;