import { CommonActions, useNavigation } from "@react-navigation/native"
import { useState } from "react"
import screenName from "../../theme/screenName"

const hooks = () => {
  const navigation = useNavigation()
  const resetStackAndGoToHome = CommonActions.reset({
		index: 0,
		routes: [{ name: screenName.screenName.custom_drawer_home }],
	});

  const navigateToHome = () => {
    navigation.dispatch(resetStackAndGoToHome)
  }
  return {navigateToHome}
}

export default hooks
