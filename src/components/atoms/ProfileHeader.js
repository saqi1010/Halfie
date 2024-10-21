import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import metrics from '../../theme/metrics';
import font from '../../theme/font';
import colors from '../../theme/color';
import * as Keychain from 'react-native-keychain';
import images from '../../theme/images';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ProfileHeader = React.memo(() => {
    const [webIndexData, setWebIndexData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [profileImageError, setProfileImageError] = React.useState(false);
    const [flagImageError, setFlagImageError] = React.useState(false);

    const getWebIndexData = async () => {
        try {
            const credentials = await Keychain.getGenericPassword({ service: 'userLoginData' });
            const parsedData = JSON.parse(credentials.username);
            if (parsedData) {
                setWebIndexData(parsedData.aboutMe);
            }
        } catch (error) {
            console.log('getWebIndexData error:', error.message);
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        getWebIndexData();
    }, []);

    if (loading) {
        return (
            <SkeletonPlaceholder>
                <View style={styles.flexDirectionContainer}>
                    <View style={styles.imageContainer} />
                    <View style={styles.titleContainer}>
                        <View style={styles.skeletonText} />
                        <View style={styles.skeletonTextSmall} />
                    </View>
                    <View style={styles.imageFlagContainer} />
                </View>
            </SkeletonPlaceholder>
        );
    }


    return (
        <View style={styles.flexDirectionContainer}>
            <View style={styles.imageContainer}>
                <Image
                    source={
                        profileImageError || !webIndexData?.image
                            ? images.hobbiesImageData.hobbies1
                            : { uri: webIndexData.image }
                    }
                    style={styles.imageStyle}
                    onError={() => setProfileImageError(true)}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.headerTitleFontStyle}>{webIndexData.fullName}</Text>
                <Text style={styles.ageFontStyle}>{`Age ${webIndexData.age}, ${webIndexData.address?.country || 'Unknown'}`}</Text>
            </View>
            <View style={styles.imageFlagContainer}>
                <Image
                    source={
                        flagImageError || !webIndexData?.nationality?.filename
                            ? images.hobbiesImageData.hobbies1
                            : { uri: webIndexData.nationality.filename }
                    }
                    style={styles.imageFlagStyle}
                    onError={() => setFlagImageError(true)}
                />
            </View>
        </View>
    );
});

export default ProfileHeader;

const styles = StyleSheet.create({
    imageContainer: {
        height: metrics.changeByMobileDPI(60),
        width: metrics.changeByMobileDPI(60),
        borderRadius: metrics.changeByMobileDPI(30),
        overflow: 'hidden',
    },
    imageStyle: {
        height: '100%',
        width: '100%',
        borderRadius: metrics.changeByMobileDPI(30),
    },
    headerTitleFontStyle: {
        fontSize: font.size.font20,
        color: colors.black,
        fontFamily: font.type.quicksandBold,
    },
    ageFontStyle: {
        fontSize: font.size.font13,
        color: colors.black,
        fontFamily: font.type.quicksandRegular,
    },
    flexDirectionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: metrics.changeByMobileDPI(20),
        marginTop: metrics.changeByMobileDPI(20),
    },
    imageFlagContainer: {
        height: metrics.changeByMobileDPI(24),
        width: metrics.changeByMobileDPI(32),
    },
    imageFlagStyle: {
        height: '100%',
        width: '100%',
    },
    titleContainer: {
        alignItems: 'center',
    },
    skeletonText: {
        height: metrics.changeByMobileDPI(16),
        width:metrics.screenWidth / 1.7,
        borderRadius: metrics.changeByMobileDPI(4),
        marginBottom: metrics.changeByMobileDPI(10),
    },
    skeletonTextSmall: {
        height: metrics.changeByMobileDPI(16),
        width:metrics.screenWidth / 2.5,
        borderRadius: metrics.changeByMobileDPI(4),
    },
});
