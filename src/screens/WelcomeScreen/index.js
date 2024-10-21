import { Animated, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import GridentButton from '../../components/atoms/GridentButton'
import Premission from '../../components/atoms/Premission'
import MarriageSvg from '../../assets/svg/MarriageSvg.svg'
import TableSvg from '../../assets/svg/TableSvg.svg'
import FashionSvg from '../../assets/svg/FashionSvg.svg'
import CoinSvg from '../../assets/svg/CoinSvg.svg'
import metrics from '../../theme/metrics'
import hooks from './hooks'
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar'
import colors from '../../theme/color'
const WelcomeScreen = () => {
  const { navigateToHome} = hooks()
  return (
    <View style={styles.mainContainer}>
      {/* <FocusAwareStatusBar isTopSpace={true} barColor={colors.white} /> */}
      <ScrollView>
        <View style={styles.subContainer}>
          <Text style={styles.titleFontStyle}>Our HALFIE Family,</Text>
          <Text style={styles.welcomeYouFontStyle}>Welcomes You!</Text>
          <Text style={styles.subTitleFontStyle}>🎉 A Super Stylish Welcome to HALFIE!
            Your decision to join us is like adding a splash of glam to our family. Thanks a ton for making HALFIE your vibe!</Text>
          <Text style={styles.infoFontStyle}>NEXT STEPS!</Text>
          <Premission svg={<FashionSvg height={metrics.changeByMobileDPI(32)} width={metrics.changeByMobileDPI(32)} />} title='Get Fashionable!' description='We offer services that help you elevate your style game - personally, and professionally! Let’s make your look POP!' />
          <Premission svg={<TableSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(32)} />} title='Find Your Partner' description='We offer a hybrid solution to help you find a match. Whether you believe in applications or the traditional way for finding a life partner, whatever your path - we got your covered!' />
          <Premission svg={<MarriageSvg height={metrics.changeByMobileDPI(30)} width={metrics.changeByMobileDPI(30)} />} title='Get Married' description='Yep! That’s the end goal! Visualize it, believe it, and achieve it! We list services that can help plan your dates, proposal or your precious Wedding!' />
          <Premission svg={<CoinSvg height={metrics.changeByMobileDPI(32)} width={metrics.changeByMobileDPI(32)} />} title='Explore Couple Related Services' description='Dive into the world of couple bliss! Plan Dreamy Honeymoons, Get Financial Advice for Couples, or any other couple related activities.' />
         
          <View style={styles.centerContainer}>
            <Text style={styles.guidenceFontStyle}>Need a fashion forward tip or just want to share your excitement? We’re just a message away!
              Send us your feedback or support request on</Text>
            <Text style={styles.guidenceFontStyleButLinkcolor}>helpandsupport@halfie.com.</Text>
          </View>
          <GridentButton
           onClick={navigateToHome}
            extrenalStyle={styles.extrenalStyle}
            buttonText='LET’S DIVE IN'
          />
        </View>
      </ScrollView>
    </View>
  )
}
export default WelcomeScreen
