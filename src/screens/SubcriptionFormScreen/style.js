import { StyleSheet } from "react-native";
import metrics from "../../theme/metrics";
import font from "../../theme/font";
import colors from "../../theme/color";

export const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:colors.white,
  
    },
    alignCenter:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    appFontStyle:{
        fontSize:font.size.font24,
        fontFamily:font.type.montserratSemiBold,
        color:colors.black,
        includeFontPadding:false,
        top:metrics.changeByMobileDPI(-15)
    },
    appIconStyle:{
        top:metrics.changeByMobileDPI(15)
    },
    subContainer:{
        flex:1,
        // position:'absolute',
        // top:0,
        // left:0,
        // right:0,
        // bottom:0,
        // zIndex:100
        zIndex:-1
      
    },
    titleFontStyle:{
        fontSize:font.size.font24,
        fontFamily:font.type.latoSemiBold,
        color:colors.black,
        textAlign:'center',
        marginTop:metrics.changeByMobileDPI(15),
        // marginBottom:metrics.changeByMobileDPI(20),
    },

    subTitleFontStyle:{
        fontSize:font.size.font14,
        fontFamily:font.type.quicksandMedium,
        color:colors.graySolid,
        textAlign:'center',
        marginBottom:metrics.changeByMobileDPI(20),
        marginHorizontal:metrics.changeByMobileDPI(20)
    },
    infoFontStyle:{
        fontSize:font.size.font14,
        fontFamily:font.type.quicksandRegular,
        color:colors.black,
        marginBottom:metrics.changeByMobileDPI(40),
        marginHorizontal:metrics.changeByMobileDPI(20)
    },
    guidenceFontStyleButLinkcolor:{
        fontSize:font.size.font12,
        fontFamily:font.type.quicksandMedium,
        color:colors.linkBlue ,
    },
    guidenceFontStyle:{
        fontSize:font.size.font12,
        fontFamily:font.type.quicksandMedium,
        color:colors.graySolid,
        textAlign:'center'
    },
    extrenalStyle:{
        marginVertical:metrics.changeByMobileDPI(20),
        marginHorizontal:metrics.changeByMobileDPI(35)
    },
    svgContainer:{
        alignItems:'center'
      },
      topicFontStyle:{
        fontSize:font.size.font20,
        fontFamily:font.type.quicksandMedium,
        color:colors.black, 
        marginHorizontal:metrics.changeByMobileDPI(20),
        marginBottom:metrics.changeByMobileDPI(20)
    },
    leftContainerExternalStyle:{
       flex:1,
       marginRight:-10
    },
    rightContainerExternalMainStyle:{
        marginLeft:metrics.changeByMobileDPI(0)
    },
    rightContainerExternalMainStyle1:{
        marginLeft:metrics.changeByMobileDPI(10)
    },
    leftContainerExternalMainStyle:{
        justifyContent:"space-between"
    },
    extraContainerExternalMainStyle:{
        width:metrics.changeByMobileDPI(69),
        paddingHorizontal:0
    },
    extrenalStyle1:{
          marginHorizontal:metrics.changeByMobileDPI(35),
          marginBottom:metrics.changeByMobileDPI(10)
      },
      termAndConditionContianer:{
        marginHorizontal:metrics.changeByMobileDPI(20),
        marginBottom:metrics.changeByMobileDPI(20)
    },
    textFontsStyle:{
        fontSize:font.size.font25,
        fontFamily:font.type.latoBold
    },
    gridentConatiner:{
        height: metrics.changeByMobileDPI(45),
        width:metrics.screenWidth / 2.4,
        overflow:'hidden',
        borderRadius: metrics.changeByMobileDPI(15),
      },
      topTabFontStyle:{
        fontSize:font.size.font12,
        fontFamily:font.type.latoSemiBold,
        color:colors.white, 
      },
      contentContainerStyle:{
       marginVertical:metrics.changeByMobileDPI(30),
       flex:1,
       justifyContent:'center'
      },
      imageMainContainer:{
        marginRight:metrics.changeByMobileDPI(10)
      },
      alignmentContainer:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        // backgroundColor:'red'
      },
      marginRightContainer:{
        marginRight:0,
      },
      errorStyle:{
        fontSize: font.size.font12,
        fontFamily: font.type.quicksandMedium,
        color: colors.tomatoRed,
        marginLeft:metrics.changeByMobileDPI(7),
    },
    flexRowContainer:{
        flexDirection:'row',
        alignItems:'center',
  justifyContent:'center'
    },
    educationLevelFontStyle:{
        fontSize:font.size.font16,
        fontFamily:font.type.quicksandMedium,
        color:colors.gray_75, 
    },
    educationLevelContainer:{
        marginHorizontal:metrics.changeByMobileDPI(20),
        // marginBottom:metrics.changeByMobileDPI(30)
    },
    marginBottomContainer:{
        marginBottom:metrics.changeByMobileDPI(30)
    }
})
