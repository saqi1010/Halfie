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
    },
    titleFontStyle:{
        fontSize:font.size.font14,
        fontFamily:font.type.latoSemiBold,
        color:colors.white,
        textAlign:'center',
        marginTop:metrics.changeByMobileDPI(30),
        marginBottom:metrics.changeByMobileDPI(20),
    },
    subTitleFontStyle:{
        fontSize:font.size.font12,
        fontFamily:font.type.quicksandMedium,
        color:colors.graySolid,
        textAlign:'center',
        marginBottom:metrics.changeByMobileDPI(20),
        marginHorizontal:metrics.changeByMobileDPI(20)
    },
    infoFontStyle:{
        fontSize:font.size.font35,
        fontFamily:font.type.quicksandBold,
        color:colors.white,
        textAlign:'center',
        marginBottom:metrics.changeByMobileDPI(30),
        marginHorizontal:metrics.changeByMobileDPI(20)
    },
    guidenceFontStyleButLinkcolor:{
        fontSize:font.size.font12,
        fontFamily:font.type.quicksandMedium,
        color:colors.linkBlue ,
        textAlign:'center',

    },
    guidenceFontStyle:{
        fontSize:font.size.font12,
        fontFamily:font.type.quicksandMedium,
        color:colors.graySolid,
        textAlign:'center'
    },
    extrenalStyle:{
        marginVertical:metrics.changeByMobileDPI(20),
        marginHorizontal:metrics.changeByMobileDPI(30)
    },
    welcomeYouFontStyle:{
        fontSize:font.size.font14,
        fontFamily:font.type.latoSemiBold,
        color:colors.white,
        textAlign:'center',
        marginBottom:metrics.changeByMobileDPI(20),
    },
    centerContainer:{
        marginHorizontal:metrics.changeByMobileDPI(20)
    },
    walletContainer:{
    },
    gridentButtonStyle:{
    //  overflow:'hidden'
      },
      cardContainer:{
        marginHorizontal:metrics.changeByMobileDPI(20),
        marginTop:metrics.changeByMobileDPI(20),
        borderRadius:metrics.changeByMobileDPI(10),
        backgroundColor:colors.white,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
      },
      flexRowContianer:{
        flexDirection:'row',
        alignItems:'center',
        flex:1
      },
      marginLeftContianer:{
        marginLeft:metrics.changeByMobileDPI(10),
      },
      recentFontStyle:{
        fontSize:font.size.font16,
        fontFamily:font.type.quicksandBold,
        color:colors.black,
        marginVertical:metrics.changeByMobileDPI(10),
        marginHorizontal:metrics.changeByMobileDPI(20)
      },
      flexMainContianer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:metrics.changeByMobileDPI(10),
        marginHorizontal:metrics.changeByMobileDPI(20)
      },
      nameFontStyle:{
        fontSize:font.size.font14,
        fontFamily:font.type.quicksandMedium,
        color:colors.black,
      },
      descriptionFontStyle:{
        fontSize:font.size.font12,
        fontFamily:font.type.quicksandRegular,
        color:colors.black,
      },
      ammountFontStyle:{
        fontSize:font.size.font16,
        fontFamily:font.type.quicksandSemiBold,
        color:colors.black,
      }
})
