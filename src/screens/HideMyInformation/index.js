import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './style';
import hooks from './hooks';
import GridentButton from '../../components/atoms/GridentButton';
import WarningSvg from "../../assets/svg/WarningSvg1.svg"
import metrics from '../../theme/metrics';
const HideMyInformation = () => {
  const { hideInformationEvent ,loading,renderHide,DummyData} = hooks();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.titleFontStyle}>Hide My Information</Text>
        <View style={styles.warningContainer}>
          <WarningSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)} />
          <Text style={styles.warningFontStyle}>When you choose to hide your information. The selected information is not shown to other users. However, your information is still used by our matching algorithm to recommend your profiles to other users on our platform.</Text>
        </View>
        <Text style={styles.subTitleFontStyle}>What would you like to hide?</Text>
        {DummyData && <FlatList data={DummyData} renderItem={renderHide} contentContainerStyle={styles.contentContainerStyle}/>}
      </View>
      <GridentButton
        loading={loading}
        defaultGridentColor={ ['#FB7BA2', '#FB7BA2', '#FCE04399']}
        extrenalStyle={[styles.extrenalStyle1]}
        onClick={hideInformationEvent}
        buttonText="HIDE"
      />

    </View>
  );
};

export default HideMyInformation;
