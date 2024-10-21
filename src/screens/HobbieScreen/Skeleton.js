// SkeletonLoader.js
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { View, StyleSheet, ScrollView } from 'react-native';
import metrics from '../../theme/metrics';
import colors from '../../theme/color';

const Skeleton = () => {
  return (
    <View style={styles.positionContianer}>
      <ScrollView>

        <SkeletonPlaceholder>
          <View style={styles.container}>
            <View style={styles.upcomingEventsContainer}>
              <View style={styles.eventCard} />
              <View style={styles.eventCard} />
              <View style={styles.eventCard} />
            </View>
            <View style={styles.upcomingEventsContainer}>
              <View style={styles.eventCard} />
              <View style={styles.eventCard} />
              <View style={styles.eventCard} />
            </View>
            <View style={styles.upcomingEventsContainer}>
              <View style={styles.eventCard} />
              <View style={styles.eventCard} />
              <View style={styles.eventCard} />
            </View>
            <View style={styles.upcomingEventsContainer}>
              <View style={styles.eventCard} />
              <View style={styles.eventCard} />
              <View style={styles.eventCard} />
            </View>
          </View>
         

         

        </SkeletonPlaceholder>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    marginHorizontal: metrics.changeByMobileDPI(10)
  },
  bellIcon: {
    width: metrics.changeByMobileDPI(22),
    height: metrics.changeByMobileDPI(22),
    borderRadius: metrics.changeByMobileDPI(11),
  },
  upcomingEventsContainer: {
    flexDirection: 'row',
    marginVertical: metrics.changeByMobileDPI(10),
    alignSelf: 'center',
    marginLeft: metrics.changeByMobileDPI(5),
  },
  eventCard: {
    width: metrics.screenWidth / 3.5 ,
    height: metrics.changeByMobileDPI(150),
    marginRight: metrics.changeByMobileDPI(7),
    borderTopLeftRadius: metrics.changeByMobileDPI(10),
    borderTopRightRadius: metrics.changeByMobileDPI(10),
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
    // flexWrap: 'wrap',
  },
  serviceCard: {
    width: (metrics.screenWidth - 70) / 4 - 10,
    height: (metrics.screenWidth - 70) / 4 - 10,
    borderRadius: metrics.changeByMobileDPI(10),
    marginBottom: metrics.changeByMobileDPI(20),
    marginRight: metrics.changeByMobileDPI(20)
  },
  serviceCard1: {
    width: (metrics.screenWidth - 70) / 4 - 10,
    height: (metrics.screenWidth - 70) / 4 - 10,
    borderRadius: metrics.changeByMobileDPI(10),
    marginBottom: metrics.changeByMobileDPI(20),
  },
  positionContianer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: colors.white
  },
  line: {
    // alignItems:'center',
    width: metrics.screenWidth / 1.3,
    alignSelf: 'center',
    marginBottom:metrics.changeByMobileDPI(10)
  },
  boxStyle: {
    height: metrics.changeByMobileDPI(15),
  },
  boxLine: {
      height: metrics.changeByMobileDPI(15),
    width:'100%',
  },
  boxLine1: {
    height: metrics.changeByMobileDPI(15),
  },
  mainImageContainer: {
    height: metrics.changeByMobileDPI(332),
    borderTopRightRadius: metrics.changeByMobileDPI(25),
    borderTopLeftRadius: metrics.changeByMobileDPI(25),
    marginHorizontal: metrics.changeByMobileDPI(10),
    marginTop: metrics.changeByMobileDPI(20)
  },
  flexDirectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    marginTop: metrics.changeByMobileDPI(10)
  },
  squareBoxContianer: {
    height: metrics.changeByMobileDPI(17),
    width: metrics.changeByMobileDPI(130),
    borderRadius: metrics.changeByMobileDPI(5),
    marginRight: metrics.changeByMobileDPI(10)
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  boxContainer: {
    marginHorizontal: metrics.changeByMobileDPI(20),
    marginTop: metrics.changeByMobileDPI(20)

  },
  descriptionBox: {
    height: metrics.changeByMobileDPI(100),
    borderRadius: metrics.changeByMobileDPI(5),
    marginTop: metrics.changeByMobileDPI(10)
  }
});

export default Skeleton;
