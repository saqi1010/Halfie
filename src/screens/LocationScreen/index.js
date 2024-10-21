import React from 'react';
import { View, StyleSheet, Text, TextInput, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import colors from '../../theme/color';
import metrics from '../../theme/metrics';
import SearchSvg from '../../assets/svg/MagnifyinGlassSvg.svg';
import font from '../../theme/font';
import axios from 'axios';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import GridentButton from '../../components/atoms/GridentButton';
import { useNavigation } from '@react-navigation/native';
import deviceInfoAndLocation from '../../utils/deviceInfoAndLocaton';
import { useDispatch } from 'react-redux';
import { loaderRequest } from '../../stores/action/loaderAction';
const LocationScreen = () => {
  const [region, setRegion] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const dispatch = useDispatch();
  const [selectedLocation, setSelectedLocation] = React.useState(null);
  const [coverVisibility, setCoverVisibility] = React.useState(false);
  const [locationData, setLocationData] = React.useState(null);
  const [cordinateData, setCordinateData] = React.useState({
    latitude: 0,
    longitude: 0
  }
  );

  const navigation = useNavigation()

  const handleMapPress = async (event) => {
    const { coordinate } = event.nativeEvent;
    setRegion({
      ...region,
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
    });
    setSelectedLocation(coordinate);
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
        params: {
          latlng: `${coordinate.latitude},${coordinate.longitude}`,
          key: 'AIzaSyDfo9xOT15oGYnrYqQL_Beq9avku_IBl5M'
        }
      });
      if (response.data.results.length > 0) {
        const address = response.data.results[0].formatted_address;
        setLocationData(address)
        setCordinateData(
          {
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
          }
        )
      } else {
        Alert.alert('No address found', 'No address details were found for this location.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred while fetching location details.');
    }
  };

  let addStyle = coverVisibility && {
    top: 0
  }

  const goBack = async () => {
    dispatch(loaderRequest(true));
    await deviceInfoAndLocation(cordinateData.latitude, cordinateData.longitude)
    dispatch(loaderRequest(false));
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
        onPress={handleMapPress}
      >
        {selectedLocation && (
          <Marker
            style={styles.marker}
            coordinate={selectedLocation}
          />
        )}
      </MapView>
      <View style={{ ...styles.searchContainer, ...addStyle }}>
        <View style={styles.serachMainContainer}>
          <View style={styles.horizontalBar}></View>
          <View style={styles.inputContainer}>
            <SearchSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)} style={styles.marginContainer} />
            <View style={styles.flexContianer}>
              <TextInput
                // onFocus={() => setCoverVisibility(true)}
                // onBlur={() => setCoverVisibility(false)}
                placeholder='Search Location' placeholderTextColor={colors.graySolid} style={styles.inputFontSyle}></TextInput>
            </View>
          </View>

          {/* <GooglePlacesAutocomplete
							placeholder='Search for your location...'
  
							onPress={(data, details = null) => {
								const result = details.address_components.map(e => e.long_name)
								// setAddress(details.formatted_address)
								// setUserAddress(result)
								// setCoordinates([details.geometry.location.lng, details.geometry.location.lat])
								// checkAvailability(details.geometry.location.lat, details.geometry.location.lng)
								// toggleSearchAddressModal();
								// setchangeaddress(data.description)
								// getLatLongByAddress(data.description);
							}}
							query={{
								key: 'AIzaSyDfo9xOT15oGYnrYqQL_Beq9avku_IBl5M',
								language: 'en',
							}}
							minLength={2}
							autoFocus={true}
							returnKeyType={'default'}
							fetchDetails={true}
							styles={{
								textInput: {
									height: 38,
									color: colors.primary,
									fontSize: 16,
									paddingLeft: 20,
									borderColor: colors.primary,
									borderRadius: 5,
									borderWidth: 1,
									margin: 20,
									backgroundColor: colors.white
								},
								predefinedPlacesDescription: {
									color: 'red',
								},
							}}
						>
							<View style={{ top: 28, left: 28, position: 'absolute', }}>
							</View>
						</GooglePlacesAutocomplete> */}
        </View>
        {locationData &&
          <View style={styles.locationContainer}>
            <Text numberOfLines={5} style={styles.addressFontStyle}>{locationData}</Text>
          </View>
        }
          {
            cordinateData.latitude != 0 && cordinateData.longitude != 0 &&
        <View style={styles.flexContainer}>
            <GridentButton
              extrenalStyle={styles.extrenalStyle}
              onClick={goBack}
              buttonText='Continue'
            />
        </View>
          }

        {/* list location */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: metrics.screenHeight,
    width: metrics.screenWidth
  },
  searchContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white
  },
  serachMainContainer: {
    backgroundColor: colors.white
  },
  horizontalBar: {
    backgroundColor: colors.graySolid,
    marginVertical: metrics.changeByMobileDPI(15),
    height: metrics.changeByMobileDPI(4),
    width: metrics.changeByMobileDPI(70),
    borderRadius: metrics.changeByMobileDPI(100),
    alignSelf: 'center'
  },
  inputContainer: {
    height: metrics.changeByMobileDPI(45),
    backgroundColor: colors.lightGray,
    borderRadius: metrics.changeByMobileDPI(100),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: metrics.changeByMobileDPI(15),
    marginHorizontal: metrics.changeByMobileDPI(20),
    marginBottom: metrics.changeByMobileDPI(20)
  },
  marginContainer: {
    marginRight: metrics.changeByMobileDPI(10)
  },
  inputFontSyle: {
    fontSize: font.size.font14,
    fontFamily: font.type.quicksandMedium,
    color: colors.black
  },
  flexContianer: {
    flex: 1
  },
  marker: {
    height: metrics.changeByMobileDPI(30),
    width: metrics.changeByMobileDPI(30)
  },
  locationContainer: {
    borderWidth: 1,
    borderColor: colors.graySolid,
    marginHorizontal: metrics.changeByMobileDPI(20),
    borderRadius: metrics.changeByMobileDPI(10),
    paddingVertical: metrics.changeByMobileDPI(15),
    paddingHorizontal: metrics.changeByMobileDPI(10)
  },
  addressFontStyle: {
    fontSize: font.size.font14,
    fontFamily: font.type.quicksandMedium,
    color: colors.black
  },
  extrenalStyle: {
    marginRight: metrics.changeByMobileDPI(10)
  },
  flexContainer:{
    marginHorizontal:metrics.changeByMobileDPI(20),
    marginVertical:metrics.changeByMobileDPI(20)
  }
});

export default LocationScreen;
