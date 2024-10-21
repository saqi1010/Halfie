import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing, ActivityIndicator } from 'react-native';
import globalStyles from '../../styles/globalStyles';
import metrics from '../../theme/metrics';
import CustomLottieAnimation from './CustomLottieAnimation';
import { useSelector } from 'react-redux';

const Loader = () => {
    const loaderVisible = useSelector((state) => state.loader.loader);
    return loaderVisible ? (
      <View style={globalStyles.positionContainer}>
          <View style={styles.container}>
              <CustomLottieAnimation />
          </View>
      </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000089',
  },
  lottie: {
    width: metrics.changeByMobileDPI(100),  
    height: metrics.changeByMobileDPI(30)
  },
});

export default Loader;
