import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import colors from '../../theme/color'
import GoogleSvg from '../../assets/svg/GoogleSvg.svg'
import AppleSvg from '../../assets/svg/AppleSvg.svg'
import metrics from '../../theme/metrics'
import hooks from './hooks'
import GridentBorder from '../../components/atoms/GridentBorder'
import CustomAlert from '../../components/molecules/CustomAlert'
const CreateAccountScreen = () => {
  const { signUpState, toggleSignUp ,siginInWithGoogle,siginInWithApple,siginUpWithGoogle,
    customModalVisibility,
  } = hooks()
  return (
    <View style={styles.mainContainer}>
      <View style={styles.centerContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.createAccountFontStyle}>{signUpState ? 'Create Your Account' : 'Hey, Welcome Back!'}</Text>
          <View style={styles.marginContainer}>
            <Text style={styles.createAccountDescriptionFontStyle}>{signUpState ? 'Create an account to unlock exclusive matchmaking, personalized services, and unforgettable events.' : 'Glad to have you back! Log-in and let’s pick up where we left off!'}</Text>
          </View>
          <View style={styles.buttonMainContainer}>
          <GridentBorder
            colors={colors.grident1}
            borderWidth={1.5}
            borderRadius={metrics.changeByMobileDPI(12)}
            style={styles.gridentContainer}>
            <TouchableOpacity onPress={signUpState ? siginUpWithGoogle : siginInWithGoogle} style={styles.buttonContainer}>
              <GoogleSvg height={metrics.changeByMobileDPI(36)} width={metrics.changeByMobileDPI(36)} style={styles.svgContainer} />
              <View style={styles.widthContainer}>
              <Text style={styles.buttonFontStyle}>{signUpState ? 'Create with Google':'Sign In with Google'}</Text>
              </View>
            </TouchableOpacity>
          </GridentBorder>
          <GridentBorder
            colors={colors.grident1}
            borderWidth={1.5}
            borderRadius={metrics.changeByMobileDPI(12)}
            style={styles.gridentContainer}>
            <TouchableOpacity onPress={siginInWithApple} style={styles.buttonContainer}>
              <AppleSvg height={metrics.changeByMobileDPI(36)} width={metrics.changeByMobileDPI(36)} style={styles.svgContainer} />
              <View style={styles.widthContainer}>
              <Text style={styles.buttonFontStyle}>{signUpState ?'Create with Apple ID':'Sign In with Apple ID'}</Text>
              </View>
            </TouchableOpacity>
          </GridentBorder>
          </View>
          <Text style={styles.termsAndConditionFontStyle}>
            By proceeding, I agree to the Halfie’s <Text style={styles.termsAndConditionFontStyleWithBlueColor}>Privacy Statement</Text>, <Text style={styles.termsAndConditionFontStyleWithBlueColor}>Community Guidelines</Text> and <Text style={styles.termsAndConditionFontStyleWithBlueColor}>Terms of Service</Text>
          </Text>
          <View style={styles.flexRowContainer}>
            <Text style={styles.alreadyAccountFontStyle}>{signUpState ? 'Already have an account?' : 'Don’t have an account?'} </Text>
            <TouchableOpacity onPress={toggleSignUp}>
              <Text style={styles.loginFontStyle}>{signUpState ? 'Log in' : 'Sign Up'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <CustomAlert
        visible={customModalVisibility?.visibility}
        onDelete={customModalVisibility?.closeModalEvent}
        onCancel={customModalVisibility?.rightModalEvent}
        title={customModalVisibility?.title}
        message={customModalVisibility?.description}
        deleteText={customModalVisibility?.leftButtonText}
        cancelText={customModalVisibility?.rightButtonText}
        bachLogo={customModalVisibility?.bachLogo}
        removeRedApplyBorderWidth={true}
        removeStyle={styles.removeStyle}
      />
    </View>
  )
}
export default CreateAccountScreen
