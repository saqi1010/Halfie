import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import screenName from "../../theme/screenName";
import { allEventRequest } from "../../stores/action/allEventAction";
import { wishlistRequest } from "../../stores/action/wishlistAction";
import { drawerAction } from "../../stores/action/drawerAction";
import UpcomingEvent from "../../components/molecules/UpcomingEvent";
import CountryAndPriceFilter from "../../components/molecules/CountryAndPriceFilter";
import { Linking, Text, View } from "react-native";
import { attendeeRequest } from "../../stores/action/AttandeeActoin";
import { styles } from "./style";
const useHooks = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { allEventData, loading: eventLoading, error: eventError } = useSelector((state) => state.allEvent);
  const { wishlistData, loading: wishlistLoading, error: wishlistError } = useSelector((state) => state.wishlist);
  const { attendeeData } = useSelector((state) => state.attendee);

  const { settedItem } = useSelector((state) => state.globalDrawer);
  const [eventData, setEventData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredEventData, setFilteredEventData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    dispatch(allEventRequest(settedItem));
    dispatch(allEventRequest(null,(response) => {
      if (response) {
        setEventData(response)
      }
    }));
    dispatch(wishlistRequest());
  }, [dispatch,settedItem]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(allEventRequest());
    dispatch(wishlistRequest());
    setRefreshing(false);
  }, [dispatch]);

  const onChangeText = (text) => {
    setSearchInput(text);
    if (text.trim().length === 0) {
      setFilteredEventData(allEventData);
    } else {
      const filteredData = allEventData.filter(service =>
        service.eventName.toLowerCase().includes(text.toLowerCase()) ||
        service?.eventId?.eventName.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredEventData(filteredData);
    }
  };

  const navigateToEventDetail = (data) => {
    navigation.navigate(screenName.screenName.event_detail, { eventId: data._id });
  }

  const closeDrawer1 = () => {
   
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
      bodyStaff: <CountryAndPriceFilter data={eventData} closeDrawer1={closeDrawer1} onClick={findEvent} onClick2={openWhatsUp}/>   
    }));
  };
  

  const openDrawer = () => {
    dispatch(attendeeRequest());
    openDrawerAllEvent();
    navigation.openDrawer();
  };

  const renderEvent = ({ item, index }) => (
    <UpcomingEvent
      item={item}
      index={index}
      name={item.eventName}
      image={item?.eventImages[0]}
      bookingDate={item.bookingStartDate}
      aed={item.price}
      attending={item.totalAttending}
      description={item.description}
      flag={0}
      navigate={navigateToEventDetail}
      currency={item.currency}
    />
  );

  const renderWishList = ({ item, index }) => (
    <UpcomingEvent
      item={item}
      index={index}
      name={item?.eventId?.eventName}
      image={item?.eventId?.eventImages[0]}
      bookingDate={item.bookingStartDate}
      aed={item.eventId.price}
      attending={item.eventId.totalAttending}
      description={item.eventId.description}
      flag={1}
      currency={item.eventId.currency}
    />
  );

  return {
    renderEvent,
    searchInput,
    setSearchInput,
    onChangeText,
    filteredEventData,
    renderWishList,
    allEventData,
    wishlistData,
    onRefresh,
    refreshing,
    openDrawer
  };
};

export default useHooks;
