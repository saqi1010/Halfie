import { Animated, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar'
import { styles } from './style'
import colors from '../../theme/color'
import GridentButton from '../../components/atoms/GridentButton'
import Premission from '../../components/atoms/Premission'
import NotificationSvg from '../../assets/svg/BellSvg.svg'
import LocationSvg from '../../assets/svg/LocationSvg.svg'
import DeviceSvg from '../../assets/svg/PhoneSvg.svg'
import CameraSvg from '../../assets/svg/CameraSvg.svg'
import GallerySvg from '../../assets/svg/GallerySvg.svg'
import CalnderSvg from '../../assets/svg/ClanderSvg.svg'
import RecordingSvg from '../../assets/svg/drawer_svgs/CameraSvg.svg'
import metrics from '../../theme/metrics'
import hooks from './hooks'
import { openAppSettings } from '../../utils/openUrl'
const PermissionScreen = () => {
  const {acceessPermission} = hooks()
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar isTopSpace={true} isLightBar={true} barColor={'#00000000'} />
      <ScrollView>
      <View style={styles.subContainer}>
        <Text style={styles.titleFontStyle}>HALFIE Permissions!</Text>
        <Text style={styles.subTitleFontStyle}>The following permissions are the total list of all permissions that our application would require based on your activity on our platform.</Text>
        <Text style={styles.infoFontStyle}>Required permissions</Text>
        <Premission svg={<NotificationSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)}/>}  title='Notifications' description='Used to provide you with timely information that includes but not limited to - received likes, messages, payment, important updates or changes on our app.'/>
        <Premission svg={<LocationSvg height={metrics.changeByMobileDPI(24)} width={metrics.changeByMobileDPI(20)}/>}  title='Location' description='Location is used to display profiles, events, and services from closest to furthest from your area.'/>
        <Premission svg={<RecordingSvg height={metrics.changeByMobileDPI(24)} width={metrics.changeByMobileDPI(20)}/>}  title="Video Recording"  description="Video recording permission is required to capture videos for profiles, events, and services." />
        <Premission svg={<CameraSvg height={metrics.changeByMobileDPI(16)} width={metrics.changeByMobileDPI(20)}/>}  title='Camera' description='Used to take a picture and add it to your matchmaking profile which is then sent for verification.'/>
        <Premission svg={<GallerySvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)}/>}  title='Gallery' description='Used to load images that are saved on your phone and allows you to select an image from your gallery to add it as your matchmaking profile picture which is later sent for verification.'/>
        <Premission svg={<DeviceSvg height={metrics.changeByMobileDPI(24)} width={metrics.changeByMobileDPI(24)}/>}  title='Device OS' description='Device OS (Android or iOS) is used to collect important information that helps to identify and fix bugs based on the OS and moreover, help to determine the payment method such as Apple pay for Apple devices and Stripe for Android devices.'/>
        <Text style={styles.infoFontStyle}>Optional permissions</Text>
        <Premission svg={<CalnderSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)}/>}  title='Calendar' description='Used to add and update events on your device’s calendar based on your behalf.'/>
        <Text style={styles.guidenceFontStyle}>You can manage these permissions in <Text onPress={openAppSettings} style={styles.guidenceFontStyleButLinkcolor}>Settings</Text></Text>
        <GridentButton
          extrenalStyle={styles.extrenalStyle}
          onClick={acceessPermission}
          buttonText='Continue'
        />
      </View>
      </ScrollView>
    </View>
  )
}
export default PermissionScreen
