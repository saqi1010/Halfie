
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import screenName from '../../theme/screenName';
import { styles } from './style';
import MaleSvg from '../../assets/svg/MaleSvg.svg'
import FemaleSvg from '../../assets/svg/FemaleSvg.svg'
import metrics from '../../theme/metrics'
import colors from '../../theme/color';
const hooks = () => {
   const navigation = useNavigation()
   let svg = [{ name: 'Male', svg: <MaleSvg height={metrics.changeByMobileDPI(24)} width={metrics.changeByMobileDPI(24)} /> }, { name: 'Female', svg: <FemaleSvg height={metrics.changeByMobileDPI(24)} width={metrics.changeByMobileDPI(24)} /> }]
   const [selectGender, setSelectGender] = React.useState(null)
   const renderSolts = ({ item, index }) => {
    const setGender = () => {
      setSelectGender(index)
    }
     return (
       <TouchableOpacity onPress={setGender} style={[styles.slotsContainer, index == 0 && styles.marginRightContiner,{    backgroundColor: selectGender == index ? colors.tomatoRed + 10 : colors.white}]}>
         {item.svg}
         <Text style={styles.maleFontStyle}>{item.name}</Text>
       </TouchableOpacity>
     )
   }
    const navigateToCalender = async () => {
        navigation.navigate(screenName.screenName.subScriptionForm_screen)
    };
   
  return {navigateToCalender,svg,renderSolts}
}
export default hooks
