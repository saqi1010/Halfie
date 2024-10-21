import { Image, View,Text, TouchableOpacity, StyleSheet } from "react-native"
import { styles } from "../../screens/ChatlisitngScreen/style"
import DoubleTickSvg from '../../assets/svg/DoubleTickSvg.svg'
import metrics from "../../theme/metrics"
import React, { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import screenName from "../../theme/screenName"
import database from '@react-native-firebase/database';
import moment from 'moment';
import GridentBorder from "./GridentBorder"
import colors from "../../theme/color"
const Chatlist = ({item,index,getUserDetailData}) => {
    const [messages, setMessages] = useState([]);
    const navigation = useNavigation()
    const { name  ,_id ,image} = item.friend
  const navigateToChat = (item) => {
    navigation.navigate(screenName.screenName.chat_screen,{name:item.friend?.name,image:item.friend?.image,_id:item.friend?._id,sectionId:item._id,getUserDetailData:getUserDetailData})
  }
  useEffect(() => {
    const fetchMessages = async () => {
      database().ref(`${item._id}/${getUserDetailData?._id}/${item.friend[0]?._id}/Messages`).on('value', snapshot => {
        console.warn("==convertPa11rse11",snapshot);
        if (!snapshot.exists()) {
          setMessages([]);
        } else {
          let data = snapshot.val();
          console.warn("==convertParse22",data);

          if (typeof data === 'string') {
            data = JSON.parse(data);
          } else {
            data = Object.values(data);
          }
          let convertParse =  data && JSON.parse(data)
          const initialLikes = {};
          convertParse.forEach(msg => {
            initialLikes[msg.time] = msg.liked || false;
          });
          setMessages(convertParse);
        }
      });
    };
    fetchMessages();
  }, [item._id,item.friend?._id,getUserDetailData?._id])

  console.warn("=====>>>",messages);
  const messagesData = Array.isArray(messages) ? messages : [];
  const lastMessage = messagesData[messagesData.length - 1] || {};
  const unseenCount = messagesData.filter(msg => !msg.seen).length;
  const lastMessageSeen = lastMessage.seen || false;

    return(
      <View style={styles.flexContainer}> 
      <TouchableOpacity onPress={() => navigateToChat(item)} style={styles.flexContainerSubContainer}>
        <View style={styles.profileImageContainer}>
          <Image source={{ uri: image }} style={styles.imageStyle} />
        </View>
        <View style={styles.marginLeftContainer}>
          <Text style={styles.chatListingTitleFontStyle}>{name}</Text>
          <View style={styles.messageContainer}>
            {/* Display the last message */}
            <Text style={styles.chatLisitingMessageFontStyle} numberOfLines={1}>
              {lastMessage?.message || ''}
            </Text>
          </View>
          <View style={styles.flexContainerSubContainer}>
            {/* Display seen double tick if the last message is seen */}
            {lastMessageSeen && (
              <View style={styles.doubleTickcontainer}>
                <DoubleTickSvg height={metrics.changeByMobileDPI(10.75)} width={metrics.changeByMobileDPI(16.27)} />
                <Text style={styles.seenFontStyle}>Seen</Text>
              </View>
            )}
            <Text style={styles.timeFontStyle}>{lastMessage.date}</Text>
          </View>
          {/* Display unseen message count */}
          {unseenCount > 0 && (
          <View style={styles.positionContainer}>
          <GridentBorder
          colors={colors.grident1}
          borderWidth={0}
          borderRadius={metrics.changeByMobileDPI(100)}
          style={styles.gridentButtonStyle}
          >
           <View style={styles.countSubContainer}>
       <Text style={styles.countFontStyle}>{unseenCount}</Text>
           </View>
             </GridentBorder>
         </View>
          )}
        </View>

      </TouchableOpacity>

   {/*  */}
      </View>  
      )
}

export default Chatlist
