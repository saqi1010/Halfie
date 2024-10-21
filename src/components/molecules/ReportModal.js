import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image, FlatList, TextInput } from 'react-native';
import metrics from '../../theme/metrics';
import font from '../../theme/font';
import colors from '../../theme/color';
import GridentBorder from '../atoms/GridentBorder';
import Report from '../atoms/Report';
import { useDispatch, useSelector } from 'react-redux';
import { getUserReportRequest } from '../../stores/action/getUserReportAction';
import { addUserReportRequest } from '../../stores/action/addUserReportAction';

const ReportModal = ({
    visible,
    onDelete,
    onCancel,
    image,
    name,
    reportData
}) => {
    const [inputText, setInputText] = useState('');
    const { getUserReportData } = useSelector((state) => state.getUserReport);
    const [selectedReasons, setSelectedReasons] = React.useState({});

    // console.warn("======>",selectedReasons);

    const dispatch = useDispatch();
    const handleInputChange = (text) => {
        setInputText(text);
    };

    const renderReport = ({ item, index }) => {
        return (
            <Report itemData={item} indexData={index} selectedReasons={selectedReasons} setSelectedReasons={setSelectedReasons}/>
        );
    };



    const reportList = () => {
        dispatch(getUserReportRequest());
    }

    let DummyData =  [
        {
            "_id": "66ab89c233205b12a845990c",
            "userId": "66aa2f51b9996276cb709c7a",
            "reportUser": "66ab13d9af140ec59cbe24e8",
            "description": "Testing the data flow",
            "reasons": [
                {
                    "reason": "Abuse",
                    "subReason": [
                        "Verbal Abuse / Insults",
                        "Hate Speech / Discrimination"
                    ],
                    "_id": "66ab89c233205b12a845990d"
                },
                {
                    "reason": "Inappropriate Content",
                    "subReason": [
                        "Explicity Sexaul Content",
                        "Nudity",
                        "Violence",
                    ],
                    "_id": "66ab89c233205b12a845990d"
                },
            ],
            "createdAt": "2024-08-01T13:12:34.677Z",
            "updatedAt": "2024-08-01T13:12:34.677Z",
            "__v": 0
        }
    ]

    const cancelTheReport = () => {
        onCancel()
        setSelectedReasons({})
    };

    const handleReportSubmit = () => {
        onDelete()
        const body = {
            reportUser:DummyData?.reportUser, 
            description: inputText,
            reasons: Object.keys(selectedReasons).map(reason => ({
                reason: reason,
                subReason: selectedReasons[reason]
            }))
        };
        // dispatch(addUserReportRequest(body));
    };

    return (
        <Modal
        onShow={reportList}
            transparent={true}
            animationType="fade"
            visible={visible}
            onRequestClose={onCancel}
        >
            <View style={styles.overlay}>
                <GridentBorder
                    colors={['#FB7BA2', '#FB7BA2', '#FCE04399']}
                    borderWidth={2}
                    borderRadius={metrics.changeByMobileDPI(10)}
                    style={styles.gridentConatiner}
                >
                    <View style={styles.alertContainer}>
                        <View style={styles.reportProfileContainer}>
                            <Image source={image} style={styles.imageStyle} />
                            <Text style={styles.nameFontStyle} numberOfLines={1}>{name}</Text>
                        </View>
                        {getUserReportData && <FlatList data={getUserReportData.reasons} renderItem={renderReport}/>}
                        <View style={styles.descriptionContainer}>
                            <TextInput 
                                maxLength={100}
                                style={styles.inputContainer} 
                                placeholder='Tell us more...' 
                                placeholderTextColor={colors.black} 
                                multiline
                                onChangeText={handleInputChange}
                                value={inputText}
                            />
                        </View>
                        <Text style={styles.wordsFontStyle}>{`${inputText.length} / 100`}</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.cancelButton} onPress={cancelTheReport}>
                                <Text style={styles.cancelText}>{'Cancel'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deleteButton} onPress={handleReportSubmit}>
                                <Text style={styles.buttonText}>{'Report'}</Text>
                            </TouchableOpacity>
                        </View>
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
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    titleText: {
        fontSize: font.size.font18,
        textAlign: 'center',
        fontFamily: font.type.montserratMedium,
        color: colors.black,
        marginBottom: metrics.changeByMobileDPI(20)
    },
    alertText: {
        fontSize: font.size.font14,
        textAlign: 'center',
        fontFamily: font.type.montserratMedium,
        color: colors.graySolid,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        paddingHorizontal: metrics.changeByMobileDPI(20),
        marginBottom: metrics.changeByMobileDPI(20)
    },
    deleteButton: {
        backgroundColor: colors.tomatoRed,
        height: metrics.changeByMobileDPI(40),
        borderRadius: metrics.changeByMobileDPI(8),
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    cancelButton: {
        borderColor: colors.textGrey,
        backgroundColor: colors.lightGrayBgColor,
        height: metrics.changeByMobileDPI(40),
        borderRadius: metrics.changeByMobileDPI(8),
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginRight: metrics.changeByMobileDPI(10),
    },
    buttonText: {
        fontSize: font.size.font16,
        fontFamily: font.type.montserratRegular,
        color: colors.white,
    },
    cancelText: {
        fontSize: font.size.font16,
        fontFamily: font.type.montserratRegular,
        color: colors.black,
    },
    gridentConatiner: {
        flex: 1, 
        marginVertical: metrics.changeByMobileDPI(20),
        overflow: 'hidden',
        borderRadius: metrics.changeByMobileDPI(12),
        elevation: 3
    },
    reportProfileContainer: {
        height: metrics.changeByMobileDPI(64),
        elevation: 5,
        backgroundColor: colors.white,
        borderRadius: metrics.changeByMobileDPI(25),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: metrics.changeByMobileDPI(10),
        marginVertical: metrics.changeByMobileDPI(30)
    },
    imageStyle: {
        height: metrics.changeByMobileDPI(24),
        width: metrics.changeByMobileDPI(24),
        borderRadius: metrics.changeByMobileDPI(100),
        marginRight: metrics.changeByMobileDPI(15)
    },
    nameFontStyle: {
        fontSize: font.size.font16,
        fontFamily: font.type.quicksandSemiBold,
        color: colors.black,
    },
    titleFontStyle: {
        fontSize: font.size.font12,
        fontFamily: font.type.quicksandMedium,
        color: colors.black, 
        marginBottom: metrics.changeByMobileDPI(10)
    },
    subCategoryFontStyle: {
        fontSize: font.size.font10,
        fontFamily: font.type.quicksandRegular,
        color: colors.black, 
        includeFontPadding: false
    },
    circle: {
        height: metrics.changeByMobileDPI(12),
        width: metrics.changeByMobileDPI(12),
        borderRadius: metrics.changeByMobileDPI(100),
        borderWidth: 1,
        borderColor: colors.black,
        marginRight: metrics.changeByMobileDPI(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerCircle: {
        height: metrics.changeByMobileDPI(8),
        width: metrics.changeByMobileDPI(8),
        borderRadius: metrics.changeByMobileDPI(100),
        backgroundColor: colors.primary
    },
    flexDirectionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: metrics.changeByMobileDPI(10)
    },
    mainContainer: {
        marginBottom: metrics.changeByMobileDPI(20),
    },
    descriptionContainer: {
        height: metrics.changeByMobileDPI(109),
        borderWidth: 1,
        borderColor: colors.graySolid,
        borderRadius: metrics.changeByMobileDPI(25),
        paddingHorizontal: metrics.changeByMobileDPI(10),
        marginHorizontal: metrics.changeByMobileDPI(20),
        width: metrics.screenWidth / 1.4,
        paddingVertical: metrics.changeByMobileDPI(10)
    },
    inputContainer: {
        fontSize: font.size.font10,
        fontFamily: font.type.quicksandRegular,
        color: colors.black,   
        padding: 0 
    },
    wordsFontStyle: {
        fontSize: font.size.font10,
        fontFamily: font.type.quicksandMedium,
        color: colors.black, 
        alignSelf: 'flex-end',
        marginHorizontal: metrics.changeByMobileDPI(20),
        marginVertical: metrics.changeByMobileDPI(10)
    }
});

export default ReportModal;
