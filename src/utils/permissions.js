import { Platform } from 'react-native';
import { PERMISSIONS, request, check, RESULTS } from 'react-native-permissions';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

const requestPermission = async (permission) => {
  try {
    const result = await request(permission);
    return result === RESULTS.GRANTED;
  } catch (error) {
    console.error('Permission request error:', error);
    return false;
  }
};

const checkPermission = async (permission) => {
  try {
    const result = await check(permission);
    return result === RESULTS.GRANTED;
  } catch (error) {
    console.error('Permission check error:', error);
    return false;
  }
};

export const requestLocationPermission = async () => {
  if (Platform.OS === 'android') {
    const permission = Platform.select({
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  });
  return requestPermission(permission);
  } else {
    const granted = await request(
      Platform.select({
        android: PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      }),
      {
        title: 'DemoApp',
        message: 'DemoApp would like access to your location ',
      },
    );
    return granted === RESULTS.GRANTED;
  }
};

const requestIOSNotificationPermission = async () => {
  return new Promise((resolve, reject) => {
    // Request notification permissions for alert, sound, and badge
    PushNotificationIOS.requestPermissions({
      alert: true,
      sound: true,
      badge: true,
    })
      .then((permission) => {
        if (permission.alert || permission.sound || permission.badge) {
          console.log('Notification permission granted');
          resolve(true);
        } else {
          console.log('Notification permission denied');
          resolve(false);
        }
      })
      .catch((error) => {
        console.error('iOS Notification permission error:', error);
        reject(false);
      });
  });
};

export const requestNotificationPermission = async () => {
  if (Platform.OS == 'android') {
    const permission = Platform.select({
      android: PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
      ios: PERMISSIONS.IOS.NOTIFICATIONS,
    });
    return requestPermission(permission);
  } else {
    return requestIOSNotificationPermission();
  }
};

export const requestCameraPermission = async () => {
  const permission = Platform.select({
    android: PERMISSIONS.ANDROID.CAMERA,
    ios: PERMISSIONS.IOS.CAMERA,
  });

  return requestPermission(permission);
};

export const requestGalleryPermission = async () => {
  const permission = Platform.select({
    android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
  });

  return requestPermission(permission);
};

export const requestCalendarPermission = async () => {
  const permission = Platform.select({
    android: PERMISSIONS.ANDROID.READ_CALENDAR,
    ios: PERMISSIONS.IOS.CALENDARS,
  });

  return requestPermission(permission);
};

export const checkLocationPermission = async () => {
  const permission = Platform.select({
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  });

  return checkPermission(permission);
};

export const checkNotificationPermission = async () => {
  const permission = Platform.select({
    android: PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
    ios: PERMISSIONS.IOS.NOTIFICATIONS,
  });

  return checkPermission(permission);
};

export const checkCameraPermission = async () => {
  const permission = Platform.select({
    android: PERMISSIONS.ANDROID.CAMERA,
    ios: PERMISSIONS.IOS.CAMERA,
  });

  return checkPermission(permission);
};

export const checkGalleryPermission = async () => {
  const permission = Platform.select({
    android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
  });

  return checkPermission(permission);
};

export const checkCalendarPermission = async () => {
  const permission = Platform.select({
    android: PERMISSIONS.ANDROID.READ_CALENDAR,
    ios: PERMISSIONS.IOS.CALENDARS,
  });

  return checkPermission(permission);
};

export const requestStoragePermission = async () => {
  const permission = Platform.select({
    android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    ios: PERMISSIONS.IOS.PHOTO_LIBRARY, 
  });

  return requestPermission(permission);
};

export const checkStoragePermission = async () => {
  const permission = Platform.select({
    android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
  });

  return checkPermission(permission);
};

export const requestAudioPermission = async () => {
  const permission = Platform.select({
    android: PERMISSIONS.ANDROID.RECORD_AUDIO,
    ios: PERMISSIONS.IOS.MICROPHONE,
  });

  return requestPermission(permission);
};

export const checkAudioPermission = async () => {
  const permission = Platform.select({
    android: PERMISSIONS.ANDROID.RECORD_AUDIO,
    ios: PERMISSIONS.IOS.MICROPHONE,
  });

  return checkPermission(permission);
};