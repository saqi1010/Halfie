import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import metrics from '../../theme/metrics';
import font from '../../theme/font';
import colors from '../../theme/color';
import moment from 'moment';

const ClanderDays = ({day,handleDayClick,currentDate,selectedDate,minSelectableDate}) => {
    const isCurrentMonth = day.isSame(currentDate, 'month');
    const isAfterToday = day.isAfter(moment(), 'day');
    const isBeforeMinDate = day.isAfter(minSelectableDate);
    const isSelected = selectedDate === moment(day).format('YYYY-MM-DD');
    // React.useEffect(() => {
    //   handleDayClick(day)
    // },[])
    return (
      <TouchableOpacity
        style={styles.dayContainer}
        key={day}
        onPress={() => handleDayClick(day)}
        disabled={isAfterToday || isBeforeMinDate || !isCurrentMonth}
      >
        <View style={isSelected && styles.selectedDay}>
          <Text
            style={[
              styles.day,
              !isCurrentMonth && styles.dayOutOfMonth,
              (isAfterToday || isBeforeMinDate || !isCurrentMonth) && styles.disabledDay,
            ]}
          >
            {day.format('D')}
          </Text>
        </View>
      </TouchableOpacity>
    );
}

export default ClanderDays

const styles = StyleSheet.create({
    dayContainer: {
        height: metrics.changeByMobileDPI(40),
        alignItems: 'center',
        justifyContent: 'center',
        width: `${100 / 7}%`,
      },
      day: {
        fontSize: metrics.changeByMobileDPI(12),
        fontFamily: font.type.montserratMedium,
        color: colors.black,
      },
      dayOutOfMonth: {
        color: colors.white,
      },
      today: {
        backgroundColor: colors.palePink,
        borderRadius: metrics.changeByMobileDPI(100),
        padding: metrics.changeByMobileDPI(10),
      },
      dateFontStyle: {
        fontSize: metrics.changeByMobileDPI(12),
        fontFamily: font.type.montserratSemiBold,
        color: colors.black,
      },
      marginTopContainer: {
        marginTop: metrics.changeByMobileDPI(30),
      },
      disabledDay: {
        color: colors.graySolid,
      },
      selectedDay: {
        backgroundColor: colors.palePink,
        borderRadius: metrics.changeByMobileDPI(100),
        height: metrics.changeByMobileDPI(40),
        width: metrics.changeByMobileDPI(40),
        alignItems: 'center',
        justifyContent: 'center',
      },
})