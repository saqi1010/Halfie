import React, { useState } from 'react';
import { Dimensions, Image, PermissionsAndroid, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
    runOnJS
} from 'react-native-reanimated';
import metrics from '../../theme/metrics';
import colors from '../../theme/color';
import GridentBorder from './GridentBorder';
import SimleSvg from '../../assets/svg/SmileSvg.svg';
import AddButtonSvg from '../../assets/svg/AddButtonSvg.svg';
import ImagePicker from 'react-native-image-crop-picker';
import { useNavigation } from '@react-navigation/native';
import screenName from '../../theme/screenName';
import { checkCameraPermission, requestCameraPermission } from '../../utils/permissions';

const { width } = Dimensions.get('screen');
const itemWidth = width / 2.4;

export default function ImageAdderSlider({ imageData, setImages, images }) {
    console.warn("==========>>",images);
    const navigation = useNavigation();
    const scrollX = useSharedValue(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollX.value = event.contentOffset.x;
            const index = Math.round(event.contentOffset.x / itemWidth);
            runOnJS(setActiveIndex)(index);
        }
    });

    const imageAdd = async (index) => {
        let hasPermission = await checkCameraPermission();
        if (!hasPermission) {
            const granted = await requestCameraPermission();
            if (!granted) return;
        }

        try {
            const image = await ImagePicker.openPicker({
                width: 160,
                height: 198,
                cropping: true,
            });

            const newImages = [...images];
            newImages[index] = { ...newImages[index], path: image.path }; // Update the image path correctly
            setImages(newImages); // Update the state with the new array
        } catch (error) {
            console.warn('Error picking image:', error);
        }
    };

    const Item = ({ index, item }) => {
        const itemStyle = useAnimatedStyle(() => {
            const input = [
                (index - 1) * itemWidth,
                index * itemWidth,
                (index + 1) * itemWidth,
            ];
            const scaleOutput = [0.85, 1, 0.85];
            const colorOutput = ['#d3d3d3', '#ffffff', '#d3d3d3'];
            const clamp = {
                extrapolateLeft: Extrapolate.CLAMP,
                extrapolateRight: Extrapolate.CLAMP,
            };
            return {
                transform: [{ scale: interpolate(scrollX.value, input, scaleOutput, clamp) }],
                backgroundColor: interpolate(scrollX.value, input, colorOutput, clamp),
            };
        });

        return (
            <Animated.View style={[styles.item, itemStyle]}>
                <TouchableOpacity onPress={() => imageAdd(index)} style={styles.imageContainer}>
                    {item?.path ? (
                        <Image source={{ uri: item.path }} style={styles.imageStyle} />
                    ) : (
                        <GridentBorder
                            colors={colors.grident1}
                            borderWidth={0}
                            borderRadius={metrics.changeByMobileDPI(0)}
                            style={styles.gridentConatiner}
                        >
                            <View style={styles.addImageContainer}>
                                <SimleSvg height={metrics.changeByMobileDPI(37)} width={metrics.changeByMobileDPI(37)} />
                                {index === activeIndex && (
                                    <View style={styles.positionContainer}>
                                        <AddButtonSvg height={metrics.changeByMobileDPI(25)} width={metrics.changeByMobileDPI(25)} />
                                    </View>
                                )}
                            </View>
                        </GridentBorder>
                    )}
                </TouchableOpacity>
            </Animated.View>
        );
    };

    const renderIndicator = (index) => {
        return (
            <TouchableOpacity
                key={index}
                style={[
                    styles.indicator,
                ]}
            >
                {index === activeIndex ? (
                    <GridentBorder
                        colors={colors.grident1}
                        borderWidth={0}
                        borderRadius={metrics.changeByMobileDPI(0)}
                        style={styles.dotStyle}
                    />
                ) : (
                    <View style={styles.dotStyle}></View>
                )}
            </TouchableOpacity>
        );
    };

    const indicators = images && images.map((_, index) => renderIndicator(index));

    return (
        <View style={styles.flex}>
            {images && (
                <Animated.FlatList
                    data={images}
                    renderItem={({ index, item }) => <Item index={index} item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.list}
                    snapToInterval={itemWidth}
                    onScroll={scrollHandler}
                    decelerationRate="fast"
                />
            )}
            <View style={styles.indicatorContainer}>
                {indicators}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    item: {
        borderTopLeftRadius: metrics.changeByMobileDPI(20),
        borderTopRightRadius: metrics.changeByMobileDPI(20),
        overflow: 'hidden',
    },
    list: {
        alignItems: 'center',
        paddingHorizontal: (width - itemWidth) / 2,
    },
    imageStyle: {
        height: '100%',
        width: '100%',
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: metrics.changeByMobileDPI(20),
        marginVertical: metrics.changeByMobileDPI(10),
    },
    dotStyle: {
        height: metrics.changeByMobileDPI(7),
        width: metrics.changeByMobileDPI(7),
        borderRadius: metrics.changeByMobileDPI(100),
    },
    gridentConatiner: {
        height: metrics.changeByMobileDPI(198),
        width: metrics.screenWidth / 2.4,
        overflow: 'hidden',
    },
    addImageContainer: {
        flex: 1,
        backgroundColor: colors.white,
        borderTopLeftRadius: metrics.changeByMobileDPI(20),
        borderTopRightRadius: metrics.changeByMobileDPI(20),
        borderWidth: 1,
        borderColor: colors.white,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
    },
    positionContainer: {
        position: 'absolute',
        bottom: metrics.changeByMobileDPI(10),
        right: metrics.changeByMobileDPI(10),
    },
    imageContainer: {
        height: metrics.changeByMobileDPI(198),
        width: metrics.screenWidth / 2.4,
        overflow: 'hidden',
    },
});
