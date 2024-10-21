import { CommonActions, useNavigation } from "@react-navigation/native"
import { useState } from "react"
import screenName from "../../theme/screenName"
import images from "../../theme/images"
import metrics from "../../theme/metrics"
import AccountSvg from '../../assets/svg/setting_svgs/AccountSvg.svg'
import SettingSvg from '../../assets/svg/setting_svgs/SettingSvg.svg'
import SubscriptionSvg from '../../assets/svg/setting_svgs/SubscriptionSvg.svg'
import AboutHalfieSvg from '../../assets/svg/setting_svgs/RSvg.svg'
import SupportSvg from '../../assets/svg/setting_svgs/qurestionMarkSvg.svg'
import OrderSvg from '../../assets/svg/setting_svgs/qurestionMarkSvg.svg'
import { Text, View } from "react-native"
import { styles } from "./style"

const hooks = () => {
  const navigation = useNavigation()
  const resetStackAndGoToHome = CommonActions.reset({
    index: 0,
    routes: [{ name: screenName.screenName.custom_drawer_home }],
  });

  const headerData = {
    image: images.images.onBordingImage1,
    title: 'PRISCILLA DU PREEZ',
    age: '24',
    natioanilty: 'Argentina'
  }

  const accountData = [
    {
      title: 'My Account',
      svg: <AccountSvg height={metrics.changeByMobileDPI(30)} width={metrics.changeByMobileDPI(30)} />
    },
    {
      title: 'Settings',
      svg: <SettingSvg height={metrics.changeByMobileDPI(30)} width={metrics.changeByMobileDPI(30)} />
    },
    {
      title: 'Subscription',
      svg: <SubscriptionSvg height={metrics.changeByMobileDPI(30)} width={metrics.changeByMobileDPI(30)} />
    },
    {
      title: 'About Halfie',
      svg: <AboutHalfieSvg height={metrics.changeByMobileDPI(30)} width={metrics.changeByMobileDPI(30)} />
    },
    {
      title: 'Support',
      svg: <SupportSvg height={metrics.changeByMobileDPI(30)} width={metrics.changeByMobileDPI(30)} />
    },
    {
      title: 'Orders',
      svg: <OrderSvg height={metrics.changeByMobileDPI(30)} width={metrics.changeByMobileDPI(30)} />
    },
  ]

  const renderAccount = ({item,index}) => {
    return(
      <View style={styles.mainSettingCardContainer}>
        {item.svg}
        <Text style={styles.titleFontStyle}>{item.title}</Text>
      </View>
    )
  }

  const navigateToHome = () => {
    navigation.dispatch(resetStackAndGoToHome)
  }
  return { navigateToHome, headerData ,accountData,renderAccount}
}

export default hooks
