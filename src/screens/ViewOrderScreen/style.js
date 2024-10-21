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
        alignItems: 'center',
        flex:1
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
        marginLeft: metrics.changeByMobileDPI(15),
        flex:1,
        marginRight:metrics.changeByMobileDPI(10)
    },
    extrenalStyle1:{
    },
    externalGridentStyle:{
  borderRadius:metrics.changeByMobileDPI(13),
  paddingHorizontal:metrics.changeByMobileDPI(10)
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
      }

})
