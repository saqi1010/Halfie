import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder } from 'react-native';

const AgeSlider = () => {
  const minAge = 18;
  const maxAge = 100;
  const sliderWidth = 300;

  const [ageRange, setAgeRange] = useState({ min: minAge, max: maxAge });

  const panMin = useRef(new Animated.Value(0)).current;
  const panMax = useRef(new Animated.Value(sliderWidth)).current;

  const minPanResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      panMin.setOffset(panMin._value);
    },
    onPanResponderMove: (e, gestureState) => {
      let newX = gestureState.dx + panMin._offset;

      // Constrain the min handle within range and not crossing the max handle
      if (newX >= 0 && newX <= panMax._value) {
        panMin.setValue(newX);
        let selectedMin = Math.floor((newX / sliderWidth) * (maxAge - minAge) + minAge);
        setAgeRange(prevRange => ({ ...prevRange, min: selectedMin }));
      }
    },
    onPanResponderRelease: () => {
      panMin.flattenOffset();
    },
  });

  const maxPanResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      panMax.setOffset(panMax._value);
    },
    onPanResponderMove: (e, gestureState) => {
      let newX = gestureState.dx + panMax._offset;

      // Constrain the max handle within range and not crossing the min handle
      if (newX >= panMin._value && newX <= sliderWidth) {
        panMax.setValue(newX);
        let selectedMax = Math.floor((newX / sliderWidth) * (maxAge - minAge) + minAge);
        setAgeRange(prevRange => ({ ...prevRange, max: selectedMax }));
      }
    },
    onPanResponderRelease: () => {
      panMax.flattenOffset();
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Age Range</Text>
      <View style={styles.sliderContainer}>
        <Animated.View
          style={[
            styles.track,
            styles.selectedTrack,
            {
              left: panMin,
              right: sliderWidth - panMax,
            },
          ]}
        />
        <Animated.View
          {...minPanResponder.panHandlers}
          style={[
            styles.handle,
            { transform: [{ translateX: panMin }] },
          ]}
        />
        <Animated.View
          {...maxPanResponder.panHandlers}
          style={[
            styles.handle,
            { transform: [{ translateX: panMax }] },
          ]}
        />
      </View>
      <Text style={styles.rangeText}>
        Selected Age Range: {ageRange.min} - {ageRange.max}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  sliderContainer: {
    position: 'relative',
    height: 40,
    justifyContent: 'center',
  },
  track: {
    height: 4,
    backgroundColor: '#d3d3d3',
    position: 'absolute',
    left: 0,
    right: 0,
    borderRadius: 2,
  },
  selectedTrack: {
    backgroundColor: '#1FB28A',
  },
  handle: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: '#1FB28A',
    borderRadius: 10,
    top: -8,
  },
  rangeText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AgeSlider;
