import { CommonActions, useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import screenName from "../../theme/screenName"
import images from "../../theme/images"
import { FlatList, Image, Text, TextInput, View } from "react-native"
import { styles } from "./style"
import GridentButton from "../../components/atoms/GridentButton"
import { useDispatch, useSelector } from "react-redux"
import { getOrderDetailRequest } from "../../stores/action/getOrderDetailAction"
import moment from "moment"
import { axiosInstance } from "../../utils/axiosInstance"

const hooks = () => {
  const navigation = useNavigation()
  let dispatch = useDispatch()
  const [orderDetailData, setOrderDetailData] = React.useState([])
  const [imageSource, setImageSource] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const resetStackAndGoToHome = CommonActions.reset({
    index: 0,
    routes: [{ name: screenName.screenName.custom_drawer_home }],
  })
  const defaultImage = images.hobbiesImageData.hobbies1 

  const renderViewOrder = ({ item }) => {
    const navigateToServiceDetail = () => {
      let navigateToScreeName = isEvent ? screenName.screenName.serviceDetail_screen : screenName.screenName.profile_screen
      navigation.navigate(navigateToScreeName, { transactionId: item?.transactionId });
    };
    const isEvent = item?.eventDetails;
    const isPlan = item?.planDetails;
    return (
      <View style={styles.viewOrderContainer}>
        <View style={styles.flexDirectionContainer}>
          <View style={styles.viewOrderImageContianer}>
            {isEvent ? (
              <Image
                source={imageSource ? imageSource : { uri: item?.eventDetails?.eventImages[0] }}
                style={styles.imageStyle}
                onError={() => setImageSource(defaultImage)}
              />
            ) : (
              <Image
                source={imageSource ? imageSource : defaultImage}
                style={styles.imageStyle}
                onError={() => setImageSource(defaultImage)}
              />
            )}
          </View>
          <View style={styles.marginLeftContainer}>
            {isEvent ? (
              <>
                <Text style={styles.titleFontStyle}>{item?.eventDetails?.eventName}</Text>
                <Text style={styles.descriptionFontStyle} numberOfLines={1}>
                  {item.eventDetails?.description}
                </Text>
              </>
            ) : isPlan ? (
              <>
                <Text style={styles.titleFontStyle}>{`Plan: ${item?.planDetails?.planType}`}</Text>
                <Text style={styles.descriptionFontStyle}>
                  {`Validity: ${item?.planDetails?.validity} days`}
                </Text>
                <Text style={styles.descriptionFontStyle}>
                  {`Matches Limit: ${item?.planDetails?.matchesLimit}`}
                </Text>
              </>
            ) : null}
          </View>
        </View>
        <GridentButton
          extrenalStyle={styles.extrenalStyle1}
          externalGridentStyle={styles.externalGridentStyle}
          onClick={navigateToServiceDetail}
          buttonText={isEvent ? "View Order" : "View Plan"}
        />
      </View>
    );
  };
  
  const renderViewOrderDate = ({ item ,index}) => {
    return (
      <View style={styles.viewOrderDateContainer}>
        <Text style={styles.dateFontStyle}>{item.date}</Text>
        <FlatList
          data={item.data}
          renderItem={renderViewOrder}
          contentContainerStyle={styles.viewOrderMarginTopContainer}
        />
      </View>
    )
  }

  const navigateToNotification = () => {
    navigation.navigate(screenName.screenName.notification_screen)
  }

  const navigateToHome = () => {
    navigation.dispatch(resetStackAndGoToHome)
  }

  const groupDataByDate = (data) => {
    const groupedData = {}

    data.forEach((item) => {
      const date = moment(item.purchasedDate).format('Do MMM, YYYY')
      if (!groupedData[date]) {
        groupedData[date] = []
      }
      groupedData[date].push(item)
    })

    return Object.keys(groupedData).map((date) => ({
      date,
      data: groupedData[date],
    }))
  }

  const getViewOrder = async() => {
    await dispatch(getOrderDetailRequest(null, (response) => {
      setOrderDetailData(response)
    }))
  }

  const filteredData = groupDataByDate(
    orderDetailData?.filter((item) => {
      const query = searchQuery.toLowerCase();
      const eventNameMatch = item?.eventDetails?.eventName?.toLowerCase().includes(query);
      const planTypeMatch = item?.planDetails?.planType?.toLowerCase().includes(query);
      return eventNameMatch || planTypeMatch;
    }) || []
  );
  
  


  // console.warn("======1234=====>>",axiosInstance.defaults.headers.common['accesstoken']);
  

  React.useEffect(() => {
    getViewOrder()
  }, [dispatch])

  return {
    navigateToHome,
    filteredData,
    renderViewOrderDate,
    navigateToNotification,
    setSearchQuery,
    searchQuery
  }
}

export default hooks
