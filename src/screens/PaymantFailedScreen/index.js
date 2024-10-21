import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import GridentButton from '../../components/atoms/GridentButton'
import Logo from '../../assets/svg/logo.svg'
import metrics from '../../theme/metrics'
import hooks from './hooks'
const PaymantFailedScreen = () => {
  const {goBack} = hooks()
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
      <View style={styles.svgContainer}>
          <Logo height={metrics.changeByMobileDPI(67)} width={metrics.changeByMobileDPI(45)} />
        </View>
        <Text style={styles.titleFontStyle}>Payment Failed</Text>
        <Text style={styles.subTitleFontStyle}>Sorry, we could not process your payment</Text>

        <GridentButton
          extrenalStyle={styles.extrenalStyle}
          onClick={goBack}
          buttonText='Try Again'
        />
      </View>
    </View>
  )
}
export default PaymantFailedScreen
