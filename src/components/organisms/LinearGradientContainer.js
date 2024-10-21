import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LinearGradientContainer = ({ children, colors, style }) => {
    return (
        <LinearGradient colors={colors} style={[styles.container, style]}>
            {children}
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LinearGradientContainer;

