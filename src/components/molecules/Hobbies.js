import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../theme/color';
import font from '../../theme/font';
import metrics from '../../theme/metrics';
import { useNavigation } from '@react-navigation/native';


const Hobbies = ({ item, exterContainerStyle, setHobbies, hobbies ,btnDisable = false }) => {
  const navigation = useNavigation();
  const [imageError, setImageError] = useState(false); 

  const isSelected = hobbies && hobbies.some(hobby => hobby._id === item._id);

  const handleSelection = () => {
    if (isSelected) {
      const updatedHobbies = hobbies.filter(hobby => hobby._id !== item._id);
      setHobbies(updatedHobbies);
    } else if (hobbies.length < 3) {
      const updatedHobbies = [...hobbies, item];
      setHobbies(updatedHobbies);
    }
  };

  return (
    <View style={[styles.alignmentCenterContainer, exterContainerStyle]}>
      <View style={styles.imageContainer}>
        <Image 
          resizeMode="cover" 
          source={imageError || !item?.fileName ?  require('../../assets/images/RImages.png') : { uri: item.fileName }} 
          style={styles.imageStyle} 
          onError={() => setImageError(true)} 
        />
      </View>
      <TouchableOpacity 
        disabled={btnDisable}
        onPress={handleSelection} 
        style={[
          styles.buttonContainer,
          {
            borderColor: isSelected ? colors.tomatoRed : colors.graySolid,
            backgroundColor: isSelected ? colors.tomatoRed : colors.white,
          },
        ]}
      >
        <Text 
          style={[
            styles.nameFontStyle,
            { color: isSelected ? colors.white : colors.graySolid },
          ]}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Hobbies;

const styles = StyleSheet.create({
  nameFontStyle: {
    fontSize: font.size.font10,
    fontFamily: font.type.montserratSemiBold,
    color: colors.black,
  },
  imageContainer: {
    height: metrics.changeByMobileDPI(152),
    width: metrics.screenWidth / 3.5,
    borderRadius: metrics.changeByMobileDPI(10),
    overflow: 'hidden',
    backgroundColor:colors.secondary + 10
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  alignmentCenterContainer: {
    alignItems: 'center',
    marginBottom: metrics.changeByMobileDPI(15),
    marginRight: metrics.changeByMobileDPI(10),
  },
  buttonContainer: {
    width: '100%',
    height: metrics.changeByMobileDPI(40),
    borderWidth: metrics.changeByMobileDPI(1),
    borderRadius: metrics.changeByMobileDPI(15),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: metrics.changeByMobileDPI(15),
  },
});
