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
        fontSize:font.size.font14,
        fontFamily:font.type.quicksandMedium,
        color:colors.linkBlue ,
        textAlign:'center',

    },
    guidenceFontStyle:{
        fontSize:font.size.font14,
        fontFamily:font.type.quicksandMedium,
        color:colors.graySolid,
    },
    extrenalStyle:{
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
        marginHorizontal:metrics.changeByMobileDPI(20),
        marginBottom:metrics.changeByMobileDPI(20)
    },
    instructionContainer:{
        marginHorizontal:metrics.changeByMobileDPI(20)
    },
    instructionFontStyle:{
        fontSize:font.size.font14,
        fontFamily:font.type.quicksandBold,
        color:colors.black,
    },
    instructionDetailFontStyle:{
        fontSize:font.size.font14,
        fontFamily:font.type.quicksandMedium,
        color:colors.black,  
    },
    marginContianer:{
        marginHorizontal:metrics.changeByMobileDPI(10),
        marginBottom:metrics.changeByMobileDPI(2)
    },
    /////
    indicator: {
        width: metrics.changeByMobileDPI(7),
        height: metrics.changeByMobileDPI(7),
        borderRadius: metrics.changeByMobileDPI(100),
        backgroundColor: colors.borderColor,
        marginHorizontal: metrics.changeByMobileDPI(3),
    },
    gradientDotsStyle: {
        height: metrics.changeByMobileDPI(7),
        width: metrics.changeByMobileDPI(7),
        borderRadius: metrics.changeByMobileDPI(100),
        marginHorizontal: metrics.changeByMobileDPI(3),
    },
    gridentConatiner: {
        height: metrics.changeByMobileDPI(198),
        width: metrics.screenWidth - 50,
        overflow: 'hidden',
        marginHorizontal:metrics.changeByMobileDPI(20),
        marginVertical:metrics.changeByMobileDPI(20),
    },
    gridentConatiner1: {
        flex:1,
        height: metrics.changeByMobileDPI(145),
        overflow: 'hidden',
        marginVertical:metrics.changeByMobileDPI(20),
        marginHorizontal:metrics.changeByMobileDPI(10)
    },
    addImageContainer: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius:metrics.changeByMobileDPI(20),
        borderWidth: 1,
        borderColor: colors.secondary,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
    },
    positionContainer: {
        position: 'absolute',
        bottom: metrics.changeByMobileDPI(10),
        right: metrics.changeByMobileDPI(10),
    },
    imageContainer: {
        height: metrics.changeByMobileDPI(198),
        width: metrics.screenWidth / 2.4,
        overflow: 'hidden',
    },
    flexDirectionContainer:{
        flexDirection:'row',
        alignItems:'center',
        flex:1,
        marginHorizontal:metrics.changeByMobileDPI(10),
        marginVertical:metrics.changeByMobileDPI(20),
    },
    flexDirectionContainer1:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:metrics.changeByMobileDPI(30),
        marginVertical:metrics.changeByMobileDPI(20)
    },
    flexContainer:{
        flex:1
    },
    externalFontStyle:{
        fontSize:font.size.font14,
        fontFamily:font.type.latoRegular,
        color:colors.black,
    },
    externalContainer:{
        backgroundColor:colors.borderColor,
    },
    extrenalStyle1:{
        marginLeft:metrics.changeByMobileDPI(10)
    },
    extrenalStyle2:{

    },
    thumbnailStyle:{
        height:'100%',
        width:'100%'
    },
    warningFontStyle:{
        fontSize:font.size.font14,
        fontFamily:font.type.montserratBold,
        color:'#947D00', 
        marginTop:metrics.changeByMobileDPI(10),
        lineHeight:metrics.changeByMobileDPI(20),
        textAlign:'center'
    },
    warningContianer:{
        backgroundColor:'#FFF7C8',
        padding:metrics.changeByMobileDPI(7),
        alignItems:'center',
        borderRadius:metrics.changeByMobileDPI(50),
        marginHorizontal:metrics.changeByMobileDPI(20),
        paddingHorizontal:metrics.changeByMobileDPI(20),
        paddingBottom:metrics.changeByMobileDPI(20),
        marginBottom:metrics.changeByMobileDPI(20)
    },
    flexContainers:{
        flex:1
    },
    camera:{
        height:'100%',
        width:'100%'
    },
    addContianer:{
        position:'absolute',
        right:metrics.changeByMobileDPI(15),
        bottom:metrics.changeByMobileDPI(15),
    },
    extrenalRecordStyle:{
        marginHorizontal:metrics.changeByMobileDPI(40),
        marginBottom:metrics.changeByMobileDPI(10)
    },
    extrenalUploadVideoStyle:{
        width:metrics.changeByMobileDPI(138)
    },
    alignmentCenter:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    titleFontMarginBottomStyle:{
        fontSize:font.size.font24,
        fontFamily:font.type.latoSemiBold,
        color:colors.black,
        textAlign:'center',
        marginTop:metrics.changeByMobileDPI(70),
        marginBottom:metrics.changeByMobileDPI(20),
    },
    positionCotainer:{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        backgroundColor:colors.black,
        opacity:0.89,
        alignItems:'center',
        justifyContent:'center'
    },
    nameFontStyle:{
        fontSize:font.size.font26,
        fontFamily:font.type.latoSemiBold,
        color:colors.white,
        paddingHorizontal:metrics.changeByMobileDPI(30),
        textAlign:'center'
    },
    countFontStyle:{
        fontSize:metrics.changeByMobileDPI(75),
        fontFamily:font.type.quicksandBold,
        color:colors.white,
    },
    nameBigFontStyle:{
        fontSize:font.size.font35,
        fontFamily:font.type.latoSemiBold,
        color:colors.white,  
        lineHeight:metrics.changeByMobileDPI(37)
    }

})
