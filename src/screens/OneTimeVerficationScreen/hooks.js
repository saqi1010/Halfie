
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import screenName from '../../theme/screenName';
import { styles } from './style';
import MaleSvg from '../../assets/svg/MaleSvg.svg'
import FemaleSvg from '../../assets/svg/FemaleSvg.svg'
import metrics from '../../theme/metrics'
import colors from '../../theme/color';
import { useDispatch, useSelector } from 'react-redux';
import { deviceAndLocationRequest } from '../../stores/action/deviceAndLocationAction';
const hooks = () => {
   const navigation = useNavigation()
   let dispatch = useDispatch()
   let svg = [{ name: 'Male', svg: <MaleSvg height={metrics.changeByMobileDPI(24)} width={metrics.changeByMobileDPI(24)} /> }, { name: 'Female', svg: <FemaleSvg height={metrics.changeByMobileDPI(24)} width={metrics.changeByMobileDPI(24)} /> }]
   const [selectGender, setSelectGender] = React.useState(null)
   const { deviceData } = useSelector((state) => state.deviceInfoAndLocation);

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
      if (selectGender != null) {
        const convertDataIntoParse = JSON.parse(deviceData);
        let addGenderOnThatData = {...convertDataIntoParse,gender:svg[selectGender].name}
        const convertDataIntoString = JSON.stringify(addGenderOnThatData);
        dispatch(deviceAndLocationRequest(convertDataIntoString));
        navigation.navigate(screenName.screenName.ageVerification_screen)
      }
    };
   
  return {navigateToCalender,svg,renderSolts}
}
export default hooks
