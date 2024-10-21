
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import screenName from '../../theme/screenName';
import { useSelector } from 'react-redux';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import * as Permissions from 'react-native-permissions';
import moment from 'moment';
import deviceInfoAndLocation from '../../utils/deviceInfoAndLocaton';

const hooks = () => {
  const { eventDetailData, } = useSelector((state) => state.eventDetail);
  const addEventToCalendar = async () => {
    // try {
    //   let getAddressFromCoordinates = await deviceInfoAndLocation(eventDetailData.location.lat,eventDetailData.location.long)
    //     const { area, city, state, country } = getAddressFromCoordinates?.address;
    //     const eventConfig = {
    //       title: eventDetailData?.eventName,
    //       startDate: moment(eventDetailData?.bookingStartDate).toISOString(),
    //       endDate: moment(eventDetailData?.bookingEndDate).toISOString(),
    //       notes: ``,
    //       location: `${area}, ${city}, ${state}, ${country}`,
    //       navigationBarIOS: {
    //         tintColor: 'orange',
    //         barTintColor: 'white',
    //         backgroundColor: 'white',
    //         translucent: true
    //       },
    //       navigationBarAndroid: {
    //         backgroundColor: 'white',
    //         tintColor: 'orange',
    //         navigationIconColor: 'white'
    //       }
    //     };
    //     Permissions.request(
    //       Platform.select({
    //         ios: Permissions.PERMISSIONS.IOS.CALENDARS_WRITE_ONLY,
    //         android: Permissions.PERMISSIONS.ANDROID.WRITE_CALENDAR,
    //       })
    //     )
    //       .then(result => {
    //         if (result !== Permissions.RESULTS.GRANTED) {
    //           throw new Error(`No permission: ${result}`);
    //         }
    //         return AddCalendarEvent.presentEventCreatingDialog(eventConfig)
    //       })
    //       .then((eventInfo) => {
    //         let response = eventInfo?.action
    //         if (response == 'CANCELED') {  
    //         }else{
    //           navigation.navigate(screenName.screenName.guideLine_screen)
    //         }
    //       })
    //       .catch((error) => {
    //         console.warn(error);
    //       });
    // } catch (error) {
    //   console.error(`Error creating event: ${error}`);
    // }
    Permissions.request(
      Platform.select({
        ios: Permissions.PERMISSIONS.IOS.CALENDARS_WRITE_ONLY,
        android: Permissions.PERMISSIONS.ANDROID.WRITE_CALENDAR,
      })
    )
      .then(result => {
        if (result !== Permissions.RESULTS.GRANTED) {
          throw new Error(`No permission: ${result}`);
        }
        navigation.navigate(screenName.screenName.guideLine_screen)
      })
  };
   const navigation = useNavigation()
    const navigateToPaymentFailed = async (flag) => {
      if (flag == 1) { 
        addEventToCalendar()
      }else{
        navigation.navigate(screenName.screenName.guideLine_screen)

      }
    };
   
  return {navigateToPaymentFailed}
}
export default hooks
