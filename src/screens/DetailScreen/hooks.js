
import { useIsFocused, useNavigation } from '@react-navigation/native';
import screenName from '../../theme/screenName';
import images from '../../theme/images';
import Hobbies from '../../components/molecules/Hobbies';
import { Text, View } from 'react-native';
import { styles } from './style';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subscripitonDetailRequest } from '../../stores/action/subscripitonDetailAction';
import BechlareSvg from '../../assets/svg/BechlareSvg.svg';
import BagSvg from '../../assets/svg/BagSvg.svg';
import OpenBookSvg from '../../assets/svg/OpenBookSvg.svg';
import PuzzaleSvg from '../../assets/svg/PuzzleSvg.svg';
import metrics from '../../theme/metrics';
import SubcriptionProfileDescription from '../../components/molecules/SubcriptionProfileDescription';
import { matchOperationRequest } from '../../stores/action/matchOperationAction';
import { drawerAction } from '../../stores/action/drawerAction';
import CountryAndPriceFilter from '../../components/molecules/CountryAndPriceFilter';
import SubscriptionDrawer from '../../components/atoms/SubscriptionDrawer';
import PushNotification from "react-native-push-notification";
import messaging from '@react-native-firebase/messaging';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { delay } from '../../utils/delay';

const hooks = () => {
  const { subscriptionDetailData } = useSelector((state) => state.subscription);
  const dispatch = useDispatch();
  const subscriptonData = subscriptionDetailData?.[0];
  const [drawerValue, setDraweredValue] = React.useState(null)
  const [loader, setLoader] = React.useState(false)
  const [timerFinished, setTimerFinished] = useState(false);

  
 let userInfoData = subscriptonData &&  [
    {
      svg:<BechlareSvg height={metrics.changeByMobileDPI(28)} width={metrics.changeByMobileDPI(28)} />,
      title:subscriptonData?.shortBio?.study,
      description:subscriptonData?.shortBio?.educationLevel,
    },
    {
      svg:<BagSvg height={metrics.changeByMobileDPI(28)} width={metrics.changeByMobileDPI(28)} />,
      title:subscriptonData?.shortBio?.workIn,
      description:'PixelCraft Studios'
    },
    {
      svg:<OpenBookSvg height={metrics.changeByMobileDPI(28)} width={metrics.changeByMobileDPI(28)} />,
      title:subscriptonData?.shortBio?.designation,
      description:subscriptonData?.shortBio?.areaOfStudy,
    },
    {
      svg:<PuzzaleSvg height={metrics.changeByMobileDPI(28)} width={metrics.changeByMobileDPI(28)} />,
      title:subscriptonData?.personalityType?.title,
      description:'The Architect'
    },
  ];

  const hobbiesData = [
    {
      name:'Arts & Craft',
      image:images.hobbiesImageData.hobbies1
    },
    {
      name:'Bird Watching',
      image:images.hobbiesImageData.hobbies2
    },
    {
      name:'Cooking',
      image:images.hobbiesImageData.hobbies3
    }]
    const [reportVisibility, setReportVisibility] = React.useState(false)
    const toggleReport = () => setReportVisibility(!reportVisibility)
  const renderUserInfo = ({ item, index }) => {
    return (
      <View style={styles.proileFlexRowContainer}>
        <View style={styles.profileSvgContainer}>
          {item.svg}
        </View>
        <View style={styles.flexContainer}>
          <Text style={styles.profileTitleFontStyle}>{item.title}</Text>
          <Text style={styles.profileDescriptionFontStyle}>{item.description}</Text>
        </View>
      </View>
    )
  }
  const navigation = useNavigation()
  const goBack = async () => {
    navigation.pop();
  };

  const renderLike = ({ item, index }) => {
    return (
      <View style={styles.likeRowContainer}>
        <View style={styles.dotContainer}></View>
        <View style={styles.flexContainer}>
          <Text style={styles.likeFontStyle}>{item?.name}</Text>
        </View>
      </View>
    )
  }
  const renderHobbie = ({item,index}) => {
    return(
      <Hobbies item={item} index={index} exterContainerStyle={styles.exterContainerStyle}  btnDisable={true}/>
    )
  }
  const renderQna = ({item,index}) => {
    return(
      <SubcriptionProfileDescription title={item?.question} description={item?.answer}/>
    )
  }

const navigateToPreferences = async() => {
 navigation.navigate(screenName.screenName.subScriptionForm_screen)
}

  const subscriptionApi = (value = 'find-matches') => {
    const requestBody = {
      filter: value
    };
    dispatch(subscripitonDetailRequest(requestBody));
  }
const setDrawer = (value) => {
  setDraweredValue(value)
  subscriptionApi(value)
  navigation.closeDrawer();
}

const viewProfileEvent = (value) => {
  setDraweredValue(value)
  subscriptionApi(value)
  navigation.closeDrawer();
}
  const openDrawerAllEvent = (value) => {
    dispatch(drawerAction({
      openDrawer: () => { navigation.openDrawer() },
      closeDrawer: () => { navigation.closeDrawer() },
      bodyStaff: <SubscriptionDrawer  state={drawerValue} viewProfileEvent={viewProfileEvent} closeDrawer1={() => navigation.closeDrawer() }/>  
    }));

  };

  const openSubscriptionDrawer = () => {
    openDrawerAllEvent()
    navigation.openDrawer();
  };
  const navigateToMatchMaking = () => {
    navigation.navigate(screenName.screenName.match_found_screen)
  }

  const replayToUser = async(value) => {
    setLoader(true)
    await delay(2000)
    let body = {
      "operation":value,
      "intrestedId":subscriptonData._id
  }
    await dispatch(matchOperationRequest(body, (response) => {
     subscriptionApi()
     if (drawerValue == 'my-fans') {
      navigateToMatchMaking()
     }
    }));
    setLoader(false)
  }
  const notificationEvent = async() => {
  
  }

  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) return; 
    setLoader(true);
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [isFocused]);

  React.useEffect(() => {
    subscriptionApi()
  },[dispatch])
  

  return { goBack, renderUserInfo, renderLike ,hobbiesData,renderHobbie,toggleReport,reportVisibility,subscriptionDetailData,subscriptonData,userInfoData,renderQna,replayToUser,openSubscriptionDrawer,setDrawer,notificationEvent,drawerValue,navigateToPreferences,loader}
}
export default hooks
