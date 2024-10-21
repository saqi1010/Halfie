import { Animated, BackHandler, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { styles } from './style'
import GridentButton from '../../components/atoms/GridentButton'
import hooks from './hooks'
import WebView from 'react-native-webview';
import Logo from '../../assets/svg/logo.svg'
import metrics from '../../theme/metrics'
import GridentBorder from '../../components/atoms/GridentBorder'
import colors from '../../theme/color'
import LinearGradientContainer from '../../components/organisms/LinearGradientContainer'
import { CommonActions, useNavigation } from '@react-navigation/native'
import screenName from '../../theme/screenName'
import * as Keychain from 'react-native-keychain';
import { useDispatch, useSelector } from 'react-redux'
import SolidHeartSvg from '../../assets/svg/SolidHeartSvg.svg'
import BoldSvg from '../../assets/svg/BoldSvg.svg'
import SoildMessageSvg from '../../assets/svg/SolidMessageSvg.svg'
import SolidPersonSvg from '../../assets/svg/SolidPersonSvg.svg'
import SolidCameraSvg from '../../assets/svg/CameraSvg.svg'
import SolidGlassesSvg from '../../assets/svg/GlasessSvg.svg'
import SolidAddSvg from '../../assets/svg/AddSvg.svg'
import { loaderRequest } from '../../stores/action/loaderAction'
import { paymentRequest } from '../../stores/action/paymentAction'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getPlanRequest } from '../../stores/action/getPlanAction'
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar'

