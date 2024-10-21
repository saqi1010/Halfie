import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';
import metrics from '../../theme/metrics';
import colors from '../../theme/color';
import GridentBorder from '../atoms/GridentBorder';
import font from '../../theme/font';
import PreviousSvg from '../../assets/svg/PreviousSvg.svg';
import NextSvg from '../../assets/svg/NextSvg.svg';
import ClanderDays from './ClanderDays';

const Calendar = ({ setAgeState = () => {}, ageState, yearOnPress, monthOnPress }) => {
  const daysHeadingData = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(null);
  useEffect(() => {
    const minSelectableYear = moment().subtract(18, 'years').format('YYYY');
  
    if (ageState.month && ageState.year) {
      const selectedMonth = moment().month(ageState.month.fullLabel).year(ageState.year.fullLabel);
      setCurrentDate(selectedMonth);
      // handleDayClick(selectedMonth)
    } else {
      const currentMonth = moment();
      setAgeState((prevState) => ({
        ...prevState,
        month: {
          fullLabel: currentMonth.format('MMMM'),
          shortLabel: currentMonth.format('MMM')
        },
        year: { fullLabel: minSelectableYear },
        selectedDate: currentMonth
      }));
      setCurrentDate(moment().year(minSelectableYear));
    }
  }, [ageState, setAgeState]);
  

  const changeMonth = (months) => {
    const newDate = currentDate.clone().add(months, 'months');
    setCurrentDate(newDate);
    setAgeState((prevState) => ({
      ...prevState,
      month: {
        fullLabel: newDate.format('MMMM'),
        shortLabel: newDate.format('MMM')
      },
      year: { fullLabel: newDate.format('YYYY') },
    }));
  };

  const changeYear = (years) => {
    const newDate = currentDate.clone().add(years, 'years');
    setCurrentDate(newDate);
    setAgeState((prevState) => ({
      ...prevState,
      year: { fullLabel: newDate.format('YYYY') },
    }));
  };

  const handleDayClick = (day) => {
    if (!day.isAfter(moment(), 'day')) {
      setSelectedDate(moment(day).format('YYYY-MM-DD'));
      const age = moment().diff(day, 'years');
      setAgeState((prevState) => ({
        ...prevState,
        selectedDate: day,
      }));
    }
  };

  const startDate = currentDate.clone().startOf('month').startOf('week');
  const endDate = currentDate.clone().endOf('month').endOf('week');
  const minSelectableDate = moment().subtract(18, 'years');
  const days = [];
  let day = startDate.clone();
  while (day.isBefore(endDate, 'day')) {
    days.push(day.clone());
    day.add(1, 'day');
  }
  const renderDay = (day) => <ClanderDays day={day} handleDayClick={handleDayClick} currentDate={currentDate} selectedDate={selectedDate} minSelectableDate={minSelectableDate}/>
  const renderHeading = (day) => {
    return (
      <Text key={day} style={styles.weekDay}>
        {day}
      </Text>
    );
  };
  return (
    <View style={styles.container}>
      <GridentBorder
        colors={['#FB7BA2', '#FB7BA2', '#FCE04399']}
        borderWidth={1}
        borderRadius={metrics.changeByMobileDPI(10)}
        style={{ marginHorizontal: 20 }}
      >
        <View
          style={{
            height: metrics.changeByMobileDPI(379),
            backgroundColor: colors.white,
            borderRadius: metrics.changeByMobileDPI(10),
          }}
        >
          <View style={[styles.flexDirectionContainer, styles.marginTopContainer]}>
            <TouchableOpacity
              hitSlop={{ top: 20, left: 20, right: 20 }}
              onPress={yearOnPress}
            >
              <Text style={styles.dateFontStyle}>{currentDate.format('YYYY')}</Text>
            </TouchableOpacity>
            <View style={styles.svgFlexRowContainer}>
              <TouchableOpacity
                hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
                onPress={() => changeYear(-1)}
                style={styles.marginRightContainer}
              >
                <PreviousSvg height={metrics.changeByMobileDPI(10)} width={metrics.changeByMobileDPI(10)} />
              </TouchableOpacity>
              <TouchableOpacity
                hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
                onPress={() => changeYear(1)}
                style={styles.marginLeftContainer}
              >
                <NextSvg height={metrics.changeByMobileDPI(10)} width={metrics.changeByMobileDPI(10)} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.flexDirectionContainer}>
            <TouchableOpacity
              hitSlop={{ left: 20, right: 20, bottom: 20 }}
              onPress={monthOnPress}
            >
              <Text style={styles.dateFontStyle}>{currentDate.format('MMMM')}</Text>
            </TouchableOpacity>
            <View style={styles.svgFlexRowContainer}>
              <TouchableOpacity
                hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
                onPress={() => changeMonth(-1)}
                style={styles.marginRightContainer}
              >
                <PreviousSvg height={metrics.changeByMobileDPI(10)} width={metrics.changeByMobileDPI(10)} />
              </TouchableOpacity>
              <TouchableOpacity
                hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
                onPress={() => changeMonth(1)}
                style={styles.marginLeftContainer}
              >
                <NextSvg height={metrics.changeByMobileDPI(10)} width={metrics.changeByMobileDPI(10)} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.weekContainer}>
            {daysHeadingData.map(renderHeading)}
          </View>
          <View style={styles.daysContainer}>{days.map(renderDay)}</View>
        </View>
      </GridentBorder>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  navButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  headerTextContainer: {
    alignItems: 'center',
  },
  headerText: {},
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: metrics.changeByMobileDPI(5),
    marginBottom: metrics.changeByMobileDPI(10),
  },
  weekDay: {
    textAlign: 'center',
    fontSize: metrics.changeByMobileDPI(12),
    fontFamily: font.type.montserratSemiBold,
    color: colors.black,
    flex: 1,
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: metrics.changeByMobileDPI(5),
  },
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
  flexDirectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: metrics.changeByMobileDPI(20),
    marginBottom: metrics.changeByMobileDPI(20),
  },
  svgFlexRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginRightContainer: {
    marginRight: metrics.changeByMobileDPI(19),
  },
  marginLeftContainer: {
    marginLeft: metrics.changeByMobileDPI(19),
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
});
export default Calendar;
