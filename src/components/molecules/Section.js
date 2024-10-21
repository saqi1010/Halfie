import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import font from '../../theme/font';
import colors from '../../theme/color';
import metrics from '../../theme/metrics';

const Section = ({ title, description, externalContainer, removeMarginBottom }) => {
  return (
    <View style={[styles.mainContainer, externalContainer, removeMarginBottom && styles.removeMarginBottom]}>
      {title && <Text style={styles.titleFontStyle}>{title}</Text>}
      <View style={styles.flexContainer}>
        {description && <Text style={styles.descriptionFontStyle}>{description}</Text>}
      </View>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  titleFontStyle: {
    fontSize: font.size.font10,
    fontFamily: font.type.quicksandBold,
    color: colors.graySolid,
    marginBottom: metrics.changeByMobileDPI(10),
  },
  descriptionFontStyle: {
    fontSize: font.size.font10,
    fontFamily: font.type.quicksandMedium,
    color: colors.graySolid,
    textAlign:'justify',
  },
  flexContainer: {
    flex: 1,
    marginRight: metrics.changeByMobileDPI(40),
  },
  mainContainer: {
    marginBottom: metrics.changeByMobileDPI(20),
  },
  removeMarginBottom: {
    marginBottom: 0,
  },
});
