import { Image, View, Text, TouchableOpacity } from "react-native"
import { styles } from "./style"
import React, { useCallback, useEffect, useState } from "react"
import metrics from "../../theme/metrics"
import { useRoute } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import database from '@react-native-firebase/database';
import moment from 'moment';
import { getUserDetailRequest } from '../../stores/action/getUserDetailAction';
import Chat from "../../components/atoms/Chat"
const hooks = () => {
   let route = useRoute()
  let name = route?.params?.name
  let getUserDetailData =route?.params?.getUserDetailData
  const dispatch = useDispatch();
  const [customModalVisibility, setCustomModalVisibility] = React.useState({
    visibility:false,
    title:'',
    description:'',
    leftButtonText:'',
    rightButtonText:'',
    closeModalEvent:() => {},
    rightModalEvent:() => {},
  })
  const [settingVisibility, setSettingVisibility] = React.useState(false)
  const flatListRef = React.useRef(null);
  const [seenEnabled, setSeenEnabled] = useState(true);
  const [likedMessages, setLikedMessages] = React.useState(false)

  const toggleSetting = () => setSettingVisibility(!settingVisibility)
  const toggleSeenStatus = () => {
    handleSeenToggle(!seenEnabled);
  };
  const handleSeenToggle = async (newSeenEnabled) => {
    setSeenEnabled(newSeenEnabled); 
    try {
      await database()
        .ref(`${route.params.sectionId}/${getUserDetailData?._id}/${route.params?._id}`)
        .update({ seenEnabled: newSeenEnabled });
    } catch (error) {
      console.error("Error updating seenEnabled in the database: ", error);
    }
  };
  

  
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    const fetchMessages = async () => {

// 
const messagesRef = database().ref(`${route.params.sectionId}/${getUserDetailData?._id}/${route.params?._id}`);
const seenEnabledSnapshot = await messagesRef.child('seenEnabled').once('value');
    if (seenEnabledSnapshot.exists()) {
      setSeenEnabled(seenEnabledSnapshot.val()); 
    }
      database().ref(`${route.params.sectionId}/${getUserDetailData?._id}/${route.params?._id}/Messages`).on('value', snapshot => {
        if (!snapshot.exists()) {
          setMessages([]);
        } else {
          let data = snapshot.val();
          if (typeof data === 'string') {
            data = JSON.parse(data);
          } else {
            data = Object.values(data);
          }
          let convertParse =  data && JSON.parse(data)
          const initialLikes = {};
          convertParse.forEach(msg => {
            initialLikes[msg.time] = msg.liked || false;
            return {
              ...msg,
              seen: seenEnabled ? msg.seen : false,
            };
          });
          setLikedMessages(initialLikes);
          setMessages(convertParse);
        }
      });
    };
    fetchMessages();
  }, [route.params.sectionId,getUserDetailData?._id,route.params?._id])


  const scrollToDown = () => {
      if (flatListRef.current) {
        flatListRef.current.scrollToEnd({ animated: true });
      }
  }


  const clearChatForUser = async () => {
    try {
      const currentUserId = getUserDetailData?._id;
      const recipientId = route.params?._id;
      const sectionId = route.params.sectionId;
      await database()
        .ref(`${sectionId}/${currentUserId}/${recipientId}/Messages`)
        .remove();
  
      setMessages([]);
      setLikedMessages({});
    } catch (error) {
      console.error("Error clearing chat: ", error);
    } finally {
      setCustomModalVisibility({ ...customModalVisibility, visibility: false });
    }
  };
  

  

     

  const handleEndReached = useCallback(() => {
  }, []);

  const sendMessage = () => {
    if (inputValue.trim() !== '') {
      const message = {
        typeofMessage: "CHAT",
        message: inputValue,
        date: moment().format('l'),
        time: Date.now(),
        senderId: getUserDetailData?._id,
        userName: getUserDetailData?.name,
        seen: false,
        liked: false,
      };
      const otherDetails = {
        userId: route.params?._id,
        userName: route.params?.name,
        createDate: Date.now(),
        updateDate: Date.now(),
      };
      const updates = {};
      const users = [
        { myUserId: getUserDetailData?._id, userId: route.params?._id },
        { myUserId: route.params?._id, userId: getUserDetailData?._id }
      ];
      let updatedMessage = {
        "messages": JSON.stringify([...messages, message])
       }
      for (let index = 0; index < users.length; index++) {
        updates[`${route.params.sectionId}/${users[index].myUserId}/${users[index].userId}/Messages`] = updatedMessage;
        updates[`${route.params.sectionId}/${users[index].myUserId}/${users[index].userId}/Details`] = otherDetails;
      }
      database().ref().update(updates);
      setInputValue('');
      scrollToDown()
    }
  };

const leftEvent = () => {
  setCustomModalVisibility({
    ...customModalVisibility,
    visibility:false
  })
}
const rightEvent = () => {
  setCustomModalVisibility({
    ...customModalVisibility,
    visibility:false
  })
}

  const openAlert1 = () => {
    setCustomModalVisibility({
      visibility:true,
      title:'',
      description:'Priscilla Du Preez would like to match with you. Would you like to match with her?',
      leftButtonText:'Yes',
      rightButtonText:'No',
      closeModalEvent:leftEvent,
      rightModalEvent:rightEvent
     })
  }
  const openAlert2 = () => {
    setCustomModalVisibility({
      visibility:true,
      title:'',
      description:'Are you sure you would like to reject this profile?',
      leftButtonText:'Yes',
      rightButtonText:'No',
      closeModalEvent:leftEvent,
      rightModalEvent:rightEvent
     })
  }
   

  const renderChat = ({ item, index }) => {
    const isCurrentUser = item?.senderId === getUserDetailData?._id;
    return (
    <Chat 
    item={item}
    index={index}
    isCurrentUser={isCurrentUser}
    messages={messages}
    myUserId={getUserDetailData?._id}
    otherUserId={route.params?._id}
    sectionId={route.params.sectionId}
    isLiked={likedMessages}
    /> 
    );
  };
  

  return { settingVisibility, toggleSetting, renderChat,customModalVisibility ,openAlert1 ,openAlert2,name,getUserDetailData,
    inputValue, setInputValue,
    messages, setMessages,
    sendMessage,flatListRef,
    handleEndReached,
    toggleSeenStatus,
    seenEnabled,
    clearChatForUser
  }
}
export default hooks
