import DeviceInfo from 'react-native-device-info';
import * as Keychain from 'react-native-keychain';
import axios from 'axios';
// import Geolocation from '@react-native-community/geolocation';
import Geolocation from 'react-native-geolocation-service';

import { Alert, Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { checkLocationPermission, requestLocationPermission } from './permissions';

const GOOGLE_MAPS_API_KEY = 'AIzaSyDfo9xOT15oGYnrYqQL_Beq9avku_IBl5M'; 

const getAddressFromCoordinates = async (latitude, longitude) => {
  console.warn("=1=>>",latitude, longitude);
  const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`);
  if (response.data.status === 'OK') {
    console.warn("=2=>>");
    const addressComponents = response.data.results[0].address_components;
    let area = '', city = '', state = '', country = '';
    addressComponents.forEach(component => {
      if (component.types.includes('sublocality') || component.types.includes('locality')) {
        area = component.long_name;
      } else if (component.types.includes('administrative_area_level_2')) {
        city = component.long_name;
      } else if (component.types.includes('administrative_area_level_1')) {
        state = component.long_name;
      } else if (component.types.includes('country')) {
        country = component.long_name;
      }
    });
    console.warn("=3=>>",area,city,state,country);
    if (!city && area) {
      city = area;
    }
    if (!area && city) {
      area = city;
    }
    return { area, city, state, country };
  } else {
    throw new Error('Unable to fetch address');
  }
};


const deviceInfoAndLocation = async (latitudeOuter, longitudeOuter) => {
 
  const deviceId = await DeviceInfo.getUniqueId();
  let deviceToken = 'asdsdsddsdsdsdsds';
  //  messaging().registerDeviceForRemoteMessages();
  // const authorizationStatus = await messaging().requestPermission();

  // if (!authorizationStatus) {return true}
  // await messaging().getToken().then(token => {
  //   deviceToken = token;
  // });

  const getLocation = async () => {
    const hasLocationPermission = await checkLocationPermission();
    if (!hasLocationPermission) {
      const permissionGranted = await requestLocationPermission();
      if (!permissionGranted) {
        Alert.alert('Permission Denied', 'Location permission is required.');
        throw new Error('Location permission denied');
      }
    }
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          console.warn("Location fetched:", latitude, longitude);
          resolve({ lat: latitude, long: longitude });
        },
        error => {
          console.error('Error fetching location:', error.message);
          Alert.alert('Location Error', `Error: ${error.message}`);
          reject(error);
        },
        { enableHighAccuracy: true, timeout: 60000, maximumAge: 10000 }
      );
    });
  };


  let location = {};
  if (latitudeOuter && longitudeOuter) {
    location = { lat: latitudeOuter, long: longitudeOuter };
  } else {
    try {
      location = await getLocation();
    } catch (error) {
      console.error('Error fetching location:', error);
      location = { lat: 0, long: 0 };
    }
  }

  let address = {};
  try {
    address = await getAddressFromCoordinates(location.lat, location.long);
  } catch (error) {
    console.error('Error fetching address:', error);
    address = {
      area: 'Unknown',
      city: 'Unknown',
      state: 'Unknown',
      country: 'Unknown',
    };
  }

  let deviceType = Platform.OS === 'android' ? 'ANDROID' : 'IOS';
  const credentials = {
    deviceType,
    deviceId,
    deviceToken,
    location,
    address,
  };

    try {
      let deviceInfoStringfyData = JSON.stringify(credentials);
      console.warn("deviceInfoStringfyData",deviceInfoStringfyData);
      await Keychain.setGenericPassword(deviceInfoStringfyData, 'myDevicInfo', { service: 'myDevicInfo' });
    } catch (error) {
      console.error('Error storing data in Keychain:', error);
    }
  
  return credentials;
};

export default deviceInfoAndLocation;
