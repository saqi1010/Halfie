import { Animated, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import colors from '../../theme/color'
import GridentButton from '../../components/atoms/GridentButton'
import metrics from '../../theme/metrics'
import hooks from './hooks'
import GridentBorder from '../../components/atoms/GridentBorder'
import SimleSvg from '../../assets/svg/SmileSvg.svg';
import AddButtonSvg from '../../assets/svg/AddButtonSvg.svg';
import { useRoute } from '@react-navigation/native'
const IdentityVerificationSecandScreen = () => {
  const {
    instructionData1,
    renderInstruction,
    handleButtonClick,
    renderPriceInstruction,
    questionData,
    countdown,
    isTimerRunning,
    thumbnailData,
  } = hooks();
  let route = useRoute()
 let userName = route.params?.userData
  return (
    <View style={styles.alignmentCenter}>
      <View>
        <View style={styles.subContainer}>
          <Text style={styles.titleFontMarginBottomStyle}>Identity Verification</Text>
          <View style={styles.instructionContainer}>
            <Text style={styles.instructionFontStyle}>Please read the following text:</Text>
            <FlatList data={questionData} renderItem={renderPriceInstruction} />
          </View>
          <View style={styles.instructionContainer}>
            <Text style={styles.instructionFontStyle}>Instructions:</Text>
            <FlatList data={instructionData1} renderItem={renderInstruction} />
          </View>
          <GridentBorder
            colors={colors.grident1}
            borderWidth={0}
            borderRadius={metrics.changeByMobileDPI(20)}
            style={styles.gridentConatiner}
          >

                  <View style={styles.addImageContainer}>
            {thumbnailData ? (
                  <Image
                    source={{ uri: thumbnailData }}
                    style={styles.thumbnailStyle}
                  />
                ) : (
                  <>
              <SimleSvg height={metrics.changeByMobileDPI(30)} width={metrics.changeByMobileDPI(30)} />
              <View style={styles.addContianer}>
                <AddButtonSvg height={metrics.changeByMobileDPI(23)} width={metrics.changeByMobileDPI(23)} />
              </View>
                  </>
                )}
                </View>
          </GridentBorder>
          <View style={styles.alignCenter}>
              <GridentButton
                extrenalStyle={styles.extrenalUploadVideoStyle}
                onClick={handleButtonClick}
                buttonText='Upload Video'
              />
            </View>
        </View>
      </View>
      {
      countdown != 0 && 
       <View style={styles.positionCotainer}>
       <Text style={styles.nameFontStyle}>{`My name is ${userName} and the code for my identity verification is `}<Text style={styles.nameBigFontStyle}> {questionData[0].name}</Text></Text>
       <Text style={styles.countFontStyle}>{countdown}</Text>
      </View>
    }
    </View>
  );
};

export default IdentityVerificationSecandScreen;
