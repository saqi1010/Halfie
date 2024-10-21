import { StyleSheet } from "react-native";
import metrics from "../../theme/metrics";
import font from "../../theme/font";
import colors from "../../theme/color";

export const styles = StyleSheet.create({
    appFontStyle: {
        fontSize: font.size.font24,
        fontFamily: font.type.montserratSemiBold,
        color: colors.black,
        includeFontPadding: false,
        top: metrics.changeByMobileDPI(-15)
    },
    imageContianer: {
        height: metrics.changeByMobileDPI(332),
        width: metrics.screenWidth,
        borderTopLeftRadius: metrics.changeByMobileDPI(10),
        borderTopRightRadius: metrics.changeByMobileDPI(10),
        overflow: 'hidden'
    },
    imageStyle: {
        height: '100%',
        width: '100%'
    },
    mainContainer: {
        flex: 1
    },
    dotsStyle: {
        height: metrics.changeByMobileDPI(7),
        width: metrics.changeByMobileDPI(7),
        borderRadius: metrics.changeByMobileDPI(100),
        marginLeft: metrics.changeByMobileDPI(5)
    },
    alginItemCenter: {
        alignItems: 'center',
        marginTop: metrics.changeByMobileDPI(20)
    },
    marginTopContianer: {
        marginTop: metrics.changeByMobileDPI(15)
    },


    titleFontStyle: {
        fontSize: font.size.font24,
        fontFamily: font.type.quicksandRegular,
        color: colors.black,
        alignSelf: 'center'
    },
    attendingFontStyle: {
        fontSize: font.size.font12,
        fontFamily: font.type.quicksandRegular,
        color: colors.graySolid,
    },
    dateFontStyle: {
        fontSize: font.size.font12,
        fontFamily: font.type.quicksandRegular,
        color: colors.graySolid,
    },
    headingSectionContianer: {
        marginHorizontal: metrics.changeByMobileDPI(50),
        marginTop: metrics.changeByMobileDPI(10)
    },
    flexDirectionContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingHorizontal: metrics.changeByMobileDPI(20)
    },
    alignmentCenter: {
        alignItems: 'center'
    },
    marginTopContainer: {
        marginTop: metrics.changeByMobileDPI(20),
        marginVertical: metrics.changeByMobileDPI(15),

    },
    extrenalStyle: {
        marginHorizontal: metrics.changeByMobileDPI(0)
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: metrics.changeByMobileDPI(20),
        marginVertical: metrics.changeByMobileDPI(20)
    },
    sectionFontStyle: {
        fontSize: font.size.font20,
        color: colors.black,
        fontFamily: font.type.quicksandBold,
        textAlign: 'center'
    },

    descriptionFontStyle: {
        fontSize: font.size.font12,
        color: colors.graySolid,
        fontFamily: font.type.quicksandRegular,

    },
    titleFontStyle1: {
        fontSize: font.size.font15,
        color: colors.black,
        fontFamily: font.type.quicksandMedium,
        marginBottom: metrics.changeByMobileDPI(7)

    },
    searchContainer1:{
      
        flexDirection:'row',
        alignItems:'flex-start',
        marginVertical:metrics.changeByMobileDPI(15),
    },
    positionContainer:{
        position:'absolute',
        top:50,
        left:0,
        right:0,
        zIndex:100,
    },
    contentContainerStyle:{
        maxHeight:metrics.changeByMobileDPI(400),
        backgroundColor:colors.white,
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
      imageStyle1: {
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
      profileImageContainer:{
        height:metrics.changeByMobileDPI(50),
        width:metrics.changeByMobileDPI(50),
        borderRadius:metrics.changeByMobileDPI(7)
      },
      profileImageContainer1:{
        height:metrics.changeByMobileDPI(50),
        width:metrics.changeByMobileDPI(50),
        borderRadius:metrics.changeByMobileDPI(7),
        backgroundColor:'red',
        overflow:'hidden'
      },
      flexContainer:{
        marginLeft:metrics.changeByMobileDPI(10),
        flex:1
      },
      flexRowContainer:{
        flexDirection:'row',
        // alignItems:'center'
      },
      buttonContainer:{
        height:metrics.changeByMobileDPI(35),
        width:metrics.changeByMobileDPI(60),
        borderWidth:1,
        borderRadius:metrics.changeByMobileDPI(100),
        alignItems:'center',
        justifyContent:"center"
      },
      lineContainer: {
        width: '100%',
      },
      marginHorizontalContainer:{
     },
     mainGridContainer:{
        backgroundColor:colors.white,
        borderRadius:metrics.changeByMobileDPI(7),
        paddingHorizontal:metrics.changeByMobileDPI(10),
        marginBottom:metrics.changeByMobileDPI(10)

     },
     circleStyle:{
        height:metrics.changeByMobileDPI(19),
        width:metrics.changeByMobileDPI(19),
        borderRadius:metrics.changeByMobileDPI(100),
        backgroundColor:colors.primary
     },
     positionCircleContainer:{
        // position:'absolute',
        // top:metrics.changeByMobileDPI(10),
        // left:metrics.changeByMobileDPI(40),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
     },
     externalText:{
        fontSize:metrics.changeByMobileDPI(14),
        fontFamily:font.type.quicksandMedium,
        color:colors.black
     }
})
