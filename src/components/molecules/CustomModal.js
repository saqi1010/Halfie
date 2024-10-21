import React, { memo, useState, useEffect } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import metrics from '../../theme/metrics';
import font from '../../theme/font';
import colors from '../../theme/color';
import PreviousSvg from '../../assets/svg/PreviousSvgInWhiteColor.svg';
import NextSvg from '../../assets/svg/NextSvgInWhiteColor.svg';
import { generateYears } from '../../theme/staticData';

const CustomModal = ({
  isVisible,
  hideModal,
  headerName = '',
  listingData = [],
  onSelectItem,
  keyName = 'fullLabel',
  monthVisibility = false,
}) => {
  const [yearRange, setYearRange] = useState([]);
  const [currentHeaderName, setCurrentHeaderName] = useState('');

  useEffect(() => {
    if (listingData.length > 0) {
      setYearRange(listingData.slice(0, 12));
      setCurrentHeaderName(headerName);
    }
  }, [listingData, headerName, isVisible]);

  const handleNext = () => {
    if (yearRange.length > 0) {
      const startYear = yearRange[yearRange.length - 1][keyName] + 1;
      const endYear = startYear + 11;
      setYearRange(generateYears(startYear, endYear));
      setCurrentHeaderName(`${startYear} - ${endYear}`);
    }
  };

  const handlePrevious = () => {
    if (yearRange.length > 0) {
      const startYear = yearRange[0][keyName] - 12;
      const endYear = startYear + 11;
      setYearRange(generateYears(startYear, endYear));
      setCurrentHeaderName(`${startYear} - ${endYear}`);
    }
  };

  const renderItem = ({ item }) => {
    const currentYear = new Date().getFullYear();
    const isDisabled = item[keyName] >= currentYear;
    return (
      <TouchableOpacity
        onPress={() => !isDisabled && handleSelectItem(item)}
        style={[styles.flexContainer, isDisabled && styles.disabledItem]}
        disabled={isDisabled}
      >
        <View style={styles.itemContainer}>
          <Text style={[styles.itemFontStyle, isDisabled && styles.disabledItemText]}>{item[keyName]}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleSelectItem = (item) => {
    onSelectItem(item);
    hideModal();
  };

  return (
    <Modal transparent={true} visible={isVisible} onRequestClose={hideModal} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {headerName && (
            <View style={styles.headerContainer}>
              {monthVisibility && (
                <TouchableOpacity onPress={handlePrevious} hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}>
                  <PreviousSvg height={metrics.changeByMobileDPI(10)} width={metrics.changeByMobileDPI(10)} />
                </TouchableOpacity>
              )}
              <Text style={styles.headerFontStyle}>{currentHeaderName}</Text>
              {monthVisibility && (
                <TouchableOpacity onPress={handleNext} hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}>
                  <NextSvg height={metrics.changeByMobileDPI(10)} width={metrics.changeByMobileDPI(10)} />
                </TouchableOpacity>
              )}
            </View>
          )}
          {listingData.length > 0 ? (
            <FlatList
              numColumns={3}
              data={yearRange}
              contentContainerStyle={styles.contentContainerStyle}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : (
            <View style={styles.noDataContainer}>
              <Text style={styles.noDataText}>No results found</Text>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    height: metrics.changeByMobileDPI(260),
    borderRadius: metrics.changeByMobileDPI(12),
    overflow: 'hidden',
    width: metrics.changeByMobileDPI(230),
  },
  headerContainer: {
    height: metrics.changeByMobileDPI(55),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: metrics.changeByMobileDPI(20),
    flexDirection: 'row',
    backgroundColor: colors.darkBlue,
  },
  headerFontStyle: {
    fontSize: font.size.font15,
    fontFamily: font.type.quicksandBold,
    color: colors.white,
    marginHorizontal: metrics.changeByMobileDPI(20),
  },
  itemContainer: {
    height: metrics.changeByMobileDPI(49),
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemFontStyle: {
    fontSize: font.size.font14,
    fontFamily: font.type.quicksandSemiBold,
    color: colors.black,
  },
  contentContainerStyle: {
    paddingHorizontal: metrics.changeByMobileDPI(10),
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    fontSize: font.size.font16,
    fontFamily: font.type.quicksandMedium,
    color: colors.black,
  },
  flexContainer: {
    flex: 1,
  },
  disabledItem: {
    opacity: 0.5,
  },
  disabledItemText: {
    color: colors.graySolid,
  },
});

export default memo(CustomModal);
