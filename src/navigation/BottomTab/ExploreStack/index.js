import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screenName from '../../../theme/screenName';
import HomeScreen from '../../../screens/HomeScreen';
import AllEventScreen from '../../../screens/AllEventScreen';
import EventDetailScreen from '../../../screens/EventDetailScreen';
import GuideLineScreen from '../../../screens/GuideLineScreen';
import CalenderScreen from '../../../screens/CalenderScreen';
// import BillSummaryScreen from '../../../screens/BillSummaryScreen';
import ServiceListingScreen from '../../../screens/SeviceLisiitngScreen';
import ServiceDetailScreen from '../../../screens/ServiceDetailScreen';

enableScreens();
const stack = createNativeStackNavigator();
const ExploreStack = () => {
	return (
		<stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={screenName.screenName.home_screen}>
			<stack.Screen name={screenName.screenName.home_screen} component={HomeScreen} />
				<stack.Screen name={screenName.screenName.allevent_screen} component={AllEventScreen} />
				<stack.Screen name={screenName.screenName.event_detail} component={EventDetailScreen} />
				<stack.Screen name={screenName.screenName.guideLine_screen} component={GuideLineScreen} />
				<stack.Screen name={screenName.screenName.calenderPermission_screen} component={CalenderScreen} />
				{/* <stack.Screen name={screenName.screenName.billSummary_screen} component={BillSummaryScreen} /> */}
				<stack.Screen name={screenName.screenName.serviceListing_screen} component={ServiceListingScreen} />
				<stack.Screen name={screenName.screenName.serviceDetail_screen} component={ServiceDetailScreen} />
		</stack.Navigator>
	);
};
export default ExploreStack;