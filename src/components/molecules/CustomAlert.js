import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import metrics from '../../theme/metrics';
import font from '../../theme/font';
import colors from '../../theme/color';
import GridentBorder from '../atoms/GridentBorder';
import WarningSvg from '../../assets/svg/WarningSvg.svg'
const CustomAlert = ({
  visible,
  onDelete,
  onCancel,
  message,
  deleteText,
  cancelText,
  title,
  removeRedApplyBorderWidth ,
  bachLogo
}) => {
 

  let removeStyle = removeRedApplyBorderWidth && {
    borderWidth:0.3,
    backgroundColor: colors.lightGrayBgColor,
    borderColor:colors.graySolid
  }
  return (
    <Modal
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
          {
            title || bachLogo?
            <View style={styles.warningContainer}>
              <WarningSvg  height={metrics.changeByMobileDPI(24)} width={metrics.changeByMobileDPI(24)}  />
              <View style={styles.flexCenterContainer}>
              <Text style={styles.warningFontStyle}>{title}</Text>
              </View>
            </View>
            :
            bachLogo &&
            <Text style={styles.titleText}>{title}</Text>
          }
          <Text style={[styles.alertText]}>{message}</Text>
          <View style={styles.buttonContainer}>
            {
              deleteText &&
              <TouchableOpacity style={[styles.deleteButton ,removeStyle]} onPress={onDelete}>
                <Text style={[styles.buttonText,removeRedApplyBorderWidth && {color:colors.black}]}>{deleteText}</Text>
              </TouchableOpacity>
            }
            {
              cancelText &&
              <TouchableOpacity style={[styles.cancelButton,removeStyle]} onPress={onCancel}>
                <Text style={styles.cancelText}>{cancelText}</Text>
              </TouchableOpacity>
            }
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
    // height: metrics.changeByMobileDPI(221),
    backgroundColor: 'white',
    borderRadius: metrics.changeByMobileDPI(10),
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    paddingHorizontal:metrics.changeByMobileDPI(20)
  },
  titleText: {
    fontSize: font.size.font18,
    textAlign: 'center',
    fontFamily: font.type.montserratMedium,
    color: colors.black,
    marginBottom: metrics.changeByMobileDPI(20)
  },
  warningFontStyle:{
    fontSize: font.size.font14,
    fontFamily: font.type.montserratMedium,
    color: colors.black,
    textAlign:'center'
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
    paddingHorizontal:metrics.changeByMobileDPI(20)
  },
  deleteButton: {
    backgroundColor: colors.tomatoRed,
    height: metrics.changeByMobileDPI(40),
    borderRadius: metrics.changeByMobileDPI(8),
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  cancelButton: {
    // borderWidth: 1,
    borderColor: colors.textGrey,
    backgroundColor: colors.lightGrayBgColor,
    height: metrics.changeByMobileDPI(40),
    borderRadius: metrics.changeByMobileDPI(8),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
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
  gridentConatiner:{
    height: metrics.changeByMobileDPI(221),
    overflow:'hidden',
    borderRadius: metrics.changeByMobileDPI(12),
    elevation:3
  },
  warningContainer:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:metrics.changeByMobileDPI(20),
    borderRadius:metrics.changeByMobileDPI(100),
    backgroundColor:colors.warningLight,
    height:metrics.changeByMobileDPI(44),
    marginBottom:metrics.changeByMobileDPI(15)
  },
  flexCenterContainer:{
    flex:1,
    alignItems:'center'
  }
});

export default CustomAlert;
