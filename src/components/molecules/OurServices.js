import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../theme/color'
import metrics from '../../theme/metrics'
import GridentBorder from '../atoms/GridentBorder'
import font from '../../theme/font'
import { useNavigation } from '@react-navigation/native'
import screenName from '../../theme/screenName'
const OurServices = ({item,index}) => {
  const navigation = useNavigation()
  const navigateToService = () => {
    console.warn("------",item);
    navigation.navigate(screenName.screenName.serviceListing_screen,{categrayId:item._id})
  }
  return (
    <GridentBorder
    colors={colors.grident1}
    borderWidth={1}
    borderRadius={metrics.changeByMobileDPI(5)}
    style={styles.gridentConatiner}
  
  >
    <TouchableOpacity onPress={navigateToService} style={styles.servicesContainer}>
    <Image source={{uri:item?.icon}} resizeMode='contain' style={styles.servicesImageContainer}/>
    <Text numberOfLines={1} style={styles.servicesFontStyle}>{item.name}</Text>
    </TouchableOpacity>
  </GridentBorder>
  )
}

export default OurServices

const styles = StyleSheet.create({
  servicesContainer:{
    height:metrics.screenWidth / 5.3,
    backgroundColor:colors.white,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:metrics.changeByMobileDPI(5)
  },
  gridentConatiner:{
    paddingRight:metrics.changeByMobileDPI(10),
    width:metrics.screenWidth / 4.6,
    overflow:'hidden',
    borderRadius:metrics.changeByMobileDPI(5),
    paddingBottom:metrics.changeByMobileDPI(10)
  },
  servicesFontStyle:{
    fontSize:font.size.font10,
    fontFamily:font.type.quicksandMedium,
    color:colors.black,
  },
  servicesImageContainer:{
    height:metrics.changeByMobileDPI(30),
    width:metrics.changeByMobileDPI(30)
  }
})