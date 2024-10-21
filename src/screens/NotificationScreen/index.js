import {  FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import hooks from './hooks'
import ProfileHeader from '../../components/atoms/ProfileHeader'
import FilterSvg from '../../assets/svg/FilterSvg.svg';
import metrics from '../../theme/metrics'
import GlobalSearch from '../../components/molecules/GlobalSearch'
import NotificationSvg from '../../assets/svg/BellSvg.svg'
import { quickLinkData } from '../../theme/staticData'
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar'
const NotificationScreen = () => {
  const { navigateToHome,headerData,viewOrderData,renderViewOrderDate,navigateToNotification,renderEvent1} = hooks()
  return (
    <View style={styles.mainContainer}>
                  <FocusAwareStatusBar isTopSpace={false} isLightBar={true} barColor={'#00000000'} />

      <View style={styles.searchContainer}> 
        <GlobalSearch/>
        <TouchableOpacity onPress={navigateToNotification} style={styles.marginLeftContianer}>
        <NotificationSvg height={metrics.changeByMobileDPI(27.75)} width={metrics.changeByMobileDPI(27.25)} />
        </TouchableOpacity>
      </View>
        <View style={styles.subContainer}>
        <FlatList data={quickLinkData} renderItem={renderEvent1} />
                </View>
    </View>
  )
}
export default NotificationScreen
