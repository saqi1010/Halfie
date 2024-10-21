import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import metrics from '../../theme/metrics';
import colors from '../../theme/color';

const CustomLottieAnimation = ({ loop = true }) => {
    const animation1 = useRef(new Animated.Value(0)).current;
    const animation2 = useRef(new Animated.Value(0)).current;
    const animation3 = useRef(new Animated.Value(0)).current;
    const animation4 = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const createBounce = (animation) => Animated.sequence([
            Animated.timing(animation, {
                toValue: -20,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(animation, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }),
        ]);

        const bounce1 = createBounce(animation1);
        const bounce2 = createBounce(animation2);
        const bounce3 = createBounce(animation3);
        const bounce4 = createBounce(animation4);

        const animationSequence = Animated.sequence([
            bounce1,
            bounce2,
            bounce3,
            bounce4,
        ]);
        Animated.loop(animationSequence).start();
    }, [animation1, animation2, animation3, animation4]);

    return (
        <View style={styles.animationContainer}>
            <Animated.View style={[styles.shape, { backgroundColor: colors.primary + 20, transform: [{ translateY: animation1 }] }]} />
            <Animated.View style={[styles.shape, { backgroundColor:  colors.primary, transform: [{ translateY: animation2 }] }]} />
            <Animated.View style={[styles.shape, { backgroundColor:  colors.secondary, transform: [{ translateY: animation3 }] }]} />
            <Animated.View style={[styles.shape, { backgroundColor:  colors.ternary, transform: [{ translateY: animation4 }] }]} />
        </View>
    );
}

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    shape: {
        width: metrics.changeByMobileDPI(13),
        height: metrics.changeByMobileDPI(13),
        borderRadius: metrics.changeByMobileDPI(100),
        marginHorizontal: 5,
    },
});

export default CustomLottieAnimation;
