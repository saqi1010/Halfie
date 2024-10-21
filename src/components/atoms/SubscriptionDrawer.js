import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import DownArrowSvg from '../../assets/svg/DownArrowSvg.svg'
import metrics from '../../theme/metrics'
import font from '../../theme/font'
import colors from '../../theme/color'
import BlurDushBinSvg from '../../assets/svg/drawer_blur_svgs/BlurDushBinSvg.svg'
import BlurHeartSvg from '../../assets/svg/drawer_blur_svgs/BlurHeartSvg.svg'
import BlurHeartSvgWhite  from '../../assets/svg/drawer_blur_svgs/BlurHeartSvgWhite.svg'
import BlurDushBinSvgWhite from '../../assets/svg/drawer_blur_svgs/BlurDushBinSvgWhite.svg'
import GridentButton from './GridentButton'
import { countryRequest } from '../../stores/action/countryAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import PriceRange from '../atoms/PriceRange';
import moment from 'moment'
import { fetchStaticRequest } from '../../stores/action/fetchStaticAction'
import Location from './Location'
import BlurCameraSvg from '../../assets/svg/drawer_blur_svgs/BlurCameraSvg.svg'
import BlurChatSvg from '../../assets/svg/drawer_blur_svgs/BlurChatSvg.svg'
import BlurGlassSvg from '../../assets/svg/drawer_blur_svgs/BlurGlassSvg.svg'
import BlurPersonSvg from '../../assets/svg/drawer_blur_svgs/BlurPersonSvg.svg'
import BlurChargeSvg from '../../assets/svg/drawer_blur_svgs/BlurChargeSvg.svg'
import BlurButtonSvg from '../../assets/svg/drawer_blur_svgs/BlurButtonSvg.svg'
import screenName from '../../theme/screenName'
import * as Keychain from 'react-native-keychain';
import { userUpdateRequest } from '../../stores/action/userUpdateAction'
import { loaderRequest } from '../../stores/action/loaderAction'
const SubscriptionDrawer = ({ closeDrawer1, renderAttendance, attendanceData, setState, state,viewProfileEvent }) => {
const [webIndexData, setWebIndexDta] = React.useState(null);
const actionData = [
    {
      name:  webIndexData?.subscription?.data?.autoMatch,
      svg:  <BlurButtonSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />
    },
    {
      name: webIndexData?.subscription?.data?.likeDayLimit,
      svg:  <BlurHeartSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />
    },

    {
      name: webIndexData?.subscription?.data?.crushLimit,
      svg:  <BlurChargeSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />
    },
    {
      name: webIndexData?.subscription?.data?.messageDayLimit,
      svg:  <BlurChatSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />
    },
    {
      name: webIndexData?.subscription?.data?.matchesLimit,
      svg:  <BlurPersonSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />
    },
  
    {
      name: webIndexData?.subscription?.data?.uploadImageLimit,
      svg:  <BlurCameraSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />
    },
    {
      name: webIndexData?.subscription?.data?.uploadImageLimit,
      svg:  <BlurGlassSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />
    },
  ]

  const profileData = [
    {
      name: 'By Preferences',
      svg: <BlurDushBinSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />,
      svg1: <BlurDushBinSvgWhite height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />,
      value: 'find-matches'
    },
    {
      name: 'By Likes Received',
      svg: <BlurHeartSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />,
      svg1: <BlurHeartSvgWhite height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)}/>,
      value: 'my-fans'
    }
  ]
  let genderData = [
    {
      "id": 1,
      "name": "Mr.",
      "value": "male"
    },
    {
      "id": 2,
      "name": "Miss",
      "value": "female"
    }
  ]
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [genderValue, setGenderData] = useState('');
 
  
  const [nationalityVisibility, setNationalityVisibility] = useState(false);
  const [currencyVisibility, setCurrencyVisibility] = useState(false);
  const [ethnicityVisibility, setEthnicityVisibility] = useState(false);
  const toggleNationailty = () => setNationalityVisibility(!nationalityVisibility);
  const toggleCurrency = () => setCurrencyVisibility(!currencyVisibility);
  const toggleEthnicity = () => setEthnicityVisibility(!ethnicityVisibility);

  const [listData, setListData] = useState({
    nationalityData:[],
    ethnicityData:[]
  });
  const [value, setValue] = useState({
    gender:null,
    nationailty:null,
    ethnicity:null,
    age:0,
    location:'area'
  });


  
  // range
  const [dateRange, setDateRange] = useState({ min: 18, max: 100 });

  const handleValueChangeDate = (min, max) => {
    setDateRange({ min, max });
  };
  // 
  const renderGender = ({ item }) => {
    const setCountryData = () => {
      setValue(prevState => ({
        ...prevState,
        gender: item 
      }));
      toggleCurrency();
    };

    // let lastElement = genderData[genderData.length - 1].name === item.name;
    return (
      <TouchableOpacity
        onPress={setCountryData}
        style={[
          styles.listingItem,
        ]}
      >

        <Text style={styles.currencyFontStyle}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  
  const defaultHitApi = async() => {
    await dispatch(fetchStaticRequest('nationality', (response) => {
      setListData(prevState => ({
        ...prevState,
        nationalityData: response 
      }));
    }))
    await dispatch(fetchStaticRequest('ethnicity', (response) => {
      setListData(prevState => ({
        ...prevState,
        ethnicityData: response 
      }));
    }))
  }

  const getWebIndexData = async() => {
    try {
      const credentials = await Keychain.getGenericPassword({ service: 'userLoginData' });
      const convertIntoParse = await JSON.parse(credentials.username);
      if (convertIntoParse) {
        setWebIndexDta(convertIntoParse)
        setValue(prevState => ({
          ...prevState,
          gender:convertIntoParse?.aboutMe?.gender == 'male' ? genderData[0] : genderData[1],
          nationailty:convertIntoParse?.aboutMe?.nationality,
          ethnicity:convertIntoParse?.aboutMe?.ethnicity || null,
          age:convertIntoParse?.aboutMe?.age,
          location:convertIntoParse?.mypreference?.areaRange
        }));
        locationEvent(convertIntoParse?.mypreference?.areaRange)
      }
    } catch (error) {
      console.log('error===>>',error.message)
    }
  }

  const initialData = () => {
    getWebIndexData()
  }

  React.useEffect(() => {
    defaultHitApi()
    initialData()
  }, [])
  // ////
  let questionReplaceWithId = async (qnaData) => {
    try {
      let fetchData = [];
      if (qnaData) {
        fetchData = qnaData;
      } else {
        await dispatch(fetchStaticRequest('questions', (fetchedQuestionIds) => {
          fetchData = fetchedQuestionIds;
        }));
      }
      const questionIds = fetchData.length ? fetchData : [
        { "_id": "667bdc48bfd9cf6b7f2f8b26", "title": "Describe yourself..." },
        { "_id": "667bdc48bfd9cf6b7f2f8b2a", "title": "What are you looking for?" },
        { "_id": "667bdc48bfd9cf6b7f2f8b28", "title": "What are your dislikes?" },
        { "_id": "667bdc48bfd9cf6b7f2f8b27", "title": "What are your likes?" },
        { "_id": "667bdc48bfd9cf6b7f2f8b2b", "title": "What is a fun fact about you?" },
        { "_id": "667bdc48bfd9cf6b7f2f8b29", "title": "What is your ideal date?" }
      ];
      const qna = qnaData ? qnaData : [
        { answer: 'Testing', question: "What are your likes?" },
        { answer: 'Testing', question: "What are your dislikes?" },
        { answer: 'Testing', question: "What is a fun fact about you?" },
        { answer: 'Testing', question: "What is your ideal date?" },
        { answer: 'Testing', question: "What are you looking for?" }
      ];
  
      const updatedQna = qna.map(item => {
        const matchedQuestion = questionIds.find(q => q.question === item.question);
        return {
          answer: item.answer,
          question: matchedQuestion ? matchedQuestion._id : item.question
        };
      });
      return  updatedQna
  
    } catch (error) {
      console.log("error", error);
    }
  };
  
  const createUserBody = async (data) => {
  

    const aboutMe = data.aboutMe || {};
    const myPreference = data.mypreference || {};
    // console.warn("======1====>>>",myPreference.gender);
    // console.warn("=======2===>>>",myPreference.ageRange);
    const mapToIds = (array) => array?.map((item) => item._id) || [];
    let qna = await questionReplaceWithId(aboutMe?.qna);
    return {
      birthday:"2000-04-25",
      gender: value.gender,
      interest: {
        bookGenre: mapToIds(aboutMe.interest?.bookGenre),
        gameGenre: mapToIds(aboutMe.interest?.gameGenre),
        hobbies: mapToIds(aboutMe.interest?.hobbies),
        moviesGenre: mapToIds(aboutMe.interest?.moviesGenre),
        musicGenre: mapToIds(aboutMe.interest?.musicGenre)
      },
      name: aboutMe?.fullName || "Rasbhari",
      nationality: value.nationailty?._id,
      ethnicity: value?.ethnicity?._id,
      personalityType: aboutMe?.personalityType?._id,
      qna,
      prefrences: {
        gender: (aboutMe.fullName?.leftData === 'Mr.' ? 'male' : 'female'),
        ageRange: { minAge: dateRange.min, maxAge:  dateRange.max },
        areaRange: value.location || "country",
        educationLevel: myPreference.educationLevel?.toLowerCase() || "bachelors",
        bookGenre: mapToIds(myPreference.bookGenre),
        gameGenre: mapToIds(myPreference.gameGenre),
        hobbies: mapToIds(myPreference.hobbies),
        moviesGenre: mapToIds(myPreference.moviesGenre),
        musicGenre: mapToIds(myPreference.musicGenre),
        nationality: mapToIds(myPreference.nationality),
        ethnicity: mapToIds(myPreference.ethnicity),
        religionType: mapToIds(myPreference.religionType)
      },
      religionType: aboutMe.religionType?._id,
      shortBio: {
        areaOfStudy: aboutMe.shortBio?.areaOfStudy,
        describeYourSelf: aboutMe.shortBio?.describeYourSelf ?? '',
        designation: aboutMe.shortBio?.designation,
        educationLevel: aboutMe.shortBio?.educationLevel?.toLowerCase() || "bachelors",
        study: aboutMe.shortBio?.study,
        workIn: aboutMe.shortBio?.workIn
      },
      isVisible: {
        age: aboutMe.isVisible?.age ?? false,
        nationality: aboutMe.isVisible?.nationality ?? true,
        religionType: aboutMe.isVisible?.religionType ?? true,
        personalityType: aboutMe.isVisible?.personalityType ?? true,
        shortBio: {
          study: aboutMe.isVisible?.shortBio?.study ?? false,
          workIn: aboutMe.isVisible?.shortBio?.workIn ?? false,
          designation: aboutMe.isVisible?.shortBio?.designation ?? false,
          areaOfStudy: aboutMe.isVisible?.shortBio?.areaOfStudy ?? false,
          describeYourSelf: false // Static value
        }
      }
    };
  };
  
  const savePerfernces = async() => {
  
    const userBody = await createUserBody(webIndexData);
    await dispatch(userUpdateRequest(userBody, (response) => {
      dispatch(loaderRequest(false));
      closeDrawer1()
    }));
  }
  // 
  const [selectTheViewProfile, setSelectTheViewProfile] = useState(
    {
      name: 'By Preferences',
      svg: <BlurDushBinSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />,
      svg1: <BlurDushBinSvgWhite height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)}  />,
      value: 'find-matches'
    }
  );
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);
  const toggleDropdown1 = () => setIsOpen1(!isOpen1);
  const toggleDropdown2 = () => setIsOpen2(!isOpen2);
  const toggleDropdown3 = () => setIsOpen3(!isOpen3);

  // 
  const renderProfile = ({ item }) => {
    const isSelected = item.value === selectTheViewProfile.value;
    const setViewProfile = () => {
      setSelectTheViewProfile(item)
    }
    return (
      <TouchableOpacity 
        style={[styles.profileContainer, isSelected && styles.backgroundColorStyle]} 
        onPress={() => setViewProfile(item)}
      >
        {!isSelected ? item.svg : item.svg1}
        <Text style={[styles.iconFontStyle,isSelected && styles.titleColorStyle ]}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  const navigateToMyPreference = () => {
    navigation.navigate(screenName.screenName.subScriptionForm_screen,{
      webIndexData:webIndexData,
      index:1
    })
  }

  const renderRemaning = ({ item }) => {
    return (
      <TouchableOpacity
      style={styles.remaingContainer}
      >
        {item.svg}
        <Text style={{...styles.currencyFontStyle,marginLeft:metrics.changeByMobileDPI(5)}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const locationEvent = (locationData) => {
    setValue(prevState => ({
      ...prevState,
      location :locationData 
    }));
  }
  // 

  return (
    <View style={styles.container}>
      {/* First Dropdown */}
      <TouchableOpacity style={styles.dropDownContainer} onPress={toggleDropdown1}>
        <Text style={styles.filterFontStyle}>View Profiles:</Text>
        <View style={[styles.dropDownStyle, isOpen1 && styles.dropDownOpen]}>
          <DownArrowSvg height={metrics.changeByMobileDPI(11)} width={metrics.changeByMobileDPI(15)} />
        </View>
      </TouchableOpacity>
      {isOpen1 && (
        <>
        <View style={styles.dropDownSubContainer}>
      <FlatList
        data={profileData}
        renderItem={renderProfile}
        keyExtractor={(item) => item.value}
        contentContainerStyle={styles.listContainer}
        />
        </View>
          <GridentButton
              onClick={() => viewProfileEvent(selectTheViewProfile.value)}
              externalGridentStyle={styles.borderContainerStyle}
              extrenalStyle={[styles.extrenalStyle]}
              buttonText='View Profiles'
              />
              </>
      )}

      {/* Second Dropdown */}
      <TouchableOpacity style={styles.dropDownContainer} onPress={toggleDropdown2}>
        <Text style={styles.filterFontStyle}>Filter Preferences:</Text>
        <View style={[styles.dropDownStyle, isOpen2 && styles.dropDownOpen]}>
          <DownArrowSvg height={metrics.changeByMobileDPI(11)} width={metrics.changeByMobileDPI(15)} />
        </View>
      </TouchableOpacity>
      {isOpen2 && (
        <View >
           <Text style={styles.titleFontStyle}>By Gender:</Text>
        <TouchableOpacity onPress={toggleCurrency} style={[styles.searchContainer, currencyVisibility && styles.removeBottomBorderRadius]}>
          <Text style={styles.searchFontStyle}>{value?.gender?.name? value.gender?.name : `Select Gender`}</Text>
          <DownArrowSvg height={metrics.changeByMobileDPI(15)} width={metrics.changeByMobileDPI(15)} />
        </TouchableOpacity>
        {
          currencyVisibility &&
          <View style={styles.listingContainer}>
            <FlatList data={genderData} renderItem={renderGender} contentContainerStyle={styles.contentContainerStyle} />
          </View>
        }
        <Text style={styles.titleFontStyle}>By Age:</Text>
        <PriceRange
          min={18}
          max={100}
          onValueChange={handleValueChangeDate}
        />
        <View style={styles.centerContainer}>
          <Text style={styles.titleFontStyle}>From {dateRange.min} -  {dateRange.max}</Text>
        </View>
   
        <GridentButton
          onClick={savePerfernces}
          externalGridentStyle={styles.borderContainerStyle}
          extrenalStyle={[styles.extrenalStyle]}
          buttonText='Save Preference'
        />
        <TouchableOpacity onPress={navigateToMyPreference}>
          <Text style={styles.allPreferencesFontStyle}>View all Preferences</Text>
        </TouchableOpacity>
        </View>
      )}

      {/* Third Dropdown */}
      <TouchableOpacity style={styles.dropDownContainer} onPress={toggleDropdown3}>
        <Text style={styles.filterFontStyle}>Remaining Actions:</Text>
        <View style={[styles.dropDownStyle, isOpen3 && styles.dropDownOpen]}>
          <DownArrowSvg height={metrics.changeByMobileDPI(11)} width={metrics.changeByMobileDPI(15)} />
        </View>
      </TouchableOpacity>
      {isOpen3 && (
        <View style={styles.dropDownSubContainer}>
          <FlatList data={actionData} renderItem={renderRemaning} contentContainerStyle={styles.remaingContentContainerStyle}  />
        </View>
      )}
    </View>
  )
}

export default SubscriptionDrawer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  dropDownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: metrics.changeByMobileDPI(10),
  },
  dropDownStyle: {
 
  },
  dropDownOpen: {
    transform: [
      {
        rotate: '-90deg',
      },
    ],
  },
  dropDownSubContainer: {
   backgroundColor:colors.white + 70,
   borderRadius:metrics.changeByMobileDPI(10),
   paddingTop:metrics.changeByMobileDPI(15),
   paddingHorizontal:metrics.changeByMobileDPI(10)
  },
  filterFontStyle: {
    fontSize: font.size.font16,
    fontFamily: font.type.latoSemiBold,
    color: colors.graySolid,
  },
  // 
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:colors.white,
    borderRadius:metrics.changeByMobileDPI(12),
    paddingVertical:metrics.changeByMobileDPI(7),
    marginBottom:metrics.changeByMobileDPI(15),
    paddingHorizontal:metrics.changeByMobileDPI(10)
  },
  iconFontStyle:{
    fontSize:font.size.font14,
    fontFamily:font.type.montserratMedium,
    color:colors.graySolid,
    marginLeft:metrics.changeByMobileDPI(10)
  },
  backgroundColorStyle:{
    backgroundColor:colors.secondary
  },
  titleColorStyle:{
    color:colors.white
  },
  borderContainerStyle: {
    borderRadius: metrics.changeByMobileDPI(15),
    height: metrics.changeByMobileDPI(34),
    
  },
  extrenalStyle: {
    borderRadius: metrics.changeByMobileDPI(100),
    marginTop: metrics.changeByMobileDPI(15),
    marginBottom:metrics.changeByMobileDPI(20)
  },
  // ///


  listContainer: {
    paddingVertical: 8,
  },

  selectedProfileContainer: {
    backgroundColor: colors.secondary, // Change to your desired selected background color
  },

  selectedIconFontStyle: {
    color: colors.primary, // Change to your desired selected text color
  },
  ////
  searchMainContainer: {
    marginHorizontal: metrics.changeByMobileDPI(20)
  },
  currencyFontStyle: {
    fontSize: font.size.font13,
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
    right: 0,
    // height:200,
    borderRadius:metrics.changeByMobileDPI(30),
    overflow:'hidden',
    marginBottom:metrics.changeByMobileDPI(15)
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

  titleFontStyle: {
    fontSize: font.size.font14,
    fontFamily: font.type.quicksandMedium,
    color: colors.graySolid,
    marginTop: metrics.changeByMobileDPI(15)
  },
  centerContainer: {
    alignSelf: 'center',
    marginTop: metrics.changeByMobileDPI(10),
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
  actionContainer: {
    borderRadius: metrics.changeByMobileDPI(10),
    backgroundColor: colors.white,
    alignSelf: 'center',
    flexDirection: 'row',
    paddingVertical: metrics.changeByMobileDPI(6),
    marginBottom: metrics.changeByMobileDPI(10),
    paddingHorizontal: metrics.changeByMobileDPI(10),
    marginRight: metrics.changeByMobileDPI(10)
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

  attendanceSectionStyle: {
    backgroundColor: colors.white + 70,
    borderRadius: metrics.changeByMobileDPI(10),
    padding: metrics.changeByMobileDPI(15),
    paddingBottom: metrics.changeByMobileDPI(5),
    marginVertical: metrics.changeByMobileDPI(20)
  },
  remaningSectionStyle: {
    backgroundColor: colors.white + 70,
    borderRadius: metrics.changeByMobileDPI(10),
    paddingBottom: metrics.changeByMobileDPI(5),
    marginVertical: metrics.changeByMobileDPI(20),
    paddingLeft: metrics.changeByMobileDPI(15),
    paddingTop: metrics.changeByMobileDPI(15)
  },
  halfieTermsAndConditionFontStyleLinkColorCenter: {
    fontSize: font.size.font13,
    fontFamily: font.type.quicksandMedium,
    color: colors.linkBlue,
    alignSelf: 'center',
    marginTop: metrics.changeByMobileDPI(-10),
    marginBottom: metrics.changeByMobileDPI(20)
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

  searchContainer: {
    height: metrics.changeByMobileDPI(30),
    borderRadius: metrics.changeByMobileDPI(30),
    paddingHorizontal: metrics.changeByMobileDPI(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    marginTop: metrics.changeByMobileDPI(15)
  },
  searchFontStyle: {
    fontSize: font.size.font12,
    fontFamily: font.type.quicksandMedium,
    color: colors.graySolid,
    includeFontPadding: false
  },
  listingItem: {
    paddingHorizontal: metrics.changeByMobileDPI(15),
    justifyContent: 'center',
    backgroundColor: colors.white,
    height:metrics.changeByMobileDPI(35),
    
  },
  maxHeightContainer: {
    maxHeight: metrics.changeByMobileDPI(100),
  },
  remaingContainer:{
    height:metrics.changeByMobileDPI(35),
    borderRadius:metrics.changeByMobileDPI(10),
    backgroundColor:colors.white,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:metrics.changeByMobileDPI(10),
    marginRight:metrics.changeByMobileDPI(10),
    marginBottom:metrics.changeByMobileDPI(10)
  },
  remaingContentContainerStyle:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center'
  },
  allPreferencesFontStyle:{
    fontSize: font.size.font14,
    fontFamily: font.type.quicksandMedium,
    color: colors.linkBlue,
    alignSelf:'center',
    marginBottom:metrics.changeByMobileDPI(20)
  }


})
