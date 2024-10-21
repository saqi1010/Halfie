import { Animated, BackHandler, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useRef, useMemo } from 'react';
import { styles } from './style';
import GridentButton from '../../components/atoms/GridentButton';
import Logo from '../../assets/svg/logo.svg';
import metrics from '../../theme/metrics';
import GridentBorder from '../../components/atoms/GridentBorder';
import colors from '../../theme/color';
import SolidHeartSvg from '../../assets/svg/SolidHeartSvg.svg';
import BoldSvg from '../../assets/svg/BoldSvg.svg';
import SoildMessageSvg from '../../assets/svg/SolidMessageSvg.svg';
import SolidPersonSvg from '../../assets/svg/SolidPersonSvg.svg';
import SolidCameraSvg from '../../assets/svg/CameraSvg.svg';
import SolidGlassesSvg from '../../assets/svg/GlasessSvg.svg';
import SolidAddSvg from '../../assets/svg/AddSvg.svg';
import moment from 'moment';
import hooks from './hooks';
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar';

const MyAccountScreen = () => {
  const {navigateToHome,subscriptionData,navigateToWeb} = hooks()
  const [selectHeader, setSelectHeader] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const sortedPlanData = useMemo(() => {
    const data = [subscriptionData?.planDetails]; 
    return data.sort((a, b) => {
      if (a.planType === 'free') return -1;
      if (b.planType === 'free') return 1;
      if (a.validity === 0) return -1;
      if (b.validity === 0) return 1;
      return (a.validity / 28) - (b.validity / 28);
    });
  }, [subscriptionData]);

  const options = useMemo(() => {
    return sortedPlanData && [
      { key: '1', text: `${sortedPlanData[currentIndex]?.likeDayLimit} Likes / Day`, svg: <SolidHeartSvg height={metrics.changeByMobileDPI(25.29)} width={metrics.changeByMobileDPI(25.82)} style={styles.marginRightLessContainer} /> },
      { key: '2', text: `${sortedPlanData[currentIndex]?.crushLimit} Crushes Total`, svg: <BoldSvg height={metrics.changeByMobileDPI(27.29)} width={metrics.changeByMobileDPI(27.29)} style={styles.marginRightLessContainer} /> },
      { key: '3', text: `${sortedPlanData[currentIndex]?.messageDayLimit} Messages / Day`, svg: <SoildMessageSvg height={metrics.changeByMobileDPI(25.29)} width={metrics.changeByMobileDPI(27.82)} style={styles.marginRightLessContainer} /> },
      { key: '4', text: `${sortedPlanData[currentIndex]?.matchesLimit} Matches Only`, svg: <SolidPersonSvg height={metrics.changeByMobileDPI(25.29)} width={metrics.changeByMobileDPI(27.82)} /> },
      { key: '5', text: `Upload ${sortedPlanData[currentIndex]?.uploadImageLimit} Picture`, svg: <SolidCameraSvg height={metrics.changeByMobileDPI(22.29)} width={metrics.changeByMobileDPI(22.29)} style={styles.marginRightContainer} /> },
      { key: '6', text: `No Blind Chats`, svg: <SolidGlassesSvg height={metrics.changeByMobileDPI(22.29)} width={metrics.changeByMobileDPI(22.29)} style={styles.marginRightContainer} /> },
      { key: '7', text: `No Auto-match`, svg: <SolidAddSvg height={metrics.changeByMobileDPI(22.29)} width={metrics.changeByMobileDPI(22.29)} style={styles.marginRightContainer} /> },
    ];
  }, [sortedPlanData, currentIndex]);

  const renderHeader = ({ item, index }) => {
    const indexSetter = () => {
      setSelectHeader(index);
      setCurrentIndex(index);
      flatListRef.current.scrollToIndex({ index: index });
    };
  
    return (
      <TouchableOpacity 
      //  onPress={plan === 'FREE' ? null : indexSetter}
       style={styles.header}>
        <GridentBorder
          colors={selectHeader === index ? colors.grident1 : colors.grident3}
          borderWidth={1}
          borderRadius={metrics.changeByMobileDPI(14)}
          style={styles.gridentButtonStyle}
        >
          <View style={styles.centerAlignmentContainer}>
            <Text style={{ ...styles.headerFontStyle, color: selectHeader !== index ? colors.graySolid : colors.white }}>
              {item?.planType === 'free' ? 'Free' : item?.validity / 28 + ' Month'}
            </Text>
          </View>
        </GridentBorder>
      </TouchableOpacity>
    );
  };

  const renderOption = ({ item }) => {
    return (
      <View style={styles.optionContainer}>
        <View style={styles.svgContainer1}>
          {item.svg}
        </View>
        <View style={styles.flexContainer}>
          <Text style={styles.profileFontStyle}>{item?.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
            <FocusAwareStatusBar isTopSpace={false} isLightBar={true} barColor={'#00000000'} />

      <ScrollView>
        <View style={styles.subContainer}>
          <View style={styles.svgContainer}>
            <Logo height={metrics.changeByMobileDPI(67)} width={metrics.changeByMobileDPI(45)} />
          </View>
          <Text style={styles.relationTitleFontStyle}>RELATION</Text>
          <Text style={styles.titleFontStyle}>{subscriptionData?.planDetails?.planType?.toUpperCase()}</Text>
          <View style={styles.svgImageContainer}>
            <Image resizeMode='contain' source={require('../../assets/images/HeartShadow.png')} style={styles.subcriptionImageContainer} />
          </View>
          <GridentBorder
            colors={colors.grident1}
            borderWidth={1}
            borderRadius={metrics.changeByMobileDPI(15)}
            style={styles.gridentConatiner}
          >
            <View style={styles.headerMainContainer}>
              <FlatList
                data={sortedPlanData}
                renderItem={renderHeader}
                numColumns={4}
                contentContainerStyle={styles.contentContainerStyle}
              />
            </View>
          </GridentBorder>
          <View style={styles.centerContainer}>
            <View style={styles.fullScreenWidthStyle}>
              <FlatList
                data={options}
                renderItem={renderOption}
              />
            </View>
          </View>
          <Text style={styles.aedFontStyle}>AED {subscriptionData?.price}</Text>
          <Text style={styles.aedDescFontStyle}>AED {subscriptionData?.price} / Month</Text>
          <View style={styles.receiptContainer}>
            <Text style={styles.receiptFontStyle}>Receipt</Text>
            <View style={styles.flexDirectionContainer}>
              <Text style={styles.leftFontStyle}>Order ID:</Text>
              <View style={styles.flex}>
                <Text style={styles.rightFontStyle}>{subscriptionData?.planDetails?._id}</Text>
              </View>
            </View>
            <View style={styles.flexDirectionContainer}>
              <Text style={styles.leftFontStyle}>Date of Purchase: </Text>
              <View style={styles.flex}>
                <Text style={styles.rightFontStyle}>{moment(subscriptionData?.planDetails?.createdAt).format('DD MM, YYYY')}</Text>
              </View>
            </View>

            <View style={styles.flexDirectionContainer}>
              <Text style={styles.leftFontStyle}>Price:</Text>
              <View style={styles.flex}>
                <Text style={styles.rightFontStyle}>AED {subscriptionData?.price}</Text>
              </View>
            </View>

            <View style={styles.flexDirectionContainer}>
              <Text style={styles.leftFontStyle}>Customer:</Text>
              <View style={styles.flex}>
                <Text style={styles.rightFontStyle}>{subscriptionData?.name}</Text>
              </View>
            </View>

            <View style={styles.flexDirectionContainer}>
              <Text style={styles.leftFontStyle}>Subscription Plan: </Text>
              <View style={styles.flex}>
                <Text style={styles.rightFontStyle}>{subscriptionData?.planDetails?.planType.toUpperCase()}</Text>
              </View>
            </View>

            <View style={styles.flexDirectionContainer}>
              <View style={styles.flex}>
                <Text style={styles.rightFontStyle}> <Text style={styles.leftFontStyle}>Shipping Address: </Text>{subscriptionData?.shippingAddress?.country} {subscriptionData?.shippingAddress?.state} {subscriptionData?.shippingAddress?.city} {subscriptionData?.shippingAddress?.area}</Text>
              </View>
            </View>

          </View>
          <GridentButton
            extrenalStyle={styles.extrenalStyle}
            onClick={() => {navigateToWeb(subscriptionData?.invoiceAndReceipt)}}
            buttonText='Download Receipt'
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MyAccountScreen;
