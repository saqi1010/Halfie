import { StyleSheet } from "react-native";
import metrics from "../../theme/metrics";
import font from "../../theme/font";
import colors from "../../theme/color";

export const styles = StyleSheet.create({
    searchContainer:{
  flexDirection:'row',
  alignItems:'center',
//   justifyContent:'center',
marginHorizontal:metrics.changeByMobileDPI(15),
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
    },
    marginBottomContainer:{
        marginBottom:metrics.changeByMobileDPI(30)
    },
    searchMainContainer: {
        marginHorizontal: metrics.changeByMobileDPI(20)
      },
      currencyFontStyle: {
        fontSize: font.size.font10,
        fontFamily: font.type.quicksandMedium,
        color: colors.black,
      },
      listingContianer: {
        height: metrics.changeByMobileDPI(30),
        backgroundColor: colors.white,
        paddingHorizontal: metrics.changeByMobileDPI(15),
        justifyContent: 'center'
    
      },
      contentContainerStyle: {
      },
      removeBottomBorderRadius: {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
      },
      borderBottomRadiusContainer: {
        borderBottomRightRadius: metrics.changeByMobileDPI(10),
        borderBottomLeftRadius: metrics.changeByMobileDPI(10),
      },
      listingContainer:{
        zIndex:100,
        position:'absolute',
        top:metrics.changeByMobileDPI(55),
        left:0,
        right:0
      },
      filterFontStyle: {
        fontSize: font.size.font14,
        fontFamily: font.type.latoBold,
        color: colors.graySolid,
        marginLeft: metrics.changeByMobileDPI(10),
        marginBottom: metrics.changeByMobileDPI(15)
      },
      searchFontStyle: {
        fontSize: font.size.font10,
        fontFamily: font.type.quicksandMedium,
        color: colors.graySolid,
        includeFontPadding: false
      },
      attendanceContainer: {
        borderRadius: metrics.changeByMobileDPI(10),
        backgroundColor: colors.white,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        paddingVertical: metrics.changeByMobileDPI(6),
        marginBottom: metrics.changeByMobileDPI(10)
      },
      imageStyle: {
        height: metrics.changeByMobileDPI(20),
        width: metrics.changeByMobileDPI(20),
        borderRadius: metrics.changeByMobileDPI(100)
      },
      nameFontStyle: {
        fontSize: font.size.font12,
        fontFamily: font.type.montserratMedium,
        color: colors.graySolid,
        marginLeft: metrics.changeByMobileDPI(10)
      },
      iconFontStyle:{
        fontSize: font.size.font12,
        fontFamily: font.type.montserratMedium,
        color: colors.black,
        marginLeft: metrics.changeByMobileDPI(10)
      },
})
