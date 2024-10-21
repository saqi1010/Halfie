import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import hooks from './hooks';
import { styles } from './style';
import metrics from '../../theme/metrics';
import GlobalSearch from '../../components/molecules/GlobalSearch';
import BellSvg from '../../assets/svg/BellRedSvg.svg';
import Skeleton from './Skeleton';
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar';
import FilterSvg from '../../assets/svg/FilterSvg.svg';

const ServiceListingScreen = () => {
  const { renderService, serviceListData, onChangeText, searchInput, filteredServiceList,refreshing ,onRefresh,openDrawer} = hooks();
  let addExternalWidth = serviceListData && serviceListData.length == 1 && {
    width: metrics.screenWidth / 1.9,
  }

{console.warn("serviceListData",serviceListData)}
  return (
    <View style={styles.mainContainer}>
                <FocusAwareStatusBar isTopSpace={false} isLightBar={true} barColor={'#00000000'} />
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={openDrawer} hitSlop={{top:10,left:10,right:10,bottom:10}}>
          <FilterSvg height={metrics.changeByMobileDPI(22)} width={metrics.changeByMobileDPI(19)} />
        </TouchableOpacity>
        <GlobalSearch placeHolder='Find services...' setValue={onChangeText} value={searchInput} />
        <BellSvg height={metrics.changeByMobileDPI(22)} width={metrics.changeByMobileDPI(19)} style={styles.marginLeftContainer} />
      </View>
      {
        serviceListData ?
        <FlatList
          data={filteredServiceList.length > 0 || filteredServiceList != '' ? filteredServiceList : serviceListData}
          numColumns={2}
          renderItem={renderService}
          keyExtractor={item => item._id}
          contentContainerStyle={{ ...styles.container, ...addExternalWidth }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        />
        :
        <Skeleton/>
      }
    </View>
  );
};

export default ServiceListingScreen;
