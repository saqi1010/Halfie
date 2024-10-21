import {  Image,Text,  View } from 'react-native'
import React from 'react'
import { styles } from './style'
import GridentButton from '../../components/atoms/GridentButton'
import hooks from './hooks'
import Logo from '../../assets/svg/logo.svg'
import metrics from '../../theme/metrics'
const PaymentScreen = () => {
  const { navigateToCalender, svg, renderSolts } = hooks()

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View style={styles.svgContainer}>
          <Logo height={metrics.changeByMobileDPI(67)} width={metrics.changeByMobileDPI(45)} />
        </View>
        <Text style={styles.titleFontStyle}>Thank You!</Text>
        <Text style={styles.purchaseFontStyle}>Your purchase has been confirmed!</Text>
        <Text style={styles.subTitleFontStyle}>{`Thank you for choosing HALFIE! Your support means a lot to us.We appreciate doing business with you and hope that you enjoy your purchase.`}</Text>
        <View style={styles.termAndConditionContianer}>
          <View style={styles.maleContainer}>
            <Text style={styles.warningFontStyle}>Your Orders</Text>
            <Text style={styles.descriptionFontStyle}>You can view your orders under your profile’s order tab.</Text>
          </View>
          <View style={styles.flexDirectionContainer}>
            <View style={styles.flexRowContainer}>
              <Image source={require('../../assets/images/HeartImage.png')} />
              <View style={styles.marginLeftContainer}>
                <Text style={styles.subscriptionFontStyle}>Bronze Subscription</Text>
                <Text style={styles.serviceFontStyle}>Subscription Service</Text>
              </View>
            </View>
            <View style={styles.button}>
              <GridentButton
                onClick={() => { }}
                buttonText='View Order'
                extrenalStyle={[styles.externalStyle]}
              />
            </View>
          </View>
          <Text style={styles.guidenceFontStyle}>If you have any questions or require further support on your purchases, please reach us out on<Text style={styles.guidenceFontStyleButLinkcolor}> ordersupport@halfie.com.</Text></Text>
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
export default PaymentScreen
