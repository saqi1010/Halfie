import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Drawer from './Drawer';
import screenName from '../../theme/screenName';
import metrics from '../../theme/metrics';
import HomeScreen from '../../screens/HomeScreen';
import AllEventScreen from '../../screens/AllEventScreen';
import EventDetailScreen from '../../screens/EventDetailScreen';
import GuideLineScreen from '../../screens/GuideLineScreen';
import ServiceListingScreen from '../../screens/SeviceLisiitngScreen';
import ServiceDetailScreen from '../../screens/ServiceDetailScreen';
import CalenderScreen from '../../screens/CalenderScreen';
// import BillSummaryScreen from '../../screens/BillSummaryScreen';
import { setAdditionalHeaders } from '../../utils/axiosInstance';
import { Linking, CommonActions, useNavigation, useRoute } from '@react-navigation/native';
// 
import SubscriptionScreen from '../../screens/SubscriptionScreen';
import PaymentScreen from '../../screens/PaymentScreen';
import PaymantFailedScreen from '../../screens/PaymantFailedScreen';
import SubcriptionFormScreen from '../../screens/SubcriptionFormScreen';
import HobbieScreen from '../../screens/HobbieScreen';
import DetailScreen from '../../screens/DetailScreen';
import MatchFoundScreen from '../../screens/MatchFoundScreen';
import HideMyInformation from '../../screens/HideMyInformation';

const drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
    let route = useRoute()
    const navigation = useNavigation();

    return (
        <drawer.Navigator
            drawerContent={(props) => {
                return (
                    <Drawer props={props} navigation={navigation} />
                )
            }}
            screenOptions={{
                headerShown: false,
                drawerPosition: "left",
                drawerStyle: {
                    width: metrics.screenWidth / 1.5,

                },
            }}
            drawerStyle={{ borderTopRightRadius: 10, borderBottomEndRadius: 10 }}
        >
            {/* Drawer Flow -> :) */}
            <drawer.Screen name={screenName.screenName.home_screen} component={HomeScreen} />
            <drawer.Screen name={screenName.screenName.allevent_screen} component={AllEventScreen} />
            <drawer.Screen name={screenName.screenName.event_detail} component={EventDetailScreen} />
            <drawer.Screen name={screenName.screenName.guideLine_screen} component={GuideLineScreen} />
            <drawer.Screen name={screenName.screenName.calenderPermission_screen} component={CalenderScreen} />
            {/* <drawer.Screen name={screenName.screenName.billSummary_screen} component={BillSummaryScreen} /> */}
            <drawer.Screen name={screenName.screenName.serviceListing_screen} component={ServiceListingScreen} />
            <drawer.Screen name={screenName.screenName.serviceDetail_screen} component={ServiceDetailScreen} />
            {/*  */}
            <drawer.Screen name={screenName.screenName.subscription_screen} component={SubscriptionScreen} />
            <drawer.Screen name={screenName.screenName.paymant_screen} component={PaymentScreen} />
            <drawer.Screen name={screenName.screenName.paymentFailed_screen} component={PaymantFailedScreen} />
            <drawer.Screen name={screenName.screenName.subScriptionForm_screen} component={SubcriptionFormScreen} />
            <drawer.Screen name={screenName.screenName.hobbies_screen} component={HobbieScreen} />
            <drawer.Screen name={screenName.screenName.detail_screen} component={DetailScreen} />
            <drawer.Screen name={screenName.screenName.match_found_screen} component={MatchFoundScreen} />
            <drawer.Screen name={screenName.screenName.hide_myInformation_screen} component={HideMyInformation} />
        </drawer.Navigator>
    )
}

export default CustomDrawer;