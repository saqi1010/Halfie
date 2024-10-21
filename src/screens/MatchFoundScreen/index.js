import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import GridentButton from '../../components/atoms/GridentButton'
import metrics from '../../theme/metrics'
import hooks from './hooks'
import images from '../../theme/images'
import colors from '../../theme/color'
import GridentBorder from '../../components/atoms/GridentBorder'
import { useNavigation } from '@react-navigation/native'
import screenName from '../../theme/screenName'
const MatchFoundScreen = () => {
  const {goBack} = hooks()
  const navigation = useNavigation()
  const navigateToMessageTab = () => {
    navigation.navigate(screenName.screenName.custom_drawer_home, { screen: 'Matches'});
  }
  const navigateToExploreTab = () =>{
    navigation.navigate(screenName.screenName.custom_drawer_home, { screen: 'Search'});
  }
  return (
    <View style={styles.mainContainer}>
      
      <View style={styles.positionContainer}>
         <Image source={{uri:`https://images.unsplash.com/photo-1532932371123-928bc0091ec0?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}} style={styles.imageStyle}/>
      </View>
      <GridentBorder
          colors={colors.gridentBalck}
          borderWidth={0}
          borderRadius={metrics.changeByMobileDPI(10)}
          style={styles.gridentButtonStyle}
        >
          <View style={{marginTop:metrics.changeByMobileDPI(40)}}>
        <Text style={styles.titleFontStyle}>You’ve Found{'\n'} a Match!</Text>
          </View>
         
         <View style={{marginTop:metrics.changeByMobileDPI(30)}}>
         <View style={styles.imageMainContainer}>
       <View style={styles.imageMatchMakingCircleStyle}>
        <Image source={images.hobbiesImageData.hobbies1} style={styles.imageStyle}/>
       </View>
       <View style={styles.imageMatchMakingCircleStyle2}>
        <Image source={images.hobbiesImageData.hobbies1} style={styles.imageStyle}/>
       </View>
         </View>
         <Text style={styles.subTitleFontStyle}>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. {'\n'}”- Lorem Ipsum”</Text>
         </View>

  <View style={{marginTop:metrics.changeByMobileDPI(50)}}>

        <GridentButton
          extrenalStyle={styles.extrenalStyle}
          onClick={navigateToMessageTab}
          buttonText='Send a Message'
          />
          <TouchableOpacity onPress={navigateToExploreTab}>
        <Text style={styles.subTitleFontStyle}>Go back to exploring</Text>
          </TouchableOpacity>
          </View>

          </GridentBorder>


     

    </View>
  )
}
export default MatchFoundScreen
