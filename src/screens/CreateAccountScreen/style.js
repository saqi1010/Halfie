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
    },
    createAccountFontStyle:{
        fontSize:font.size.font24,
        fontFamily:font.type.latoSemiBold,
        color:colors.black,
        textAlign:'center',
        marginBottom:metrics.changeByMobileDPI(20)
    },
    createAccountDescriptionFontStyle:{
        fontSize:font.size.font12,
        fontFamily:font.type.quicksandMedium,
        color:colors.graySolid,
        textAlign:'center'
    },
    termsAndConditionFontStyle:{
        fontSize:font.size.font12,
        fontFamily:font.type.quicksandMedium,
        color:colors.graySolid,
        textAlign:'center',
        marginTop:metrics.changeByMobileDPI(20)
    },
    termsAndConditionFontStyleWithBlueColor:{
        fontSize:font.size.font12,
        fontFamily:font.type.quicksandMedium,
        color:colors.linkBlue,
    },
    buttonContainer:{
        borderRadius:metrics.changeByMobileDPI(10),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.white,
        flex:1
        // height:metrics.changeByMobileDPI(44.10),
        // width:metrics.screenWidth - 80,

    },
    svgContainer:{
        // marginRight:metrics.changeByMobileDPI(20)
    },
    buttonFontStyle:{
        fontSize:font.size.font16,
        fontFamily:font.type.quicksandRegular,
        color:colors.black,
    },
    flexRowContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:metrics.changeByMobileDPI(20)
    },
    alreadyAccountFontStyle:{
        fontSize:font.size.font14,
        fontFamily:font.type.quicksandMedium,
        color:colors.black,
    },
    loginFontStyle:{
        fontSize:font.size.font14,
        fontFamily:font.type.quicksandMedium,
        color:colors.linkBlue,
    },
    centerContainer:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    marginContainer:{
        marginHorizontal:metrics.changeByMobileDPI(20),
        width:metrics.screenWidth - 40
    },
    gridentContainer:{ height: metrics.changeByMobileDPI(47), marginHorizontal: metrics.changeByMobileDPI(35), marginTop: metrics.changeByMobileDPI(20), },
    buttonMainContainer:{
        width:metrics.screenWidth - 0
    },
    flexContainer:{
        alignItems:'center'
    },
    widthContainer:{
        width:metrics.changeByMobileDPI(200),
        alignItems:'center',
    },
    removeStyle:{
        borderWidth:0
    }
})
