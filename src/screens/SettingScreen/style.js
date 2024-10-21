import { StyleSheet } from "react-native";
import metrics from "../../theme/metrics";
import font from "../../theme/font";
import colors from "../../theme/color";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white
    },
    alignCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    appFontStyle: {
        fontSize: font.size.font24,
        fontFamily: font.type.montserratSemiBold,
        color: colors.black,
        includeFontPadding: false,
        top: metrics.changeByMobileDPI(-15)
    },
    appIconStyle: {
        top: metrics.changeByMobileDPI(15)
    },
    subContainer: {
        flex: 1,
    },
    titleFontStyle: {
        fontSize: font.size.font13,
        fontFamily: font.type.quicksandMedium,
        color: colors.black,
    },
    subTitleFontStyle: {
        fontSize: font.size.font12,
        fontFamily: font.type.quicksandMedium,
        color: colors.graySolid,
        textAlign: 'center',
        marginBottom: metrics.changeByMobileDPI(20),
        marginHorizontal: metrics.changeByMobileDPI(20)
    },
    infoFontStyle: {
        fontSize: font.size.font14,
        fontFamily: font.type.quicksandRegular,
        color: colors.black,
        textAlign: 'center',
        marginBottom: metrics.changeByMobileDPI(30),
        marginHorizontal: metrics.changeByMobileDPI(20)
    },
    guidenceFontStyleButLinkcolor: {
        fontSize: font.size.font12,
        fontFamily: font.type.quicksandMedium,
        color: colors.linkBlue,
        textAlign: 'center',

    },
    guidenceFontStyle: {
        fontSize: font.size.font12,
        fontFamily: font.type.quicksandMedium,
        color: colors.graySolid,
        textAlign: 'center'
    },
    extrenalStyle: {
        marginVertical: metrics.changeByMobileDPI(20),
        marginHorizontal: metrics.changeByMobileDPI(30)
    },
    logOutextrenalStyle: {
        marginHorizontal: metrics.changeByMobileDPI(30)
    },
    welcomeYouFontStyle: {
        fontSize: font.size.font14,
        fontFamily: font.type.latoSemiBold,
        color: colors.black,
        textAlign: 'center',
        marginBottom: metrics.changeByMobileDPI(20),
    },
    centerContainer: {
        flexDirection:'row',
        alignItems:'center',
        marginVertical:metrics.changeByMobileDPI(30)
    },

    joinFontStyle:{
        fontSize: font.size.font14,
        fontFamily: font.type.quicksandBold,
        color: colors.black, 
        marginBottom:metrics.changeByMobileDPI(30)
    },
    flexDirectionContainer:{
        flexDirection:'row',
        alignItems:'center',
  justifyContent:'center'
    },
    marginContainerRight:{
        marginRight:metrics.changeByMobileDPI(25)
    },
    joinOurCommunityContainer:{
        marginHorizontal:metrics.changeByMobileDPI(30)
    },
    externalFontStyle1:{
        fontSize: font.size.font14,
        fontFamily: font.type.latoSemiBold,
        color: colors.graySolid,   
    },
    settingTitleFontStyle:{
        fontSize: font.size.font13,
        fontFamily: font.type.quicksandMedium,
        color: colors.black,    
    },
    settingDescriptionFontStyle:{
        fontSize: font.size.font13,
        fontFamily: font.type.quicksandMedium,
        color: colors.gray_75,    
        marginTop:metrics.changeByMobileDPI(10)
    },
    flexRowContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:metrics.changeByMobileDPI(20),
        marginBottom:metrics.changeByMobileDPI(30)
    },
    flexContainer:{
        flex:1,
        marginRight:metrics.changeByMobileDPI(20)
    },
    grayFontStyle:{
        fontSize: font.size.font11,
        fontFamily: font.type.quicksandMedium,
        color: colors.textTertiary,   
        includeFontPadding:false 
    },
    buttonContainer:{
        height:metrics.changeByMobileDPI(34),
        borderRadius:metrics.changeByMobileDPI(10),
        backgroundColor:colors.graySolid + 40,
        paddingHorizontal:metrics.changeByMobileDPI(15),
        justifyContent:'center'
    },
    marginTopContainer:{
        marginTop:metrics.changeByMobileDPI(30)
    }
})
