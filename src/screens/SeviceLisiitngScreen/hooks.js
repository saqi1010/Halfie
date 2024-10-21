
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';
import hooks from './hooks';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './style';
import GridentBorder from '../../components/atoms/GridentBorder';
import colors from '../../theme/color';
import metrics from '../../theme/metrics';
import StarSvg from '../../assets/svg/StarSvg.svg'
import GlobalSearch from '../../components/molecules/GlobalSearch';
import BellSvg from '../../assets/svg/BellRedSvg.svg';
import { useNavigation, useRoute } from '@react-navigation/native';
import screenName from '../../theme/screenName';
import GridentButton from '../../components/atoms/GridentButton';
import { servicesListRequest } from '../../stores/action/serviceListAction';
import { useDispatch, useSelector } from 'react-redux';
import { drawerAction } from '../../stores/action/drawerAction';
import CountryAndPriceFilter from '../../components/molecules/CountryAndPriceFilter';
import CountryAndPriceFilterForServices from '../../components/molecules/CountryAndPriceFilterForServices';

const useHooks = () => {
  let route = useRoute()
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const { serviceListData, } = useSelector((state) => state.serviceList);
  const [searchInput, setSearchInput] = useState('');
  const [filteredServiceList, setFilteredServiceList] = useState([]);
  const navigateToServiceDetail = (item) => {
    navigation.navigate(screenName.screenName.serviceDetail_screen, { serviceId: item._id ,categrayId:route?.params.categrayId,item:item})
  }

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    dispatch(servicesListRequest(route?.params.categrayId));
    setRefreshing(false);

  }, [dispatch]);
  const onChangeText = (text) => {
    setSearchInput(text);
    if (text.trim().length === 0) {
      setFilteredServiceList(serviceListData);
    } else {
      const filteredData = serviceListData.filter(service =>
        service.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredServiceList(filteredData);
    }
  };
  const renderService = ({ item, index }) => {
    return(
    <View style={[styles.card, ]}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.flexDirectionContainer}>
        <Image source={{ uri: item.image }} style={styles.profileImageStyle} />
        <View style={styles.flexContainer}>
          <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
        </View>
      </View>
      <View style={styles.ratingPriceContainer}>
        <Text style={styles.price}>{item?.currency ? item.currency.toUpperCase() : ''} {item.price}</Text>
      </View>
      <Text style={styles.description} numberOfLines={10}>{item.supplierAbout[0].text}</Text>
      <View style={styles.button}>
        <GridentButton
          onClick={() => navigateToServiceDetail(item)}
          buttonText='View'
          extrenalStyle={[styles.externalStyle]}
        />
      </View>
    </View>
    )
  }
// 

const closeDrawer1 = () => {
  navigation.closeDrawer()
}

const findEvent = (data) => {

  console.warn("adadasd",data);
  // dispatch(allEventRequest(data));
  navigation.closeDrawer()
 }


 const openWhatsUp = () => {
  Linking.openURL('whatsapp://app')
 }

const openDrawerAllEvent = () => {
  dispatch(drawerAction({
    openDrawer: () => { navigation.openDrawer() },
    closeDrawer: () => { navigation.closeDrawer() },
    bodyStaff: <CountryAndPriceFilterForServices 
    data={serviceListData}
    closeDrawer1={closeDrawer1}
     onClick={findEvent}
    onClick2={openWhatsUp}
    />   
  }));
};


const openDrawer = () => {
  // dispatch(attendeeRequest(route?.params.eventId));
  dispatch(servicesListRequest(route?.params.categrayId));
  openDrawerAllEvent();
  navigation.openDrawer();
};

  // 
  React.useEffect(() => {
    dispatch(servicesListRequest(route?.params.categrayId));
  }, [dispatch,route?.params.categrayId]);

  return {
    renderService, serviceListData,onChangeText,searchInput,filteredServiceList,refreshing ,onRefresh,openDrawer
  };
};

export default useHooks;
