import React, { useEffect } from 'react'
import { Image, View, Text, TouchableOpacity ,StyleSheet} from "react-native"
import metrics from "../../theme/metrics";
import font from "../../theme/font";
import colors from "../../theme/color";
import database from '@react-native-firebase/database';
import moment from 'moment';
import HeartUnfillSvg from '../../assets/svg/HeartUnfillSvg.svg'
import HeartFillSvg from '../../assets/svg/HeartFillSvg.svg'
import SeenSvg from '../../assets/svg/SeenSvg.svg'
import UnSeenSvg from '../../assets/svg/UnSeenSvg.svg'
const Chat = ({item, index, isCurrentUser, messages, myUserId, otherUserId, sectionId, isLiked}) => {
  const [likedMessages, setLikedMessages] = React.useState(isLiked);

  const toggleLike = (messageTime) => {
    const newLikes = { ...likedMessages, [messageTime]: !likedMessages[messageTime] };
    setLikedMessages(newLikes);
    const updatedMessages = messages.map(msg =>
      msg.time === messageTime ? { ...msg, liked: newLikes[messageTime] } : msg
    );
    const updates = {};
    const users = [
      { myUserId: myUserId, userId: otherUserId },
      { myUserId: otherUserId, userId: myUserId }
    ];
    let updatedMessage = {
      "messages": JSON.stringify(updatedMessages)
    };
    for (let index = 0; index < users.length; index++) {
      updates[`${sectionId}/${users[index].myUserId}/${users[index].userId}/Messages`] = updatedMessage;
    }
    database().ref().update(updates);
  };

  const seenAddEvent = () => {
  
    if (!isCurrentUser && !item.seen) {
      const updatedMessages = messages.map(msg =>
        msg.time === item.time ? { ...msg, seen: true } : msg
      );
      const updates = {};
      const users = [
        { myUserId: myUserId, userId: otherUserId },
        { myUserId: otherUserId, userId: myUserId }
      ];
      let updatedMessage = {
        "messages": JSON.stringify(updatedMessages)
      };
      for (let index = 0; index < users.length; index++) {
        updates[`${sectionId}/${users[index].myUserId}/${users[index].userId}/Messages`] = updatedMessage;
      }
      database().ref().update(updates);
    }
  };

  useEffect(() => {
    seenAddEvent();
  }, [item]);



  return (
    <View style={styles.chatContainer}>
      {isCurrentUser ? (
        <View style={styles.rightContainer}>
          {
likedMessages[item.time] ?
            <HeartFillSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)} fill={'red'} />
            :
            <View/>

          }
          <View>
          <View style={styles.rightMessageContainer}>

            <Text style={styles.messageWhiteFontStyle}>{item?.message}</Text>
          </View>
          {typeof item?.seen !== 'undefined' && (
            <View style={styles.flexSeenContainer}>
              {item?.seen ? (
                <SeenSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)} />
              ) : (
                <UnSeenSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)} />
              )}
              <Text style={styles.seenFontStyle}>{item?.seen ? 'Seen' : 'Sent'}</Text>
            </View>
          )}
          </View>

        </View>
      ) : (
        <View style={styles.leftContainer}>
          <View style={styles.leftMessageContainer}>
            <Text style={styles.messageFontStyle}>{item?.message}</Text>
          </View>
          <View style={styles.flexLeftContainer}>
            <TouchableOpacity onPress={() => toggleLike(item.time)}>
              {likedMessages[item.time] ? (
                <HeartFillSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)} fill={'red'} />
              ) : (
                <HeartUnfillSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Chat

const styles = StyleSheet.create({
    chatContainer:{
    },
    leftMessageContainer:{
      maxWidth:metrics.screenWidth / 2,
       paddingVertical:metrics.changeByMobileDPI(10),
       borderTopLeftRadius:metrics.changeByMobileDPI(15),
       borderTopRightRadius:metrics.changeByMobileDPI(15),
       borderBottomLeftRadius:0,
       borderBottomRightRadius:metrics.changeByMobileDPI(15),
       backgroundColor:colors.lightGray,
       paddingHorizontal:metrics.changeByMobileDPI(15),

    },
    leftContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginBottom:metrics.changeByMobileDPI(15),
      marginHorizontal:metrics.changeByMobileDPI(20),
      alignSelf:'flex-start'
    },
    rightContainer:{
      marginBottom:metrics.changeByMobileDPI(15),
      marginHorizontal:metrics.changeByMobileDPI(20),
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:"center"
    },
    rightMessageContainer:{
      maxWidth:metrics.screenWidth / 2,
      paddingVertical:metrics.changeByMobileDPI(10),
      borderTopLeftRadius:metrics.changeByMobileDPI(15),
      borderTopRightRadius:metrics.changeByMobileDPI(15),
      borderBottomLeftRadius:metrics.changeByMobileDPI(15),
      borderBottomRightRadius:metrics.changeByMobileDPI(0),
      backgroundColor:colors.pink,
      paddingHorizontal:metrics.changeByMobileDPI(15),


   },
   flexLeftContainer:{
    flex:1,
    alignItems:'flex-end'
   },
   flexSeenContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:metrics.changeByMobileDPI(5),
    justifyContent:'flex-end'
   },
   inputMainContainer:{
    flexDirection:'row',
    alignItems:'center',
    borderTopWidth:1,
    borderColor:colors.graySolid,
    height:metrics.changeByMobileDPI(48),
    width:metrics.screenWidth,
    paddingHorizontal:metrics.changeByMobileDPI(20),
    backgroundColor:colors.white
  },
  inputPosiiton:{
    position:'absolute',
    bottom:0
  },
  sendFontStyle:{
    fontSize:font.size.font16,
    fontFamily:font.type.montserratRegular,
    color:colors.graySolid,
  },
  flexStyle:{
    flex:1
  },
  messageFontStyle:{
    fontSize:font.size.font16,
    fontFamily:font.type.montserratRegular,
    color:colors.black,
    includeFontPadding:false
  },
  messageWhiteFontStyle:{
    fontSize:font.size.font16,
    fontFamily:font.type.montserratRegular,
    color:colors.white,
    includeFontPadding:false
  },
  chatListingTitleFontStyle:{
    fontSize:font.size.font16,
    fontFamily:font.type.montserratMedium,
    color:colors.black,
  },
  chatLisitingMessageFontStyle:{
    fontSize:font.size.font12,
    fontFamily:font.type.montserratRegular,
    color:colors.graySolid,
  },
  seenFontStyle:{
    fontSize:font.size.font12,
    fontFamily:font.type.montserratRegular,
    color:'#3C3C4360',
    marginLeft:metrics.changeByMobileDPI(10),
  },
  timeFontStyle:{
    fontSize:font.size.font12,
    fontFamily:font.type.montserratRegular,
    color:'#3C3C4360',
  },
  flexContainerSubContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  flexContainer:{
    borderBottomWidth:0.5,
    borderBottomColor:colors.gray_75,
    marginBottom:metrics.changeByMobileDPI(20),
    paddingHorizontal:metrics.changeByMobileDPI(20),
    paddingBottom:metrics.changeByMobileDPI(15),
    
  },
})