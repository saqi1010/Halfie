import { StyleSheet, TextInput, View } from 'react-native';
import React, { useRef } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import metrics from '../../theme/metrics';
import SearchSvg from '../../assets/svg/MagnifyinGlassSvg.svg';
import colors from '../../theme/color';
import font from '../../theme/font';

const GlobalSearch = ({ placeHolder = 'Search here...', setValue = () => {}, value = '', onFocusEvent = () => {}, onBlurEvent = () => {} }) => {
  const textInputRef = useRef(null);
  const handleIconPress = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  return (
    <LinearGradient
      colors={colors.grident2}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.searchContainer}
    >
      <View style={styles.innerContainer}>
        <TextInput
          ref={textInputRef} // Attach ref to TextInput
          onFocus={onFocusEvent}
          onBlur={onBlurEvent}
          onChangeText={setValue}
          placeholderTextColor={colors.graySolid}
          placeholder={placeHolder}
          value={value}
          style={styles.textInput}
        />
        <SearchSvg
          height={metrics.changeByMobileDPI(15)}
          width={metrics.changeByMobileDPI(15)}
          onPress={handleIconPress}
        />
      </View>
    </LinearGradient>
  );
};

export default GlobalSearch;

const styles = StyleSheet.create({
  searchContainer: {
    height: metrics.changeByMobileDPI(39),
    width: metrics.screenWidth - 60,
    borderRadius: 100,
    overflow: 'hidden',
    padding: 1, 
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 100,
    paddingHorizontal: metrics.changeByMobileDPI(20),
    flex: 1,
  },
  textInput: {
    flex: 1,
    fontSize: font.size.font14,
    fontFamily: font.type.quicksandMedium,
    color: colors.black,
    paddingVertical: 0,
  },
});
