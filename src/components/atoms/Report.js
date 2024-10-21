import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image, FlatList } from 'react-native';
import metrics from '../../theme/metrics';
import font from '../../theme/font';
import colors from '../../theme/color';
import GridentBorder from '../atoms/GridentBorder';
import CheckSvg from '../../assets/svg/CheckSvg.svg'

const Report = ({ itemData, index ,selectedReasons, setSelectedReasons}) => {
    const [selectRadio, setSelectRadio] = React.useState(null)

    const addReportData = (reason, subReason) => {
        setSelectedReasons((prev) => {
            const updated = { ...prev };
            if (!updated[reason]) {
                updated[reason] = [];
            }
            if (updated[reason].includes(subReason)) {
                updated[reason] = updated[reason].filter((sr) => sr !== subReason);
            } else {
                updated[reason].push(subReason);
            }
            return updated;
        });
    }

    const renderData = ({ item, index }) => {
        const handlePress = () => {
            addReportData(itemData.reason, item);
        }
        return (
            <TouchableOpacity onPress={handlePress} style={styles.flexDirectionContainer}>
                <View style={styles.circle}>
                {selectedReasons[itemData.reason]?.includes(item) && 
                    
                        <CheckSvg height={metrics.changeByMobileDPI(15)} width={metrics.changeByMobileDPI(15)} />
                        // <GridentBorder
                        //     colors={colors.grident1}
                        //     borderWidth={0}
                        //     borderRadius={metrics.changeByMobileDPI(10)}
                        //     style={styles.innerCircle}
                        // />
                    }
                </View>
                <Text style={styles.subCategoryFontStyle}>{item}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.titleFontStyle}>{itemData.reason}</Text>
            <FlatList data={itemData.subReason} renderItem={renderData} />
        </View>
    )
}

export default Report

const styles = StyleSheet.create({
    nameFontStyle: {
        fontSize: font.size.font16,
        fontFamily: font.type.quicksandSemiBold,
        color: colors.black,
    },
    titleFontStyle: {
        fontSize: font.size.font14,
        fontFamily: font.type.quicksandMedium,
        color: colors.black,
        marginBottom: metrics.changeByMobileDPI(15)
    },
    subCategoryFontStyle: {
        fontSize: font.size.font12,
        fontFamily: font.type.quicksandRegular,
        color: colors.black,
        includeFontPadding: false
    },
    circle: {
        height: metrics.changeByMobileDPI(17),
        width: metrics.changeByMobileDPI(17),
        borderRadius: metrics.changeByMobileDPI(3),
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
    }
})