import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import screenName from "../../theme/screenName";
import UpcomingEvent from "../../components/molecules/UpcomingEvent";
import OurServices from "../../components/molecules/OurServices";
import { upcomingEventRequest } from "../../stores/action/upComingEventAction";
import { ourServicesRequest } from "../../stores/action/ourServicesAction";

const useHooks = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { upcomingEventData, loading: upcomingEventLoading, error: upcomingEventError } = useSelector((state) => state.upcomingEvent);
  const { srervicesData, loading: servicesLoading, error: servicesError } = useSelector((state) => state.ourServices);
  const [searchInput, setSearchInput] = useState('');
  const [filteredUpcomingData, setfilteredUpcomingData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(upcomingEventRequest());
    dispatch(ourServicesRequest());
  }, [dispatch]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(upcomingEventRequest());
    dispatch(ourServicesRequest());
    setRefreshing(false);
  }, [dispatch]);

  const onChangeText = (text) => {
    setSearchInput(text);
    if (text.trim().length === 0) {
      setfilteredUpcomingData(upcomingEventData);
    } else {
      const filteredData = upcomingEventData.filter(service =>
        service.eventName.toLowerCase().includes(text.toLowerCase())
      );
      setfilteredUpcomingData(filteredData);
    }
  };

    const navigateToEventDetail = (data) => {
    navigation.navigate(screenName.screenName.event_detail, { eventId: data._id });
  }


  const renderEvent = ({ item, index }) => <UpcomingEvent item={item} index={index} 
    name={item.eventName}
    image={item?.eventImages[0]}
    bookingDate={item.bookingStartDate}
    aed={item.price}
    attending={item.totalAttending}
    description={item.description}
    flag={0}
    navigate={navigateToEventDetail}
    currency={item.currency}
  />;
  const renderServices = ({ item, index }) => <OurServices item={item} index={index} />;

  const navigateToWelcomeScreen = () => {
    navigation.navigate(screenName.welcome_screen);
  };
  const navigateTollEvent = () => {
    navigation.navigate(screenName.screenName.allevent_screen)
  }

  // Handle loading state
  if (upcomingEventLoading || servicesLoading) {
    return { loading: true };
  }

  // Handle error state
  if (upcomingEventError || servicesError) {
    return { error: 'Error fetching data. Please try again later.' };
  }

  return {
    srervicesData,
    upcomingEventData,
    renderEvent,
    renderServices,
    navigateToWelcomeScreen,
    searchInput,
    setSearchInput,
    onChangeText,
    filteredUpcomingData,
    navigateTollEvent,
    onRefresh,
    refreshing
  };
};

export default useHooks;
