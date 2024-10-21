// hooks.js

import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, PermissionsAndroid, Platform, View ,Text, TouchableOpacity} from "react-native";
import { styles } from "./style";
import LinearGradientContainer from "../../components/organisms/LinearGradientContainer";
import colors from "../../theme/color";
import RNFetchBlob from 'rn-fetch-blob';
import { eventDetailRequest } from "../../stores/action/eventDetailAction";
import React, { useState } from "react";
import Section from "../../components/molecules/Section";
import screenName from "../../theme/screenName";
import moment from "moment";
import RightGridentSvg from '../../assets/svg/RightGridentSvg.svg'
import metrics from "../../theme/metrics";
import GradientLine from "../../components/atoms/GridentLine";
import { getOrderDetailRequest } from "../../stores/action/getOrderDetailAction";
import { checkCalendarPermission, checkStoragePermission } from "../../utils/permissions";
import { initiateRefundRequest } from "../../stores/action/InitiateRefundAction";
import { loaderRequest } from "../../stores/action/loaderAction";

const useHooks = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute()
  const [orderDetail, setOrderDetail] = useState(null);
  const [orderList, setOrderList] = useState([]);
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
      removeMarginBottom={index === orderDetail?.eventDetails.about.length - 1}
    />
  );
  // Download Pdf 
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

  const cancelTicket = async() => {
    dispatch(loaderRequest(true))
     let body = {
      "eventId":orderDetail?.eventDetails?.eventId,
      "reason":["requested_by_customer"]
     }
     await dispatch(initiateRefundRequest(body))
     dispatch(loaderRequest(false))
     navigation.goBack()
  }

  const actualDownload = async (url) => {
    const hasPermission = await checkStoragePermission()
    if (!hasPermission) {
      console.error('Storage permission denied');
      return;
    }
    const locationGranted = await requestStoragePermission();
    try {
      const { dirs } = RNFetchBlob.fs;
      console.log('Directories:', dirs);
  
      const downloadPath = `${dirs.DownloadDir}/halfie`;
      console.log('Download Path:', downloadPath);
  
      RNFetchBlob.config({
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          mediaScannable: true,
          title: 'nice',
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
  

  // 

  const onChangeText = (text) => {
    setSearchInput(text);
    if (text.trim().length === 0) {
      setEventVisibility(false)
      setFilteredEventData([]);
    } else {
      const filteredData = orderList.filter(service =>
        service?.eventDetails?.eventName.toLowerCase().includes(text.toLowerCase())
      );
      setEventVisibility(true)
      setFilteredEventData(filteredData);
    }
  };
  const renderEvent1 = ({ item, index }) => {
    const navigateToRehit = async() => {
      setEventVisibility(false)
      await dispatch(getOrderDetailRequest(item?.transactionId, (response) => {
        setOrderDetail(response)
      }))
    };
    return (
      <View style={styles.mainGridContainer}>
      <TouchableOpacity onPress={navigateToRehit} style={styles.searchContainer1}>
        <View style={styles.flexRowContainer}>
        <Image source={{uri:item?.eventDetails?.eventImages[0]}} style={styles.profileImageContainer}/>
        <View style={styles.flexContainer}>
      <Text style={styles.titleFontStyle1}  numberOfLines={1} >{item?.eventDetails?.eventName}</Text>
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

  const getViewOrderById = async() => {
    await dispatch(getOrderDetailRequest(route?.params.transactionId, (response) => {
      setOrderDetail(response)
    }))
  }
  const getViewOrder = async() => {
    await dispatch(getOrderDetailRequest(null, (response) => {
      setOrderList(response)
    }))
  }
  
  React.useEffect(() => {
    getViewOrderById()
    getViewOrder()
  }, [dispatch]);

  return {
    renderEventDetail, renderIndicator, renderSection,renderEvent1,
    onChangeText,
    searchInput,
    filteredEventData,
    eventVisibility,
    setEventVisibility,
    viewAttendeeData,renderViewAttendee,
    viewAttendeevisibility,toggleVisibility,
    actualDownload,
    cancelTicket,
    // 
    orderDetail
  };
};

export default useHooks;
