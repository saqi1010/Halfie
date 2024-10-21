import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import metrics from '../../theme/metrics'
import font from '../../theme/font'
import colors from '../../theme/color'
import GridentBorder from '../atoms/GridentBorder'
import moment from 'moment'

const UpcomingEvent = ({item,index,
  name,
  image,
  bookingDate,
  aed,
  attending,
  description,
  flag,
  currency,
  navigate = () => {}
}) => {
  const [numberOfLine, setNumberOfLine] = React.useState(true)
  const onPressNumberOfLine = () => setNumberOfLine(!numberOfLine)
  return (
    <GridentBorder
    colors={colors.grident1}
    borderWidth={1}
    borderRadius={metrics.changeByMobileDPI(0)}
    borderTopLeftRadius={metrics.changeByMobileDPI(25)}
    borderTopRightRadius={metrics.changeByMobileDPI(25)}
    style={styles.gridentConatiner}
  >
    <Pressable style={styles.eventCardContainer} onPress={() => navigate(item)} >
     <View style={styles.eventImageContainer}>
      {
        image &&
        <Image source={{uri:image}} style={styles.imageStyle}/>
      }
     </View>
     <View style={styles.bottomSectionContainer}>
     <View style={styles.flexDirectionRowContainer}>
    <Text style={styles.eventTitleFontStyle}>{name}</Text>
    <Text style={styles.eventDateFontStyle}>{moment(bookingDate).format('DD MMM, YYYY')}</Text>
     </View>
     <View style={styles.flexContainer}>
     <Text numberOfLines={numberOfLine ? 1 : 3 } style={styles.descriptionFontStyle}>{description}</Text>
       <TouchableOpacity onPress={onPressNumberOfLine} style={styles.readMoreContainer}>
       <Text style={styles.readMoreFontStyle}>{numberOfLine ? "Read More..." : "Read Less"}</Text>
       </TouchableOpacity>
     </View>
     <View style={styles.cardFooterContainer}>
   <Text style={styles.priceFontStyle}>{currency?.toUpperCase()}{'\n'}{aed}</Text>
   <Text style={styles.attendenceFontStyle}>{attending}{'\n'}Attending</Text>
   <TouchableOpacity style={styles.registerButtonContainer}>
    <Text style={styles.registerFontStyle}>{flag ? 'Wishlist' :'Register'}</Text>
   </TouchableOpacity>
     </View>

     </View>
    </Pressable>
  </GridentBorder>
  )
}
export default UpcomingEvent
const styles = StyleSheet.create({
  eventCardContainer:{
  
    borderTopLeftRadius:metrics.changeByMobileDPI(25),
    borderTopRightRadius:metrics.changeByMobileDPI(25),
    overflow:'hidden',
    backgroundColor:colors.white,
    height:metrics.changeByMobileDPI(300),

  },
  imageStyle:{
    height:'100%',
    width:'100%'
  },
  eventImageContainer:{
    height:metrics.changeByMobileDPI(184)
  },
  bottomSectionContainer:{

  },
  flexDirectionRowContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginHorizontal:metrics.changeByMobileDPI(10),
    marginTop:metrics.changeByMobileDPI(10)
  },
  eventTitleFontStyle:{
    fontSize:font.size.font12,
    fontFamily:font.type.quicksandRegular,
    color:colors.black,
  },
  eventDateFontStyle:{
    fontSize:font.size.font10,
    fontFamily:font.type.quicksandBold,
    color:colors.graySolid,
  },
  flexContainer:{
    // flexDirection:'row'
    height:metrics.changeByMobileDPI(35),
    marginHorizontal:metrics.changeByMobileDPI(10),
    marginVertical:metrics.changeByMobileDPI(10)

  },
  descriptionFontStyle:{
    fontSize:font.size.font8,
    fontFamily:font.type.quicksandRegular,
    color:colors.graySolid,
  },
  readMoreFontStyle:{
    fontSize:font.size.font8,
    fontFamily:font.type.quicksandRegular,
    color:colors.linkBlue,
  },
  cardFooterContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginHorizontal:metrics.changeByMobileDPI(10)
  },
  priceFontStyle:{
    fontSize:font.size.font10,
    fontFamily:font.type.quicksandSemiBold,
    color:colors.black,
    textAlign:'center'
  },
  attendenceFontStyle:{
    fontSize:font.size.font10,
    fontFamily:font.type.quicksandSemiBold,
    color:colors.pantone,
    textAlign:'center'
  },
  registerFontStyle:{
    fontSize:font.size.font10,
    fontFamily:font.type.quicksandMedium,
    color:colors.white,
    top:-1
  },
  registerButtonContainer:{
    height:metrics.changeByMobileDPI(21),
    width:metrics.changeByMobileDPI(65),
    borderRadius:metrics.changeByMobileDPI(100),
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:colors.tomatoRed,
  },
  gridentConatiner:{
    paddingRight:metrics.changeByMobileDPI(30),
    borderTopLeftRadius:metrics.changeByMobileDPI(25),
    borderTopRightRadius:metrics.changeByMobileDPI(25),
    width:metrics.changeByMobileDPI(250),
  
  },

})