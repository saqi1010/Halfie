import React, { useCallback, useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView, TextInput, Image } from 'react-native';
import metrics from '../../theme/metrics';
import font from '../../theme/font';
import colors from '../../theme/color';
import GridentBorder from '../atoms/GridentBorder';
import GradientLine from '../atoms/GridentLine';
import SearchSvg from '../../assets/svg/MagnifyinGlassSvg.svg';
import { useDispatch } from 'react-redux';
import { loaderRequest } from '../../stores/action/loaderAction';

const FormCustomModal = ({
    visible,
    onDelete,
    message,
    deleteText,
    cancelText,
    title,
    removeRedApplyBorderWidth,
    formState = {},
    setFormState = () => {}
}) => {
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedArray, setSelectedArray] = useState([]);
    const dispatch = useDispatch();

    const removeStyle = useMemo(() => removeRedApplyBorderWidth ? {
        borderWidth: 0.3,
        backgroundColor: colors.lightGrayBgColor,
        borderColor: colors.graySolid
    } : {}, [removeRedApplyBorderWidth]);

    const externalGridentStyle = useMemo(() => formState?.removeSearch ? {
        height: metrics.changeByMobileDPI(200)
    } : {}, [formState?.removeSearch]);

    const onCancel = useCallback(() => {
        setFormState(prevState => ({ ...prevState, visibility: false }));
    }, [setFormState]);

    const onClickSet = (item) => {
        setFormState(prevState => ({
            ...prevState,
            [formState.fetchApiValue]: {
                ...prevState[formState.fetchApiValue],
                id: item._id,
                title: item.title,
            },
            visibility: false,
        }));
    };

    const renderList = useCallback((item, index) => (
        <TouchableOpacity onPress={() => onClickSet(item)} key={index} style={styles.listingContainer}>
            <View style={styles.flexRowContainer}>
                {formState.fetchApiValue !== 'religion' && formState.fetchApiValue !== 'personalityType' && item.fileName && (
                    <Image source={{ uri: item.fileName }} style={styles.profileContainer} />
                )}
                <View style={{ flex: 1 }}>
                    <Text style={styles.profileFontStyle}>{item.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    ), [formState.fetchApiValue]);

    const onChangeValue = useCallback((text) => {
        setSelectedValue(text);
        const filteredData = formState.loadData.filter(item =>
            item[formState.key]?.toLowerCase().includes(text.toLowerCase())
        );
        setSelectedArray(filteredData);
    }, [formState.key, formState.loadData]);

    const onShow = useCallback(() => {
        dispatch(loaderRequest(true));
        setSelectedArray(formState.loadData);
        dispatch(loaderRequest(false));
    }, [dispatch, formState.loadData]);

    if (formState?.myPreference && !selectedArray.some(item => item._id === '101010101010101')) {
        const newDataOnTop = { "_id": "101010101010101", "title": `${formState?.myPreference}`, "type": "personalityType","value":"any" };
        selectedArray.unshift(newDataOnTop);
    }
    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={formState.visibility}
            onRequestClose={onCancel}
            onShow={onShow}
        >
            <View style={styles.overlay}>
                <GridentBorder
                    colors={colors.grident1}
                    borderWidth={2}
                    borderRadius={metrics.changeByMobileDPI(10)}
                    style={[styles.gridentConatiner, externalGridentStyle]}
                >
                    <View style={[styles.alertContainer, removeStyle]}>
                        {formState.title && (
                            <>
                                <Text style={styles.titleText}>{formState.title}</Text>
                                <GradientLine
                                    colors={colors.grident1}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={styles.lineContainer}
                                />
                            </>
                        )}
                        {formState.loadData && !formState.removeSearch ? (
                            <View style={styles.searchInputContainer}>
                                <SearchSvg height={metrics.changeByMobileDPI(13)} width={metrics.changeByMobileDPI(13)} style={styles.rightContainer} />
                                <View style={styles.flexContainer}>
                                    <TextInput
                                        placeholder="Search..."
                                        onChangeText={onChangeValue}
                                        value={selectedValue}
                                        placeholderTextColor={colors.gray_75}
                                        style={styles.inputFontStyle}
                                    />
                                </View>
                            </View>
                        ) : (
                            <View style={styles.marginBottomContainer} />
                        )}
                        <ScrollView>
                            {selectedArray.length > 0 && selectedArray.map(renderList)}
                        </ScrollView>
                    </View>
                </GridentBorder>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    alertContainer: {
        width: metrics.screenWidth - 60,
        backgroundColor: 'white',
        borderRadius: metrics.changeByMobileDPI(10),
        flex: 1,
    },
    titleText: {
        fontSize: font.size.font18,
        textAlign: 'center',
        fontFamily: font.type.montserratMedium,
        color: colors.black,
        marginVertical: metrics.changeByMobileDPI(10),
    },
    lineContainer: {
        width: '100%',
        height: 1.5,
    },
    flexContainer: {
        flex: 1,
    },
    searchInputContainer: {
        height: metrics.changeByMobileDPI(35),
        borderWidth: 0.5,
        borderRadius: metrics.changeByMobileDPI(100),
        borderColor: colors.graySolid,
        marginHorizontal: metrics.changeByMobileDPI(20),
        marginVertical: metrics.changeByMobileDPI(20),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: metrics.changeByMobileDPI(10),
    },
    rightContainer: {
        marginRight: metrics.changeByMobileDPI(10),
    },
    inputFontStyle: {
        fontSize: font.size.font14,
        fontFamily: font.type.quicksandMedium,
        color: colors.black,
        padding: 0,
    },
    flexRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: metrics.changeByMobileDPI(20),
        marginBottom: metrics.changeByMobileDPI(20),
    },
    profileContainer: {
        height: metrics.changeByMobileDPI(30),
        width: metrics.changeByMobileDPI(30),
        borderRadius: metrics.changeByMobileDPI(100),
        marginRight: metrics.changeByMobileDPI(10),
    },
    profileFontStyle: {
        fontSize: font.size.font16,
        fontFamily: font.type.quicksandMedium,
        color: colors.black,
    },
    gridentConatiner: {
        height: metrics.screenHeight / 2,
        overflow: 'hidden',
        borderRadius: metrics.changeByMobileDPI(12),
        elevation: 3,
    },
    listingContainer: {
        // Add any additional styles for the listing container here
    },
    marginBottomContainer: {
        marginBottom: metrics.changeByMobileDPI(20),
    },
});

export default FormCustomModal;
