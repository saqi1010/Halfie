import { Animated, FlatList, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import YoutubeSvg from '../../assets/svg/drawer_svgs/YoutubeSvg.svg'
import NetSvg from '../../assets/svg/drawer_svgs/InternetSvg.svg'
import CameraSvg from '../../assets/svg/drawer_svgs/CameraSvg.svg'
import TwitterSvg from '../../assets/svg/drawer_svgs/TwitterSvg.svg'
import FaceBookSvg from '../../assets/svg/drawer_svgs/FaceBookSvg.svg'
import GitHubSvg from '../../assets/svg/drawer_svgs/GitHubSvg.svg'
import hooks from './hooks'
import ProfileHeader from '../../components/atoms/ProfileHeader'
import metrics from '../../theme/metrics'
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar'
const SettingMainScreen = () => {
  const { navigateToHome, headerData, accountData, renderAccount,
  } = hooks()
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar isTopSpace={false} isLightBar={true} barColor={'#00000000'} />
      <ProfileHeader data={headerData} />
      <View style={styles.subContainer}>
        <View>
          <FlatList data={accountData} renderItem={renderAccount} numColumns={3} contentContainerStyle={styles.contentContainerStyle} />
        </View>
        <View style={styles.joinOurCommunityContainer}>
          <Text style={styles.joinFontStyle}>JOIN OUR COMMUNITY</Text>
          <View style={styles.flexDirectionContainer}>
            <View style={styles.marginContainerRight}>
              <NetSvg height={metrics.changeByMobileDPI(28)} width={metrics.changeByMobileDPI(28)} />
            </View>
            <View style={styles.marginContainerRight}>
              <CameraSvg height={metrics.changeByMobileDPI(28)} width={metrics.changeByMobileDPI(28)} />
            </View>
            <View style={styles.marginContainerRight}>
              <TwitterSvg height={metrics.changeByMobileDPI(28)} width={metrics.changeByMobileDPI(28)} />
            </View>
            <View style={styles.marginContainerRight}>
              <FaceBookSvg height={metrics.changeByMobileDPI(28)} width={metrics.changeByMobileDPI(28)} />
            </View>
            <View style={styles.marginContainerRight}>
              <GitHubSvg height={metrics.changeByMobileDPI(28)} width={metrics.changeByMobileDPI(28)} />
            </View>
            <View style={styles.marginContainerRight}>
              <YoutubeSvg height={metrics.changeByMobileDPI(28)} width={metrics.changeByMobileDPI(28)} />
            </View>
          </View>
          <View style={styles.centerContainer}>
            <Text style={styles.guidenceFontStyle}>Check out our blogs section at </Text>
            <Text style={styles.guidenceFontStyleButLinkcolor}>www.halfie.com/blogs</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
export default SettingMainScreen
