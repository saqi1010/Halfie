import { Animated, FlatList, ImageBackground, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import hooks from './hooks'
import WelcomeSvg from '../../assets/svg/PatternSvg.svg'
import BookSvg from '../../assets/svg/BookSvg.svg'
import MapSvg from '../../assets/svg/MapSvg.svg'
import TicketSvg from '../../assets/svg/TicketSvg.svg'
import metrics from '../../theme/metrics'
import TrackingLine from '../../components/molecules/TrackingLine'
import moment from 'moment'
import BuyTicketSection from '../../components/molecules/BuyTicketSection'
import GridentButton from '../../components/atoms/GridentButton'
import GoogleMaps from '../../components/molecules/GoogleMaps'
import BellSvg from '../../assets/svg/BellRedSvg.svg';
import GlobalSearch from '../../components/molecules/GlobalSearch'

import Skeleton from './Skeleton'
import colors from '../../theme/color'
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar'


const ViewOrderDetailScreen = () => {
  const [loading, setLoading] = useState(true); 
  const { renderEventDetail, renderIndicator, renderSection, renderEvent1, onChangeText,
    searchInput, eventVisibility, viewAttendeeData, renderViewAttendee, viewAttendeevisibility, toggleVisibility,
    filteredEventData, setEventVisibility ,
    cancelTicket,
    orderDetail,actualDownload} = hooks();

  return (
<View style={styles.mainContainer}>
<FocusAwareStatusBar isTopSpace={false} isLightBar={true} barColor={'#00000000'} />

    {
      orderDetail ?
    <View style={styles.mainContainer}>
      <View style={styles.searchContainer}>
        <GlobalSearch placeHolder='Find events...' setValue={onChangeText} value={searchInput} onFocusEvent={() => { searchInput.length > 2 && setEventVisibility(true) }} />
        <BellSvg height={metrics.changeByMobileDPI(22)} width={metrics.changeByMobileDPI(19)} style={styles.marginLeftContainer} />
      </View>
      {
        filteredEventData && eventVisibility &&
        <View style={styles.positionContainer}>
          <View style={styles.contentContainerStyle}>
            <FlatList data={filteredEventData} renderItem={renderEvent1} />
          </View>
        </View>
      }
      {
        orderDetail &&
        <ScrollView>
          <FlatList data={orderDetail?.eventDetails?.eventImages} renderItem={renderEventDetail} horizontal contentContainerStyle={styles.marginTopContianer} />
          <View style={styles.alginItemCenter}>
            <FlatList
              horizontal
              data={orderDetail?.eventDetails?.eventImages}
              renderItem={renderIndicator}
              contentContainerStyle={styles.rowContainer}
            />
          </View>
          <View style={styles.headingSectionContianer}>
            <Text style={styles.titleFontStyle}>{orderDetail?.eventDetails.eventName}</Text>
            <View style={styles.flexDirectionContainer}>
              <Text style={styles.attendingFontStyle}>{orderDetail?.eventDetails.totalAttending} Attending</Text>
              <Text style={styles.dateFontStyle}>{moment(orderDetail?.eventDetails.eventEndDate).format(`DD MMM, YYYY`)}</Text>
            </View>
            <View style={styles.alignmentCenter}>
              <WelcomeSvg height={metrics.changeByMobileDPI(38)} width={metrics.changeByMobileDPI(240)} />
            </View>
          </View>
          <View style={styles.marginTopContainer}>
            <TrackingLine
              svg={<BookSvg height={metrics.changeByMobileDPI(17)} width={metrics.changeByMobileDPI(17)} />}
              component={
                <View>
                  {orderDetail && <FlatList data={orderDetail?.eventDetails?.about} renderItem={renderSection} />}
                </View>
              }
            />
            <TrackingLine
              svg={<MapSvg height={metrics.changeByMobileDPI(17)} width={metrics.changeByMobileDPI(17)} />}
              component={
                <View>
                  <GoogleMaps />
                </View>
              }
            />
             <View style={styles.flexCenterContainer}>
                  <GridentButton
                  externalGridentStyle={styles.externalGridentStyle}
                    onClick={() => {
                    Linking.openURL(orderDetail?.invoiceAndReceipt)
                    }}
                    extrenalStyle={[styles.extrenalStyle, styles.marginRightContainer]}
                    buttonText={'Download Receipt'}
                    />
                   <GridentButton
                   externalFontStyle={styles.externalFontStyle}
                    externalGridentStyle={styles.externalGridentStyle}
                   defaultGridentColor={[colors.lightGray,colors.lightGray]}
                   onClick={cancelTicket}
                   extrenalStyle={[styles.extrenalStyle]}
                   buttonText={'Cancel Ticket'}
                   />
                   </View>
          </View>
        </ScrollView>
      }
    </View>
    :
    <Skeleton />

    }

    </View>

  );
};

export default ViewOrderDetailScreen;
