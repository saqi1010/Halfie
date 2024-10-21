import { CommonActions, useNavigation } from "@react-navigation/native"
import { useState } from "react"
import screenName from "../../theme/screenName"
import images from "../../theme/images"
import metrics from "../../theme/metrics"
import { FlatList, Image, Text, View ,TouchableOpacity} from "react-native"
import { styles } from "./style"
import GridentButton from "../../components/atoms/GridentButton"
import RightGridentSvg from '../../assets/svg/RightGridentSvg.svg'

const hooks = () => {
  const navigation = useNavigation()
  const resetStackAndGoToHome = CommonActions.reset({
    index: 0,
    routes: [{ name: screenName.screenName.custom_drawer_home }],
  });

  const headerData = {
    image: images.hobbiesImageData.hobbies1,
    title: 'PRISCILLA DU PREEZ',
    age: '24',
    natioanilty: 'Argentina'
  }

  const viewOrderData = [
    {
      title: '25th Sep, 2021',
      array:[
        {
          image:images.hobbiesImageData.hobbies1,
          title:'Armani Dating Event',
          description:'Event Service',
        }
      ]
    },
    {
      title: '13th Sep, 2021',
      array:[
        {
          image:images.hobbiesImageData.hobbies1,
          title:'Cafe Game Night',
          description:'Event Service',
        },
        {
          image:images.hobbiesImageData.hobbies1,
          title:'Rodgrigo Summer',
          description:'Event Service',
        },
      ]
    },
  ]


   
  const renderViewOrder = ({item,index}) => {
    const navigateToService = () => {
      navigation.navigate(screenName.screenName.serviceDetail_screen)
    }
    return(
      <View style={styles.viewOrderContainer}>
        <View style={styles.flexDirectionContainer}>
        <View style={styles.viewOrderImageContianer}>
          <Image source={item.image} style={styles.imageStyle}/>
        </View>
        <View style={styles.marginLeftContainer}>
        <Text style={styles.titleFontStyle}>{item.title}</Text>
        <Text style={styles.descriptionFontStyle}>{item.title}</Text>
        </View>
        </View>
        <GridentButton
          extrenalStyle={styles.extrenalStyle1}
          externalGridentStyle={styles.externalGridentStyle}
          onClick={navigateToService}
          buttonText={'View Order'}
        />
      </View>
    )
  }


  const renderEvent1 = ({ item, index }) => {
    const navigateToRehit = () => {

    };
    return (
      <View style={styles.mainGridContainer}>
      <TouchableOpacity onPress={navigateToRehit} style={styles.searchContainer1}>
        <View style={styles.flexRowContainer}>
        <Image source={item?.image} style={styles.profileImageContainer}/>
        <View style={styles.flexContainer}>
      <Text style={styles.titleFontStyle1}  numberOfLines={1} >{item.name}</Text>
      <Text style={styles.descriptionFontStyle} numberOfLines={1}>{'My favorite coffee yesterday was actually the mocha!'}</Text>
        </View>
        </View>
        <RightGridentSvg  height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(9)} style={styles.rightMarginContainer} />
       </TouchableOpacity>
       <Text style={styles.receiveFontStyle}>Received 02:00 P.M.</Text>
<View style={styles.lineContainer}></View>
      </View>
    )
  }

  const renderViewOrderDate  = ({item,index}) => {
    return(
      <View style={styles.viewOrderDateContainer}>
       <Text style={styles.dateFontStyle}>{item.title}</Text>
       <FlatList data={item.array} renderItem={renderViewOrder} contentContainerStyle={styles.viewOrderMarginTopContainer}/> 
      </View>
    )
  }
  const navigateToNotification = () => {
    navigation.navigate(screenName.screenName.notification_screen)
  }

  const navigateToHome = () => {
    navigation.dispatch(resetStackAndGoToHome)
  }
  return { navigateToHome, headerData ,viewOrderData,renderViewOrderDate,navigateToNotification,renderEvent1}
}

export default hooks
