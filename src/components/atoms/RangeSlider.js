import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import SliderCircleSvg from '../../assets/svg/GridentCircleSvg.svg';
import metrics from '../../theme/metrics';
import font from '../../theme/font';
import colors from '../../theme/color';

const { width } = Dimensions.get('window');

const options = ['Area', 'City', 'State', 'Country', 'Global'];
const optionWidth = width / options.length;

const RangeSlider = ({ onChange }) => {
  const translateX = useSharedValue(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const onGestureEvent = (event) => {
    const { translationX } = event.nativeEvent;
    const constrainedTranslationX = Math.max(0, Math.min(translationX, width - optionWidth));
    translateX.value = constrainedTranslationX;
  };

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.state === 5) { // END state
      const { translationX } = event.nativeEvent;
      const newIndex = Math.round(translationX / optionWidth);
      const clampedIndex = Math.max(0, Math.min(newIndex, options.length - 1));
      setSelectedIndex(clampedIndex);
      translateX.value = withSpring(clampedIndex * optionWidth);

      // Notify parent about the change
      if (onChange) {
        onChange(clampedIndex);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sliderBackground} />
      <PanGestureHandler onGestureEvent={onGestureEvent} onHandlerStateChange={onHandlerStateChange}>
        <Animated.View style={[styles.sliderHandle, animatedStyle]}>
          <SliderCircleSvg height={metrics.changeByMobileDPI(27)} width={metrics.changeByMobileDPI(27)} style={styles.circleContainer} />
        </Animated.View>
      </PanGestureHandler>
      <View style={styles.labelsContainer}>
        {options.map((option, index) => (
          <Text key={index} style={[styles.label, selectedIndex === index && styles.selectedLabel]}>
            {option}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default RangeSlider;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    alignItems: 'center',
    position: 'relative',
  },
  sliderBackground: {
    height: 4,
    width: '100%',
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    position: 'absolute',
    top: 15,
  },
  sliderHandle: {
    position: 'absolute',
    top: -9, 
    left:-9,
    width: optionWidth,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 40,
  },
  label: {
    fontSize: metrics.changeByMobileDPI(14),
    fontFamily: font.type.quicksandMedium,
    color: colors.black,
  },
  selectedLabel: {
    fontSize: metrics.changeByMobileDPI(14),
    fontFamily: font.type.quicksandBold,
    color: colors.black,
  },
  circleContainer: {
    // Additional styling for the circle if needed
  },
});
