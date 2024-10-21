import { AppState, FlatList, Image, ImageBackground, Keyboard, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { styles } from './style';
import hooks from './hooks';
import { useRoute } from '@react-navigation/native';
import CustomAlert from '../../components/molecules/CustomAlert';
import colors from '../../theme/color';
import metrics from '../../theme/metrics';
import BlackGlassesSvg from '../../assets/svg/BlackGlassesSvg.svg';
import DownArrowSvg from '../../assets/svg/DownArrowSvg.svg';
import ViewAllSvg from '../../assets/svg/ViewAllSvg.svg';
import ReportSvg from '../../assets/svg/ReportSvg1.svg';
import FlagSvg from '../../assets/svg/FlagSvg1.svg';
import SendSvg from '../../assets/svg/SendSvg.svg';

import CrossSvg from '../../assets/svg/ClearChatSvg.svg';
import DoubleTickSvg from '../../assets/svg/DoubleTickSvg.svg';
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar';

const ChatScreen = () => {
  const { settingVisibility, toggleSetting, renderChat, openAlert1, openAlert2, customModalVisibility, name, getUserDetailData,
    inputValue, setInputValue,
    messages, setMessages,
    flatListRef,
    handleEndReached,
    sendMessage,
    toggleSeenStatus,
    clearChatForUser,
    seenEnabled
   } = hooks();
  const route = useRoute();
  const [keyboardVisible, setKeyboardVisible] = useState(false);
///
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const containerHeight = keyboardVisible ? metrics.screenHeight / 2.3 : metrics.screenHeight / 1.2;
  return (
    <View style={styles.mainContainer}>
      {/* <ImageBackground source={require('../../assets/images/BachGround.jpeg')} style={styles.imageBackgroundMainContianer}> */}
      <FocusAwareStatusBar isTopSpace={false} isLightBar={true} barColor={'#00000000'} />

      <View style={styles.flexDirectionHeaderContainer}>
        <View style={styles.imageMainContainer}>
          <View style={styles.profileImageContainer}>
            <Image source={{ uri: route.params?.image }} style={styles.imageStyle} />
            <View style={styles.positionContainer}></View>
          </View>
          <Text style={styles.headerFontStyle}>{route.params?.name}</Text>
        </View>
        <TouchableOpacity onPress={toggleSetting} style={styles.flexDirectionContainer}>
          <BlackGlassesSvg height={metrics.changeByMobileDPI(24)} width={metrics.changeByMobileDPI(24)} style={styles.marginRightContainer} />
          <DownArrowSvg height={metrics.changeByMobileDPI(14)} width={metrics.changeByMobileDPI(14)} />
        </TouchableOpacity>
      </View>
      {
        settingVisibility ?
          <View style={styles.selectContainer}>
            <View style={styles.selectSubContainer}>
              <TouchableOpacity onPress={openAlert1} style={styles.flexDirection}>
                <BlackGlassesSvg height={metrics.changeByMobileDPI(24)} width={metrics.changeByMobileDPI(24)} />
                <Text style={styles.selectFontStyle}>New Blind Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={clearChatForUser} style={styles.flexDirection}>
                <CrossSvg height={metrics.changeByMobileDPI(24)} width={metrics.changeByMobileDPI(24)} />
                <Text style={styles.selectFontStyle}>Clear Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleSeenStatus} style={styles.flexDirection}>
                <DoubleTickSvg height={metrics.changeByMobileDPI(24)} width={metrics.changeByMobileDPI(24)} />
                <Text style={styles.selectFontStyle}>{seenEnabled ? 'Enable' : 'Disable'} Seen</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={openAlert2} style={styles.flexDirection}>
                <ViewAllSvg height={metrics.changeByMobileDPI(24)} width={metrics.changeByMobileDPI(24)} />
                <Text style={styles.selectFontStyle}>Match Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.flexDirection}>
                <ReportSvg height={metrics.changeByMobileDPI(24)} width={metrics.changeByMobileDPI(24)} />
                <Text style={styles.selectFontStyle}>Reject Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.flexDirection}>
                <FlagSvg height={metrics.changeByMobileDPI(24)} width={metrics.changeByMobileDPI(24)} />
                <Text style={styles.selectFontStyle}>Report Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
          :
          <View style={{...styles.subContainer,height:containerHeight}}>
             {messages && <FlatList
              data={messages}
              renderItem={renderChat}
              keyExtractor={(item) => item?.time?.toString()} 
              ref={flatListRef}
              onEndReached={handleEndReached}
              onEndReachedThreshold={0.1}
              onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
            />} 
          </View>
      }
      {
        !settingVisibility &&
        <View style={styles.inputPosiiton}>
          <View style={styles.inputMainContainer}>
            <View style={styles.flexStyle}>
              <TextInput
                style={styles.inputStyle}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder='Type a message ...'
                placeholderTextColor={colors.graySolid}
              />
            </View>
            {
inputValue.length > 0 &&
              <TouchableOpacity style={styles.circleContainer} onPress={sendMessage}>
              {/* <Text style={styles.sendFontStyle}>SEND</Text> */}
              <SendSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)}/>
            </TouchableOpacity>
            }
          </View>
        </View>
      }

      <CustomAlert
        visible={customModalVisibility?.visibility}
        onDelete={customModalVisibility?.closeModalEvent}
        onCancel={customModalVisibility?.rightModalEvent}
        title={customModalVisibility?.title}
        message={customModalVisibility?.description}
        deleteText={customModalVisibility?.leftButtonText}
        cancelText={customModalVisibility?.rightButtonText}
        removeRedApplyBorderWidth={true}
      />
      {/* </ImageBackground> */}

    </View>
  );
};

export default ChatScreen;
