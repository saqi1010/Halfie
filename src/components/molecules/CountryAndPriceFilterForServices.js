import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import metrics from "../../theme/metrics";
import font from "../../theme/font";
import colors from "../../theme/color";
import DownSvg from '../../assets/svg/DownSvg.svg';
import PriceRange from '../atoms/PriceRange';
import { useNavigation } from '@react-navigation/native';
import GridentButton from '../atoms/GridentButton';
import moment from 'moment';
import { countryRequest } from '../../stores/action/countryAction';
import { useDispatch, useSelector } from 'react-redux';
const CountryAndPriceFilterForServices = ({ closeDrawer1,data = [],onClick,onClick2}) => {
  console.warn("=======>>>", JSON.stringify(data, undefined, 4));
  const dispatch = useDispatch();
  const [currencyData, setCurrencyData] = useState('');
  const [currencyVisibility, setCurrencyVisibility] = useState(false);
  const [eventData, setEventData] = useState('');
  const toggleCurrency = () => setCurrencyVisibility(!currencyVisibility);

  /// country get funciton 

  const countryData = ['INDIA','USA']

  const getCountriesWithPrices = () => {
    if (data && countryData) {
      const uniqueCountriesWithPrices = data
        ?.map((item, index) => ({
          currencyName: item?.supplierDefaultService?.currency?.toUpperCase(),
          Price: item?.supplierDefaultService?.price,
          CountryName: countryData[index] // Assuming countryData is correctly aligned with data
        }))
        .filter((item, index, self) =>
          index === self.findIndex(event => event.CountryName === item.CountryName)
        );
  
      console.warn("Unique countries with prices:", uniqueCountriesWithPrices);
  
      // Adding default option at the start of the array
      return [{ currencyName: 'All', Price: 0, CountryName: 'All' }, ...uniqueCountriesWithPrices];
    }
  };
  

  const minAndMaxData =  () => {
    if(getCountriesWithPrices()){
      let filterData =  getCountriesWithPrices().map(e => e.Price)
      const minPrice = Math.min(...filterData);
      const maxPrice = Math.max(...filterData);
      return {min : minPrice , max : maxPrice }
    }
    };

    const minAndMaxDataByRate =  () => {
      if(getCountriesWithPrices()){
        let filterData =  getCountriesWithPrices().map(e => e.Price)
        const minPrice = Math.min(...filterData);
        const maxPrice = Math.max(...filterData);
        return {min : minPrice , max : maxPrice }
      }
      };


  // range
  const [dateRange, setDateRange] = useState({ min: 0, max: 0 });

  const handleValueChangeDate = (min, max) => {
    setDateRange({ min, max });
  };

  const [rateRange, setRateRange] = useState({ min: 1, max: 0 });

  const handleValueChangeRate = (min, max) => {
    setRateRange({ min, max });
  };
  // 

  const renderCountry = ({ item }) => {
    const setCountryData = () => {
      setCurrencyData(item);
      toggleCurrency();
    };
    return (
      <TouchableOpacity
        onPress={setCountryData}
        style={[
          styles.listingItem,
        ]}
      >
        <Text style={styles.currencyFontStyle}>{item.CountryName} ({item.currencyName})</Text>
      </TouchableOpacity>
    );
  };

  // 25th September, 2025

  const findEvent = () => {
    let drawerData =   {
      min: dateRange.min ,
      max: dateRange.max ,
      country: currencyData.CountryName,
      rateMin: rateRange.min,
      eventBool:true
    }
    onClick(drawerData)
    closeDrawer1()
  }


  React.useEffect(() => {
    dispatch(countryRequest());
  }, [])


  return (
    <View>
      <View style={styles.searchMainContainer}>
        <Text style={styles.filterFontStyle}>Filter Services:</Text>
        <Text style={styles.titleFontStyle}>By Country:</Text>
        <TouchableOpacity onPress={toggleCurrency} style={[styles.searchContainer, currencyVisibility && styles.removeBottomBorderRadius]}>
          <Text style={styles.searchFontStyle}>{currencyData != '' ? currencyData.currencyName : `Search Events by Country...`}</Text>
          <DownSvg height={metrics.changeByMobileDPI(15)} width={metrics.changeByMobileDPI(15)} />
        </TouchableOpacity>
        {
          currencyVisibility &&
          <View style={styles.listingContainer}>
            <FlatList data={getCountriesWithPrices()} renderItem={renderCountry} nestedScrollEnabled contentContainerStyle={styles.contentContainerStyle} />
          </View>
        }
        <Text style={styles.titleFontStyle}>By Price:</Text>
        <PriceRange
          min={minAndMaxData().min}
          max={minAndMaxData().max}
          onValueChange={handleValueChangeDate}
        />
        <View style={styles.centerContainer}>
          <Text style={styles.titleFontStyle}>From INR {dateRange.min == 0 ?minAndMaxData().min: dateRange.min } - INR {dateRange.max == 0 ? minAndMaxData().max : dateRange.max}</Text>
        </View>

        <Text style={styles.titleFontStyle}>Rating</Text>
        <PriceRange
          min={1}
          max={5}
          onValueChange={handleValueChangeRate}
        />
        <View style={styles.centerContainer}>
          <Text style={styles.titleFontStyle}>{`Rating ${rateRange.min} - 5`}</Text>
        </View>
      
        <GridentButton
          onClick={findEvent}
          externalGridentStyle={styles.borderContainerStyle}
          extrenalStyle={[styles.extrenalStyle, styles.marginRightContainer]}
          buttonText='Find Services'
        />
      </View>

    </View>
  );
};

export default CountryAndPriceFilterForServices;

const styles = StyleSheet.create({
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
    borderRadius:metrics.changeByMobileDPI(10),
    overflow:'hidden', 
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
    borderRadius:metrics.changeByMobileDPI(10),
    overflow:'hidden',
    height:metrics.changeByMobileDPI(200)
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
    marginBottom: metrics.changeByMobileDPI(20)
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
    marginTop:metrics.changeByMobileDPI(20)
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
  profileContainer: {
    borderRadius: metrics.changeByMobileDPI(10),
    backgroundColor: colors.white,
    alignSelf: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: metrics.changeByMobileDPI(6),
    marginBottom: metrics.changeByMobileDPI(10),
    paddingHorizontal: metrics.changeByMobileDPI(10),
    marginRight: metrics.changeByMobileDPI(10)
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
  iconFontStyle: {
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
  listingItem: {
    height: metrics.changeByMobileDPI(30),
    paddingHorizontal: metrics.changeByMobileDPI(15),
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  maxHeightContainer: {
    maxHeight: metrics.changeByMobileDPI(100),
  }

});
