import { Animated, FlatList, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar'
import { styles } from './style'
import GridentButton from '../../components/atoms/GridentButton'
import hooks from './hooks'
const OneTimeVerficationScreen = () => {
  const { navigateToCalender ,svg,renderSolts} = hooks()

  return (
    <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.titleFontStyle}>One Time Verification</Text>
          <Text style={styles.subTitleFontStyle}>{`This is a one time process! Please share your identity.`}</Text>
          <View style={styles.termAndConditionContianer}>
            <View style={styles.maleContainer}>
              <Text style={styles.warningFontStyle}>Male or Female?</Text>
              <FlatList data={svg}
                contentContainerStyle={styles.contentContainerStyle}
                renderItem={renderSolts} />
              <View style={styles.warningContainer}>
                <Text style={styles.warningFontStyle}>Warning!</Text>
                <View style={styles.flexContainer}>
                  <Text style={styles.descriptionFontStyle}>Do not misrepresent your identity as you will be banned from attending the event and there will be no refunds.</Text>
                </View>
              </View>
            </View>
            <Text style={styles.guidenceFontStyle}>By proceeding to register for the event, I agree to the<Text style={styles.guidenceFontStyleButLinkcolor}> Halfie’s Privacy Statement,
              Community Guidelines  </Text>and <Text style={styles.guidenceFontStyleButLinkcolor}>Terms of Service</Text></Text>
          </View>
          <GridentButton
            extrenalStyle={styles.extrenalStyle}
            onClick={navigateToCalender}
            buttonText='Continue'
          />
        </View>
    </View>
  )
}
export default OneTimeVerficationScreen
