import * as React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import HeartFillSvg from '../../assets/svg/bottom_tab_svgs/FillHeartSvg.svg';
import HeartUnFillSvg from '../../assets/svg/bottom_tab_svgs/UnfillHeartSvg.svg';
import SearchFillSvg from '../../assets/svg/bottom_tab_svgs/FillExploreSvg.svg';
import SearchUnFillSvg from '../../assets/svg/bottom_tab_svgs/UnfillExploreSvg.svg';
import MatchesFillSvg from '../../assets/svg/bottom_tab_svgs/FillDateSvg.svg';
import MatchesUnFillSvg from '../../assets/svg/bottom_tab_svgs/UnfillDateSvg.svg';
import ProfileFillSvg from '../../assets/svg/bottom_tab_svgs/FillProfileSvg.svg';
import ProfileUnFillSvg from '../../assets/svg/bottom_tab_svgs/UnfillProfileSvg.svg';
import colors from '../../theme/color';
import GradientLine from '../../components/atoms/GridentLine';
import metrics from '../../theme/metrics';
import font from '../../theme/font';

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const renderBottomTab = (route, index) => {
    const { options } = descriptors[route.key];
    const tabLabel = options.tabBarLabel || options.title || route.name; // Use a unique variable name, like 'tabLabel'

    const isFocused = state.index === index;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    };

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      });
    };

    const getIconAndLabel = () => {
      switch (route.name) {
        case 'Home':
          return {
            icon: isFocused ? <HeartFillSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)}/> : <HeartUnFillSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)}/>,
            label: 'Heart',
          };
        case 'Search':
          return {
            icon: isFocused ? <SearchFillSvg  height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)}/> : <SearchUnFillSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)}/>,
            label: 'Explore',
          };
        case 'Matches':
          return {
            icon: isFocused ? <MatchesFillSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)}/> : <MatchesUnFillSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)}/>,
            label: 'Matches',
          };
        case 'Profile':
          return {
            icon: isFocused ? <ProfileFillSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)}/> : <ProfileUnFillSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)} />,
            label: 'Profile',
          };
        default:
          return null;
      }
    };

    const { icon, label } = getIconAndLabel();

    return (
      <TouchableOpacity
        key={index}
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.tab}
      >
        {icon}
        <Text style={[styles.tabLabel, {   fontFamily:isFocused ? font.type.quicksandSemiBold:font.type.quicksandRegular,}]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.tabBar}>
      <GradientLine
        colors={colors.grident1}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.lineContainer}
        />
      <View style={styles.flexDirectionRowContainer}>
        {state.routes.map(renderBottomTab)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    height: metrics.changeByMobileDPI(70),
    borderTopWidth: 0,
  },
  lineContainer: {
    width: metrics.screenWidth,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    marginTop: metrics.changeByMobileDPI(5),
    fontSize: font.size.font12,
    fontFamily:font.type.quicksandRegular,
    color:colors.black
  },
  flexDirectionRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  marginBottom:metrics.changeByMobileDPI(15),
  marginTop:metrics.changeByMobileDPI(15)
  },
});

export default CustomTabBar;
