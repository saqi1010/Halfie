import { Animated, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
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
const AboutHalfieScreen = () => {
  const { navigateToHome, headerData, accountData, renderAccount } = hooks()
  return (
    <View style={styles.mainContainer}>
            <FocusAwareStatusBar isTopSpace={false} isLightBar={true} barColor={'#00000000'} />
      <ScrollView>

        <View style={styles.aboutHailfeMainImageContainer}>
          <Image source={require('../../assets/images/AboutHalfie.png')} style={styles.aboutHalfieImageStyle} />
        </View>
        <Text style={styles.titleFontStyle}>SEARCHING FOR A LIFE PARTNER?</Text>
        <View style={styles.marginContainer}>
          <Text style={styles.descriptionFontStyle}>Welcome to Halfie, where your journey to finding your life partner begins. Our innovative approach combines the convenience of modern technology with the warmth of real-life connections. Whether you prefer the ease of our application or the excitement of attending our dedicated events, we’re here to guide you every step of the way.</Text>
          <Text style={styles.descriptionFontStyle}>Welcome to Halfie, where your journey to finding your life partner begins. Our innovative approach combines the convenience of modern technology with the warmth of real-life connections. Whether you prefer the ease of our application or the excitement of attending our dedicated events, we’re here to guide you every step of the way.</Text>
          <Text style={styles.descriptionFontStyle}>Finding a life partner is more than just liking or rejecting profiles on screens. </Text>
          <View style={styles.descriptionContainer}>
            <Text style={styles.feedBackFontStyle}>WHY HALFIE?</Text>
            <Text style={styles.descriptionFontStyle}>Our matchmaking application stands as a beacon of trust and authenticity in the tumultuous landscape of online romance. Crafted with a heart and a mission to combat the pervasive threat of romance scams, we aim to provide a haven where users can pursue genuine connections with confidence. Our dedication to safeguarding hearts and fostering genuine relationships is at the core of everything we do. Beyond mere security, we strive to offer a personalized journey, tailored to each user's unique preferences and desires. We understand that finding a life partner is more than just a search; it's a deep, personal and meaningful journey. With our application and our upcoming range of services, users can embark on an unforgettable voyage, guided by authenticity, trust, and the search for true love whether they wish to use our application, or prefer a more traditional route.</Text>

          </View>
        </View>
        <View style={styles.subContainer}>


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
      </ScrollView>

    </View>
  )
}
export default AboutHalfieScreen
