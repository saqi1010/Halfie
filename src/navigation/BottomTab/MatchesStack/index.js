import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screenName from '../../../theme/screenName';
import ChatlisitngScreen from '../../../screens/ChatlisitngScreen';
import ChatScreen from '../../../screens/ChatScreen';
enableScreens();
const stack = createNativeStackNavigator();
const MatchesStack = () => {
	return (
		<stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={screenName.screenName.chatlsiitng_screen}>
			<stack.Screen name={screenName.screenName.chatlsiitng_screen} component={ChatlisitngScreen} />
			
		</stack.Navigator>
	);
};
export default MatchesStack;
