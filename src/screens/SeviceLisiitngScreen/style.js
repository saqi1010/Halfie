import { StyleSheet } from 'react-native';
import font from '../../theme/font';
import colors from '../../theme/color';
import metrics from '../../theme/metrics';

export const styles = StyleSheet.create({
  container:{
  marginLeft:metrics.changeByMobileDPI(10),
  paddingBottom:metrics.changeByMobileDPI(20),
  },
  gridentConatiner: {
    // padding: 16,
    marginRight:metrics.changeByMobileDPI(5),
    marginTop:metrics.changeByMobileDPI(15)
  },
  card: {
    flex:1,
    backgroundColor: '#fff',
    width:metrics.screenWidth / 1.9,
    overflow:'hidden',
    borderTopRightRadius:metrics.changeByMobileDPI(25),
    borderTopLeftRadius:metrics.changeByMobileDPI(25),
    borderBottomLeftRadius:metrics.changeByMobileDPI(5),
    borderBottomRightRadius:metrics.changeByMobileDPI(5),
    padding:metrics.changeByMobileDPI(10),
    borderWidth:1,
    borderColor:colors.borderColor,
    marginRight:metrics.changeByMobileDPI(10),
    marginBottom:metrics.changeByMobileDPI(10)

  },
  image: {
    height: metrics.changeByMobileDPI(218),
    borderTopRightRadius:metrics.changeByMobileDPI(20),
    borderTopLeftRadius:metrics.changeByMobileDPI(20),
  },
 
  ratingPriceContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:metrics.changeByMobileDPI(15),
    paddingHorizontal:metrics.changeByMobileDPI(10),
    justifyContent:'center'
  },
  rating: {
    fontSize:font.size.font11,
    color:colors.black,
    fontFamily:font.type.montserratMedium,
    marginLeft:metrics.changeByMobileDPI(10),
    marginRight:metrics.changeByMobileDPI(10)
  },
  price: {
    fontSize:font.size.font11,
    color:colors.black,
    fontFamily:font.type.montserratBold,
  },
  description: {
    fontSize:font.size.font10,
    color:colors.black,
    fontFamily:font.type.quicksandRegular,
    marginVertical:metrics.changeByMobileDPI(10),
    lineHeight:metrics.changeByMobileDPI(15),
    textAlign:'center'
  },
  button: {
    borderRadius: metrics.changeByMobileDPI(11),
    height:metrics.changeByMobileDPI(28),
    width:metrics.changeByMobileDPI(63),
    overflow: 'hidden',
    alignSelf:'center'
  },
  buttonGradient: {
    paddingVertical:metrics.changeByMobileDPI(6),
    alignItems: 'center',
  },
  buttonText: {
    fontSize:font.size.font14,
    color:colors.white,
    fontFamily:font.type.latoBold,
  },

  profileImageStyle:{
    height:metrics.changeByMobileDPI(24),
    width:metrics.changeByMobileDPI(24),
    borderRadius:metrics.changeByMobileDPI(100),
    marginRight:metrics.changeByMobileDPI(5)
  },
  name: {
 fontSize:font.size.font14,
 color:colors.black,
 fontFamily:font.type.quicksandBold,
 textAlign:'center'
  },
  flexDirectionContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:metrics.changeByMobileDPI(10),
    paddingHorizontal:metrics.changeByMobileDPI(10),
    alignSelf:'center'
  },
  flexContainer:{
    
    // flex:1,
    // alignItems:'flex-start'
  },
  rowContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  mainContainer:{
    flex:1,
    backgroundColor:colors.white
},
searchContainer:{
  flexDirection:'row',
  alignItems:'center',
marginHorizontal:metrics.changeByMobileDPI(20),
  marginVertical:metrics.changeByMobileDPI(20)
    },
    externalStyle:{
      justifyContent:'center',
      alignItems:'center',
      flex:1
    },
    
});
