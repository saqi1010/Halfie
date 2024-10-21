import { BackHandler, FlatList, Image, Text, View } from 'react-native';
import { styles } from "./style";
import React from 'react';
import colors from '../../theme/color';
import LinearGradientContainer from '../../components/organisms/LinearGradientContainer';
import { useNavigation } from '@react-navigation/native';
import screenName from '../../theme/screenName';
import { useSelector } from 'react-redux';
import { checkCalendarPermission, checkLocationPermission, checkNotificationPermission } from '../../utils/permissions';

const hooks = () => {
    const navigation = useNavigation();
    const { onBordingData, loading, error } = useSelector((state) => state.onBording);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const flatListRef = React.useRef(null);
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });
    const onViewRef = React.useRef((viewableItems) => {
        setCurrentIndex(viewableItems.viewableItems[0]?.index || 0);
    });
    console.warn("========>>>",onBordingData);

    const handleNext = () => {
        if (currentIndex < onBordingData?.length - 1) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);
            flatListRef.current?.scrollToIndex({ index: nextIndex });
        } else {
            setCurrentIndex(0);
            navigation.navigate(screenName.screenName.createAccount_screen);
            flatListRef.current?.scrollToIndex({ index: 0 });
        }
    };

    const handleSkip = () => {
        setCurrentIndex(0);
        navigation.navigate(screenName.screenName.createAccount_screen);
        flatListRef.current?.scrollToIndex({ index: 0 });
    };

    const renderSlider = ({ item, index }) => {
        return (
            <View style={styles.sliderContainer}>
                <Image source={{ uri: item?.fileName }} resizeMode='cover' style={styles.imageStyle} />
                <View style={styles.overlayContainer}>
                    <Text style={styles.titleFontStyle}>{item.title}</Text>
                    <View style={styles.flexContainer}>
                        <Text style={styles.descriptionFontStyle}>{item.extraObject.description}</Text>
                    </View>
                </View>
            </View>
        );
    };

    const renderIndicator = ({ item, index }) => {
        return (
            <View style={styles.indicatorContainer}>
                <LinearGradientContainer colors={currentIndex === index ? ['#FB7BA2', '#FCE043'] : [colors.progressGrey, colors.progressGrey]} style={[styles.dotsStyle]} />
            </View>
        );
    };

    const navigateToLogin = () => {
        navigation.navigate(screenName.screenName.createAccount_screen, { flag: 1 });
    };

    const navigateToPremission = async () => {
        const [locationGranted, notificationGranted, calenderGranted] = await Promise.all([
            checkLocationPermission(),
            checkNotificationPermission(),
            checkCalendarPermission()
        ]);
        if (!locationGranted || !notificationGranted || !calenderGranted) {
            navigation.navigate(screenName.screenName.premission_screen);
            return;
        }
        navigation.navigate(screenName.screenName.createAccount_screen);
    };

    return { renderSlider, renderIndicator, onBordingData, currentIndex, setCurrentIndex, flatListRef, viewConfigRef, navigateToPremission, onViewRef, handleNext, handleSkip, navigateToLogin };
};

export default hooks;
