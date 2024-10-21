// SkeletonLoader.js
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { View, StyleSheet } from 'react-native';
import metrics from '../../theme/metrics';
import colors from '../../theme/color';
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar';

const Skeleton = () => {
  return (
    <View style={styles.positionContianer}>
      <FocusAwareStatusBar isTopSpace={false} isLightBar={true} barColor={'#00000000'} />
    <SkeletonPlaceholder>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar} />
          <View style={styles.bellIcon} />
        </View>
        <View style={styles.upcomingEventsContainer}>
          <View style={{...styles.eventCard,...styles.marginRightStyle}} />
          <View style={styles.eventCard} />
        </View>
        <View style={styles.upcomingEventsContainer}>
          <View style={{...styles.eventCard,...styles.marginRightStyle}} />
          <View style={styles.eventCard} />
        </View>
      </View>
    </SkeletonPlaceholder>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.changeByMobileDPI(20),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: metrics.changeByMobileDPI(20),
  },
  searchBar: {
    flex: 1,
    height: metrics.changeByMobileDPI(40),
    borderRadius: metrics.changeByMobileDPI(100),
  },
  bellIcon: {
    width: metrics.changeByMobileDPI(22),
    height: metrics.changeByMobileDPI(22),
    borderRadius: metrics.changeByMobileDPI(11),
    marginLeft: metrics.changeByMobileDPI(10),
  },
  upcomingEventsContainer: {
    flexDirection: 'row',
    marginTop:metrics.changeByMobileDPI(15)
   
  },
  eventCard: {
    width: metrics.screenWidth / 2.3,
    height: metrics.changeByMobileDPI(300),
    borderTopLeftRadius:metrics.changeByMobileDPI(20),
    borderTopRightRadius:metrics.changeByMobileDPI(20)
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent:'center'
    // flexWrap: 'wrap',
  },
  serviceCard: {
    width: (metrics.screenWidth - 70) / 4 - 10,
    height:(metrics.screenWidth - 70) / 4 - 10,
    borderRadius: metrics.changeByMobileDPI(10),
    marginBottom: metrics.changeByMobileDPI(20),
    marginRight:metrics.changeByMobileDPI(20)
  },
  serviceCard1: {
    width: (metrics.screenWidth - 70) / 4 - 10,
    height:(metrics.screenWidth - 70) / 4 - 10,
    borderRadius: metrics.changeByMobileDPI(10),
    marginBottom: metrics.changeByMobileDPI(20),
  },
  positionContianer:{
    position:'absolute',
    left:0,
    right:0,
    top:0,
    bottom:0,
    backgroundColor:colors.white
  },
  line:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:metrics.changeByMobileDPI(20),
    marginTop:metrics.changeByMobileDPI(20)
  },
  boxStyle:{
    height:metrics.changeByMobileDPI(15),
    width:metrics.changeByMobileDPI(15)
  },
  boxLine:{
    height:metrics.changeByMobileDPI(15),
    marginLeft:metrics.changeByMobileDPI(20),
    width:metrics.changeByMobileDPI(170)
  },
  marginRightStyle:{
    marginRight:metrics.changeByMobileDPI(10)
  }
});

export default Skeleton;
