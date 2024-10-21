import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getPlanRequest } from '../../stores/action/getPlanAction';
import metrics from '../../theme/metrics';
import Secand from './Secand';
import { loaderRequest } from '../../stores/action/loaderAction';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
const SubscriptionScreen = () => {
  const dispatch = useDispatch();
  const { getPlanData } = useSelector((state) => state.getPlan);

  console.warn("===getPlanData====>>",getPlanData);
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
const navigation = useNavigation()
  const screenData = [
    { key: '1', text: 'FREE' },
    { key: '2', text: 'BRONZE' },
    { key: '3', text: 'SILVER' },
    { key: '4', text: 'GOLD' }
  ];
  const headerData = [
    { key: '1', text: 'Free' },
    { key: '2', text: '1 Month' },
    { key: '3', text: '6 Months' },
    { key: '4', text: '12 Months' }
  ];
  const renderSubscription = ({ item, index }) => {
    return (
      <Secand 
      screenData={screenData}
      item={item} index={index} headerData={headerData} 
      currentIndex={currentIndex}
      getPlanData={getPlanData}
      plan={item.text}
       />

    );
  };
  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / metrics.screenWidth);
    setCurrentIndex(index);
    dispatch(loaderRequest(true));
  };
  useEffect(() => {
    if (screenData[currentIndex]) {
      dispatch(getPlanRequest(screenData[currentIndex].text));
    }
  }, [dispatch, currentIndex]);
return (
  <View style={styles.mainContainer}>
   {<ScrollView
      horizontal
      pagingEnabled
      bounces={false}
      showsHorizontalScrollIndicator={false}
      onScroll={handleScroll}
      scrollEventThrottle={16}
      ref={flatListRef}
    >
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={screenData}
        keyExtractor={(item) => item.key}
        renderItem={renderSubscription}
        pagingEnabled
        bounces={false}
      />
    </ScrollView>}
  </View>
);

};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  currentIndexText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
});

export default SubscriptionScreen;
