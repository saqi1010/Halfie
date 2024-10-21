import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import metrics from '../../theme/metrics';
import colors from '../../theme/color';
import GridentBorder from './GridentBorder';
import font from '../../theme/font';

const EducationLevel = ({ dataArea, aboutVisibility, mapViewVisibility = true, formState, setFormState, inputKey }) => {
  const [location, setLocation] = useState('');
   
  console.warn("==formState==",formState[inputKey]);
  
  const renderCountry = ({ item, index }) => {
    const onClick = () => {
      if (inputKey) {
        setFormState(prevState => ({
          ...prevState,
          [inputKey]: {
            ...prevState[inputKey],
            ...(inputKey === 'myPreferenceEducation' && { title: item.name }),
            leftData: item.name
          }
        }));
      }
      setLocation(item.name?.toLowerCase());
    };


   

    return (
      <GridentBorder
        colors={location === item.name.toLowerCase() ? colors.grident1 : colors.grayGrident}
        borderWidth={0}
        borderRadius={metrics.changeByMobileDPI(100)}
        style={[styles.gridentConatiner, !mapViewVisibility && { marginBottom: metrics.changeByMobileDPI(10) }]}
      >
        <TouchableOpacity
          onPress={onClick}
          style={{
            ...styles.button,
            backgroundColor: location !== item.name.toLowerCase() ? colors.white : 'transparent',
            borderColor: location === item.name.toLowerCase() ? colors.white : colors.grayMedium
          }}
        >
          <Text style={{
            ...styles.buttonText,
            color: location === item.name.toLowerCase() ? colors.white : colors.graySolid
          }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </GridentBorder>
    );
  };
  React.useEffect(() => {
    setLocation(formState[inputKey].title)
     },[formState[inputKey].title])
  return (
    <View style={styles.mainContainer}>
      <FlatList
        horizontal
        data={dataArea}
        nestedScrollEnabled
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={renderCountry}
      />
    </View>
  );
};

export default EducationLevel;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginBottom: metrics.changeByMobileDPI(20),
  },
  locationContainer: {
    height: metrics.changeByMobileDPI(200),
    width: metrics.screenWidth - 20,
    borderRadius: metrics.changeByMobileDPI(20),
    overflow: 'hidden',
    backgroundColor: '#FCE04399',
    marginHorizontal: metrics.changeByMobileDPI(20),
  },
  button: {
    height: metrics.changeByMobileDPI(44),
    width: metrics.changeByMobileDPI(59),
    borderRadius: metrics.changeByMobileDPI(100),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: metrics.changeByMobileDPI(20),
    borderWidth: 0.7,
    borderColor: colors.lightGray,
  },
  buttonText: {
    fontSize: metrics.changeByMobileDPI(10),
    fontFamily: font.type.montserratRegular,
    color: colors.graySolid,
    textAlign: 'center'
  },
  smallDoNutContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -metrics.changeByMobileDPI(20),
    marginLeft: -metrics.changeByMobileDPI(20),
  },
  smallDoNut: {
    height: metrics.changeByMobileDPI(40),
    width: metrics.changeByMobileDPI(40),
    borderRadius: metrics.changeByMobileDPI(100),
    backgroundColor: 'transparent',
    borderWidth: metrics.changeByMobileDPI(15),
    borderColor: colors.linkBlue,
  },
  contentContainerStyle: {
    marginTop: metrics.changeByMobileDPI(20),
  },
  contentContainerStyle1: {
    marginTop: metrics.changeByMobileDPI(20),
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  gridentConatiner: {
    height: metrics.changeByMobileDPI(44),
    width: metrics.changeByMobileDPI(59),
    overflow: 'hidden',
    borderRadius: metrics.changeByMobileDPI(100),
    marginHorizontal: metrics.changeByMobileDPI(5),
    marginVertical:2
  },
});
