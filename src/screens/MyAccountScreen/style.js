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
      width:metrics.screenWidth

    },
    relationTitleFontStyle:{
        fontSize:font.size.font24,
        fontFamily:font.type.latoSemiBold,
        color:colors.black + 99,
        textAlign:'center',
        marginBottom:metrics.changeByMobileDPI(20),
    },
    titleFontStyle:{
        fontSize:font.size.font24,
        fontFamily:font.type.latoSemiBold,
        color:colors.black,
        textAlign:'center',
        marginBottom:metrics.changeByMobileDPI(20),
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
        marginBottom:metrics.changeByMobileDPI(20),
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
    aedFontStyle:{
        fontSize:font.size.font20,
        fontFamily:font.type.quicksandBold,
        color:colors.black,
        textAlign:'center',
        marginBottom:metrics.changeByMobileDPI(10),
        textShadowColor: 'rgba(0, 0, 0, 0.45)',
        textShadowOffset: {width: -1, height: 2},
        textShadowRadius: 7
    },
    aedDescFontStyle:{
        fontSize:font.size.font10,
        fontFamily:font.type.quicksandBold,
        color:colors.graySolid,
        textAlign:'center'
    },
    extrenalStyle:{
      marginTop:metrics.changeByMobileDPI(20),
        marginVertical:metrics.changeByMobileDPI(10),
       width:metrics.changeByMobileDPI(132),
       alignSelf:'center',
       borderRadius:metrics.changeByMobileDPI(13)
    },
    termAndConditionContianer:{
        marginHorizontal:metrics.changeByMobileDPI(20),
        marginBottom:metrics.changeByMobileDPI(20)
    },
    textFontsStyle:{
        fontSize:font.size.font25,
        fontFamily:font.type.latoBold
    },
    positionContainer:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        zIndex:100,
    },
    webview:{
        flex:1
    },
    svgContainer:{
        alignItems:'center',
      },
      svgImageContainer:{
        alignItems:'center',
        marginTop:metrics.changeByMobileDPI(20),
        marginBottom:metrics.changeByMobileDPI(30),
      },
      header: {
        backgroundColor: '#fff',
        flex:1,
        marginTop:metrics.changeByMobileDPI(7)
      },
      headerText: {
        fontSize: 16,
        color: '#666',
      },
      selected: {
        backgroundColor: '#FFD700',
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 5,
        color: '#fff',
      },
      option: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
      },
      optionText: {
        marginLeft: 10,
        fontSize: 16,
      },
      footer: {
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#f8f8f8',
      },
      footerText: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      headerMainContainer:{
backgroundColor:colors.white,
flex:1,
borderRadius: metrics.changeByMobileDPI(15),
justifyContent:'center'
      },
      headerFontStyle:{
        fontSize:font.size.font10,
        fontFamily:font.type.latoBold,
        color:colors.graySolid,
      },
      gridentConatiner:{
        height: metrics.changeByMobileDPI(60),
        overflow:'hidden',
        borderRadius: metrics.changeByMobileDPI(15),
        marginHorizontal:20
      },
      gridentButtonStyle:{
        height:metrics.changeByMobileDPI(45),

      },
      centerAlignmentContainer:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
      },
      contentContainerStyle:{
        paddingHorizontal:metrics.changeByMobileDPI(10),
      },
      optionContainer:{
        // flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:metrics.changeByMobileDPI(10)
        // justifyContent:'center'
      },
      svgContainer1:{
        height:metrics.changeByMobileDPI(40),
        width:metrics.changeByMobileDPI(40),
        alignItems:'center',
        justifyContent:'center',
      },
      profileFontStyle:{
        fontSize:font.size.font14,
        fontFamily:font.type.quicksandRegular,
        color:colors.black,
      },
      flexContainer:{
      },
      centerContainer:{
        alignItems:'center',
        marginTop:metrics.changeByMobileDPI(20)
      },
      marginRightContainer:{
        marginRight:metrics.changeByMobileDPI(15)
      },
      marginRightLessContainer:{
        marginRight:metrics.changeByMobileDPI(10)

      },
      fullScreenWidthStyle:{
        width:metrics.screenWidth,
        alignItems:'center',
      },
      indicatorContainer:{
      },
      rowContainer:{
          flexDirection:'row',
          justifyContent:'center',
          marginVertical:metrics.changeByMobileDPI(5)
      },
      dotsStyle:{
        height:metrics.changeByMobileDPI(7),
        width:metrics.changeByMobileDPI(7),
        borderRadius:metrics.changeByMobileDPI(100),
        marginLeft:metrics.changeByMobileDPI(5)
    },
    subcriptionImageContainer:{
      height:metrics.changeByMobileDPI(72),
      width:metrics.changeByMobileDPI(72),
    },
    receiptFontStyle:{
      fontSize:font.size.font16,
      fontFamily:font.type.quicksandRegular,
      color:colors.black,
      marginBottom:metrics.changeByMobileDPI(20)
    },
    leftFontStyle:{
      fontSize:font.size.font11,
      fontFamily:font.type.quicksandBold,
      color:colors.graySolid,
    },
    rightFontStyle:{
      fontSize:font.size.font11,
      fontFamily:font.type.quicksandRegular,
      color:colors.graySolid,
    },
    receiptContainer:{
      marginHorizontal:metrics.changeByMobileDPI(20)
    },
    flexDirectionContainer:{
      flexDirection:'row',
      marginBottom:metrics.changeByMobileDPI(10)
    },
    flex:{
      flex:1
    }
})
