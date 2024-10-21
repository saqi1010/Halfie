import { StyleSheet } from "react-native";
import metrics from "../../theme/metrics";
import font from "../../theme/font";
import colors from "../../theme/color";

export const styles = StyleSheet.create({
    searchContainer:{
  flexDirection:'row',
  alignItems:'center',
//   justifyContent:'center',
marginHorizontal:metrics.changeByMobileDPI(20),
  marginVertical:metrics.changeByMobileDPI(20)
    },
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
    },
    titleFontStyle:{
        fontSize:font.size.font24,
        fontFamily:font.type.latoSemiBold,
        color:colors.black,
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
        fontSize:font.size.font14,
        fontFamily:font.type.quicksandRegular,
        color:colors.black,
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
        width:metrics.screenWidth - 70,
        marginVertical:metrics.changeByMobileDPI(20),
        marginHorizontal:metrics.changeByMobileDPI(30)
    },
    welcomeYouFontStyle:{
        fontSize:font.size.font14,
        fontFamily:font.type.latoSemiBold,
        color:colors.black,
        textAlign:'center',
        marginBottom:metrics.changeByMobileDPI(20),
    },
    centerContainer:{
        marginHorizontal:metrics.changeByMobileDPI(20)
    },
    marginLeftContainer:{
        marginLeft:metrics.changeByMobileDPI(10)
    },
    marginContainer:{
        paddingLeft:metrics.changeByMobileDPI(30)
    },
    eventContainer:{
        marginVertical:metrics.changeByMobileDPI(20)
    },
    marginSerivceContainer:{
        marginLeft:metrics.changeByMobileDPI(30),
        marginBottom:metrics.changeByMobileDPI(50)
    },
    servicesContainer:{
        marginTop:metrics.changeByMobileDPI(20)
    }
})
