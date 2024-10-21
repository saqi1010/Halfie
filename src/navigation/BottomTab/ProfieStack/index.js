import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screenName from '../../../theme/screenName';
import ProfileScreen from '../../../screens/ProfileScreen';
import SettingMainScreen from '../../../screens/SettingMainScreen';
import SupportScreen from '../../../screens/SupportScreen';
import AboutHalfieScreen from '../../../screens/AboutHalfieScreen';
import SettingScreen from '../../../screens/SettingScreen';
import MyAccountScreen from '../../../screens/MyAccountScreen';
import ViewOrderScreen from '../../../screens/ViewOrderScreen';
import SubcriptionFormScreen from '../../../screens/SubcriptionFormScreen';
import NotificationScreen from '../../../screens/NotificationScreen';
import ServiceDetailScreen from '../../../screens/ServiceDetailScreen';
import ViewOrderDetailScreen from '../../../screens/ViewOrderDetailScreen';
import WalletScreen from '../../../screens/WalletScreen';
enableScreens();
const stack = createNativeStackNavigator();
const ProfieStack = () => {
	return (
			<stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={screenName.screenName.proifle_locator_screen}>
				<stack.Screen name={screenName.screenName.profile_screen} component={MyAccountScreen} />
				<stack.Screen name={screenName.screenName.proifle_locator_screen} component={SettingMainScreen} />
				<stack.Screen name={screenName.screenName.support_screen} component={SupportScreen} />
				<stack.Screen name={screenName.screenName.about_halfie_screen} component={AboutHalfieScreen} />
				<stack.Screen name={screenName.screenName.setting_screen} component={SettingScreen} />
				<stack.Screen name={screenName.screenName.view_order_screen} component={ViewOrderScreen} />
				<stack.Screen name={screenName.screenName.subScriptionForm_screen} component={SubcriptionFormScreen} />
				<stack.Screen name={screenName.screenName.notification_screen} component={NotificationScreen} />
				<stack.Screen name={screenName.screenName.serviceDetail_screen} component={ViewOrderDetailScreen} />
				<stack.Screen name={screenName.screenName.wallet_screen} component={WalletScreen} />
			</stack.Navigator>
	);
};
export default ProfieStack;
