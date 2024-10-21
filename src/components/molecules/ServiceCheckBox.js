import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import metrics from '../../theme/metrics';
import RightSvg from '../../assets/svg/RightSvg.svg';
import colors from '../../theme/color';
import font from '../../theme/font';
import GridentBorder from '../atoms/GridentBorder';
import CheckSvg from '../../assets/svg/GridentCheckSvg.svg';

const ServiceCheckBox = ({ title, serviceName, item, index, onToggleCheck }) => {
  const [checkVisibility, setCheckVisibility] = React.useState(false);
  const [descriptionVisibility, setDescriptionVisibility] = React.useState(-1);
  const toggle = () => {
    if (descriptionVisibility != index) {
      setDescriptionVisibility(index)
    } else {
      setDescriptionVisibility(-1)
    }
  }


  const toggleCheck = () => {
    setCheckVisibility(!checkVisibility);
    onToggleCheck(item, !checkVisibility);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.flexDirectionContainer}>
        <View style={styles.rowContainer}>
          <GridentBorder
            colors={!checkVisibility ? colors.grayGrident : colors.grident1}
            borderWidth={1.5}
            borderRadius={metrics.changeByMobileDPI(6)}
            style={styles.gridentConatiner}
          >
            <TouchableOpacity onPress={toggleCheck} style={styles.gridentCheckBoxContainer}>
              {checkVisibility && <CheckSvg height={metrics.changeByMobileDPI(12.12)} width={metrics.changeByMobileDPI(15.41)} />}
            </TouchableOpacity>
          </GridentBorder>
          <View style={styles.marginLeftContainer}>
            <Text style={styles.titleFontStyle}>{title}</Text>
            <Text style={styles.serviceFontStyle}>{serviceName}</Text>
          </View>
        </View>
        <TouchableOpacity hitSlop={{ top: 20, left: 20, right: 20, bottom: 20 }} onPress={toggle}>
          {
            descriptionVisibility == index ?
              <View style={styles.transformStyle}>
                <RightSvg height={metrics.changeByMobileDPI(11)} width={metrics.changeByMobileDPI(8)} />
              </View>
              :
              <RightSvg height={metrics.changeByMobileDPI(11)} width={metrics.changeByMobileDPI(8)} />

          }
        </TouchableOpacity>
      </View>
      {
  descriptionVisibility == index &&
        <View style={styles.flexContainer}>
        <Text style={styles.detailFontStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      </View>
      }
      <View style={styles.line}></View>
    </View>
  );
};

export default ServiceCheckBox;

const styles = StyleSheet.create({
  flexDirectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: metrics.changeByMobileDPI(20),
    paddingVertical: metrics.changeByMobileDPI(25),
  },
  line: {
    borderStyle: 'dashed',
    borderBottomWidth: metrics.changeByMobileDPI(1),
    borderColor: colors.lightGray,
  },
  titleFontStyle: {
    fontSize: font.size.font16,
    color: colors.black,
    fontFamily: font.type.montserratRegular,
  },
  serviceFontStyle: {
    fontSize: font.size.font12,
    color: colors.graySolid,
    fontFamily: font.type.montserratRegular,
    marginTop: metrics.changeByMobileDPI(10),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gridentCheckBoxContainer: {
    width: metrics.changeByMobileDPI(36),
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.changeByMobileDPI(4.5),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridentConatiner: {
    height: metrics.changeByMobileDPI(40),
  },
  mainContainer: {},
  marginLeftContainer: {
    marginLeft: metrics.changeByMobileDPI(20),
  },
  transformStyle: {
    transform: [{
      rotate: '90deg'
    }]
  },
  detailFontStyle:{
    fontSize: font.size.font12,
    color: colors.graySolid,
    fontFamily: font.type.montserratRegular,
  },
  flexContainer:{
    flex:1,
    marginHorizontal:metrics.changeByMobileDPI(20),
    marginBottom:metrics.changeByMobileDPI(20)
  }
});
