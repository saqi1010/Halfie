import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../theme/color'
import metrics from '../../theme/metrics'
import font from '../../theme/font'

const SubcriptionProfileDescription = ({title,description}) => {
  return (
    <View style={styles.flexContainer}>
      <Text style={styles.titleFontStyle}>{title}</Text>
      <Text style={styles.descriptionFontStyle}>{description}</Text>
    </View>
  )
}

export default SubcriptionProfileDescription

const styles = StyleSheet.create({
    flexContainer:{
        flex:1,
        marginHorizontal:metrics.changeByMobileDPI(20)
    },
    titleFontStyle:{
        fontSize:font.size.font14,
        fontFamily:font.type.quicksandRegular,
        color:colors.black,  
        marginBottom:metrics.changeByMobileDPI(10)
    },
    descriptionFontStyle:{
        fontSize:font.size.font13,
        fontFamily:font.type.quicksandRegular,
        color:colors.graySolid,  
        marginBottom:metrics.changeByMobileDPI(10)
    }
})