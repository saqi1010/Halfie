import { CommonActions, useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import screenName from "../../theme/screenName"
import { Alert } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { ageCalculater } from "../../utils/ageCalculater"
import { signUpRequest } from "../../stores/action/signUpAction"
import { loaderRequest } from "../../stores/action/loaderAction"
import * as Keychain from 'react-native-keychain';

const hooks = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const { deviceData } = useSelector((state) => state.deviceInfoAndLocation);
  const { user,loading ,error} = useSelector((state) => state.signUp);
  const [monthVisibility, setMonthVisibility] = React.useState(false)
  const [yearVisibility, setYearVisibility] = React.useState(false)
  const [alertVisible, setAlertVisible] = useState(false);
  const toggleAlertVisibility = () => setAlertVisible(!alertVisible)
  const [alertVisible1, setAlertVisible1] = useState(false);
  const toggleAlertVisibility1 = () => setAlertVisible1(!alertVisible1)
  const [validationVisibility, setValidationVisibility] = useState(false);
  const toggleValidation = () => setValidationVisibility(!validationVisibility)
  const [ageState, setAgeState] = React.useState({
  month: '',
  year: 0
});
const [test1, setTest1] = useState(null);

let ageCalculation = ageCalculater(ageState.month.fullLabel,ageState.year.fullLabel)
  const toggleMonth = () => setMonthVisibility(!monthVisibility)
  const toggleYear = () => setYearVisibility(!yearVisibility)

  const resetStackAndGoToHome = CommonActions.reset({
		index: 0,
		routes: [{ name: screenName.screenName.onbording_screen }],
	});

  const resetStackAndGoToWelcome = CommonActions.reset({
		index: 0,
		routes: [{ name: screenName.screenName.welcome_screen }],
	});

  ///same signin
  const navigateToWelcome = async() => {
    if (ageCalculation >= 18) {
      dispatch(loaderRequest(true))
      await dispatch(signUpRequest(deviceData,(response) => {
          dispatch(loaderRequest(false))
          navigation.dispatch(resetStackAndGoToWelcome)
        }))
    } else {
      toggleValidation()
    }
  }
  const navigateToSigin = () => {
    setAlertVisible1(false)
    navigation.navigate(screenName.screenName.createAccount_screen, { flag: 1 }); 
   }
  const navigateToBording = () => {
    navigation.dispatch(resetStackAndGoToHome)
  }
  const test = async() => {
    const credential1 = await Keychain.getGenericPassword({ service: 'myDevicInfo' });
    if (!credential1) {
      throw new Error('No credentials found');
    }
    const convertIntoParse = JSON.parse(credential1.username);
   setTest1(JSON.stringify(convertIntoParse, null, 4))
  }

  React.useEffect(() => {
    test()
  }, []);
  return {navigateToWelcome,navigateToBording,ageState, setAgeState,

    monthVisibility,yearVisibility,toggleMonth,toggleYear,ageCalculation,
    alertVisible,
    toggleAlertVisibility,
    alertVisible1,
    toggleAlertVisibility1,
    navigateToSigin,
    toggleValidation,
    validationVisibility,
    test1
  }
}

export default hooks
