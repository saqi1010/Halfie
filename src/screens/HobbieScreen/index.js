import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles } from './style';
import hooks from './hooks';
import GridentButton from '../../components/atoms/GridentButton';
import colors from '../../theme/color';
import Skeleton from './Skeleton';
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar';

const HobbieScreen = () => {
  const { hobbiesData, renderHobbie, addTheSetedData ,hobbies,loading} = hooks();
  const route = useRoute();
  const title = route?.params?.header || 'Your Hobbies';
  const description = route?.params?.description
  return (
    <View style={styles.mainContainer}>
                        <FocusAwareStatusBar isTopSpace={false} isLightBar={true} barColor={'#00000000'} />

      <View style={styles.subContainer}>
        <Text style={styles.titleFontStyle}>{title}</Text>
        <Text style={styles.subTitleFontStyle}>{description}</Text>
       {  hobbiesData.length > 0 && <FlatList 
          data={hobbiesData} 
          renderItem={renderHobbie} 
          contentContainerStyle={styles.contentContainerStyle} 
          numColumns={3} 
        />
     
      }
      { hobbiesData.length == 0 && <Skeleton/>}
      </View>
      <GridentButton
        loading={loading}
        defaultGridentColor={ !(hobbies.length < 3) ? ['#FB7BA2', '#FB7BA2', '#FCE04399'] : [colors.lightGray,colors.lightGray,colors.lightGray]}
        disabled={(hobbies.length < 3)}
        extrenalStyle={[styles.extrenalStyle1]}
        onClick={addTheSetedData}
        buttonText="Continue"
      />

    </View>
  );
};

export default HobbieScreen;
