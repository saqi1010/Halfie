import { Animated, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import GridentButton from '../../components/atoms/GridentButton'
import Premission from '../../components/atoms/Premission'
import hooks from './hooks'
import WebView from 'react-native-webview';

const GuideLineScreen = () => {
  const { navigateToOneTimeVerification ,paymentData,webViewVisibility} = hooks()
  if (webViewVisibility?.url) { 
    return(
      <View style={styles.positionContainer}>
    <WebView
    source={{ uri:webViewVisibility?.url}} 
    style={styles.webview}
    onLoadStart={() => console.log('WebView started loading')}
    onLoad={() => console.log('WebView finished loading')}
    onLoadEnd={() => console.log('WebView load ended')}
    onError={() => console.log('WebView encountered an error')}
/>
    </View>
  )
}
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.subContainer}>
          <Text style={styles.titleFontStyle}>Community Guidelines!</Text>
          <Text style={styles.subTitleFontStyle}>These events are organized for people to have fun, meet new people and elevate their experience at these social gatherings. Therefore, to ensure a harmonious, enjoyable, and a safety environment we request you to adhere and accept the following community guidelines:</Text>
          <Premission svg={<Text style={styles.textFontsStyle}>🙏</Text>} title='Respect and Courtesy!' description='Treat fellow attendees with respect and courtesy. Foster an atmosphere of positivity, kindness, inclusivity, fun, and bring an engaging or vibrant energy.' />
          <Premission svg={<Text style={styles.textFontsStyle}>🫥</Text>} title='Misrepresenting Identity!' description='To ensure the authenticity and integrity of our exclusive community, participants are required to provide accurate and truthful information during the registration process. Misrepresenting one’s identity, including but not limited to false gender information or inaccurate profile details, is strictly prohibited. and shall not be allowed to enter the event without any refund!' />
          <Premission svg={<Text style={styles.textFontsStyle}>👗</Text>} title='Dress Code!' description='Adhere to the dress code, aiming for sophisticated and elegant attire. Your style contributes to the overall ambiance of the event.' />
          <Premission svg={<Text style={styles.textFontsStyle}>🗣️</Text>} title='Engage Mindfully!' description='Engage in conversations with an open mind. Be genuinely interested in others and strive for meaningful connections!' />
          <Premission svg={<Text style={styles.textFontsStyle}>📝</Text>} title='Compliance with Event Policies!' description='Follow all event policies and guidelines provided by organizers. This includes adhering to the schedule, venue rules, and any specific instructions communicated during the event.' />
          <Premission svg={<Text style={styles.textFontsStyle}>🍹</Text>} title='Responsible Drinking' description='If consuming alcoholic beverages, do so responsibly. Be mindful of your limits to ensure a safe and enjoyable environment for everyone.' />
          <Premission svg={<Text style={styles.textFontsStyle}>📳</Text>} title='Electronic Device Etiquettes!' description='Use your mobile or any other devices discreetly. Avoid excessive use during conversations or activities' />
          <Premission svg={<Text style={styles.textFontsStyle}>📸</Text>} title='Photography and Privacy!' description='Respect the privacy of others. Seek consent before taking photographs, and be mindful of sharing images on social media platforms.' />
          <Premission svg={<Text style={styles.textFontsStyle}>💃</Text>} title='Contribute to Positive Atmosphere!' description='Contribute to the overall positive atmosphere of the event. Share your energy and enthusiasm, making the event a memorable experience for all.' />
          <Premission svg={<Text style={styles.textFontsStyle}>💬</Text>} title='Follow Up with Respect' description='If you wish to follow up with someone after the event, do so respectfully and be considerate of their preferences.' />
          <Premission svg={<Text style={styles.textFontsStyle}>✋</Text>} title='Report Concerns' description='If you encounter any issues or concerns, please report them to the event staff promptly. We are committed to creating a safe and enjoyable environment for everyone.' />
          <View style={styles.termAndConditionContianer}>
            <Text style={styles.guidenceFontStyle}>By proceeding to register for the event, I agree to the<Text style={styles.guidenceFontStyleButLinkcolor}> Halfie’s Privacy Statement, Last Refund Date,
              Community Guidelines </Text>and <Text style={styles.guidenceFontStyleButLinkcolor}>Terms of Service</Text></Text>
          </View>
          <GridentButton
            extrenalStyle={styles.extrenalStyle}
            onClick={navigateToOneTimeVerification}
            buttonText='Buy Ticket'
          />
        </View>
      </ScrollView>
    </View>
  )
}
export default GuideLineScreen
