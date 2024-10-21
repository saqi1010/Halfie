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
    onBordingContainer:{
        flex:1
    },
    imageStyle:{
        height:'80%',
        width:'100%'
    },
    flexContainer:{
        flex:1,
        paddingHorizontal:metrics.changeByMobileDPI(20)
    },
    titleFontStyle:{
        fontSize:font.size.font24,
        fontFamily:font.type.latoSemiBold,
        color:colors.black,
        marginBottom:metrics.changeByMobileDPI(25)
    },
    descriptionFontStyle:{
        fontSize:font.size.font12,
        fontFamily:font.type.montserratMedium,
        color:colors.graySolid,
        textAlign:'center',
        lineHeight:metrics.changeByMobileDPI(16)
    },
    centerAlignContainer:{
        alignItems:'center'
    },
    sliderContainer:{
        width:metrics.screenWidth,
    },
    footerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:metrics.changeByMobileDPI(30),
        paddingVertical:metrics.changeByMobileDPI(15)
    },
    skipFontStyle:{
        fontSize:font.size.font14,
        fontFamily:font.type.montserratSemiBold,
        color:colors.black,
    },
    nextFontStyle:{
        fontSize:font.size.font14,
        fontFamily:font.type.montserratSemiBold,
        color:colors.black,
    },
    dotsStyle:{
        height:metrics.changeByMobileDPI(7),
        width:metrics.changeByMobileDPI(7),
        borderRadius:metrics.changeByMobileDPI(100),
        // backgroundColor:'red',
        marginLeft:metrics.changeByMobileDPI(5)
    },
    indicatorContainer:{
    },
    rowContainer:{
        flexDirection:'row',
        justifyContent:'center'
    },
    positionContainer:{
        position:'absolute',
        bottom:metrics.changeByMobileDPI(100),
        alignSelf:'center'
    },
    positionContainer2:{
        position:'absolute',
        bottom:metrics.changeByMobileDPI(50),
        alignSelf:'center'
    },
    marginContainer:{
        marginBottom:metrics.changeByMobileDPI(15)
    },
    externalStyle:{
        width:metrics.screenWidth - 90
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlayContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: metrics.changeByMobileDPI(20),
        alignItems: 'center'
    }
});
