import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import font from '../../theme/font'
import colors from '../../theme/color'
import metrics from '../../theme/metrics'

const Premission = ({svg,title='',description=''}) => {
  return (
    <View style={styles.flexRowContainer}>
    <View style={styles.svgContainer}>
        {svg && svg}
    </View>
    <View style={styles.flexContainer}>
        <Text style={styles.titleFontStyle}>{title}</Text>
        <Text style={styles.descriptionFontStyle}>{description}</Text>
    </View>
    </View>
  )
}

export default Premission

const styles = StyleSheet.create({
    flexRowContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:metrics.changeByMobileDPI(20),
        marginBottom:metrics.changeByMobileDPI(35)
    },
    flexContainer:{
        flex:1
    },
    titleFontStyle:{
        fontSize:font.size.font14,
        fontFamily:font.type.quicksandRegular,
        color:colors.black,
        marginBottom:metrics.changeByMobileDPI(10)
    },
    descriptionFontStyle:{
        fontSize:font.size.font12,
        fontFamily:font.type.quicksandRegular,
        color:colors.graySolid,
    },
    svgContainer:{
        marginRight:metrics.changeByMobileDPI(20)
    }
})