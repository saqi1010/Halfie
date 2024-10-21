import React, { memo, useState, useEffect } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import metrics from '../../theme/metrics';
import font from '../../theme/font';
import colors from '../../theme/color';
import PreviousSvg from '../../assets/svg/PreviousSvgInWhiteColor.svg';
import NextSvg from '../../assets/svg/NextSvgInWhiteColor.svg';
import { generateYears } from '../../theme/staticData';
import GradientLine from './GridentLine';
import GridentBorder from './GridentBorder';

const BottomSlideModal = ({
  isVisible,
  toggleVisibility,
  headerName = 'View Attendees',
  data = [],
  renderItem,
  onSelectItem,
  keyName = 'fullLabel',
  monthVisibility = false,
}) => {

  return (
    <Modal transparent={true} visible={isVisible} onRequestClose={toggleVisibility} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
        <GridentBorder
    colors={colors.gridentLight}
    borderWidth={1.5}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    borderRadius={metrics.changeByMobileDPI(12)}
    style={styles.gridentContainer}>
          <View style={styles.alignCenter}>
           <Text style={styles.headerFontStyle}>{headerName}</Text> 
          </View>
          <GradientLine
        colors={colors.grident1}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.lineContainer}
        />

        <View style={styles.subContainer}>
        {data && <FlatList data={data} renderItem={renderItem}/>}
        </View>

      
        </GridentBorder>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent:'flex-end'
  },
  modalContent: {
    backgroundColor:colors.white,
    borderTopLeftRadius: metrics.changeByMobileDPI(12),
    borderTopRightRadius: metrics.changeByMobileDPI(12),
    overflow: 'hidden',
    flex:0.6
  },
  headerFontStyle:{
    fontSize:font.size.font18,
    fontFamily:font.type.quicksandBold,
    color:colors.black
  },
  alignCenter:{
    alignItems:'center',
    paddingVertical:metrics.changeByMobileDPI(15),
    },
    lineContainer: {
      width: '100%',
    },
    subContainer:{
      backgroundColor:colors.white + 70,
      marginHorizontal:metrics.changeByMobileDPI(10),
      marginVertical:metrics.changeByMobileDPI(10),
      padding:10,
      flex:1,
      borderRadius:metrics.changeByMobileDPI(8)
    },
    gridentContainer:{
      flex:1
    }
 
});

export default memo(BottomSlideModal);
