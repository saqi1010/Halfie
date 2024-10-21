import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GridentBorder from './GridentBorder'
import metrics from '../../theme/metrics'
import colors from '../../theme/color'
import font from '../../theme/font'

const GenderSelect = ({ extraComponentPlaceHolder, formState, setFormState, inputKey, data ,suggestionTitle = 'Are you a' ,flexManage}) => {
  const onClick = (value) => {
    if (inputKey) {
        setFormState(prevState => ({
            ...prevState,
            [inputKey]: {
                ...prevState[inputKey],
                leftData: value
            }
        }));
    }
  };
  const isMaleSelected = formState[inputKey]?.leftData === 'Mr.';
  return (
    <View style={{flex:1
    // width:metrics.screenWidth / 2.4,
    }}>
      <View style={styles.flexDirectionContainer}>
        <View style={{flex:flexManage}}>
        <Text style={styles.titleFontStyle}>{suggestionTitle} </Text>
        </View>
        <GridentBorder
          colors={!isMaleSelected ? colors.grident1 : colors.grayGrident}
          borderWidth={0}
          borderRadius={metrics.changeByMobileDPI(100)}
          style={styles.gridentConatiner}
          >
          <TouchableOpacity 
            onPress={() => onClick('Miss')} 
            style={[styles.button, {backgroundColor:isMaleSelected ? colors.white : 'transparent'  }]}
            >
            <Text style={[styles.buttonText, !isMaleSelected && styles.inactiveText]}>Man</Text>
          </TouchableOpacity>
        </GridentBorder>
        <Text style={styles.titleFontStyle}> or </Text>
        <GridentBorder
          colors={isMaleSelected ? colors.grident1 : colors.grayGrident}
          borderWidth={0}
          borderRadius={metrics.changeByMobileDPI(100)}
          style={styles.gridentConatiner}
          >
     
          <TouchableOpacity 
            onPress={() => onClick('Mr.')} 
            style={[styles.button, {backgroundColor:!isMaleSelected ? colors.white : 'transparent'  }]}
          >
            <Text style={[styles.buttonText, isMaleSelected && styles.inactiveText]}>Woman</Text>
          </TouchableOpacity>
        </GridentBorder>
        <Text style={styles.titleFontStyle}> ?</Text>
      </View>
    </View>
  )
};

export default GenderSelect;

const styles = StyleSheet.create({
  gridentConatiner: {
    height: metrics.changeByMobileDPI(34),
    overflow: 'hidden',
    borderRadius: metrics.changeByMobileDPI(100),
    marginHorizontal: metrics.changeByMobileDPI(5),
  },
  button: {
    height: metrics.changeByMobileDPI(34),
    borderRadius: metrics.changeByMobileDPI(100),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: metrics.changeByMobileDPI(20),
    borderWidth: 1,
    borderColor: colors.lightGray,
    paddingHorizontal:metrics.changeByMobileDPI(15),
  },
  selectedButton: {
    backgroundColor: colors.white,
    borderColor: colors.white,
  },
  buttonText: {
    fontSize: font.size.font15,
    fontFamily: font.type.quicksandMedium,
    color: colors.graySolid,
    includeFontPadding:false,
    top:1
  },
  inactiveText: {
    color: colors.white,
  },
  titleFontStyle: {
    fontSize: font.size.font16,
    fontFamily: font.type.quicksandMedium,
    color: colors.graySolid,
  },
  flexDirectionContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: metrics.changeByMobileDPI(20),
    marginBottom: metrics.changeByMobileDPI(20),
  },
});
