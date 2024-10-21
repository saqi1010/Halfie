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
import metrics from '../../theme/metrics'
import hooks from './hooks'
const CalenderScreen = () => {
  const { navigateToPaymentFailed } = hooks()
  return (
    <View style={styles.mainContainer}>
      {/* <FocusAwareStatusBar isTopSpace={true} barColor={colors.white} /> */}
      <View style={styles.subContainer}>
        <Text style={styles.titleFontStyle}>HALFIE Permissions!</Text>
        <Text style={styles.subTitleFontStyle}>The following permission requests to add an event date on your calendar on your behalf.</Text>
        <Text style={styles.infoFontStyle}>Required permissions</Text>
        <Premission svg={<CalnderSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)} />} title='Calendar' description='Used to add and update events on your device’s calendar based on your behalf.' />
        <Text style={styles.guidenceFontStyle}>You can manage these permissions in <Text style={styles.guidenceFontStyleButLinkcolor}>Settings</Text></Text>
        <View style={styles.flexDirectionContainer}>
          <View style={styles.flexContainer}>
            <GridentButton
              extrenalStyle={styles.extrenalStyle}
              onClick={() => navigateToPaymentFailed(1)}
              buttonText='Continue'
            />
          </View>
          <View style={styles.flexContainer}>
            <GridentButton
              externalContainer={styles.externalContainer}
              removeGrident={true}
              extrenalStyle={styles.extrenalStyle1}
              externalFontStyle={styles.externalFontStyle}
              onClick={() => navigateToPaymentFailed(0)}
              buttonText='Skip'
            />
          </View>
        </View>
      </View>
    </View>
  )
}
export default CalenderScreen
