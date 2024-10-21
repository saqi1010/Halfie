import React from 'react';
import { Animated, FlatList, ImageBackground, ScrollView, StyleSheet, Text, View, RefreshControl, TouchableOpacity } from 'react-native';
import { styles } from './style';
import hooks from './hooks';
import metrics from '../../theme/metrics';
import GlobalSearch from '../../components/molecules/GlobalSearch';
import BellSvg from '../../assets/svg/BellRedSvg.svg';
import SellAll from '../../components/molecules/SellAll';
import UpcomimgEventSvg from '../../assets/svg/PlayingPeopleSvg.svg';
import Skeleton from './Skeleton';
import FilterSvg from '../../assets/svg/FilterSvg.svg';
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar';

const AllEventScreen = () => {
  const { wishlistData, renderEvent, searchInput, onChangeText, renderWishList, allEventData, filteredEventData, onRefresh, refreshing,openDrawer } = hooks();
  return (
    <View style={styles.mainContainer}>
    <FocusAwareStatusBar isTopSpace={false} isLightBar={true} barColor={'#00000000'} />

      {allEventData && wishlistData ? 
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
              <TouchableOpacity onPress={openDrawer}>
            <FilterSvg height={metrics.changeByMobileDPI(22)} width={metrics.changeByMobileDPI(19)}  />
              </TouchableOpacity>
              <GlobalSearch placeHolder={'Find your events...'} setValue={onChangeText} value={searchInput}/>
              <BellSvg height={metrics.changeByMobileDPI(22)} width={metrics.changeByMobileDPI(19)} style={styles.marginLeftContainer} />
            </View>
            <SellAll svg={<UpcomimgEventSvg height={metrics.changeByMobileDPI(32)} width={metrics.changeByMobileDPI(32)} />} text={"Upcoming Events"} />
            <View style={styles.eventContainer}>
              {allEventData && 
                <FlatList 
                  data={filteredEventData.length > 0 || filteredEventData != '' ? filteredEventData : allEventData} 
                  contentContainerStyle={styles.marginContainer} 
                  renderItem={renderEvent} 
                  horizontal 
                />}
            </View>
            <View style={styles.marginBottomContainer}>
              {wishlistData && 
                <FlatList 
                  data={wishlistData} 
                  contentContainerStyle={styles.marginContainer} 
                  renderItem={renderWishList} 
                  horizontal 
                />}
            </View>
          </View>
        </ScrollView>
        :
        <Skeleton/>
      }
    </View>
  );
}

export default AllEventScreen;
