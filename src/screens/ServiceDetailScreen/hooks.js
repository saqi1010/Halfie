import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { servicesDetailRequest } from "../../stores/action/servicesDetailAction";
import React, { useState } from "react";
import Fashion from "../../components/molecules/Fashion";
import ServiceCheckBox from "../../components/molecules/ServiceCheckBox";
import { styles } from "./styles";
import GradientLine from "../../components/atoms/GridentLine";
import { Image, PermissionsAndroid, Platform, View ,Text, TouchableOpacity} from "react-native";
import LinearGradientContainer from "../../components/organisms/LinearGradientContainer";
import colors from "../../theme/color";
import metrics from "../../theme/metrics";
import { eventDetailRequest } from "../../stores/action/eventDetailAction";
import moment from "moment";
import RightGridentSvg from '../../assets/svg/RightGridentSvg.svg'
import { servicesListRequest } from "../../stores/action/serviceListAction";

const hooks = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { serviceDetailData } = useSelector((state) => state.serviceDetail);
  const { serviceListData, } = useSelector((state) => state.serviceList);
  const [filteredServiceData, setFilteredServiceData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [eventVisibility, setEventVisibility] = useState(false);
  let supplier = serviceDetailData && serviceDetailData?.supplier;
const [refreshing, setRefreshing] = useState(false);


// Static data
let manualManageImage = route.params.item?.image
// 

  function calculateTotalPrice(services) {
    return services.reduce((total, service) => total + service.price, 0);
}

const onRefresh = React.useCallback(() => {
  dispatch(servicesDetailRequest(route?.params.serviceId));
  dispatch(servicesListRequest(route?.params.categrayId));
  setRefreshing(false);

}, [dispatch]);
const totalPrice = calculateTotalPrice(selectedItems);
  const checkNow = () => {}
  const handleToggleCheck = (item, isChecked) => {
    let filterCheckThisAddedOrNot = selectedItems.filter((i) => i._id == item._id);
    if (filterCheckThisAddedOrNot.length > 0) {
      let removeData = selectedItems.filter((i) => i._id != item._id);
      setSelectedItems(removeData)
    }else{
  setSelectedItems([...selectedItems, item])
    }
  };
  const renderFashion = ({ item, index }) => {
    return (
      <Fashion title={item?.heading} description={item?.text} />
    );
  };

  const onChangeText = (text) => {
    setSearchInput(text);
    if (text.trim().length === 0) {
      setEventVisibility(false)
      setFilteredServiceData([]);
    } else {
      const filteredData = serviceListData && serviceListData.filter(service =>
        service.name.toLowerCase().includes(text.toLowerCase())
      );
      setEventVisibility(true)
      setFilteredServiceData(filteredData);
    }
  };


  const renderEvent1 = ({ item, index }) => {
    const navigateToRehit = () => {
      setEventVisibility(false)
      dispatch(servicesDetailRequest(item._id));
    };
    return (
      <View style={styles.mainGridContainer}>
      <TouchableOpacity onPress={navigateToRehit} style={styles.searchContainer1}>
        <View style={styles.flexRowContainer}>
        <Image source={{uri:item?.image}} style={styles.profileImageContainer}/>
        <View style={styles.flexContainer}>
      <Text style={styles.titleFontStyle1}  numberOfLines={1} >{item.name}</Text>
      <Text style={styles.descriptionFontStyle} numberOfLines={1}>{'FASHION STYLIST'}</Text>
        </View>
        </View>
        <RightGridentSvg  height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(9)} style={styles.rightMarginContainer} />
       </TouchableOpacity>
<View style={styles.lineContainer}></View>
      </View>
    )
  }
  
  const renderService = ({ item, index }) => {
    return (
      <ServiceCheckBox
        title={item?.serviceName}
        serviceName={item?.about}
        item={item}
        index={index}
        onToggleCheck={handleToggleCheck}
      />
    );
  };
  React.useEffect(() => {
    dispatch(servicesDetailRequest(route?.params.serviceId));
    dispatch(servicesListRequest(route?.params.categrayId));
  }, [dispatch]);

  return { checkNow, serviceDetailData, supplier, renderFashion, renderService, selectedItems ,totalPrice ,renderEvent1,onChangeText,filteredServiceData,eventVisibility,searchInput,setEventVisibility,onRefresh,refreshing
  ,manualManageImage};
};

export default hooks;
