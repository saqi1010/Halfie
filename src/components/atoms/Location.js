import React, { useState, useRef, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Circle } from 'react-native-maps';
import metrics from '../../theme/metrics';
import colors from '../../theme/color';
import GridentBorder from './GridentBorder';
import * as Keychain from 'react-native-keychain';
import font from '../../theme/font';
import { delay } from '../../utils/delay';

const Location = ({ aboutVisibility, mapViewVisibility = true, state, setState ,formState,inputKey}) => {
  const dataArea = [
    { id: 1, name: 'Area' },
    { id: 2, name: 'City' },
    { id: 3, name: 'State' },
    { id: 4, name: 'Country' },
    { id: 5, name: 'Global' },
  ];

  const [Index, setIndex] = useState(state || 'area');
  const [circleRadius, setCircleRadius] = useState(300);
  const [isDonutVisible, setIsDonutVisible] = useState(false);
  const [initialRegion, setInitialRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const mapViewRef = useRef(null);

  const calculateDelta = (radius) => {
    const earthCircumference = 40075000;
    const latDelta = (radius / earthCircumference) * 360;
    const lngDelta = latDelta / Math.cos(initialRegion.latitude * (Math.PI / 180));
    return { latDelta, lngDelta };
  };

  const updateLocation = (newLocation) => {
    const options = {
      Area: 300,
      City: 5000,
      State: 30000,
      Country: 100000,
      Global: 500000,
    };

    const newRadius = options[newLocation];
    setState(newLocation);
    setCircleRadius(newRadius);

    const { latDelta, lngDelta } = calculateDelta(newRadius);

    const zoomedRegion = {
      ...initialRegion,
      latitudeDelta: latDelta * 2,
      longitudeDelta: lngDelta * 2,
    };

    setIsDonutVisible(false);
    mapViewRef.current?.animateToRegion(zoomedRegion, 1000);
  };

  const onRegionChangeComplete = () => {
    setIsDonutVisible(true);
  };

  const handleSliderChange = async (index = 0) => {

    const credentials = await Keychain.getGenericPassword({ service: 'myDevicInfo' });
    if (!credentials) {
      throw new Error('No credentials found');
    }
    console.warn("credentials====",credentials);
    const convertIntoParse = JSON.parse(credentials.username);
    const options = ['Area', 'City', 'State', 'Country', 'Global'];
    setIndex(options[index].toLowerCase());
    const newLocation = options[index];

    const location = await convertIntoParse.location;
if (location?.lat && location?.long) {
  console.warn("=======>>",location);
  setInitialRegion({
    latitude: location?.lat,
    longitude: location?.long,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  updateLocation(newLocation);
}
  };

  const makeDelay = async(filterTitle) => {
    await delay(2000)
    updateLocation(filterTitle);
  }
  useEffect(() => {
    const updateInitialRegion = async () => {
      try {
        const credentials = await Keychain.getGenericPassword({ service: 'myDevicInfo' });
        if (credentials) {
          const convertIntoParse = JSON.parse(credentials.username);
          const location = convertIntoParse?.location;

          if (location?.lat && location?.long) {
            setInitialRegion({
              latitude: location.lat,
              longitude: location.long,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            });

            const filterTitle = (state || 'area')
              .split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');

            makeDelay(filterTitle);
          }
        } else {
          throw new Error('No credentials found');
        }
      } catch (error) {
        console.error('Error fetching or setting location:', error);
      }
    };

    updateInitialRegion(); // Call the async function
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      handleSliderChange(0);
    }, 5000); 
    return () => clearTimeout(timer);
  }, []);

  const renderCountry = ({ item, index }) => (
    <GridentBorder
      colors={Index === item.name.toLowerCase() ? colors.grident1 : colors.grayGrident}
      borderWidth={0}
      borderRadius={metrics.changeByMobileDPI(100)}
      style={[
        styles.gridentConatiner,
        !mapViewVisibility && { marginBottom: metrics.changeByMobileDPI(10) },
      ]}
    >
      <TouchableOpacity
        onPress={() => handleSliderChange(index)}
        style={{
          ...styles.button,
          backgroundColor: Index !== item.name.toLowerCase() ? colors.white : 'transparent',
        }}
      >
        <Text
          style={{
            ...styles.buttonText,
            color: Index === item.name.toLowerCase() ? colors.white : colors.graySolid,
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    </GridentBorder>
  );

  return (
    <View
      style={[
        styles.mainContainer,
        mapViewVisibility && {
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        },
      ]}
    >
      {mapViewVisibility && (
        <View style={styles.locationContainer}>
          <MapView
            ref={mapViewRef}
            style={StyleSheet.absoluteFillObject}
            initialRegion={initialRegion}
            onRegionChangeComplete={onRegionChangeComplete}
            scrollEnabled={false}
            zoomEnabled={false}
            rotateEnabled={false}
            pitchEnabled={false}
          >
            <Circle
              center={{
                latitude: initialRegion.latitude,
                longitude: initialRegion.longitude,
              }}
              radius={circleRadius}
              strokeWidth={0}
              strokeColor="transparent"      
              fillColor="rgba(0, 122, 255, 0.3)"
            />
          </MapView>
          {isDonutVisible && (
            <View style={styles.smallDoNutContainer}>
              <View style={styles.smallDoNut}></View>
            </View>
          )}
        </View>
      )}

      {!mapViewVisibility ? (
        <FlatList
          data={dataArea}
          nestedScrollEnabled
          contentContainerStyle={styles.contentContainerStyle1}
          renderItem={renderCountry}
        />
      ) : (
        <FlatList
          horizontal
          data={dataArea}
          nestedScrollEnabled
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={renderCountry}
        />
      )}
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginBottom: metrics.changeByMobileDPI(20),
  },
  locationContainer: {
    height: metrics.changeByMobileDPI(200),
    width: metrics.screenWidth - 20,
    borderRadius: metrics.changeByMobileDPI(20),
    overflow: 'hidden',
    backgroundColor: '#FCE04399',
    marginHorizontal: metrics.changeByMobileDPI(20),
  },
  button: {
    height: metrics.changeByMobileDPI(32),
    width: metrics.changeByMobileDPI(59),
    borderRadius: metrics.changeByMobileDPI(100),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: metrics.changeByMobileDPI(20),
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  buttonText: {
    fontSize: metrics.changeByMobileDPI(10),
    fontFamily: font.type.montserratSemiBold,
    color: colors.graySolid,
  },
  smallDoNutContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -metrics.changeByMobileDPI(20),
    marginLeft: -metrics.changeByMobileDPI(20),
  },
  smallDoNut: {
    height: metrics.changeByMobileDPI(40),
    width: metrics.changeByMobileDPI(40),
    borderRadius: metrics.changeByMobileDPI(100),
    backgroundColor: 'transparent',
    borderWidth: metrics.changeByMobileDPI(15),
    borderColor: colors.linkBlue,
  },
  contentContainerStyle: {
    marginTop: metrics.changeByMobileDPI(20),
  },
  contentContainerStyle1: {
    marginTop: metrics.changeByMobileDPI(20),
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  gridentConatiner: {
    height: metrics.changeByMobileDPI(32),
    width: metrics.changeByMobileDPI(59),
    overflow: 'hidden',
    borderRadius: metrics.changeByMobileDPI(100),
    marginHorizontal: metrics.changeByMobileDPI(5),
  },
});
