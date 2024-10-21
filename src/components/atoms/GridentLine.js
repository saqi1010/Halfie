import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientLine = ({ colors, start, end, style }) => {
  return (
    <View style={[styles.lineContainer, style]}>
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        style={styles.gradientLine}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lineContainer: {
    height: 1,
  },
  gradientLine: {
    flex: 1,
  },
});

export default GradientLine;
