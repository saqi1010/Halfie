import { StyleSheet } from "react-native";
import metrics from "../../theme/metrics";
import font from "../../theme/font";
import colors from "../../theme/color";

export const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:colors.white
    },
    alignCenter:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    rowContainer:{
        flexDirection:'row',
        alignItems:'center'
      },
      mainContainer:{
        flex:1,
        backgroundColor:colors.white
    },
    searchContainer:{
      flexDirection:'row',
      alignItems:'center',
    marginHorizontal:metrics.changeByMobileDPI(15),
      marginVertical:metrics.changeByMobileDPI(20)
        },
        sectionFontStyle:{
            fontSize:font.size.font20,
            color:colors.black,
            fontFamily:font.type.quicksandBold,
            textAlign:'center'
        },
        fashionFontStyle:{
          fontSize:font.size.font24,
          color:colors.graySolid,
          fontFamily:font.type.quicksandRegular, 
          textAlign:'center',
          marginTop:metrics.changeByMobileDPI(5),
          marginBottom:metrics.changeByMobileDPI(10)

        },
        extrenalStyle:{
          marginVertical:metrics.changeByMobileDPI(20),
          marginHorizontal:metrics.changeByMobileDPI(35),
      },
      currencyFontStyle:{
        fontSize:font.size.font24,
        color:colors.black,
        fontFamily:font.type.montserratSemiBold, 
        textAlign:'center',
        marginTop:metrics.changeByMobileDPI(10)
      },
      marginLeftContainer:{
        marginLeft:metrics.changeByMobileDPI(10)
      },
      positionContainer:{
        position:'absolute',
        top:50,
        left:0,
        right:0,
        zIndex:100,
    },
    contentContainerStyle:{
        maxHeight:metrics.changeByMobileDPI(400),
        backgroundColor:colors.white,
    },


    buttonContainer:{
      height:metrics.changeByMobileDPI(35),
      width:metrics.changeByMobileDPI(60),
      borderWidth:1,
      borderRadius:metrics.changeByMobileDPI(100),
      alignItems:'center',
      justifyContent:"center"
    },
    lineContainer: {
      width: '100%',
      height:1,
      backgroundColor:colors.lightGray,
      marginHorizontal:metrics.changeByMobileDPI(4)
    },
    marginHorizontalContainer:{
   },
   mainGridContainer:{
      backgroundColor:colors.white,
      borderRadius:metrics.changeByMobileDPI(7),
      // paddingHorizontal:metrics.changeByMobileDPI(10),
      // marginBottom:metrics.changeByMobileDPI(10)

   },
   circleStyle:{
      height:metrics.changeByMobileDPI(19),
      width:metrics.changeByMobileDPI(19),
      borderRadius:metrics.changeByMobileDPI(100),
      backgroundColor:colors.primary
   },
   positionCircleContainer:{
      // position:'absolute',
      // top:metrics.changeByMobileDPI(10),
      // left:metrics.changeByMobileDPI(40),
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between'
   },
   externalText:{
      fontSize:metrics.changeByMobileDPI(14),
      fontFamily:font.type.quicksandMedium,
      color:colors.black
   },
   
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: metrics.changeByMobileDPI(20),
        marginVertical: metrics.changeByMobileDPI(20)
    },
    sectionFontStyle: {
        fontSize: font.size.font20,
        color: colors.black,
        fontFamily: font.type.quicksandBold,
        textAlign: 'center'
    },

    descriptionFontStyle: {
        fontSize: font.size.font13,
        color: colors.black,
        fontFamily: font.type.quicksandRegular,

    },
    titleFontStyle1: {
        fontSize: font.size.font14,
        color: colors.black,
        fontFamily: font.type.quicksandMedium,
        marginBottom: metrics.changeByMobileDPI(11)

    },
    searchContainer1:{
      
        flexDirection:'row',
        alignItems:'flex-start',
        marginVertical:metrics.changeByMobileDPI(25),
        marginHorizontal:metrics.changeByMobileDPI(20),
    },
    iconFontStyle:{
      fontSize: font.size.font12,
      fontFamily: font.type.montserratMedium,
      color: colors.black,
      marginLeft: metrics.changeByMobileDPI(10)
    },
    profileImageContainer:{
      height:metrics.changeByMobileDPI(24),
      width:metrics.changeByMobileDPI(24),
      borderRadius:metrics.changeByMobileDPI(100)
    },
    profileImageContainer1:{
      height:metrics.changeByMobileDPI(50),
      width:metrics.changeByMobileDPI(50),
      borderRadius:metrics.changeByMobileDPI(7),
      backgroundColor:'red',
      overflow:'hidden'
    },
    flexContainer:{
      marginLeft:metrics.changeByMobileDPI(10),
      flex:1
    },
    flexRowContainer:{
      flexDirection:'row',
      // alignItems:'center'
    },
    rightMarginContainer:{
    }
    
})