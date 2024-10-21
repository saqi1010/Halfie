import { FlatList, Text, TextInput, TouchableOpacity, View, ActivityIndicator, RefreshControl } from 'react-native';
import React from 'react';
import { styles } from './style';
import hooks from './hooks';
import metrics from '../../theme/metrics';
import colors from '../../theme/color';
import FilterSvg from '../../assets/svg/FilterSvg.svg';
import SearchSvg from '../../assets/svg/MagnifyinGlassSvg.svg';
import GlassSvg from '../../assets/svg/ChatGalssSvg.svg';
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar';

const ChatlistingScreen = () => {
  const { 
    renderChatQuickLink, 
    renderChatList, 
    filteredRecentChats, 
    filteredFriendData, 
    searchQuery, 
    setSearchQuery, 
    loading, 
    refreshing, 
    onRefresh
  } = hooks();

  return (
    <View style={styles.mainContainer}>
                <FocusAwareStatusBar isTopSpace={false} isLightBar={true} barColor={'#00000000'} />
      <View style={styles.searchContainer}> 
        <TouchableOpacity style={styles.marginRightContainer}>
          <FilterSvg height={metrics.changeByMobileDPI(24)} width={metrics.changeByMobileDPI(24)} />
        </TouchableOpacity>
        <View style={styles.searchSubContianer}>
          <SearchSvg height={metrics.changeByMobileDPI(14)} width={metrics.changeByMobileDPI(14)} style={styles.marginContainer} />
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.inputStyle} 
              placeholder='Search names' 
              placeholderTextColor={colors.graySolid}
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
          </View>
        </View>
        <GlassSvg height={metrics.changeByMobileDPI(34)} width={metrics.changeByMobileDPI(40)} />
      </View>
      
      <View style={styles.subContainer}>
        <View style={styles.margnBottomContainer}>
          <Text style={styles.titleFontStyle}>{'Recent Matches'}</Text>
          {loading ? (
            <ActivityIndicator size="large" color={colors.primary} />
          ) : filteredRecentChats && filteredRecentChats.length > 0 ? (
            <FlatList 
              data={filteredRecentChats} 
              renderItem={renderChatQuickLink} 
              horizontal 
              contentContainerStyle={styles.contentContainerStyle} 
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              }
            />
          ) : (
            <Text style={styles.recentEmtpyFontStyle}>No Recent Chat Found</Text>
          )}
        </View>
        
        <Text style={styles.titleFontStyle}>{'Messages'}</Text>
        {loading ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : filteredFriendData && filteredFriendData.length > 0 ? (
          <FlatList 
            data={filteredFriendData} 
            renderItem={renderChatList} 
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
          />
        ) : (
          <Text style={styles.recentEmtpyFontStyle}>No Chat Found</Text>
        )}
      </View>
    </View>
  );
};

export default ChatlistingScreen;
