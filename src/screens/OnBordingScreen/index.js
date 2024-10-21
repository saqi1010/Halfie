import { FlatList, Linking, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './style';
import hooks from './hooks';

const OnBordingScreen = () => {
  const { renderSlider, renderIndicator, flatListRef, viewConfigRef, onBordingData, onViewRef, handleNext, handleSkip, handleScroll } = hooks();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.onBordingContainer}>
        {onBordingData &&
          <FlatList
            ref={flatListRef}
            data={onBordingData}
            showsHorizontalScrollIndicator={false}
            renderItem={renderSlider}
            horizontal
            pagingEnabled
            onViewableItemsChanged={onViewRef.current}
            viewabilityConfig={viewConfigRef.current}
            onScroll={handleScroll}
          />
        }
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={handleSkip}>
            <Text style={styles.skipFontStyle}>SKIP</Text>
          </TouchableOpacity>
          {onBordingData &&
            <FlatList
              data={onBordingData}
              renderItem={renderIndicator}
              contentContainerStyle={styles.rowContainer}
            />
          }
          <TouchableOpacity onPress={handleNext}>
            <Text style={styles.nextFontStyle}>NEXT</Text>
          </TouchableOpacity>
        </View>
 
      </View>
    </View>
  );
};

export default OnBordingScreen;
