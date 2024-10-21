import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Drawer from './Drawer';
import screenName from '../../theme/screenName';
import metrics from '../../theme/metrics';
import {Linking, CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import BottomTabs from '../BottomTab/BottomTabNavigator';

const drawer = createDrawerNavigator();

const CustomDrawerHome = (props) => {
let route = useRoute()
const navigation = useNavigation();

    return (
    <drawer.Navigator
        drawerContent={(props) => <Drawer props={props} navigation={navigation} />}
        screenOptions={{
          headerShown: false,
          drawerPosition: 'left',
          drawerStyle: {
            width: metrics.screenWidth / 1.3,
            borderTopRightRadius: 10,
            borderBottomEndRadius: 10,
          },
          swipeEnabled: false,
        }}
      >
            <drawer.Screen name={screenName.screenName.bottom_tab} component={BottomTabs} />
        </drawer.Navigator>
    )
}

export default CustomDrawerHome;