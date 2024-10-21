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

    },
    titleFontStyle:{
        fontSize:font.size.font24,
        fontFamily:font.type.latoSemiBold,
        color:colors.black,
        textAlign:'center',
        marginTop:metrics.changeByMobileDPI(15),
        marginBottom:metrics.changeByMobileDPI(10),
    },
    subTitleFontStyle:{
        fontSize:font.size.font20,
        fontFamily:font.type.quicksandMedium,
        color:colors.black,
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
      contentContainerStyle:{
        marginHorizontal:metrics.changeByMobileDPI(20),
        paddingVertical:metrics.changeByMobileDPI(20)
      },
      extrenalStyle1:{
        marginHorizontal:metrics.changeByMobileDPI(35),
        marginBottom:metrics.changeByMobileDPI(10),
        marginTop:metrics.changeByMobileDPI(10)
    },
    warningFontStyle:{
        fontSize:font.size.font14,
        fontFamily:font.type.montserratBold,
        color:colors.warningColor,
        marginTop:metrics.changeByMobileDPI(20),
        lineHeight:metrics.changeByMobileDPI(25)
    },
    warningContainer:{
        backgroundColor:'#FFF7C8',
        borderRadius:metrics.changeByMobileDPI(50),
        padding:metrics.changeByMobileDPI(10),
        paddingHorizontal:metrics.changeByMobileDPI(20),
        paddingBottom:metrics.changeByMobileDPI(20),
        alignItems:'center',
        marginHorizontal:metrics.changeByMobileDPI(20),
        marginVertical:metrics.changeByMobileDPI(20)
    }
})
