import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import metrics from '../../theme/metrics';
import font from '../../theme/font';
import colors from '../../theme/color';
import CheckSvg from '../../assets/svg/CheckSvg.svg';
import GridentBorder from './GridentBorder';

const HideMyInformation = ({ item, index ,selectedReasons, setSelectedReasons }) => {
    const addReportData = (inputKey) => {
        setSelectedReasons((prev) => {
            const updated = { ...prev };
            if (updated[inputKey]) {
                delete updated[inputKey];
            } else {
                updated[inputKey] = true;
            }
            return updated;
        });
    };

        const handlePress = () => {
            addReportData(item.inputKey);
        };

        return (
         
            <TouchableOpacity onPress={handlePress} style={styles.flexDirectionContainer}>
               <GridentBorder
            colors={colors.grident1}
            borderWidth={1}
            borderRadius={metrics.changeByMobileDPI(5)}
            style={[styles.circle]}
          >
            <View style={styles.aligmentCenterContainer}>
               { selectedReasons[item.inputKey] && <View style={styles.positionContainer}></View>}
                     {!selectedReasons[item.inputKey] && (
                         <CheckSvg height={metrics.changeByMobileDPI(15)} width={metrics.changeByMobileDPI(15)} />
                        )}
                        </View>
            </GridentBorder>
                <Text style={styles.subCategoryFontStyle}>{item.title}</Text>
            </TouchableOpacity>
        );
};

export default HideMyInformation;

const styles = StyleSheet.create({
    titleFontStyle: {
        fontSize: font.size.font14,
        fontFamily: font.type.quicksandMedium,
        color: colors.black,
        marginBottom: metrics.changeByMobileDPI(15),
    },
    subCategoryFontStyle: {
        fontSize: font.size.font16,
        fontFamily: font.type.quicksandMedium,
        color: colors.graySolid,
        includeFontPadding: false,
    },
    circle: {
        height: metrics.changeByMobileDPI(20),
        width: metrics.changeByMobileDPI(20),
        borderRadius: metrics.changeByMobileDPI(2),
        // borderWidth: 1,
        // borderColor: colors.graySolid,
        marginRight: metrics.changeByMobileDPI(10),
    
    },
    flexDirectionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: metrics.changeByMobileDPI(20),
    },
    mainContainer: {
        marginBottom: metrics.changeByMobileDPI(20),
    },
    gridentConatiner: {
        height: metrics.changeByMobileDPI(44),
        width: metrics.changeByMobileDPI(59),
        overflow: 'hidden',
        borderRadius: metrics.changeByMobileDPI(100),
        marginHorizontal: metrics.changeByMobileDPI(5),
      },
      aligmentCenterContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
       
      },
      positionContainer:{
        position:'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
        zIndex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.white,
        borderRadius:metrics.changeByMobileDPI(4)
      }
});
