// hooks.js

import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, PermissionsAndroid, Platform, View ,Text, TouchableOpacity, Linking} from "react-native";
import { styles } from "./style";
import LinearGradientContainer from "../../components/organisms/LinearGradientContainer";
import colors from "../../theme/color";
import RNFetchBlob from 'rn-fetch-blob';
import { eventDetailRequest } from "../../stores/action/eventDetailAction";
import React, { useState } from "react";
import Section from "../../components/molecules/Section";
import screenName from "../../theme/screenName";
import { allEventRequest } from "../../stores/action/allEventAction";
import CountryAndPriceFilter from "../../components/molecules/CountryAndPriceFilter";
import { attendeeRequest } from "../../stores/action/AttandeeActoin";
import { drawerAction } from "../../stores/action/drawerAction";
import moment from "moment";
import RightGridentSvg from '../../assets/svg/RightGridentSvg.svg'
import metrics from "../../theme/metrics";
import GradientLine from "../../components/atoms/GridentLine";

const useHooks = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute()
  const { eventDetailData } = useSelector((state) => state.eventDetail);
  const { allEventData, loading: eventLoading, error: eventError } = useSelector((state) => state.allEvent);
  const { attendeeData } = useSelector((state) => state.attendee);
  const [eventData, setEventData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredEventData, setFilteredEventData] = useState([]);
  const [eventVisibility, setEventVisibility] = useState(false);

  const [viewAttendeevisibility, setViewAttendeevisibility] = useState(false);
 const toggleVisibility = () => setViewAttendeevisibility(!viewAttendeevisibility)


  let viewAttendeeData = [
    {
      name:'Asif',
      image:require('../../assets/images/image2.png'),
      date:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
  },
  {
    name:'denu1',
    image:require('../../assets/images/image2.png'),
    date:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
  },
{
  name:'denu2',
  image:require('../../assets/images/image2.png'),
  date:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
},
{
  name:'denu',
  image:require('../../assets/images/image2.png'),
  date:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
},
{
  name:'denu',
  image:require('../../assets/images/image2.png'),
  date:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
}
  ]



  const renderViewAttendee = ({ item, index }) => {
    return (
      <View style={styles.mainGridContainer}>
      <TouchableOpacity style={styles.searchContainer1}>
        <View style={styles.flexRowContainer}>
          <View  style={styles.profileImageContainer1}>
        <Image source={item?.image} style={styles.imageStyle}/>
          </View>
        <View style={styles.flexContainer}>
      <View style={styles.positionCircleContainer}>
      <Text style={styles.titleFontStyle1}  numberOfLines={1} >{item.name}</Text>
     
      </View>
      <Text style={styles.descriptionFontStyle} numberOfLines={1}>{item.date}</Text>
        </View>
        </View>
       </TouchableOpacity>
   
      </View>
    )
  }

  const renderEventDetail = ({ item, index }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.imageContianer}>
          <Image source={{uri:item}} resizeMode='cover' style={styles.imageStyle} />
        </View>
      </View>
    )
  }
  const renderIndicator = ({ item, index }) => {
    return (
      <View style={styles.indicatorContainer}>
        <LinearGradientContainer colors={false ? ['#FB7BA2', '#FCE043'] : [colors.progressGrey, colors.progressGrey]} style={[styles.dotsStyle]} />
      </View>
    );
  };
  const renderSection = ({ item, index }) => (
    <Section
      title={item.heading}
      description={item.text}
      removeMarginBottom={index === eventDetailData[0].about.length - 1}
    />
  );

  async function requestStoragePermission() {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission',
            message: 'This app needs access to your storage to download files.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  }

  const actualDownload = async (url, message, item) => {
    const hasPermission = await requestStoragePermission();
    if (!hasPermission) {
      console.error('Storage permission denied');
      return;
    }

    try {
      const { dirs } = RNFetchBlob.fs;
      console.log('Directories:', dirs);

      const downloadPath = `${dirs.DownloadDir}/${item.imageName}`;
      console.log('Download Path:', downloadPath);

      RNFetchBlob.config({
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          mediaScannable: true,
          title: message,
          path: downloadPath,
          mime: 'application/pdf',
          description: 'Downloading PDF file'
        },
      })
        .fetch('GET', url, {})
        .then((res) => {
          console.log("Download Response:", res);
          if (res.info().status === 200) {
            console.log('File downloaded successfully to', res.path());
          } else {
            console.error('Failed to download file with status code', res.info().status);
          }
        })
        .catch((e) => {
          console.error('Error during download:', e);
        });
    } catch (e) {
      console.error('Error in actualDownload function:', e);
    }
  };

  const navigateToCalender = async () => {
    navigation.navigate(screenName.screenName.calenderPermission_screen);

    if (eventDetailData[0]?.isBooked == false) {
      navigation.navigate(screenName.screenName.calenderPermission_screen);
    } else {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        actualDownload(`https://tourism.gov.in/sites/default/files/2019-04/dummy-pdf_2.pdf`, 'Invoice', { imageName: 'DummyInvoice.pdf' });
      }
    }
  };

  const onChangeText = (text) => {
    setSearchInput(text);
    if (text.trim().length === 0) {
      setEventVisibility(false)
      setFilteredEventData([]);
    } else {
      const filteredData = allEventData.filter(service =>
        service.eventName.toLowerCase().includes(text.toLowerCase()) ||
        service?.eventId?.eventName.toLowerCase().includes(text.toLowerCase())
      );
      setEventVisibility(true)
      setFilteredEventData(filteredData);
    }
  };
  const renderEvent1 = ({ item, index }) => {
    const navigateToRehit = () => {
      setEventVisibility(false)
      dispatch(eventDetailRequest(item._id));
    };
    return (
      <View style={styles.mainGridContainer}>
      <TouchableOpacity onPress={navigateToRehit} style={styles.searchContainer1}>
        <View style={styles.flexRowContainer}>
        <Image source={{uri:item?.eventImages[0]}} style={styles.profileImageContainer}/>
        <View style={styles.flexContainer}>
      <Text style={styles.titleFontStyle1}  numberOfLines={1} >{item.eventName}</Text>
      <Text style={styles.descriptionFontStyle} numberOfLines={1}>{moment(item.eventEndDate).format('DD/MM/YYYY')}</Text>
        </View>
        </View>
        <RightGridentSvg  height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(9)}  />
       </TouchableOpacity>
       <View style={styles.marginHorizontalContainer}>
       <GradientLine
        colors={colors.grident1}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.lineContainer}
        />
        </View>
      </View>
    )
  }

  const closeDrawer1 = () => {
    navigation.closeDrawer()
}

  const renderAttendance = ({ item, index }) => {
  const openAttendeeModal = () => {
    toggleVisibility()
  }
    return (
      <TouchableOpacity onPress={openAttendeeModal} style={styles.attendanceContainer}>
        <Image source={item?.image || require('../../assets/images/ProfileImage1.png')} style={styles.imageStyle1} />
        <Text style={styles.nameFontStyle}>{item.name}</Text>
      </TouchableOpacity>
    )
  }
  const findEvent = (data) => {
    dispatch(allEventRequest(data));
    navigation.closeDrawer()
   }
  
  
   const openWhatsUp = () => {
    Linking.openURL('whatsapp://app')
   }

  const openDrawerAllEvent = () => {
    dispatch(drawerAction({
      openDrawer: () => { navigation.openDrawer() },
      closeDrawer: () => { navigation.closeDrawer() },
      bodyStaff: <CountryAndPriceFilter data={eventData} closeDrawer1={closeDrawer1} onClick={findEvent} onClick2={openWhatsUp}
      eventDetailData={eventDetailData}
      allEventData={allEventData}
      renderAttendance={renderAttendance} attendanceData={[
        {
            name:'Asif',
            image:require('../../assets/images/ProfileImage1.png')
        },
        {
          name:'denu',
          image:require('../../assets/images/ProfileImage2.png')
      }
      ]}/>   
    }));
  };
  

  const openDrawer = () => {
    dispatch(attendeeRequest(route?.params.eventId));
    openDrawerAllEvent();
    navigation.openDrawer();
  };

  React.useEffect(() => {
    dispatch(eventDetailRequest(route?.params.eventId));
    dispatch(allEventRequest());
    dispatch(allEventRequest(null,(response) => {
      if (response) {
        setEventData(response)
      }
    }));
  }, [dispatch]);

  return {
    renderEventDetail, renderIndicator, eventDetailData, renderSection, navigateToCalender,
    allEventData,renderEvent1,
    onChangeText,
    searchInput,
    filteredEventData,
    eventVisibility,
    openDrawer,
    setEventVisibility,
    viewAttendeeData,renderViewAttendee,
    viewAttendeevisibility,toggleVisibility,
  };
};

export default useHooks;
