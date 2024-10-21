import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import hooks from './hooks'
import metrics from '../../theme/metrics'

import DiamondSvg from '../../assets/svg/DiamondSvg.svg'
import FilterSvg from '../../assets/svg/FilterSvg.svg'
import BellSvg from '../../assets/svg/BellRedSvg.svg';
import GridentBorder from '../../components/atoms/GridentBorder'
import colors from '../../theme/color'
import ImageSlider from '../../components/atoms/ImageSlider'
import AddSvg from '../../assets/svg/AddButtonWithSpaceSvg.svg';
import LikeSvg from '../../assets/svg/FillHeartSvg.svg';
import SparkSvg from '../../assets/svg/BoltSvg.svg';
import LaterSvg from '../../assets/svg/TimeTrackSvg.svg';
import RejectSvg from '../../assets/svg/BrokenHeartSvg.svg';
import FlagSvg from '../../assets/svg/FlagSvg.svg'
import ReportSvg from '../../assets/svg/ReportSvg.svg';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import images from '../../theme/images'
import { disLikeData, likeData, reportData } from '../../theme/staticData'
import SubcriptionProfileDescription from '../../components/molecules/SubcriptionProfileDescription'
import ReportModal from '../../components/molecules/ReportModal'
import { useNavigation } from '@react-navigation/native'
import screenName from '../../theme/screenName'
import Skeleton from './Skeleton'
import SubscriptionEmptySection from '../../components/atoms/SubscriptionEmptySection'
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar'

