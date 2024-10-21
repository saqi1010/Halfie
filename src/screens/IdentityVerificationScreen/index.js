import { Animated, FlatList, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar'
import { styles } from './style'
import colors from '../../theme/color'
import GridentButton from '../../components/atoms/GridentButton'
import metrics from '../../theme/metrics'
import hooks from './hooks'
import GridentBorder from '../../components/atoms/GridentBorder'
import SimleSvg from '../../assets/svg/SmileSvg.svg';
import AddButtonSvg from '../../assets/svg/AddButtonSvg.svg';
import WarningSvg from '../../assets/svg/WarningSvg2.svg';
import CustomAlert from '../../components/molecules/CustomAlert'

const IdentityVerificationScreen = () => {
  const {
    navigateToHome,
    instructionData1,
    instructionData2,
    renderInstruction,
    addVideo,
    addImage,
    videoThumbnail,
    imageThumbnail,
    randomText,
    addImage1,
    imageThumbnail1,
    navigateToIdentify,
    thumbnailData,
    customModalVisibility, setCustomModalVisibility
  } = hooks();


  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar isTopSpace={false} isLightBar={true} barColor={'#00000000'} />
      <ScrollView>
        <View style={styles.subContainer}>
          <Text style={styles.titleFontStyle}>Identity Verification</Text>
          {/* <View style={styles.warningContianer}>
            <WarningSvg height={metrics.changeByMobileDPI(24)} width={metrics.changeByMobileDPI(24)} />
            <View style={styles.flexContainers}>
              <Text style={styles.warningFontStyle}>You application is currently under review. It will take 3 to 5 business days to complete your review.</Text>
            </View>
          </View> */}
          <Text style={styles.subTitleFontStyle}>Please upload your video and identity card images.</Text>
          <Text style={styles.infoFontStyle}>Let's start by uploading your video</Text>

          <GridentBorder
            colors={colors.grident1}
            borderWidth={Platform.OS == 'android' ? 0 : 1}
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
          <View style={styles.flexContainer}>
              <GridentButton
                extrenalStyle={styles.extrenalRecordStyle}
                onClick={navigateToIdentify}
                buttonText={thumbnailData ? 'Re-record 30s Video' : 'Record 30s Video'}
              />
            </View>
          {/* <Text style={styles.randomTextStyle}>{randomText}</Text> */}

          <View style={styles.instructionContainer}>
            <Text style={styles.instructionFontStyle}>Instructions:</Text>
            <FlatList data={instructionData1} renderItem={renderInstruction} />
          </View>

          <View style={styles.flexDirectionContainer}>
            <GridentBorder
              colors={colors.grident1}
              borderWidth={0}
              borderRadius={metrics.changeByMobileDPI(20)}
              style={styles.gridentConatiner1}
            >
              <TouchableOpacity onPress={addImage} style={styles.addImageContainer}>
                {imageThumbnail ? (
                  <Image
                    source={{ uri: imageThumbnail }}
                    style={styles.thumbnailStyle}
                  />
                ) : (
                  <SimleSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)} />
                )}
              </TouchableOpacity>
            </GridentBorder>
            {/* <GridentBorder
              colors={colors.grident1}
              borderWidth={0}
              borderRadius={metrics.changeByMobileDPI(20)}
              style={styles.gridentConatiner1}
            >
              <TouchableOpacity onPress={addImage1} style={styles.addImageContainer}>
                {imageThumbnail1 ? (
                  <Image
                    source={{ uri: imageThumbnail1 }}
                    style={styles.thumbnailStyle}
                  />
                ) : (
                  <SimleSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)} />
                )}
              </TouchableOpacity>
            </GridentBorder> */}
          </View>

          <View style={styles.instructionContainer}>
            <Text style={styles.instructionFontStyle}>Instructions:</Text>
            <FlatList data={instructionData2} renderItem={renderInstruction} />
          </View>

          <View style={styles.flexDirectionContainer1}>
            <View style={styles.flexContainer}>
              <GridentButton
                extrenalStyle={styles.extrenalStyle2}
                onClick={navigateToHome}
                buttonText='Verify'
              />
            </View>
            <View style={styles.flexContainer}>
              <GridentButton
                externalContainer={styles.externalContainer}
                removeGrident={true}
                extrenalStyle={styles.extrenalStyle1}
                externalFontStyle={styles.externalFontStyle}
                onClick={() => { }}
                buttonText='Cancel'
              />
            </View>
          </View>

          <View style={styles.centerContainer}>
            <Text style={styles.guidenceFontStyle}>If you are below 18 years of age, you’re not allowed to use
              this app due to our <Text style={styles.guidenceFontStyleButLinkcolor}>age restriction policy.</Text></Text>
          </View>

        </View>
      </ScrollView>
      <CustomAlert
        visible={customModalVisibility?.visibility}
        onDelete={customModalVisibility?.closeModalEvent}
        onCancel={customModalVisibility?.rightModalEvent}
        title={customModalVisibility?.title}
        message={customModalVisibility?.description}
        deleteText={customModalVisibility?.leftButtonText}
        cancelText={customModalVisibility?.rightButtonText}
        removeRedApplyBorderWidth={true}
      />
    </View>
  );
};

export default IdentityVerificationScreen;
