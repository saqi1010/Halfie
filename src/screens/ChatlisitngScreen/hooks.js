import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getFriendRequest } from "../../stores/action/getFriendAction";
import { getUserDetailRequest } from "../../stores/action/getUserDetailAction";
import database from '@react-native-firebase/database';
import moment from 'moment';
import { useNavigation } from "@react-navigation/native";
import Chatlist from "../../components/atoms/Chatlist";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import screenName from "../../theme/screenName";

const hooks = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { getFriendData } = useSelector((state) => state.getFriend);
  const { getUserDetailData } = useSelector((state) => state.getUserDetail);
  const currentUserID = getUserDetailData?._id;
  const [recentChats, setRecentChats] = useState([]);
  const [filteredRecentChats, setFilteredRecentChats] = useState([]);
  const [filteredFriendData, setFilteredFriendData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getUserDetailRequest());
    dispatch(getFriendRequest());
  }, [dispatch]);

  useEffect(() => {
    const chatRef = database().ref('/');

    const handleDataChange = async (snapshot) => {
      const firebaseDataVal = snapshot.val();
      await getSortedRecentChats(firebaseDataVal);
      setLoading(false);
    };

    chatRef.on('value', handleDataChange);

    return () => chatRef.off('value', handleDataChange);
  }, [getFriendData, getUserDetailData]);

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery, recentChats, getFriendData]);

  const getLastMessageFromChat = (messages) => {
    if (!messages || messages.length === 0) return null;
    return messages[messages.length - 1];
  };

  const chatExistsBetweenUsers = (friendID, currentUserID, firebaseData) => {
    for (const topKey in firebaseData) {
      const userChatData = firebaseData[topKey];
      if (userChatData[friendID] && userChatData[friendID][currentUserID]) {
        const friendData = userChatData[friendID][currentUserID];
        const messages = getLastMessageFromChat(JSON.parse(friendData.Messages?.messages));
        return messages || null;
      }

      if (userChatData[currentUserID] && userChatData[currentUserID][friendID]) {
        const friendData = userChatData[currentUserID][friendID];
        const messages = getLastMessageFromChat(JSON.parse(friendData.Messages?.messages));
        return messages || null;
      }
    }
    return null;
  };

  const isChatRecent = (lastMessageTime) => {
    if (!lastMessageTime) return false;
    const sevenDaysAgo = moment().subtract(7, 'days');
    return moment(lastMessageTime).isAfter(sevenDaysAgo);
  };

  const getSortedRecentChats = async (firebaseData) => {
    if (!getFriendData || !getUserDetailData) return [];
    let recentChatsList = [];
    let recentChatFriendIds = new Set();
    for (const friend of getFriendData) {
      const friendID = friend.friend._id;
      const lastMessage = chatExistsBetweenUsers(friendID, currentUserID, firebaseData);
  
      if (lastMessage) {
        const isOngoingChat = [lastMessage.senderId, lastMessage.receiverId].includes(currentUserID);
        if (!isOngoingChat) {
          recentChatsList.push({
            ...friend,
            lastMessageTime: lastMessage?.time || 0,
            lastMessage: lastMessage?.message || '',
          });
          recentChatFriendIds.add(friendID); 
        }
      } else {
        recentChatsList.push({
          ...friend,
          lastMessageTime: 0,
        });
      }
    }
    recentChatsList = recentChatsList.sort((a, b) => b.lastMessageTime - a.lastMessageTime);
    setRecentChats(recentChatsList);
    const remainingFriends = getFriendData?.filter(friend => !recentChatFriendIds.has(friend.friend._id));
    setFilteredFriendData(remainingFriends); 
  };
  

  const handleSearch = (query) => {
    if (!query) {
      setFilteredRecentChats(recentChats);
      setFilteredFriendData(getFriendData?.filter(friend => 
        !recentChats?.some(recentChat => recentChat.friend._id === friend.friend._id)
      ));
      return;
    }
    const filteredRecent = recentChats?.filter(chat => 
      chat.friend.name.toLowerCase().includes(query.toLowerCase())
    );
  
    const filteredFriends =getFriendData && getFriendData
      .filter(friend => friend.friend.name.toLowerCase().includes(query.toLowerCase()))
      .filter(friend => !recentChats?.some(recentChat => recentChat.friend._id === friend.friend._id)); 
  
    setFilteredRecentChats(filteredRecent);
    setFilteredFriendData(filteredFriends);
  };
  

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchRecentChats();
    setRefreshing(false);
  };

  const fetchRecentChats = async () => {
    setLoading(true);
    const firebaseData = await database().ref('/').once('value');
    const firebaseDataVal = firebaseData.val();
    await getSortedRecentChats(firebaseDataVal);
    setLoading(false);
  };

  const navigateToChat = (item) => {
    console.warn("dsad",item);
    navigation.navigate(screenName.screenName.chat_screen,{name:item.friend?.name,image:item.friend?.image,_id:item.friend?._id,sectionId:item._id,getUserDetailData:getUserDetailData})

    // navigation.navigate(screenName.screenName.chat_screen, { chatId: item.friend._id,item:item ,_id:item.friend._id});
  };

  const renderChatQuickLink = ({ item }) => (
    <View style={styles.quickLinkMainContainer}>
      <TouchableOpacity onPress={() => navigateToChat(item)} style={styles.profileImageContainer}>
        <Image source={{uri :item.friend.image}} style={styles.imageStyle} />
      </TouchableOpacity>
      <Text style={styles.quickLinFontStyle}>{item.friend.name}</Text>
    </View>
  );

  const renderChatList = ({ item }) => (
    <Chatlist item={item} getUserDetailData={getUserDetailData} />
  );

  return { 
    renderChatQuickLink, 
    renderChatList, 
    filteredRecentChats, 
    filteredFriendData, 
    searchQuery, 
    setSearchQuery, 
    loading,
    refreshing,
    onRefresh
  };
};

export default hooks;