const DetailScreen = () => {
  const { renderUserInfo, renderLike, hobbiesData, renderHobbie, toggleReport, reportVisibility, subscriptonData, userInfoData, renderQna, replayToUser, openSubscriptionDrawer, setDrawer, notificationEvent,drawerValue ,navigateToPreferences,loader} = hooks()
  const navigation = useNavigation()
  const [imageError, setImageError] = React.useState(false);
  const handleImageError = () => {
    setImageError(true);
  };
  const navigateToMatchMaking = () => {
    navigation.navigate(screenName.screenName.match_found_screen)
  }
  function capitalizeFirstLetter(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  let dataLengthCheck  = subscriptonData && subscriptonData._id 
  let headerName =  (drawerValue == 'find-matches' || drawerValue == null)
  return (
    <View style={styles.mainContainer}>
                  <FocusAwareStatusBar isTopSpace={false} isLightBar={true} barColor={'#00000000'} />

            {
  loader ?
  <Skeleton/>
  :
  <>
      <View style={styles.flexDirectionContainer}>
        <TouchableOpacity onPress={openSubscriptionDrawer}>
          <FilterSvg height={metrics.changeByMobileDPI(24)} width={metrics.changeByMobileDPI(24)} />
        </TouchableOpacity>
        <GridentBorder
          colors={colors.grident1}
          borderWidth={1}
          borderRadius={metrics.changeByMobileDPI(0)}
          style={styles.gridentConatiner}
        >
          <View style={styles.verificationContainer}>
            <GridentBorder
              colors={colors.gridentLight}
              borderWidth={0}
              borderRadius={metrics.changeByMobileDPI(0)}
              style={styles.gridentConatiner2}
            >
              {
                  <View style={styles.alignmentContainer}>
                    <DiamondSvg height={metrics.changeByMobileDPI(24)} width={metrics.changeByMobileDPI(24)} />
                    <Text style={styles.titleFontStyle}>{!dataLengthCheck && headerName ? 'Good things take time' : subscriptonData?.verificationStatus}</Text>
                  </View>
              }
            </GridentBorder>
          </View>
        </GridentBorder>
        <TouchableOpacity onPress={notificationEvent}>
          <BellSvg height={metrics.changeByMobileDPI(24)} width={metrics.changeByMobileDPI(24)} />
        </TouchableOpacity>
      </View>
      {
        dataLengthCheck ?
          <View style={styles.mainContainer}>
            {/* Headrer Section */}
            <ScrollView>
              {/* ---- */}
              <View style={styles.subContainer}>
                <ImageSlider
                  externalStyle={styles.externalStyle}
                  screenWidth={metrics.screenWidth / 1.3}
                  imageData={["https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjVaijUHavr6R1OPLifcBCyyGuqIK3Q6Xpw&s","https://i.pinimg.com/736x/57/81/15/578115fbe4c4e633ca59ece7dbdad940.jpg"]} />
              </View>
              <View style={styles.profileContainer}>
                <View style={styles.centerProfileContainer}>
                  <View style={styles.flexRowContainer}>
                    <Image style={styles.imageSytle} 
                       source={imageError ? images.images.quickLinkImage1 : { uri: subscriptonData?.image }}
                       onError={handleImageError}
                    />
                    <Text style={styles.nameFontStyle}>{subscriptonData?.name?.toUpperCase()}</Text>
                  </View>
                  <Text style={styles.ageFontStyle}>Age {subscriptonData?.age}, {capitalizeFirstLetter(subscriptonData?.gender)}</Text>
                  <View style={styles.rowContainer}>
                    <View style={styles.nationailtyContainier}>
                      <Text style={styles.nationailtyFontStyle}>{capitalizeFirstLetter(subscriptonData?.nationality?.type)}</Text>
                      {/* <Image source={{uri:subscriptonData?.nationality?.filename}} style={styles.flagStyle}/> */}
                    </View>
                  { subscriptonData && subscriptonData?.ethnicity && <View style={styles.nationailtyContainier}>
                      <Text style={styles.nationailtyFontStyle}>{capitalizeFirstLetter(subscriptonData?.ethnicity[0]?.type)}</Text>
                      {/* <Image source={{uri:subscriptonData?.ethnicity[0].filename}} style={styles.flagStyle}/> */}
                    </View>}
                  </View>
                </View>
                <View style={styles.postionContainer}>
                  <TouchableOpacity onPress={toggleReport}>
                  <ReportSvg height={metrics.changeByMobileDPI(16.67)} width={metrics.changeByMobileDPI(16.67)} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionFontStyle}>{subscriptonData?.shortBio?.describeYourSelf}</Text>
              </View>
              <View style={styles.rowContainer}>
                <TouchableOpacity onPress={() => replayToUser('autoMatch')} style={styles.alignSelfContainer}>
                  <AddSvg height={metrics.changeByMobileDPI(48)} width={metrics.changeByMobileDPI(48)} />
                  <Text style={styles.eventFontStyle}>AUTO</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => replayToUser('like')} style={styles.alignSelfContainer}>
                  <LikeSvg height={metrics.changeByMobileDPI(48)} width={metrics.changeByMobileDPI(48)} />
                  <Text style={styles.eventFontStyle}>LIKE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => replayToUser('crush')} style={styles.alignSelfContainer}>
                  <SparkSvg height={metrics.changeByMobileDPI(48)} width={metrics.changeByMobileDPI(48)} />
                  <Text style={styles.eventFontStyle}>SPARK</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => replayToUser('later')} style={styles.alignSelfContainer}>
                  <LaterSvg height={metrics.changeByMobileDPI(48)} width={metrics.changeByMobileDPI(48)} />
                  <Text style={styles.eventFontStyle}>LATER</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => replayToUser('reject')} style={styles.alignSelfContainer}>
                  <RejectSvg height={metrics.changeByMobileDPI(48)} width={metrics.changeByMobileDPI(48)} />
                  <Text style={styles.eventFontStyle}>REJECT</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.usreInforamtionContainer}>
                <Text style={styles.userInFoTitleFontStyle}>Profile</Text>
                <FlatList data={userInfoData} renderItem={renderUserInfo} />
              </View>
              <Text style={[styles.globalTitleFontStyle,{marginVertical:metrics.changeByMobileDPI(15)}]}>Hobbies</Text>
              <FlatList data={subscriptonData?.interest?.hobbies} renderItem={renderHobbie} contentContainerStyle={styles.contentContainerStyle} numColumns={3}/> 
              <Text style={[styles.globalTitleFontStyle,{marginVertical:metrics.changeByMobileDPI(15)}]}>Movie Genres</Text>
              <FlatList data={subscriptonData?.interest?.moviesGenre} renderItem={renderHobbie} contentContainerStyle={styles.contentContainerStyle} numColumns={3}/> 
              <Text style={[styles.globalTitleFontStyle,{marginVertical:metrics.changeByMobileDPI(15)}]}>Book Genres</Text>
              <FlatList data={subscriptonData?.interest?.bookGenre} renderItem={renderHobbie} contentContainerStyle={styles.contentContainerStyle} numColumns={3}/> 
              <Text style={[styles.globalTitleFontStyle,{marginVertical:metrics.changeByMobileDPI(15)}]}>Music Genres</Text>
              <FlatList data={subscriptonData?.interest?.musicGenre} renderItem={renderHobbie} contentContainerStyle={styles.contentContainerStyle} numColumns={3}/> 
              <Text style={[styles.globalTitleFontStyle,{marginVertical:metrics.changeByMobileDPI(15)}]}>Game Genres</Text>
              <FlatList data={subscriptonData?.interest?.gameGenre} renderItem={renderHobbie} contentContainerStyle={styles.contentContainerStyle} numColumns={3}/> 
              <View style={styles.marginTopContainer}></View>
              <FlatList data={subscriptonData?.qna} renderItem={renderQna}/>
            </ScrollView>
            <ReportModal
             name={`Report ${subscriptonData?.name} ?`}
             image={images.images.onBordingImage1}
             reportData={reportData}
             visible={reportVisibility}
             onCancel={toggleReport}
             onDelete={toggleReport}
            />

          </View>
          :
          <SubscriptionEmptySection
            image={ headerName ?  images.images?.emptylikeReceivedImages :  images.images?.emptyPerferenceImage }
            title={'Keep Your Heart Ready!'}
            info={'It’s Happening Soon!'}
            description={'At Halfie, we believe that finding love should be a journey, not a chore. We’re here to guide you every step of the way, offering personalized support that goes beyond endless swipes. We understand that finding a life partner is about more than just a profile; it’s about presenting your best self and creating real-world connections where the probability of success is higher.'}
            buttonTitle={headerName ? 'View your Preferences':'Change your Preferences'}
            onClick={navigateToPreferences}
          />
      }
  </>
}
    </View>
  )
}
export default DetailScreen
