import React, { useState, useRef } from 'react';
import { View, StyleSheet, Animated, Text, Platform } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import metrics from '../../theme/metrics';
import colors from '../../theme/color';
import font from '../../theme/font';
import GridentBorder from './GridentBorder';

const PriceRange = ({ min = 0, max = 1500, onValueChange,minAndMaxVisibility }) => {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const minThumbX = useRef(new Animated.Value(0)).current;
    const maxThumbX = useRef(new Animated.Value(0)).current;
    const trackWidth = useRef(0);
    const thumbSize = metrics.changeByMobileDPI(17);
    const thumbOffset = 6;
    const gestureSensitivity = 0.08; 

    const calculateValue = (position) => {
        const preciseValue = (position / (trackWidth.current - thumbSize)) * (max - min) + min;
        return Math.round(preciseValue);
    };

    const handleMinGesture = ({ nativeEvent }) => {
        const newMinPosition = Math.min(
            Math.max(0, minThumbX._value + nativeEvent.translationX * gestureSensitivity),
            maxThumbX._value - thumbSize 
        );
        minThumbX.setValue(newMinPosition);
        let cal = calculateValue(newMinPosition)
        if (cal == (max - 112)) {
            setMinValue(cal + 112);
        } else {
            setMinValue(cal);
        }
    };

    const handleMaxGesture = ({ nativeEvent }) => {
        const newMaxPosition = Math.min(
            Math.max(minThumbX._value + thumbSize, maxThumbX._value + nativeEvent.translationX * gestureSensitivity),
            trackWidth.current - thumbSize 
        );
        maxThumbX.setValue(newMaxPosition);
        let cal = calculateValue(newMaxPosition)
        if (cal == 112) {
            setMaxValue(cal - 112);
        } else {
            setMaxValue(cal);
        }
    };

    const endGesture = () => onValueChange(minValue, maxValue);

    React.useEffect(() => {
        setMinValue(min)
        setMaxValue(max)
    },[min,max])

    return (
        <View style={styles.container}>
            <View
                style={styles.trackWrapper}
                onLayout={(event) => {
                    trackWidth.current = event.nativeEvent.layout.width;
                    minThumbX.setValue(((minValue - min) / (max - min)) * (trackWidth.current - thumbSize));
                    maxThumbX.setValue(((maxValue - min) / (max - min)) * (trackWidth.current - thumbSize));
                }}
            >
                <View style={styles.track} />
                <PanGestureHandler onGestureEvent={handleMinGesture} onEnded={endGesture}>
                    <Animated.View
                    hitSlop={{top:10,bottom:10,left:10,right:10}}
                        style={[styles.thumb, { transform: [{ translateX: minThumbX }], top: Platform.OS == 'android' ? -thumbOffset : -thumbOffset - 2 }]}
                    >
                        <GridentBorder
                            colors={colors.grident1}
                            borderWidth={0}
                            borderRadius={metrics.changeByMobileDPI(5)}
                            style={[styles.circle]}
                        ></GridentBorder>
                    </Animated.View>
                </PanGestureHandler>
                <PanGestureHandler onGestureEvent={handleMaxGesture} onEnded={endGesture}>
                    <Animated.View
                                        hitSlop={{top:10,bottom:10,left:10,right:10}}

                        style={[styles.thumb, { transform: [{ translateX: maxThumbX }], top: Platform.OS == 'android' ? -thumbOffset : -thumbOffset - 2 }]}
                    >
                          <GridentBorder
                            colors={colors.grident1}
                            borderWidth={0}
                            borderRadius={metrics.changeByMobileDPI(5)}
                            style={[styles.circle]}
                        ></GridentBorder>
                    </Animated.View>
                </PanGestureHandler>
                <Animated.View
                    style={[
                        styles.selectedTrack,
                        { left: minThumbX, width: Animated.subtract(maxThumbX, minThumbX) },
                    ]}
                />
            </View>
      {
minAndMaxVisibility &&
          <View style={styles.labelContainer}>
                <Text style={styles.label}>{minValue}</Text>
                <Text style={styles.label}>{maxValue}</Text>
            </View>
        } 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: metrics.changeByMobileDPI(20),
    },
    trackWrapper: {
        position: 'relative',
    },
    track: {
        height: 3,
        backgroundColor: '#ccc',
    },
    selectedTrack: {
        position: 'absolute',
        height: 3,
        backgroundColor: colors.secondary,
        borderRadius: 50,
        top: 0,
    },
    thumb: {
        position: 'absolute',
    },
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: metrics.changeByMobileDPI(10),
    },
    label: {
        fontSize: metrics.changeByMobileDPI(12),
        fontFamily: font.type.quicksandBold,
        color: colors.black,
    },
    circleStyle: {
        height: metrics.changeByMobileDPI(15),
        width: metrics.changeByMobileDPI(15),
        borderRadius: metrics.changeByMobileDPI(100),
        backgroundColor: colors.boy_gray,
    },
    circle: {
        height: metrics.changeByMobileDPI(17),
        width: metrics.changeByMobileDPI(17),
        borderRadius: metrics.changeByMobileDPI(100),
        marginRight: metrics.changeByMobileDPI(10),

    },
});

export default PriceRange;
