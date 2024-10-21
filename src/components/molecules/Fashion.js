import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import font from '../../theme/font'
import colors from '../../theme/color'
import metrics from '../../theme/metrics'

const Fashion = ({title,description}) => {
  return (
    <View style={styles.mainContainer}>
     {title && <Text style={styles.titleFontStyle}>{title}</Text>}
      <View style={styles.flexContainer}>
   {description && <Text style={styles.descriptionFontStyle}>{description}</Text>}
      </View>
    </View>
  )
}

export default Fashion

const styles = StyleSheet.create({

    mainContainer:{
    marginHorizontal:metrics.changeByMobileDPI(20)
    },
    titleFontStyle:{
        fontSize:font.size.font14,
        color:colors.black,
        fontFamily:font.type.quicksandRegular,
    },
    flexContainer:{
  // flex:1
    },
    descriptionFontStyle:{
        fontSize:font.size.font13,
        color:colors.graySolid,
        fontFamily:font.type.quicksandRegular,
        lineHeight:metrics.changeByMobileDPI(19),
        marginVertical:metrics.changeByMobileDPI(15)
    }
})