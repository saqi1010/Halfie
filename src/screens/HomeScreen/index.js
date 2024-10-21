import React, { useState, useCallback } from 'react';
import { Animated, FlatList, ImageBackground, ScrollView, StyleSheet, Text, View, RefreshControl, TouchableOpacity } from 'react-native';
import { styles } from './style';
import hooks from './hooks';
import metrics from '../../theme/metrics';
import GlobalSearch from '../../components/molecules/GlobalSearch';
import BellSvg from '../../assets/svg/BellRedSvg.svg';
import SellAll from '../../components/molecules/SellAll';
import UpcomimgEventSvg from '../../assets/svg/PlayingPeopleSvg.svg';
import OurServiceSvg from '../../assets/svg/PeopleDiscussion.svg';

import Skeleton from './Skeleton';
import { useNavigation } from '@react-navigation/native';
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar';

const HomeScreen = () => {
  const { srervicesData, upcomingEventData, renderEvent, renderServices, navigateTollEvent, searchInput, onChangeText, filteredUpcomingData, onRefresh, refreshing } = hooks();
  console.warn("===========>>",upcomingEventData);
  return (
    <View style={styles.mainContainer}>
          <FocusAwareStatusBar isTopSpace={false} isLightBar={true} barColor={'#00000000'} />



      {
        srervicesData && upcomingEventData ?
          <ScrollView 
            refreshControl={
              <RefreshControl 
                refreshing={refreshing} 
                onRefresh={onRefresh} 
              />
            }
          >
            <View style={styles.subContainer}>
              <View style={styles.searchContainer}>
                <GlobalSearch setValue={onChangeText} value={searchInput} placeHolder='Find your events' />
                <BellSvg height={metrics.changeByMobileDPI(22)} width={metrics.changeByMobileDPI(19)} style={styles.marginLeftContainer}  />
              </View>
              <SellAll svg={<UpcomimgEventSvg height={metrics.changeByMobileDPI(32)} width={metrics.changeByMobileDPI(32)} />} text={"Upcoming Events"} navigateTo={navigateTollEvent} />
              <View style={styles.eventContainer}>
                {upcomingEventData && <FlatList data={filteredUpcomingData.length > 0 || filteredUpcomingData != '' ? filteredUpcomingData : upcomingEventData} contentContainerStyle={styles.marginContainer} renderItem={renderEvent} horizontal />}
              </View>
              <SellAll svg={<OurServiceSvg height={metrics.changeByMobileDPI(32)} width={metrics.changeByMobileDPI(32)} />} text={"Our Services"} navigateTo={null} />
              <View style={styles.servicesContainer}>
                {srervicesData && <FlatList data={srervicesData} contentContainerStyle={styles.marginSerivceContainer} numColumns={4} renderItem={renderServices} />}
              </View>
            </View>
          </ScrollView>
          :
          <Skeleton />
      }
    </View>
  )
}

export default HomeScreen;