const Secand = ({ item, index, scrollHorizontalData, headerData ,getPlanData,plan,screenData}) => {

    const { navigateToOneTimeVerification, paymentData, webViewVisibility } = hooks()
    
    const navigation = useNavigation()
    const dispatch = useDispatch()

    
  React.useEffect(() => {
    if (getPlanData) {
        dispatch(loaderRequest(true))
      setTimeout(() => {
        dispatch(loaderRequest(false)) 
         }, 1000);
    }
  }, [dispatch, getPlanData]);
    const [selectHeader, setSelectHeader] = React.useState(0)
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const flatListRef = React.useRef(null);
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });
    const onViewRef = React.useRef((viewableItems) => {
        setCurrentIndex(viewableItems.viewableItems[0].index);
    });
    const sortedPlanData = React.useMemo(() => {
        return getPlanData && getPlanData.sort((a, b) => {
            if (a.planType === 'free') return -1;
            if (b.planType === 'free') return 1;
            if (a.validity === 0) return -1;
            if (b.validity === 0) return 1;
            return (a.validity / 28) - (b.validity / 28);
        });
    }, [getPlanData]);


    const options = sortedPlanData && [
        { key: '1', text: `${sortedPlanData[currentIndex]?.likeDayLimit} Likes / Day`, svg: <SolidHeartSvg height={metrics.changeByMobileDPI(25.29)} width={metrics.changeByMobileDPI(25.82)} style={styles.marginRightLessContainer} /> },
        { key: '2', text: `${sortedPlanData[currentIndex]?.crushLimit} Crushes Total`, svg: <BoldSvg height={metrics.changeByMobileDPI(27.29)} width={metrics.changeByMobileDPI(27.29)} style={styles.marginRightLessContainer} /> },
        { key: '3', text: `${sortedPlanData[currentIndex]?.messageDayLimit} Messages / Day`, svg: <SoildMessageSvg height={metrics.changeByMobileDPI(25.29)} width={metrics.changeByMobileDPI(27.82)} style={styles.marginRightLessContainer} /> },
        { key: '4', text: `${sortedPlanData[currentIndex]?.matchesLimit} Matches Only`, svg: <SolidPersonSvg height={metrics.changeByMobileDPI(25.29)} width={metrics.changeByMobileDPI(27.82)} /> },
        { key: '5', text: `Upload ${sortedPlanData[currentIndex]?.uploadImageLimit} Picture`, svg: <SolidCameraSvg height={metrics.changeByMobileDPI(22.29)} width={metrics.changeByMobileDPI(22.29)} style={styles.marginRightContainer} /> },
        { key: '6', text: `No Blind Chats`, svg: <SolidGlassesSvg height={metrics.changeByMobileDPI(22.29)} width={metrics.changeByMobileDPI(22.29)} style={styles.marginRightContainer} /> },
        { key: '7', text: `No Auto-match`, svg: <SolidAddSvg height={metrics.changeByMobileDPI(22.29)} width={metrics.changeByMobileDPI(22.29)} style={styles.marginRightContainer} /> },
      ];
      
    if (webViewVisibility?.url) {
        return (
            <View style={styles.positionContainer}>
                <WebView
                    source={{ uri: webViewVisibility?.url }}
                    style={styles.webview}
                    onLoadStart={() => console.log('WebView started loading')}
                    onLoad={() => console.log('WebView finished loading')}
                    onLoadEnd={() => console.log('WebView load ended')}
                    onError={() => console.log('WebView encountered an error')}
                />
            </View>
        )
    }
    const renderHeader = ({ item, index }) => {
        const indexSetter = () => {
            setSelectHeader(index)
            setCurrentIndex(index);
            flatListRef.current.scrollToIndex({ index: index });
        }

        return (
            <TouchableOpacity onPress={plan == 'FREE' ? null :indexSetter} style={styles.header}>
                <GridentBorder
                    colors={selectHeader === index ? colors.grident1 : colors.grident3}
                    borderWidth={1}
                    borderRadius={metrics.changeByMobileDPI(14)}
                    style={styles.gridentButtonStyle}
                >
                    <View style={styles.centerAlignmentContainer}>
                        <Text style={{ ...styles.headerFontStyle, color: selectHeader !== index ? colors.graySolid : colors.white }}>
                            {item?.planType === 'free' ? 'Free' : (item?.validity / 28).toFixed() + ' Month'}
                        </Text>
                    </View>
                </GridentBorder>
            </TouchableOpacity>
        )
    }

    const renderOption = ({ item, index }) => {

      
        return (
            <View style={styles.optionContainer}>
                <View style={styles.svgContainer1}>
                    {item.svg}
                </View>
                <View style={styles.flexContainer}>
                    <Text style={styles.profileFontStyle}>{item?.text}</Text>
                </View>
            </View>
        )
    }

    const scrollViewRef = useRef(null);

    const scrollToTop = () => {
        scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    };

    const renderIndicator = ({ item, index }) => {
        return (
            <View style={styles.indicatorContainer}>
                <LinearGradientContainer
                    colors={currentIndex === index ? ['#FB7BA2', '#FCE043'] : [colors.progressGrey, colors.progressGrey]}
                    style={[styles.dotsStyle]}
                />
            </View>
        );
    };

    const navigateToSuccess = () => {
        dispatch(paymentRequest({
            key:'planId',
            id:sortedPlanData[currentIndex]._id,
            paymentType:'subscription'
        }));
        console.warn("asdasd",screenData[currentIndex]);
        navigation.navigate(screenName.screenName.subScriptionForm_screen,{plan : screenData[currentIndex]})
    }

    // navigate to clear stack -> detail and form screen
      
    const resetStackAndGoToDetail = CommonActions.reset({
        index: 0,
        routes: [{ name: screenName.screenName.detail_screen }],
      });
      const resetStackAndGoTForm = CommonActions.reset({
        index: 0,
        routes: [{ name: screenName.screenName.subScriptionForm_screen }],
      });
    const getAllPlan =  async() => {
        // navigation.dispatch(resetStackAndGoToDetail);
          await dispatch(getPlanRequest(undefined, (response) => {
            if (response.length > 0) {
              const activePlans = response
                .filter(plan => plan.isActive)
                .map(plan => ({
                  planType: plan.planType,
                  isActive: plan.isActive,
                  isProfileCompleted: plan.isProfileCompleted
                }));
              if (activePlans[0]?.isActive && activePlans[0]?.isProfileCompleted == 1) {
                navigation.dispatch(resetStackAndGoToDetail);
              } else if (activePlans[0]?.isActive && activePlans[0]?.isProfileCompleted == 0) {
                navigation.dispatch(resetStackAndGoTForm);
              }
            }
          }));
      };
      React.useEffect(() => {
        getAllPlan()
    }, [])


    // 
    //   
    React.useEffect(() => {
        scrollToTop()
    }, [])

    return (
        <View style={styles.mainContainer}>
                  <FocusAwareStatusBar isTopSpace={false} isLightBar={true} barColor={'#00000000'} />
            <ScrollView ref={scrollViewRef}>
                <View style={styles.subContainer}>
                    <View style={styles.svgContainer}>
                        <Logo height={metrics.changeByMobileDPI(67)} width={metrics.changeByMobileDPI(45)} />
                    </View>
                    <Text style={styles.relationTitleFontStyle}>RELATION</Text>
                    <Text style={styles.titleFontStyle}>{item.text}</Text>
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
                                ref={flatListRef}
                                pagingEnabled
                                onViewableItemsChanged={onViewRef.current}
                                viewabilityConfig={viewConfigRef.current}
                                horizontal
                                scrollEnabled={false}
                                data={options}
                                renderItem={renderOption}
                            />
                        </View>
                    </View>
                    {/* <Text style={styles.aedFontStyle}>AED 00</Text>
                    <Text style={styles.aedDescFontStyle}>AED 00 / Month</Text> */}

                    <Text style={styles.aedFontStyle}>
    {sortedPlanData &&  `${sortedPlanData[currentIndex].currency} ${sortedPlanData[currentIndex].price}`}
</Text>
<Text style={styles.aedDescFontStyle}>
    {sortedPlanData && `${sortedPlanData[currentIndex].currency} ${sortedPlanData[currentIndex].price} / Month`}
</Text>
                    <GridentButton
                        extrenalStyle={styles.extrenalStyle}
                        onClick={navigateToSuccess}
                        buttonText='Subscribe Now'
                    />
                    {sortedPlanData &&
                        <FlatList
                            data={sortedPlanData}
                            renderItem={renderIndicator}
                            contentContainerStyle={styles.rowContainer}
                        />
                    }
                    <View style={styles.termAndConditionContianer}>
                        <Text style={styles.guidenceFontStyle}>
                            By proceeding to register for the event, I agree to the
                            <Text style={styles.guidenceFontStyleButLinkcolor}> Halfie’s Privacy Statement, Last Refund Date,
                                Community Guidelines </Text>and <Text style={styles.guidenceFontStyleButLinkcolor}>Terms of Service</Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Secand
