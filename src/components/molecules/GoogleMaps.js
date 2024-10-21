import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import metrics from '../../theme/metrics';
import LocationSvg from '../../assets/svg/GreyLocationSvg.svg';
import font from '../../theme/font';
import colors from '../../theme/color';

// Initialize the Geocoder with your API key
Geocoder.init('AIzaSyDfo9xOT15oGYnrYqQL_Beq9avku_IBl5M');

const GoogleMaps = () => {
  const [address, setAddress] = useState('');
  const location = {
    lat: 29.959694,
    long: 77.549057,
  };

  useEffect(() => {
    // Fetch the address based on the coordinates
    Geocoder.from(location.lat, location.long)
      .then(json => {
        const addressComponent = json.results[0].formatted_address;
        setAddress(addressComponent);
      })
      .catch(error => console.warn(error));
  }, []);

  return (
    <View style={styles.marginBottomContainer}>
      <View style={styles.mapsContainer}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: location.lat,
            longitude: location.long,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          scrollEnabled={false}
        >
          <Marker
            coordinate={{ latitude: location.lat, longitude: location.long }}
            title="Location Title"
            description="Location Description"
          />
        </MapView>
      </View>
      <View style={styles.alignmentContainer}>
        <View style={styles.flexRowContainer}>
          <LocationSvg height={metrics.changeByMobileDPI(13)} width={metrics.changeByMobileDPI(10)} />
          <View style={styles.flexContainer}>
            <Text style={styles.addressFontStyle}>{address}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GoogleMaps;

const styles = StyleSheet.create({
  mapsContainer: {
    height: metrics.changeByMobileDPI(158),
    width: metrics.screenWidth / 1.4,
    marginTop: metrics.changeByMobileDPI(20),
  },
  flexContainer: {
    flex: 1,
    marginLeft: metrics.changeByMobileDPI(10),
  },
  addressFontStyle: {
    fontSize: font.size.font10,
    fontFamily: font.type.quicksandBold,
    color: colors.graySolid,
  },
  flexRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: metrics.changeByMobileDPI(10),
  },
  marginBottomContainer: {
    marginBottom: metrics.changeByMobileDPI(10),
  },
});
