import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import font from '../../theme/font'
import colors from '../../theme/color'
import metrics from '../../theme/metrics'

const SellAll = ({svg,text,navigateTo}) => {
  return (
    <View style={styles.flexDirectionRowContainer}>
      <View style={styles.flexRowConatiner}>
        <View style={styles.svgContainer}>
     {svg}
        </View>
        <Text style={styles.textFontStyle}>{text}</Text>
      </View>
      { typeof navigateTo == 'function' &&
      <TouchableOpacity onPress={navigateTo}>
        <Text style={styles.seeAllFontStyle}>Sell all</Text>
      </TouchableOpacity>
      }
    </View>
  )
}

export default SellAll

const styles = StyleSheet.create({
  flexDirectionRowContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginHorizontal:metrics.changeByMobileDPI(30)
  },
  flexRowConatiner:{
 flexDirection:'row',
 alignItems:'center'
  },
  svgContainer:{
marginRight:metrics.changeByMobileDPI(10)
  },
  textFontStyle:{
    fontSize:font.size.font18,
    fontFamily:font.type.latoSemiBold,
    color:colors.black,
  },
  seeAllFontStyle:{
    fontSize:font.size.font12,
    fontFamily:font.type.latoSemiBold,
    color:colors.textGrey,
  }
})