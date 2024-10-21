import { Alert, Linking, Platform } from 'react-native';
import { NativeModules } from 'react-native';

const { IntentLauncher } = NativeModules;

/**
 * Open a given URL
 * @param {string} url - The URL to open
 */
const openUrl = (url) => {
  Linking.openURL(url).catch((err) => {
    Alert.alert('Error', `Unable to open URL: ${err.message}`);
  });
};

/**
 * Check if a given URL can be opened
 * @param {string} url - The URL to check
 * @param {function} callback - Callback to handle the result
 */
const canOpenUrl = (url, callback) => {
  Linking.canOpenURL(url)
    .then(supported => {
      if (!supported) {
        Alert.alert('Error', `Cannot handle URL: ${url}`);
        callback(false);
      } else {
        callback(true);
      }
    })
    .catch(err => {
      Alert.alert('Error', `An error occurred: ${err.message}`);
      callback(false);
    });
};

/**
 * Get the initial URL used to launch the app
 * @param {function} callback - Callback to handle the result
 */
const getInitialUrl = async (callback) => {
  try {
    const url = await Linking.getInitialURL();
    callback(url);
  } catch (err) {
    Alert.alert('Error', `Unable to get initial URL: ${err.message}`);
    callback(null);
  }
};

/**
 * Add an event listener for URL changes
 * @param {function} handler - Handler function to process URL changes
 */
const addUrlListener = (handler) => {
  const subscription = Linking.addEventListener('url', handler);
  return subscription;
};

/**
 * Remove an event listener for URL changes
 * @param {object} subscription - The subscription object to remove
 */
const removeUrlListener = (subscription) => {
  subscription.remove();
};

/**
 * Open app settings
 */
const openAppSettings = () => {
    Linking.openSettings()
};

/**
 * Open Wi-Fi settings
 */
const openWifiSettings = () => {
  if (Platform.OS === 'ios') {
    openUrl('App-Prefs:root=WIFI');
  } else {
    IntentLauncher.startActivity({
      action: 'android.settings.WIFI_SETTINGS',
    });
  }
};

/**
 * Open Bluetooth settings
 */
const openBluetoothSettings = () => {
  if (Platform.OS === 'ios') {
    openUrl('App-Prefs:root=Bluetooth');
  } else {
    IntentLauncher.startActivity({
      action: 'android.settings.BLUETOOTH_SETTINGS',
    });
  }
};

/**
 * Open Location Services settings
 */
const openLocationSettings = () => {
  if (Platform.OS === 'ios') {
    openUrl('App-Prefs:root=Privacy&path=LOCATION');
  } else {
    IntentLauncher.startActivity({
      action: 'android.settings.LOCATION_SOURCE_SETTINGS',
    });
  }
};

export {
  openUrl,
  canOpenUrl,
  getInitialUrl,
  addUrlListener,
  removeUrlListener,
  openAppSettings,
  openWifiSettings,
  openBluetoothSettings,
  openLocationSettings,
};
