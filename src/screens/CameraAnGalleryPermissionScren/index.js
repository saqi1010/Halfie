import { Animated, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar'
import { styles } from './style'
import colors from '../../theme/color'
import GridentButton from '../../components/atoms/GridentButton'
import Premission from '../../components/atoms/Premission'
import metrics from '../../theme/metrics'
import CameraSvg from '../../assets/svg/CameraSvg.svg'
import Gallery from '../../assets/svg/GallerySvg.svg'

import hooks from './hooks'
const CameraAnGalleryPermissionScren = () => {
  const { PermissionAllow } = hooks()
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.titleFontStyle}>HALFIE Permissions!</Text>
        <Text style={styles.subTitleFontStyle}>The following permissions are the total list of all permissions that our application would require based on your activity on our platform.</Text>
        <Text style={styles.infoFontStyle}>Required permissions</Text>
        <Premission svg={<CameraSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)} />} title='Camera' description='Used to take a picture and add it to your matchmaking profile which is then sent for verification.' />
        <Premission svg={<Gallery height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)} />} title='Gallery' description='Used to load images that are saved on your phone and allows you to select an image from your gallery to add it as your matchmaking profile picture which is later sent for verification.' />
        <Text style={styles.guidenceFontStyle}>You can manage these permissions in <Text style={styles.guidenceFontStyleButLinkcolor}>Settings</Text></Text>
        <View style={styles.flexDirectionContainer}>
          <View style={styles.flexContainer}>
            <GridentButton
              extrenalStyle={styles.extrenalStyle}
              onClick={PermissionAllow}
              buttonText='Continue'
            />
          </View>
        </View>
      </View>
    </View>
  )
}
export default CameraAnGalleryPermissionScren
