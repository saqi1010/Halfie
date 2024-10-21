import { Animated, FlatList, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import colors from '../../theme/color'
import GridentButton from '../../components/atoms/GridentButton';
import hooks from './hooks'
import ProfileHeader from '../../components/atoms/ProfileHeader'
import SwitchButton from '../../components/atoms/SwitchButton'
import { openSettings } from 'react-native-permissions';
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar';
const SettingScreen = () => {
  const { signOut,accountDelete, emailNotification,phoneNotification,emailNotificatBoolean,phoneNotificatBoolean, setEmailNotificatBoolean,setPhoneNotificatBoolean} = hooks()
  return (
    <View style={styles.mainContainer}>
            <FocusAwareStatusBar isTopSpace={false} isLightBar={true} barColor={'#00000000'} />

      <ProfileHeader />
      <ScrollView>
      <View style={styles.subContainer}>
        <View style={styles.marginTopContainer}>
          {/*  */}
          <View style={styles.flexRowContainer}>
            <View style={styles.flexContainer} >
              <Text style={styles.settingTitleFontStyle}>Email Notifications</Text>
              <Text style={styles.settingDescriptionFontStyle}>We send email notifications about account updates, legal document updates, payment updates, subscription plans, or any major announcements.</Text>
            </View>
            <SwitchButton 
            state={emailNotificatBoolean} setState={setEmailNotificatBoolean}
            onEvent={emailNotification}/>
          </View>
          <View style={styles.flexRowContainer}>
            <View style={styles.flexContainer} >
              <Text style={styles.settingTitleFontStyle}>Phone Notifications</Text>
              <Text style={styles.settingDescriptionFontStyle}>We send notifications about your subscription plans, when you received a like or crush, start a new blind chat, or when someone messages you, updates in our legal documents, or any major announcements.</Text>
            </View>
            <SwitchButton 
             state={phoneNotificatBoolean} setState={setPhoneNotificatBoolean}
             onEvent={phoneNotification}/>
          </View>
          {/*  */}
          <View style={styles.flexRowContainer}>
            <View style={styles.flexContainer} >
              <Text style={styles.settingTitleFontStyle}>App Settings & Permissions</Text>
              <Text style={styles.settingDescriptionFontStyle}>Change application settings and permissions</Text>
            </View>
             <TouchableOpacity onPress={openSettings} style={styles.buttonContainer}>
              <Text style={styles.grayFontStyle}>Go to app settings</Text>
             </TouchableOpacity>
          </View>
          {/*  */}
          {/* <View style={styles.flexRowContainer}>
            <View style={styles.flexContainer} >
              <Text style={styles.settingTitleFontStyle}>Share Data with Thirty Party:</Text>
              <Text style={styles.settingDescriptionFontStyle}>View the list of all third party, that would like to see your data.</Text>
            </View>
             <TouchableOpacity >
             <BackSvg height={metrics.changeByMobileDPI(11)} width={metrics.changeByMobileDPI(11)}/>
             </TouchableOpacity>
          </View>
          <FlatList data={[1,2]} renderItem={renderThirdParty} /> */}

        </View>
        <GridentButton
          defaultGridentColor={[colors.lightGray, colors.lightGray]}
          onClick={signOut}
          extrenalStyle={styles.logOutextrenalStyle}
          externalFontStyle={styles.externalFontStyle1}
          buttonText='Log Out'
        />
        <GridentButton
          onClick={accountDelete}
          extrenalStyle={styles.extrenalStyle}
          buttonText='Delete Your Account'
        />
      </View>
      </ScrollView>
    </View>
  )
}
export default SettingScreen
