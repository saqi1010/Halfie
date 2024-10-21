import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import GridentButton from '../../components/atoms/GridentButton'
import hooks from './hooks'

const Secandry = () => {
    const {navigateToPremission,navigateToLogin} = hooks()
    return (
        <View style={styles.mainContainer}>
            <View style={styles.onBordingContainer}>
                <Image source={require('../../assets/images/onBoradingImage4.png')} resizeMode='cover' style={styles.imageStyle} />
                <View style={styles.positionContainer2}>
                    <View style={styles.centerAlignContainer}>
                        <Text style={styles.titleFontStyle}>{'Let’s Begin!'}</Text>
                        <GridentButton
                            onClick={navigateToLogin}
                            buttonText='Log in'
                            extrenalStyle={[styles.externalStyle,styles.marginContainer]}
                        />
                        <GridentButton
                            onClick={navigateToPremission}
                            buttonText='Sign Up'
                            extrenalStyle={[styles.externalStyle]}
                        />
                    </View>
                </View>

            </View>
        </View>
    )
}
export default Secandry
