import { Animated, FlatList, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar'
import { styles } from './style'
import colors from '../../theme/color'
import YoutubeSvg from '../../assets/svg/drawer_svgs/YoutubeSvg.svg'
import NetSvg from '../../assets/svg/drawer_svgs/InternetSvg.svg'
import CameraSvg from '../../assets/svg/drawer_svgs/CameraSvg.svg'
import TwitterSvg from '../../assets/svg/drawer_svgs/TwitterSvg.svg'
import FaceBookSvg from '../../assets/svg/drawer_svgs/FaceBookSvg.svg'
import GitHubSvg from '../../assets/svg/drawer_svgs/GitHubSvg.svg'
import GridentButton from '../../components/atoms/GridentButton';
import hooks from './hooks'
import ProfileHeader from '../../components/atoms/ProfileHeader'
import metrics from '../../theme/metrics'
const SupportScreen = () => {
  const { navigateToHome,headerData,accountData,renderAccount} = hooks()
  return (
    <View style={styles.mainContainer}>
            <FocusAwareStatusBar isTopSpace={false} isLightBar={true} barColor={'#00000000'} />
      <ProfileHeader data={headerData} />
        <View style={styles.subContainer}>
          <View style={styles.flexContainer}>
          <View style={styles.marginContainer}>
          <Text style={styles.feedBackFontStyle}>FOR FEEDBACK & IDEAS</Text>
          <View style={styles.feedContainer}>
            <Text style={styles.guidenceFontStyle}>Please send us an e-mail on </Text>
            <Text style={styles.guidenceFontStyleButLinkcolor}>feedback@halfie.com</Text>
          </View>
          </View>
          <View style={styles.marginContainer}>
          <Text style={styles.feedBackFontStyle}>FOR HELP AND SUPPORT</Text>
          <View style={styles.feedContainer}>
            <Text style={styles.guidenceFontStyle}>Please send us an e-mail on </Text>
            <Text style={styles.guidenceFontStyleButLinkcolor}>helpandsupport@halfie.com</Text>
          </View>
          </View>
          <View style={styles.marginContainer}>
          <Text style={styles.feedBackFontStyle}>TO SELL SERVICES ON OUR PLATFORM</Text>
          <View style={styles.feedContainer}>
            <Text style={styles.visitFontStyle}>Please visit <Text style={styles.guidenceFontStyleButLinkcolor}>www.halfie.com/vendor</Text> or send us an e-mail on <Text style={styles.guidenceFontStyleButLinkcolor}>servicessupplier@halfie.com</Text></Text>
          </View>
          </View>
          </View>

        <View style={styles.joinOurCommunityContainer}>
     <Text style={styles.joinFontStyle}>JOIN OUR COMMUNITY</Text>
     <View style={styles.flexDirectionContainer}>
      <View style={styles.marginContainerRight}>
       <NetSvg height={metrics.changeByMobileDPI(28)} width={metrics.changeByMobileDPI(28)}/>
      </View>
      <View style={styles.marginContainerRight}>
       <CameraSvg height={metrics.changeByMobileDPI(28)} width={metrics.changeByMobileDPI(28)}/>
      </View>
      <View style={styles.marginContainerRight}>
       <TwitterSvg height={metrics.changeByMobileDPI(28)} width={metrics.changeByMobileDPI(28)}/>
      </View>
      <View style={styles.marginContainerRight}>
       <FaceBookSvg height={metrics.changeByMobileDPI(28)} width={metrics.changeByMobileDPI(28)}/>
      </View>
      <View style={styles.marginContainerRight}>
       <GitHubSvg height={metrics.changeByMobileDPI(28)} width={metrics.changeByMobileDPI(28)}/>
      </View>
      <View style={styles.marginContainerRight}>
       <YoutubeSvg height={metrics.changeByMobileDPI(28)} width={metrics.changeByMobileDPI(28)}/>
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
export default SupportScreen
