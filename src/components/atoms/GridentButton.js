import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import metrics from '../../theme/metrics';
import colors from '../../theme/color';
import font from '../../theme/font';

const GridentButton = ({ defaultGridentColor = ['#FB7BA2', '#FB7BA2', '#FCE04399'], buttonText = '', extrenalStyle = {}, onClick = () => { }, removeGrident = false, externalFontStyle, externalContainer, externalGridentStyle, disabled = false, loading = false }) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onClick} style={[styles.gridentButtonStyle, extrenalStyle]}>
      {
        !removeGrident ?
          <LinearGradient start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }} colors={defaultGridentColor} style={[styles.linearGridentConatiner, externalGridentStyle]}>
            {
              loading ?
                <ActivityIndicator color={colors.white} size={'small'} />
                :
                <Text style={[styles.gridentFontStyle,externalFontStyle]}>{buttonText}</Text>
            }
          </LinearGradient>
          :
          <View style={{ ...styles.secandryContainer, ...externalContainer }}>
            {
              loading ?
                <ActivityIndicator color={colors.white} size={'small'} />
                :
                <Text style={[styles.secandryGridentFontStyle, externalFontStyle]}>{buttonText}</Text>
            }
          </View>
      }
    </TouchableOpacity>
  )
}

export default GridentButton

const styles = StyleSheet.create({
  linearGridentConatiner: {
    height: metrics.changeByMobileDPI(40),
    borderRadius: metrics.changeByMobileDPI(10),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gridentFontStyle: {
    fontSize: metrics.changeByMobileDPI(14),
    color: colors.white,
    fontFamily: font.type.latoSemiBold
  },
  secandryGridentFontStyle: {
    fontSize: metrics.changeByMobileDPI(14),
    color: colors.black + 80,
    fontFamily: font.type.latoSemiBold
  },
  gridentButtonStyle: {
    // marginHorizontal: metrics.changeByMobileDPI(40),
    // width: metrics.screenWidth - 60,
  },
  secandryContainer: {
    height: metrics.changeByMobileDPI(40),
    borderRadius: metrics.changeByMobileDPI(10),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.chineseSilver
  }
})