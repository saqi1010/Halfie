import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import React, { useEffect } from 'react';
import metrics from '../../theme/metrics';
import colors from '../../theme/color';
import GridentBorder from './GridentBorder';

const SwitchButton = React.memo(({ state, setState, onEvent }) => {
    const toggleSwitch = React.useCallback(() => {
      const newState = !state;
      setState(newState);
      if (typeof onEvent === 'function') {
        onEvent(newState);
      }
    }, [state, setState, onEvent]);
  
    return (
      <TouchableOpacity onPress={toggleSwitch} activeOpacity={0.8}>
        <GridentBorder
          colors={state ? colors.grident1 : colors.gridentLight}
          borderWidth={0}
          borderRadius={metrics.changeByMobileDPI(100)}
          style={styles.gridentButtonStyle}
        >
          <View style={styles.switchButtonContainer}>
            <Animated.View
              style={[
                styles.circle,
                {
                  transform: [{ translateX: state ? metrics.changeByMobileDPI(23) : 0 }],
                },
              ]}
            />
          </View>
        </GridentBorder>
      </TouchableOpacity>
    );
  });
  
  export default SwitchButton;
const styles = StyleSheet.create({
    switchButtonContainer: {
        height: metrics.changeByMobileDPI(20.25),
        width: metrics.changeByMobileDPI(45),
        borderRadius: metrics.changeByMobileDPI(100),
        borderColor: colors.graySolid,
        justifyContent: 'center',
        paddingHorizontal: metrics.changeByMobileDPI(3),
    },
    circle: {
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: metrics.changeByMobileDPI(15),
        width: metrics.changeByMobileDPI(15),
        borderRadius: metrics.changeByMobileDPI(100),
    },
    gridentButtonStyle: {
        height: metrics.changeByMobileDPI(20.25),
        width: metrics.changeByMobileDPI(45),
        borderRadius: metrics.changeByMobileDPI(100),
        alignItems: 'center',
        justifyContent: 'center',
    },
});
