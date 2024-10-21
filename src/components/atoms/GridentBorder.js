import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GridentBorder = ({ children, colors, borderWidth, borderRadius, style,borderTopLeftRadius,borderTopRightRadius,start ,end}) => {
  return (
    <View style={[styles.container, { borderRadius }, style]}>
      <LinearGradient
        colors={colors}
        start={start || { x: 0, y: 0 }}
        end={ end || { x: 1, y: 0 }}
        style={[
          styles.gradient,
          {
            borderTopLeftRadius,
            borderTopRightRadius,
            borderRadius,
            padding: borderWidth,
          },
        ]}
      >
        <View style={[styles.inner, { borderRadius: borderRadius - borderWidth }]}>
          {children}
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
  },
  inner: {
    flex: 1,
    backgroundColor: 'transparent', 
  },
});

export default GridentBorder;
