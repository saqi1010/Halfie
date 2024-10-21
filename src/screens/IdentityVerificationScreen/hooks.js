import { CommonActions, useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect, useRef } from "react";
import screenName from "../../theme/screenName";
import ImagePicker from 'react-native-image-crop-picker';
import { launchCamera } from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import { Alert, PermissionsAndroid, Platform, Text, View } from "react-native";
import { styles } from "./style";
// import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { requestAudioPermission, requestCameraPermission } from "../../utils/permissions";
import { useDispatch, useSelector } from "react-redux";
import { thumbnailRequest } from "../../stores/action/thumbnailAction";
import { uploadIdVerificationImageRequest } from "../../stores/action/uploadIdverificationImageAction";
import { uploadIdVerificationVideoRequest } from "../../stores/action/uploadIdverificationVideoAction";
import { loaderRequest } from "../../stores/action/loaderAction";
import { signUpRequest } from "../../stores/action/signUpAction";
import { axiosInstance, setAdditionalHeaders } from "../../utils/axiosInstance";

const hooks = () => {
  const dispatch = useDispatch()
  const route = useRoute()
  const navigation = useNavigation();
  const [videoThumbnail, setVideoThumbnail] = useState(null);
  const [imageThumbnail, setImageThumbnail] = useState(null);
  const [imageThumbnail1, setImageThumbnail1] = useState(null);
  const [randomText, setRandomText] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [userName, setUserName] = useState('');
  const { thumbnailData } = useSelector((state) => state.thumbnail);
  const { deviceData } = useSelector((state) => state.deviceInfoAndLocation);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [customModalVisibility, setCustomModalVisibility] = useState({
    visibility: false,
    title: '',
    description: '',
    leftButtonText: '',
    rightButtonText: '',
    closeModalEvent: () => { },
    rightModalEvent: () => { },
  })

  const wordsArray = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'mango', 'peach', 'pear', 'plum', 'berry'];
  const generateRandomText = () => {
    const randomWords = Array.from({ length: 3 }, () => wordsArray[Math.floor(Math.random() * wordsArray.length)]);
    const digits = Math.floor(100 + Math.random() * 900).toString();
    setRandomText(`${digits}`);
  };


  // console.warn("adasd",deviceData?.socialProfile);
 

  const instructionData1 = [
    {
      name: 'Please show the front-side and back-side of your government issued identity card.'
    },
    {
      name: 'A text will be prompted. Please read this text in the video.'
    },
    {
      name: 'You will have 30 seconds to complete the video.'
    },
    {
      name: 'Ensure that your face, identity cards, and the overall quality of your video is easily readable.'
    },
  ];

  
  const instructionData2 = [
    {
      name: 'Please upload the front-side and back-side of your government issued identity card.'
    },
    {
      name: 'Please use the same identity card that you have shown in the video.'
    },
    {
      name: 'Identity cards, and the overall quality of your photo is easily readable.'
    },
  ];

  const questionData = [
   {
    name: `${randomText}`
   }
  ]

  const addVideo = async () => {
    const options = { mediaType: 'video', videoQuality: 'high', durationLimit: 5 };
  
    try {
      console.warn("=====video=====");
  
      const response = await launchCamera(options); // Await the result directly here
  
      // Check if the user cancelled the action
      if (response.didCancel) {
        console.log('User cancelled video picker');
        return;
      }
  
      // Check if there is an error in the response
      if (response.errorCode) {
        console.log('VideoPicker Error: ', response.errorMessage || response.errorCode);
        return;
      }
  
      // Ensure assets and uri are defined before accessing them
      if (response.assets && response.assets.length > 0) {
        const videoUri = response.assets[0].uri;
        if (videoUri) {
          setVideoThumbnail(videoUri); // Update the thumbnail
          dispatch(thumbnailRequest(videoUri)); // Dispatch the thumbnail request
        } else {
          console.error('No video URI found');
        }
      } else {
        console.error('No assets found in response');
      }
  
    } catch (error) {
      console.log('Error in recording video: ', error);
    }
  };


  const handleButtonClick = () => {
    setCountdown(10); 
    setIsTimerRunning(true);
    const intervalId = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown === 1) {
          clearInterval(intervalId); 
          setIsTimerRunning(false); 
          openVideoRecording();
          return 0;
        }
        return prevCountdown - 1; 
      });
    }, 1000); 
  };


  const addImage = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 200,
        cropping: true,
      });
      setImageThumbnail(image.path);
    } catch (error) {
      console.log('Error picking image: ', error);
    }
  };
  const addImage1 = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 200,
        cropping: true,
      });
      setImageThumbnail1(image.path);
    } catch (error) {
      console.log('Error picking image: ', error);
    }
  };


  const renderInstruction = ({ item, index }) => (
    <View style={styles.marginContianer}>
      <Text style={styles.instructionDetailFontStyle}>{index + 1}. {item.name}</Text>
    </View>
  );
  const renderPriceInstruction = ({ item, index }) => (
    <View style={styles.marginContianer}>
      <Text style={styles.instructionDetailFontStyle}>{index + 1}. {`My name is ${userName} and the code for my identity verification is `}{item.name}</Text>
    </View>
  );

  const closeModal = () => {
    dispatch(loaderRequest(false));
    setCustomModalVisibility({
      ...customModalVisibility,
      visibility: false
    })
  }

  const resetStackAndGoToDrawer = CommonActions.reset({
    index: 0,
    routes: [{ name: screenName.screenName.welcome_screen}],
  });

  const navigateToHome = async () => {
    dispatch(loaderRequest(true));
    if (!imageThumbnail && !thumbnailData) {
      setCustomModalVisibility({
        visibility: true,
        title: 'Upload Failed',
        description: 'Both image and video uploads failed. Please try again.',
        rightButtonText: 'OK',
        rightModalEvent: closeModal,
        backLogo: true,
      });
      dispatch(loaderRequest(false)); 
      return; 
    }
    if (!imageThumbnail) {
      setCustomModalVisibility({
        visibility: true,
        title: 'Image Upload Failed',
        description: 'The image upload failed. Please try again or select a different image.',
        rightButtonText: 'OK',
        rightModalEvent: closeModal,
        backLogo: true,
      });
      dispatch(loaderRequest(false)); 
      return;
    }
    if (!thumbnailData) {
      setCustomModalVisibility({
        visibility: true,
        title: 'Video Upload Failed',
        description: 'The video upload failed. Please try again or select a different video.',
        rightButtonText: 'OK',
        rightModalEvent: closeModal,
        backLogo: true,
      });
      dispatch(loaderRequest(false)); 
      return; 
    }
    try {
      console.warn("=====1=====token",!axiosInstance.defaults.headers.common['accesstoken']);
      console.warn("=====2=====token",axiosInstance.defaults.headers.common['accesstoken']);
      if (!axiosInstance.defaults.headers.common['accesstoken']) {
        await dispatch(signUpRequest(deviceData,async (response) => {
          console.warn("-------------->>",response?.accessToken);
          await dispatch(uploadIdVerificationImageRequest({ accessToken : response?.accessToken,imageThumbnail:imageThumbnail}, (response) => {
            console.warn("imageThumbnailResponse==========",response);
            if (response.success == false) {
              setCustomModalVisibility({
                visibility: true,
                title: 'Upload Image Error',
                description: response?.message,
                rightButtonText: 'OK',
                rightModalEvent: closeModal,
                backLogo: true,
              });
            }
          }))
          await dispatch(uploadIdVerificationVideoRequest({ accessToken : response?.accessToken,thumbnailData:thumbnailData}, (response) => {
            console.warn("iuploadIdVerificationResponse==========",response);
            if (response.success == false) {
              setCustomModalVisibility({
                visibility: true,
                title: 'Upload Video Error',
                description: response?.message,
                rightButtonText: 'OK',
                rightModalEvent: closeModal,
                backLogo: true,
              });
            }
          }))
          await setAdditionalHeaders(response?.accessToken)
          dispatch(loaderRequest(false))
          setVideoThumbnail(null);
          dispatch(thumbnailRequest(null)); 
          navigation.dispatch(resetStackAndGoToDrawer)
        }))
      }
      else{
        console.warn("rehit");
        await dispatch(uploadIdVerificationImageRequest({ accessToken : axiosInstance.defaults.headers.common['accesstoken'],imageThumbnail:imageThumbnail}, (response) => {
          console.warn("imageThumbnailResponse==========",response);
          if (response.success == false) {
            setCustomModalVisibility({
              visibility: true,
              title: 'Upload Image Error',
              description: response?.message,
              rightButtonText: 'OK',
              rightModalEvent: closeModal,
              backLogo: true,
            });
          }
        }))
        await dispatch(uploadIdVerificationVideoRequest({ accessToken : axiosInstance.defaults.headers.common['accesstoken'],thumbnailData:thumbnailData}, (response) => {
          if (response.success == false) {
            setCustomModalVisibility({
              visibility: true,
              title: 'Upload Video Error',
              description: response?.message,
              rightButtonText: 'OK',
              rightModalEvent: closeModal,
              backLogo: true,
            });
          }
        }))
        dispatch(loaderRequest(false))
        setVideoThumbnail(null);
        dispatch(thumbnailRequest(null)); 
        navigation.dispatch(resetStackAndGoToDrawer)
      }
    } catch (error) {
      dispatch(loaderRequest(false))
      console.error("Error during upload:", error);
      setCustomModalVisibility({
        visibility: true,
        title: 'Upload Error',
        description: 'An error occurred while uploading. Please try again.',
        rightButtonText: 'OK',
        rightModalEvent: closeModal,
        backLogo: true,
      });
    } 
  };
  
  const navigateToIdentify =() => {
    navigation.navigate(screenName.screenName.Identity_verification_secand_screen,{userData:userName, generateRandomText:generateRandomText})
  }
 const openVideoEvent = () => {
  handleButtonClick()
 }

 const openVideoRecording = () => {
    console.warn("Asdasd");
    addVideo()

  }

  const fetchUserName = async () => {
    try {
      const convertDataIntoParse = JSON.parse(deviceData);
      setUserName(convertDataIntoParse.name)
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }

 React.useEffect(() => {
  fetchUserName()
  generateRandomText()
 },[])
 
  return {
    navigateToHome,
    instructionData1,
    instructionData2,
    renderInstruction,
    addVideo,
    addImage,
    videoThumbnail,
    imageThumbnail,
    imageThumbnail1,
    randomText,
    addImage1,
    navigateToIdentify,
    renderPriceInstruction,
    questionData,
    openVideoEvent,
    countdown,
    isTimerRunning,
    handleButtonClick,
    thumbnailData,
    route,
    customModalVisibility, setCustomModalVisibility
  };
};

export default hooks;


