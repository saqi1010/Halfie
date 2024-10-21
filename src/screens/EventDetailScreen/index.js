import { Animated, FlatList, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
import FilterSvg from '../../assets/svg/FilterSvg.svg';
import BottomSlideModal from '../../components/atoms/BottomSlideModal'
import Skeleton from './Skeleton'


const EventDetailScreen = () => {
  const [loading, setLoading] = useState(true); 
  const { renderEventDetail, renderIndicator, eventDetailData, renderSection, navigateToCalender, allEventData, renderEvent1, onChangeText,
    searchInput, eventVisibility, viewAttendeeData, renderViewAttendee, viewAttendeevisibility, toggleVisibility,
    filteredEventData, setEventVisibility, openDrawer } = hooks();


    

  return (
<View style={styles.mainContainer}>
    {
      eventDetailData ?
    <View style={styles.mainContainer}>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={openDrawer} hitSlop={{top:10,left:10,right:10,bottom:10}}>
          <FilterSvg height={metrics.changeByMobileDPI(22)} width={metrics.changeByMobileDPI(19)} />
        </TouchableOpacity>
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
        eventDetailData &&
        <ScrollView>
          <FlatList data={eventDetailData[0]?.eventImages} renderItem={renderEventDetail} horizontal contentContainerStyle={styles.marginTopContianer} />
          <View style={styles.alginItemCenter}>
            <FlatList
              horizontal
              data={eventDetailData[0]?.eventImages}
              renderItem={renderIndicator}
              contentContainerStyle={styles.rowContainer}
            />
          </View>
          <View style={styles.headingSectionContianer}>
            <Text style={styles.titleFontStyle}>{eventDetailData[0].eventName}</Text>
            <View style={styles.flexDirectionContainer}>
              <Text style={styles.attendingFontStyle}>{eventDetailData[0].totalAttending} Attending</Text>
              <Text style={styles.dateFontStyle}>{moment(eventDetailData[0].eventEndDate).format(`DD MMM, YYYY`)}</Text>
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
                  {eventDetailData && <FlatList data={eventDetailData[0]?.about} renderItem={renderSection} />}
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
            <TrackingLine
              svg={<TicketSvg height={metrics.changeByMobileDPI(17)} width={metrics.changeByMobileDPI(17)} />}
              component={
                <View>
                  <BuyTicketSection data={eventDetailData} />
                  <GridentButton
                    onClick={navigateToCalender}
                    extrenalStyle={[styles.extrenalStyle, styles.marginRightContainer]}
                    buttonText={!eventDetailData?.isBooked ? 'PURCHASE TICKET' : 'PURCHASE TICKET'}
                  />
                </View>
              }
            />
          </View>
        </ScrollView>
      }
      <BottomSlideModal isVisible={viewAttendeevisibility} toggleVisibility={toggleVisibility} data={viewAttendeeData} renderItem={renderViewAttendee} />
    </View>
    :
    <Skeleton />

    }

    </View>

  );
};

export default EventDetailScreen;
