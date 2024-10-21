import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './style';
import GridentButton from '../../components/atoms/GridentButton';
import hooks from './hooks';
import Calender from '../../components/molecules/Calender';
import CustomModal from '../../components/molecules/CustomModal';
import { generateYears, months } from '../../theme/staticData';
import CustomAlert from '../../components/molecules/CustomAlert';

const AgeVerificationScreen = () => {
  const { navigateToWelcome, navigateToBording, ageState, setAgeState, monthVisibility, yearVisibility, toggleMonth, toggleYear ,ageCalculation,toggleAlertVisibility,alertVisible,toggleAlertVisibility1,alertVisible1,navigateToSigin,    toggleValidation,
    validationVisibility} = hooks();
  const initialYearRange = generateYears(new Date().getFullYear() - 100, new Date().getFullYear());
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.subContainer}>
          <Text style={styles.titleFontStyle}>Age Verification</Text>
          <Text style={styles.subTitleFontStyle}>To ensure a safe and inclusive community,
            please verify your age by providing your date of birth.
            You Cannot Change Your Age Later!</Text>
          <Text style={styles.infoFontStyle}>Please choose your date of birth.</Text>
          <Calender setAgeState={setAgeState} ageState={ageState}
            yearOnPress={toggleYear}
            monthOnPress={toggleMonth}
          />
          <Text style={styles.ageFontStyle}>{ageCalculation !== 0 && `Age: ${ageCalculation} Years Old`}</Text>
          <View style={styles.centerContainer}>
            <View style={styles.buttonMainContainer}>
              <GridentButton
                onClick={navigateToWelcome}
                extrenalStyle={[styles.extrenalStyle, styles.marginRightContainer]}
                buttonText='Continue'
              />
              {/* <GridentButton
                onClick={toggleAlertVisibility}
                removeGrident={true}
                extrenalStyle={styles.extrenalStyle}
                buttonText='Delete Account'
              /> */}
            </View>
            <Text style={styles.guidenceFontStyle}>If you’re unable to choose your
              date of birth then you’re not allowed to use
              this app due to our <Text style={styles.guidenceFontStyleButLinkcolor}>age restriction policy.</Text></Text>
          </View>
        </View>
      </ScrollView>
      <CustomModal isVisible={monthVisibility}
        onSelectItem={(month) => setAgeState({ ...ageState, month })}
        keyName={'shortLabel'}
        hideModal={toggleMonth} headerName={`${ageState.month.fullLabel}`} listingData={months} />
      <CustomModal isVisible={yearVisibility}
        keyName={'fullLabel'}
        monthVisibility={true}
        onSelectItem={(year) => setAgeState({ ...ageState, year })}
        hideModal={toggleYear}
        headerName={`${initialYearRange[0].fullLabel}-${initialYearRange[12].fullLabel}`}
         listingData={initialYearRange} />
  <CustomAlert 
        visible={alertVisible}
        onDelete={navigateToBording}
        onCancel={toggleAlertVisibility}
        message="Are you sure you would like to delete your account?"
        deleteText="Delete"
        cancelText="No"
      />
        <CustomAlert 
        visible={alertVisible1}
        onDelete={toggleAlertVisibility1}
        onCancel={navigateToSigin}
        message="This user is already exist"
        deleteText="Cancel"
        cancelText="Ok"
      />
                <CustomAlert 
        visible={validationVisibility}
        onDelete={toggleValidation}
        title={'Alert'}
        message="Your Age must be 18 or older."
        deleteText="Ok"
      />
    </View>
  );
};

export default AgeVerificationScreen;
