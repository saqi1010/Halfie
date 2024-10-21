import { Animated, FlatList, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import WalletSvg from '../../assets/svg/WalletSvg.svg'
import metrics from '../../theme/metrics'
import hooks from './hooks'
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar'
import colors from '../../theme/color'
import GridentBorder from '../../components/atoms/GridentBorder'
const WalletScreen = () => {
  const { navigateToHome} = hooks()

  const walletData = [
    {
     name:'asdasdasd',
     transcationId:'23423edrew',
     ammount:'+$30.00'
    },
    {
      name:'asdasdasd',
      transcationId:'23423edrew',
      ammount:'+$30.00'
     },
     {
      name:'asdasdasd',
      transcationId:'23423edrew',
      ammount:'+$30.00'
     }
  ]

  const renderWallet = ({item,index}) => {
    return(
   <View style={styles.flexMainContianer}>
    <View style={styles.flexRowContianer}>
      <WalletSvg  height={metrics.changeByMobileDPI(25)} width={metrics.changeByMobileDPI(25)}  />
      <View style={styles.marginLeftContianer}>
        <Text style={styles.nameFontStyle}>{item.name}</Text>
        <Text style={styles.descriptionFontStyle}>{item.transcationId}</Text>
      </View>
    </View>
    <Text style={styles.ammountFontStyle}>{item.ammount}</Text>
   </View>
    )
  }
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar isTopSpace={true} barColor={colors.secondary} />
      <ScrollView>
        <View style={styles.subContainer}>
        <GridentBorder
          colors={colors.grident1}
          borderWidth={0}
          borderRadius={metrics.changeByMobileDPI(0)}
          style={styles.gridentButtonStyle}
          >
          <View style={styles.walletContainer}> 
          <Text style={styles.titleFontStyle}>WALLETS</Text>
          <Text style={styles.infoFontStyle}>$ 1,4444</Text>
          <Text style={styles.welcomeYouFontStyle}>AVAILABLE BALANCE</Text>
          </View>
            </GridentBorder>

            <View style={styles.cardContainer}>
            <Text style={styles.recentFontStyle}>Recent Transcation</Text>
             <FlatList data={walletData} renderItem={renderWallet}/> 
            </View>
         
         
        </View>
      </ScrollView>
    </View>
  )
}
export default WalletScreen
