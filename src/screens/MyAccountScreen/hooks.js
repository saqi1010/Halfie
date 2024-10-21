import { CommonActions, useNavigation, useRoute } from "@react-navigation/native"
import React, { useState } from "react"
import screenName from "../../theme/screenName"
import { useDispatch, useSelector } from "react-redux"
import { getPlanDetailRequest } from "../../stores/action/getPlanDetailAction"
import { getOrderDetailRequest } from "../../stores/action/getOrderDetailAction"
import { styles } from "./style"
import { Linking } from "react-native"

const hooks = () => {
  const navigation = useNavigation()
  let dispatch = useDispatch()
  const route  = useRoute(0)
 const [subscriptionData, setSubscriptionData] = useState(null)  

  const resetStackAndGoToHome = CommonActions.reset({
    index: 0,
    routes: [{ name: screenName.screenName.custom_drawer_home }],
  });
  const navigateToHome = () => {
    navigation.dispatch(resetStackAndGoToHome)
  }
  
  const getPlan = async() => {
    if (route.params?.transactionId) {
      await dispatch(getOrderDetailRequest(route?.params.transactionId, (response) => {
        setSubscriptionData(response)
      }))
    } else {
      await dispatch(getPlanDetailRequest(null, (response) => {
        setSubscriptionData(response)
      }))
    }
  }
  const navigateToWeb = (url) => {
    Linking.openURL(url)
  }
  React.useEffect(() => {
    getPlan()
  }, [dispatch])

  return { navigateToHome,subscriptionData,navigateToWeb}
}
export default hooks
