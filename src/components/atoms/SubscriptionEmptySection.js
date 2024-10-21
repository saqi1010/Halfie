import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GridentButton from './GridentButton'
import metrics from '../../theme/metrics'
import font from '../../theme/font'
import colors from '../../theme/color'

const SubscriptionEmptySection = ({image,title,info,description,buttonTitle,onClick}) => {
  return (
    <View style={styles.mainContainer}>
       <View style={styles.imageSection}>
     <View style={styles.imageContainer}>
      <Image source={image} style={styles.imageStyle}/>
     </View>
     <Text style={styles.titleFontStyle}>{title}</Text>
     <Text style={styles.infoFontStyle}>{info}</Text>
       </View>
       <View style={styles.descriptionContainer}> 
       <Text style={styles.descriptionFontStyle}
       ellipsizeMode='tail'
       >{description}</Text>
       </View>
       <GridentButton
          extrenalStyle={styles.extrenalStyle}
          onClick={onClick}
          buttonText={buttonTitle}
          />
    </View>
  )
}

export default SubscriptionEmptySection

const styles = StyleSheet.create({
  mainContainer:{
    flex:1
  },
  extrenalStyle:{
    marginVertical:metrics.changeByMobileDPI(20),
    marginHorizontal:metrics.changeByMobileDPI(35),
},
descriptionContainer:{
  flex:1,
  marginHorizontal:metrics.changeByMobileDPI(30)
},
titleFontStyle:{
  fontSize:font.size.font20,
  fontFamily:font.type.quicksandBold,
  color:colors.black,
  marginBottom:metrics.changeByMobileDPI(20)
},
infoFontStyle:{
  fontSize:font.size.font13,
  fontFamily:font.type.quicksandRegular,
  color:colors.gray_75,
  marginBottom:metrics.changeByMobileDPI(50)
},
descriptionFontStyle:{
  fontSize:font.size.font13,
  fontFamily:font.type.quicksandRegular,
  color:colors.gray_75,
  textAlign:'justify',
},
imageContainer:{
  height:metrics.changeByMobileDPI(192),
  width:metrics.changeByMobileDPI(192),
  marginVertical:metrics.changeByMobileDPI(30)
},
imageStyle:{
  height:'100%',
  width:'100%'
},
imageSection:{
  alignItems:'center'
}

})