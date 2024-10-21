import { FlatList, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import hooks from './hooks'
import metrics from '../../theme/metrics';
import GlobalSearch from '../../components/molecules/GlobalSearch';
import BellSvg from '../../assets/svg/BellRedSvg.svg';
import { styles } from './styles'
import GridentButton from '../../components/atoms/GridentButton';
import ImageSlider from '../../components/atoms/ImageSlider';
import Skeleton from './Skeleton';
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar';

const ServiceDetailScreen = () => {
  const { checkNow,serviceDetailData,supplier,renderFashion,renderService,totalPrice,renderEvent1,filteredServiceData,eventVisibility,setEventVisibility,onChangeText,searchInput,onRefresh,refreshing,manualManageImage} = hooks()
  return (
    <>
    <FocusAwareStatusBar isTopSpace={false} isLightBar={true} barColor={'#00000000'} />
   { supplier ? <View style={styles.mainContainer}>
      <View style={styles.searchContainer}>
        
        <GlobalSearch placeHolder='Find services...'  setValue={onChangeText} value={searchInput} onFocusEvent={() => { searchInput.length > 2 && setEventVisibility(true) }} />
        <BellSvg height={metrics.changeByMobileDPI(22)} width={metrics.changeByMobileDPI(19)} style={styles.marginLeftContainer} />
      </View>
      {
        filteredServiceData && eventVisibility &&
        <View style={styles.positionContainer}>
          <View style={styles.contentContainerStyle}>
            <FlatList data={filteredServiceData} renderItem={renderEvent1} />
          </View>
        </View>
      }
      <ScrollView 
        refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
      >
        <View style={styles.sliderSectionContainer}>
          <ImageSlider imageData={supplier && supplier?.supplierImages} manualManageImage={manualManageImage}/>
        </View>
       {supplier && <View style={styles.bottomContianer}>
          <Text style={styles.sectionFontStyle}>{supplier.name.toUpperCase()}</Text>
          <View style={styles.fashionStyleContainer}>
            <Text style={styles.fashionFontStyle}>FASHION STYLIST</Text>
            <FlatList data={supplier.supplierAbout} renderItem={renderFashion}/>
          </View>
          <View style={styles.serviceSectionContainer}> 
          {serviceDetailData && <FlatList data={serviceDetailData.services} renderItem={renderService}/>}
          </View>
          {totalPrice != 0 && <Text style={styles.currencyFontStyle}>{serviceDetailData && (serviceDetailData.services[0].currency).toUpperCase()} {totalPrice}</Text>}
       <GridentButton
          extrenalStyle={styles.extrenalStyle}
          onClick={checkNow}
          buttonText='Connect'
          />
        </View>}
      </ScrollView>
    </View>
  :
  <Skeleton/>  
  }
    </>

  )
}

export default ServiceDetailScreen
