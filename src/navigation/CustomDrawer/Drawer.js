import React, { useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HalfieLogo from '../../assets/svg/logo.svg'
import { CommonActions, useNavigation } from '@react-navigation/native';
import metrics from '../../theme/metrics';
import font from '../../theme/font';
import colors from '../../theme/color';
import PriceRange from '../../components/atoms/PriceRange';
import DownSvg from '../../assets/svg/DownSvg.svg'
import { useDispatch, useSelector } from 'react-redux';
import { drawerAction } from '../../stores/action/drawerAction';
import GradientLine from '../../components/atoms/GridentLine';

import YoutubeSvg from '../../assets/svg/drawer_svgs/YoutubeSvg.svg'
import NetSvg from '../../assets/svg/drawer_svgs/InternetSvg.svg'
import CameraSvg from '../../assets/svg/drawer_svgs/CameraSvg.svg'
import TwitterSvg from '../../assets/svg/drawer_svgs/TwitterSvg.svg'
import FaceBookSvg from '../../assets/svg/drawer_svgs/FaceBookSvg.svg'
import GitHubSvg from '../../assets/svg/drawer_svgs/GitHubSvg.svg'
import GridentButton from '../../components/atoms/GridentButton';


import BlurCameraSvg from '../../assets/svg/drawer_blur_svgs/BlurCameraSvg.svg'
import BlurChatSvg from '../../assets/svg/drawer_blur_svgs/BlurChatSvg.svg'
import BlurDushBinSvg from '../../assets/svg/drawer_blur_svgs/BlurDushBinSvg.svg'
import BlurGlassSvg from '../../assets/svg/drawer_blur_svgs/BlurGlassSvg.svg'
import BlurPersonSvg from '../../assets/svg/drawer_blur_svgs/BlurPersonSvg.svg'
import BlurChargeSvg from '../../assets/svg/drawer_blur_svgs/BlurChargeSvg.svg'
import BlurButtonSvg from '../../assets/svg/drawer_blur_svgs/BlurButtonSvg.svg'
import BlurHeartSvg from '../../assets/svg/drawer_blur_svgs/BlurHeartSvg.svg'









import { attendanceData } from '../../theme/staticData';
import GridentBorder from '../../components/atoms/GridentBorder';
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar';



const Drawer = ({ navigation }) => {
  const { openDrawer, closeDrawer ,bodyStaff} = useSelector((state) => state.globalDrawer);
  const closeDrawer1 = () => {
    closeDrawer()
  };

  const dispatch = useDispatch();

  const [range, setRange] = useState({ min: 10, max: 100 });
  const [currencyData, setCurrencyData] = useState('');
  const [currencyVisibility, setCurrencyVisibility] = useState(false);
  const toggleCurrency = () => setCurrencyVisibility(!currencyVisibility)


  const handleValueChange = (min, max) => {
    setRange({ min, max });
  };

  const countryData = [
    {
      currencyName: "All",
      Price: 10,
      CountryName: 'All'
    },
    {
      currencyName: "INR",
      Price: 10,
      CountryName: 'India'
    },
    {
      currencyName: "USA",
      Price: 10,
      CountryName: 'United States of America'
    },
    {
      currencyName: "UAE",
      Price: 20,
      CountryName: 'The United Arab Emirates'
    }, {
      currencyName: "UAE",
      Price: 30,
      CountryName: 'The United Arab Emirates'
    },
    {
      currencyName: "AUD",
      Price: 40,
      CountryName: 'Australia'
    },
    {
      currencyName: "NZD",
      Price: 50,
      CountryName: 'New Zealand'
    },
    {
      currencyName: "UK",
      Price: 60,
      CountryName: 'United Kingdom'
    },
  ]

  const profileData = [
    {
      name:'By Preferences',
      svg:  <BlurDushBinSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />
    },
    {
      name:'By Likes Received',
      svg:  <BlurHeartSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />
    }
  ]

  const actionData = [
    {
      name:'50',
      svg:  <BlurButtonSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />
    },
    {
      name:'150',
      svg:  <BlurHeartSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />
    },

    {
      name:'100',
      svg:  <BlurChargeSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />
    },
    {
      name:'200',
      svg:  <BlurChatSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />
    },
    {
      name:'150',
      svg:  <BlurPersonSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />
    },
  
    {
      name:'7',
      svg:  <BlurCameraSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />
    },
    {
      name:'2',
      svg:  <BlurGlassSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />
    },
  ]

  const renderCountry = ({ item, index }) => {
    const setCountryData = () => {
      setCurrencyData(item)
      dispatch(drawerAction({
        ...openDrawer,
        ...closeDrawer,
        settedItem: item
      }));
      toggleCurrency()
    }
    let lastElement = countryData[countryData.length - 1].currencyName == item?.currencyName
    return (
      <TouchableOpacity onPress={setCountryData} style={[styles.listingContianer, lastElement && styles.borderBottomRadiusContainer]}>
        <Text style={styles.currencyFontStyle}>{item.CountryName}({item.currencyName})</Text>
      </TouchableOpacity>
    )
  }

  const renderAttendance = ({ item, index }) => {
    return (
      <View style={styles.attendanceContainer}>
        <Image source={item.image} style={styles.imageStyle} />
        <Text style={styles.nameFontStyle}>{item.name}</Text>
      </View>
    )
  }


  const renderProfile = ({ item, index }) => {
    return (
      <View style={styles.profileContainer}>
  {item.svg}
        <Text style={styles.iconFontStyle}>{item.name}</Text>
      </View>
    )
  }

  const renderAction= ({ item, index }) => {
    return (
      <View style={styles.actionContainer}>
  {item.svg}
        <Text style={styles.iconFontStyle}>{item.name}</Text>
      </View>
    )
  }


  const closeDrawerEvent = () => {
    navigation.closeDrawer()
  }
  return (
    <GridentBorder
    colors={colors.gridentLight1}
    borderWidth={1.5}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    borderRadius={metrics.changeByMobileDPI(12)}
    style={styles.gridentContainer}>
    <View style={styles.flexContainer}>
    <FocusAwareStatusBar isTopSpace={false} isLightBar={true} barColor={'#00000000'} />

      {/* <View style={styles.profileHeaderContainer}>
      </View> */}
      <View style={styles.profileOptionsContainer}>
        <View style={styles.profileDetailsContainer}>
          <HalfieLogo height={metrics.changeByMobileDPI(30)} width={metrics.changeByMobileDPI(30)} />
          <Text style={styles.userNameText}>HALFIE</Text>
        </View>
      </View>

      <ScrollView>


        {/* --------------------- */}
        {/* Event Filter */}
    {bodyStaff && bodyStaff}
        {/* ----- */}


        {/* --------------------- */}

        <View style={styles.footerSection}>
          <GradientLine
            colors={colors.grident1}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.lineContainer}
          />
          <View style={styles.termAndConditionContianer}>
            <Text style={styles.halfieTermsAndConditionFontStyle}>Send us your feedback or support request on<Text style={styles.halfieTermsAndConditionFontStyleLinkColor}>helpandsupport@halfie.com</Text></Text>
            <Text style={[styles.halfieTermsAndConditionFontStyle, styles.marginTopContainer]}>Check out our blogs section at<Text style={styles.halfieTermsAndConditionFontStyleLinkColor}>www.halfie.com/blogs</Text></Text>
            <View style={styles.flexDirectionContiner}>
              <YoutubeSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)} style={styles.marginLeftContainer} />
              <NetSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)} style={styles.marginLeftContainer} />
              <CameraSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)} style={styles.marginLeftContainer} />
              <TwitterSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)} style={styles.marginLeftContainer} />
              <FaceBookSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)} style={styles.marginLeftContainer} />
              <GitHubSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)} />
            </View>
            <GridentButton
              onClick={closeDrawer1}
              externalGridentStyle={styles.borderContainerStyle}
              extrenalStyle={[styles.extrenalStyle]}
              buttonText='Invite Your Friend'
            />
          </View>
        </View>
      </ScrollView>

    </View >
    </GridentBorder>

  );
}

