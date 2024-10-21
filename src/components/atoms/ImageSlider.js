import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
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
import images from '../../theme/images';

const { width } = Dimensions.get('screen');
const itemWidth = width / 1.6;

export default function ImageSlider({ imageData, externalStyle, screenWidth,manualManageImage }) {
  const scrollX = useSharedValue(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const InAppScreenWidth = screenWidth ? screenWidth : itemWidth;
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
        scrollX.value = event.contentOffset.x;
        const index = Math.round(event.contentOffset.x / itemWidth);
        runOnJS(setActiveIndex)(index);
    }
});


  function Item({ index, item }) {
    const [error, setError] = useState(false);

    const itemStyle = useAnimatedStyle(() => {
      const input = [
        (index - 1) * InAppScreenWidth,
        index * InAppScreenWidth,
        (index + 1) * InAppScreenWidth,
      ];
      const scaleOutput = [0.85, 1, 0.85];
      const colorOutput = ['#d3d3d3', '#ffffff', '#d3d3d3'];
      return {
        transform: [{ scale: interpolate(scrollX.value, input, scaleOutput, Extrapolate.CLAMP) }],
        backgroundColor: interpolate(scrollX.value, input, colorOutput, Extrapolate.CLAMP),
      };
    });

    return (
      <Animated.View style={[styles.item, externalStyle, itemStyle]}>
        <Image
          source={error ? {uri :manualManageImage} : { uri: item }}
          style={styles.imageStyle}
          onError={() => setError(true)}
        />
      </Animated.View>
    );
  }

  const renderIndicator = (index) => (
    <View
      key={index}
      style={[
        styles.indicator,
        index === activeIndex ? styles.activeIndicator : null
      ]}
    >
      {index === activeIndex && (
        <GridentBorder
          colors={colors.grident1}
          borderWidth={0}
          borderRadius={metrics.changeByMobileDPI(0)}
          style={styles.gradientDotsStyle}
        />
      )}
    </View>
  );

  const indicators =imageData &&  imageData.map((_, index) => renderIndicator(index));

  return (
    <View style={styles.flex}>
      {imageData && (
        <Animated.FlatList
          data={imageData}
          renderItem={({ item, index }) => <Item index={index} item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ ...styles.list, paddingHorizontal: (width - InAppScreenWidth) / 2 }}
          snapToInterval={InAppScreenWidth}
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
    // flex: 1,
  },
  item: {
    height: metrics.changeByMobileDPI(338),
    width: itemWidth,
    borderTopLeftRadius: metrics.changeByMobileDPI(20),
    borderTopRightRadius: metrics.changeByMobileDPI(20),
    overflow: 'hidden',
  },
  list: {
    alignItems: 'center',
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
  indicator: {
    width: metrics.changeByMobileDPI(7),
    height: metrics.changeByMobileDPI(7),
    borderRadius: metrics.changeByMobileDPI(100),
    backgroundColor: colors.borderColor,
    marginHorizontal:metrics.changeByMobileDPI(3)
  },
  activeIndicator: {
    backgroundColor: 'transparent',
  },
  gradientDotsStyle: {
    width: metrics.changeByMobileDPI(7),
    height: metrics.changeByMobileDPI(7),
    borderRadius: metrics.changeByMobileDPI(100),
  },
});
