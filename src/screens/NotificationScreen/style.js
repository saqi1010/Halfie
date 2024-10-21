import { StyleSheet } from "react-native";
import metrics from "../../theme/metrics";
import font from "../../theme/font";
import colors from "../../theme/color";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white
    },
    subContainer: {
        flex: 1,
    },
    contentContainerStyle: {
        paddingHorizontal: metrics.changeByMobileDPI(20),
        marginTop: metrics.changeByMobileDPI(30)
    },

    feedBackFontStyle: {
        fontSize: font.size.font14,
        fontFamily: font.type.quicksandRegular,
        color: colors.black,
    },
    dateFontStyle: {
        fontSize: font.size.font14,
        fontFamily: font.type.quicksandBold,
        color: colors.black,
      marginBottom:metrics.changeByMobileDPI(20),
    },
    titleFontStyle: {
        fontSize: font.size.font14,
        fontFamily: font.type.quicksandRegular,
        color: colors.black,
    },
    descriptionFontStyle: {
        fontSize: font.size.font12,
        fontFamily: font.type.quicksandMedium,
        color: colors.graySolid,
    },
    viewOrderMarginTopContainer: {
    },
    flexDirectionContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewOrderImageContianer: {
        height: metrics.changeByMobileDPI(45),
        width: metrics.changeByMobileDPI(45),
        borderRadius: 5,
        overflow:'hidden'
    },
    imageStyle: {
        height: '100%',
        width: '100%',
    },
    marginLeftContainer: {
        marginLeft: metrics.changeByMobileDPI(15)
    },
    extrenalStyle1:{
        width:metrics.changeByMobileDPI(110),
    },
    externalGridentStyle:{
  borderRadius:metrics.changeByMobileDPI(15),
    },
    viewOrderContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginBottom:metrics.changeByMobileDPI(20)
    },
    searchContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:metrics.changeByMobileDPI(20),
        marginTop:metrics.changeByMobileDPI(30)
      },
      searchSubContianer:{
        height:metrics.changeByMobileDPI(48.94),
        borderRadius:metrics.changeByMobileDPI(8),
        backgroundColor:colors.lightGrayBgColor,
        flexDirection:'row',
        alignItems:'center',
        flex:1,
        marginHorizontal:metrics.changeByMobileDPI(10)
      },
      inputStyle:{
        fontSize:font.size.font14,
        fontFamily:font.type.montserratRegular,
        color:colors.black,
      },
      inputContainer:{
        flex:1
      },
      marginContainer:{
        marginHorizontal:metrics.changeByMobileDPI(10)
      },
      marginLeftContianer:{
        marginLeft:metrics.changeByMobileDPI(5)
      },
      mainGridContainer:{
        backgroundColor:colors.white,
        borderRadius:metrics.changeByMobileDPI(7),
     },
     searchContainer1:{
      flexDirection:'row',
      alignItems:'flex-start',
      marginTop:metrics.changeByMobileDPI(25),
      marginHorizontal:metrics.changeByMobileDPI(20),
  },
  flexRowContainer:{
    flexDirection:'row',
  },
  rightMarginContainer:{
  },
  profileImageContainer:{
    height:metrics.changeByMobileDPI(24),
    width:metrics.changeByMobileDPI(24),
    borderRadius:metrics.changeByMobileDPI(100)
  },
  flexContainer:{
    marginLeft:metrics.changeByMobileDPI(10),
    flex:1
  },
  titleFontStyle1: {
    fontSize: font.size.font14,
    color: colors.black,
    fontFamily: font.type.quicksandMedium,
    marginBottom: metrics.changeByMobileDPI(11)

},
lineContainer: {
  width: '100%',
  height:1,
  backgroundColor:colors.lightGray,
  marginHorizontal:metrics.changeByMobileDPI(4)
},
receiveFontStyle:{
  fontSize: font.size.font11,
  color: colors.graySolid,
  fontFamily: font.type.quicksandMedium,  
  textAlign:'right',
  marginRight:metrics.changeByMobileDPI(10),
  marginVertical:metrics.changeByMobileDPI(10)
}
})
