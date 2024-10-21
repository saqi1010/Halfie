import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from './CustomTabBar';
import { View } from 'react-native';
import HomeStack from './HomeStack';
import ProfieStack from './ProfieStack';
import ExploreStack from './ExploreStack';
import MatchesStack from './MatchesStack';
const Tab = createBottomTabNavigator();
function BottomTabs() {
  return (
    <View style={{flex:1}}>
    <Tab.Navigator
      backBehavior='none'
      tabBar={props => <CustomTabBar {...props} />} 
      screenOptions={{ headerShown: false }}
      >
      <Tab.Screen name="Home" options={{ key: 'home_screen' }}  component={HomeStack} />
      <Tab.Screen name="Search" options={{ key: 'home_screen1' }}  component={ExploreStack} />
      <Tab.Screen name="Matches" options={{ key: 'home_screen2' }} component={MatchesStack} />
      <Tab.Screen name="Profile" options={{ key: 'home_screen3' }} component={ProfieStack} />
    </Tab.Navigator>
      </View>
  );
}

export default BottomTabs;
