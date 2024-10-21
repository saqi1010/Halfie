
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/stores';
import MainStack from './src/navigation/MainStack';
import ParentComponent from './src/ParentComponent';
import Loader from './src/components/molecules/Loader';
import Dummy from './Dummy';
import { NotificationManagerAndroid } from './NotificationManager';
import { notificationManager } from './NotificationManagerIOS';
import messaging from '@react-native-firebase/messaging';
import { Platform, StatusBar, View } from 'react-native';
import FocusAwareStatusBar from './src/components/organisms/FocusAwareStatusBar';
import colors from './src/theme/color';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const App = () => {


  ///NotificationSection///
  React.useEffect(() => {
    const fetchTokenAndSetupListener = async () => {
      try {
        const token = await messaging().getToken();
        console.log('FCM Token:', token);

        const unsubscribe = messaging().onMessage(async remoteMessage => {
          console.log('Received message data:', remoteMessage);

          // Use let instead of const for variables that may be reassigned
          let data = null;

          if (remoteMessage.data && remoteMessage.data.title) {
            data = remoteMessage.data;
          } else if (remoteMessage.notification) {
            data = remoteMessage.notification;
          }

          console.warn('Notification data:', data);

          if (Platform.OS === 'android') {
            NotificationManagerAndroid.showNotification(
              data.title,
              data.body || data.message,  // Ensure 'body' or 'message' is used if 'message' is not available
              'notification',
              remoteMessage.messageId,
              data
            );
          } else {
            notificationManager.showNotification(
              2,
              data.title,
              data.body || data.message,  // Ensure 'body' or 'message' is used if 'message' is not available
              data,
              {}
            );
          }
        });

        return unsubscribe;
      } catch (error) {
        console.log('Error:', error.message);
      }
    };

    fetchTokenAndSetupListener();
  }, []);


  ///NotificationSection///

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <Provider store={store}>
          <ParentComponent>
            <MainStack />
            {/* <Dummy/> */}
          </ParentComponent>
          <Loader />
        </Provider>

      </View>
    </SafeAreaProvider>
  )
}
export default App

