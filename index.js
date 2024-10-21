/**
 * @format
 */

import { AppRegistry, FlatList, ScrollView, StatusBar, Text, TextInput, TouchableOpacity } from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { NotificationManagerAndroid } from './NotificationManager';
import messaging from '@react-native-firebase/messaging';
import { notificationManager } from './NotificationManagerIOS';

if (Text.defaultProps) {
    Text.defaultProps.allowFontScaling = false;
} else {
    Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
}
if (TouchableOpacity.defaultProps) {
    TouchableOpacity.defaultProps.activeOpacity = 1;
} else {
    TouchableOpacity.defaultProps = {};
    TouchableOpacity.defaultProps.activeOpacity = 1;
}
if (ScrollView.defaultProps) {
    ScrollView.defaultProps.showsHorizontalScrollIndicator = false;
    ScrollView.defaultProps.showsVerticalScrollIndicator = false;
} else {
    ScrollView.defaultProps = {};
    ScrollView.defaultProps.showsHorizontalScrollIndicator = false;
    ScrollView.defaultProps.showsVerticalScrollIndicator = false;
}
if (FlatList.defaultProps) {
    FlatList.defaultProps.keyboardShouldPersistTaps = "always";
    FlatList.defaultProps.showsVerticalScrollIndicator = false;
    FlatList.defaultProps.showsHorizontalScrollIndicator = false;
} else {
    FlatList.defaultProps = {};
    FlatList.defaultProps.keyboardShouldPersistTaps = "always";
    FlatList.defaultProps.showsHorizontalScrollIndicator = false;
    FlatList.defaultProps.showsVerticalScrollIndicator = false;
}

// Override Text scaling in input fields
if (TextInput.defaultProps) {
    TextInput.defaultProps.allowFontScaling = false;
} else {
    TextInput.defaultProps = {};
    TextInput.defaultProps.allowFontScaling = false;
}
StatusBar.setHidden(true);

///NotificationSection////
NotificationManagerAndroid.createChannel();
messaging().setBackgroundMessageHandler(async remoteMessage => {
    const { notification, messageId } = remoteMessage;
    if (Platform.OS === 'android') {
        if (notification && notification.title !== "") {
            if (notification.title != "") {
                const { title, body, subText } = notification
                NotificationManagerAndroid.showNotification(title, body, subText, messageId, notification);
            }
        }
    } else {
        if (notification && notification.title !== "") {
            if (notification.title != "") {
                const { title, body } = notification;
                notificationManager.showNotification(messageId, title, body, {}, {});
            }
        }
    }
});
/////////////

AppRegistry.registerComponent(appName, () => App);