export default (Drawer);
const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    // backgroundColor: colors.lightGray
  },
  profileHeaderContainer: {
    flexDirection: "row",
    alignSelf: 'flex-end',
    marginTop: metrics.changeByMobileDPI(15),
    marginHorizontal: metrics.changeByMobileDPI(15),

  },
  profileHeaderSubContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  profileImage: {
    height: metrics.changeByMobileDPI(48),
    width: metrics.changeByMobileDPI(48),
    borderRadius: metrics.changeByMobileDPI(24),

  },
  profileDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: metrics.changeByMobileDPI(20),
    marginBottom: metrics.changeByMobileDPI(20),
    marginTop: metrics.changeByMobileDPI(20),
  },
  userNameText: {
    fontSize: font.size.font26,
    fontFamily: font.type.quicksandBold,
    color: colors.black,
    marginLeft:metrics.changeByMobileDPI(10)
  },
  userEmailText: {
    fontSize: metrics.changeByMobileDPI(12),
    fontFamily: font.type.quicksandRegular,
    marginBottom: metrics.changeByMobileDPI(-4)
  },
  profileOptionsContainer: {
  },
  profileOptionsItemContainer: {
    marginBottom: metrics.changeByMobileDPI(32),
    flexDirection: "row",
    alignItems: "center"
  },
  profileOptionsItemText: {
    fontSize: metrics.changeByMobileDPI(12),
    fontFamily: font.type.latoBold,
    marginBottom: metrics.changeByMobileDPI(-4),
    marginLeft: metrics.changeByMobileDPI(11)
  },
  filterFontStyle: {
    fontSize: font.size.font14,
    fontFamily: font.type.latoBold,
    color: colors.graySolid,
  },
  searchContainer: {
    height: metrics.changeByMobileDPI(24),
    borderRadius: metrics.changeByMobileDPI(10),
    paddingHorizontal: metrics.changeByMobileDPI(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    marginTop: metrics.changeByMobileDPI(15)
  },
  searchFontStyle: {
    fontSize: font.size.font10,
    fontFamily: font.type.quicksandMedium,
    color: colors.graySolid,
    includeFontPadding: false
  },
  searchMainContainer: {
    marginHorizontal: metrics.changeByMobileDPI(20)
  },
  currencyFontStyle: {
    fontSize: font.size.font10,
    fontFamily: font.type.quicksandMedium,
    color: colors.black,
  },
  listingContianer: {
    height: metrics.changeByMobileDPI(30),
    backgroundColor: colors.white,
    paddingHorizontal: metrics.changeByMobileDPI(15),
    justifyContent: 'center'

  },
  contentContainerStyle: {
  },
  removeBottomBorderRadius: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  borderBottomRadiusContainer: {
    borderBottomRightRadius: metrics.changeByMobileDPI(10),
    borderBottomLeftRadius: metrics.changeByMobileDPI(10),
  },
  listingContainer: {
    zIndex: 100,
    position: 'absolute',
    top: metrics.changeByMobileDPI(55),
    left: 0,
    right: 0
  },
  lineContainer: {
    width: metrics.screenWidth / 1.79,
    height: 1.5
  },
  footerSection: {
    marginHorizontal: metrics.changeByMobileDPI(20),
  },
  infoFontStyle: {
    fontSize: font.size.font14,
    fontFamily: font.type.quicksandRegular,
    color: colors.black,
    marginBottom: metrics.changeByMobileDPI(20),
    marginHorizontal: metrics.changeByMobileDPI(20)
  },
  halfieTermsAndConditionFontStyleLinkColor: {
    fontSize: font.size.font13,
    fontFamily: font.type.quicksandMedium,
    color: colors.linkBlue,
  },
  halfieTermsAndConditionFontStyle: {
    fontSize: font.size.font13,
    fontFamily: font.type.quicksandMedium,
    color: colors.graySolid,
    textAlign: 'center'
  },
  extrenalStyle: {
    borderRadius: metrics.changeByMobileDPI(100),
    marginTop: metrics.changeByMobileDPI(15),
    marginBottom:metrics.changeByMobileDPI(20)
  },
  termAndConditionContianer: {
    marginTop: metrics.changeByMobileDPI(20)
  },
  marginTopContainer: {
    marginTop: metrics.changeByMobileDPI(10)

  },
  flexDirectionContiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: metrics.changeByMobileDPI(20)
  },
  marginLeftContainer: {
    marginRight: metrics.changeByMobileDPI(10)
  },
  borderContainerStyle: {
    borderRadius: metrics.changeByMobileDPI(15),
    height: metrics.changeByMobileDPI(34),
  },
  titleFontStyle: {
    fontSize: font.size.font12,
    fontFamily: font.type.quicksandMedium,
    color: colors.graySolid,
    marginTop: metrics.changeByMobileDPI(15)
  },
  centerContainer: {
    alignSelf: 'center',
    marginTop: metrics.changeByMobileDPI(10),
    marginBottom: metrics.changeByMobileDPI(15)
  },
  marginRightContainer: {
    marginTop: metrics.changeByMobileDPI(0),
    marginBottom: metrics.changeByMobileDPI(20)
  },
  attendanceContainer: {
    borderRadius: metrics.changeByMobileDPI(10),
    backgroundColor: colors.white,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: metrics.changeByMobileDPI(6),
    marginBottom: metrics.changeByMobileDPI(10)
  },
  profileContainer:{
  borderRadius: metrics.changeByMobileDPI(10),
    backgroundColor: colors.white,
    alignSelf: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: metrics.changeByMobileDPI(6),
    marginBottom: metrics.changeByMobileDPI(10),
    paddingHorizontal:metrics.changeByMobileDPI(10),
    marginRight:metrics.changeByMobileDPI(10)
  },

  actionContainer:{
    borderRadius: metrics.changeByMobileDPI(10),
    backgroundColor: colors.white,
    alignSelf: 'center',
    flexDirection: 'row',
    paddingVertical: metrics.changeByMobileDPI(6),
    marginBottom: metrics.changeByMobileDPI(10),
    paddingHorizontal:metrics.changeByMobileDPI(10),
    marginRight:metrics.changeByMobileDPI(10)
  },
  imageStyle: {
    height: metrics.changeByMobileDPI(20),
    width: metrics.changeByMobileDPI(20),
    borderRadius: metrics.changeByMobileDPI(100)
  },
  nameFontStyle: {
    fontSize: font.size.font12,
    fontFamily: font.type.montserratMedium,
    color: colors.graySolid,
    marginLeft: metrics.changeByMobileDPI(10)
  },
  iconFontStyle:{
    fontSize: font.size.font12,
    fontFamily: font.type.montserratMedium,
    color: colors.black,
    marginLeft: metrics.changeByMobileDPI(10)
  },
  attendanceSectionStyle: {
    backgroundColor: colors.white + 70,
    borderRadius: metrics.changeByMobileDPI(10),
    padding: metrics.changeByMobileDPI(15),
    paddingBottom: metrics.changeByMobileDPI(5),
    marginVertical: metrics.changeByMobileDPI(20)
  },
  remaningSectionStyle:{
    backgroundColor: colors.white + 70,
    borderRadius: metrics.changeByMobileDPI(10),
    paddingBottom: metrics.changeByMobileDPI(5),
    marginVertical: metrics.changeByMobileDPI(20),
    paddingLeft:metrics.changeByMobileDPI(15),
    paddingTop:metrics.changeByMobileDPI(15)
  },
  halfieTermsAndConditionFontStyleLinkColorCenter:{
    fontSize: font.size.font13,
    fontFamily: font.type.quicksandMedium,
    color: colors.linkBlue,
    alignSelf:'center',
    marginTop:metrics.changeByMobileDPI(-10),
    marginBottom:metrics.changeByMobileDPI(20)
  },
  contentContainerStyle:{
    flexDirection:'row',
    flexWrap:'wrap',
  },
  gridentContainer:{
    flex:1
  }
 
})