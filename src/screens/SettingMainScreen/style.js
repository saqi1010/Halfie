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
    mainSettingCardContainer: {
        height: metrics.screenWidth / 3.6,
        width: metrics.screenWidth / 3.6,
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginRight:metrics.changeByMobileDPI(10),
        marginVertical:metrics.changeByMobileDPI(10),
        alignItems:'center',
        justifyContent:'center',
        borderRadius:metrics.changeByMobileDPI(7),
        marginBottom:metrics.changeByMobileDPI(30)
    },
    contentContainerStyle:{
        paddingHorizontal:metrics.changeByMobileDPI(20),
        marginTop:metrics.changeByMobileDPI(30)
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
    }
})
