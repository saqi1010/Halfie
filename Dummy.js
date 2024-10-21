// import React, { useRef, useState, useEffect } from 'react';
// import { View, Button, Text, StyleSheet } from 'react-native';
// import { Camera, useCameraDevices } from 'react-native-vision-camera';
// import { useIsFocused } from '@react-navigation/native';

// const Dummy = () => {
//   const [hasPermission, setHasPermission] = useState(false);
//   const [isRecording, setIsRecording] = useState(false);
//   const [videoUri, setVideoUri] = useState(null);
//   const cameraRef = useRef(null);
//   const devices = useCameraDevices();
//   const device = devices.back;
//   const isFocused = useIsFocused();

//   useEffect(() => {
//     const requestPermissions = async () => {
//       const cameraPermission = await Camera.requestCameraPermission();
//       const microphonePermission = await Camera.requestMicrophonePermission();
//       setHasPermission(
//         cameraPermission === 'authorized' && microphonePermission === 'authorized'
//       );
//     };

//     requestPermissions();
//   }, []);

//   const startRecording = async () => {
//     if (cameraRef.current) {
//       try {
//         setIsRecording(true);
//         const video = await cameraRef.current.startRecording({
//           fileType: 'mp4',
//           flash: 'off',
//           onRecordingFinished: (video) => {
//             setVideoUri(video.path);
//             setIsRecording(false);
//           },
//           onRecordingError: (error) => {
//             console.error(error);
//             setIsRecording(false);
//           },
//           maxDuration: 30, // Limit to 30 seconds
//         });
//       } catch (error) {
//         console.error(error);
//         setIsRecording(false);
//       }
//     }
//   };

//   const stopRecording = async () => {
//     if (cameraRef.current && isRecording) {
//       await cameraRef.current.stopRecording();
//     }
//   };

//   if (device == null || !hasPermission) {
//     return <Text>No access to the camera.</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {isFocused && (
//         <Camera
//           style={StyleSheet.absoluteFill}
//           device={device}
//           ref={cameraRef}
//           isActive={true}
//           video={true}
//         />
//       )}

//       <View style={styles.controls}>
//         <Button
//           title={isRecording ? 'Stop Recording' : 'Start Recording'}
//           onPress={isRecording ? stopRecording : startRecording}
//         />
//       </View>

//       {videoUri && (
//         <Text style={styles.videoText}>Video saved at: {videoUri}</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   controls: {
//     position: 'absolute',
//     bottom: 30,
//   },
//   videoText: {
//     marginTop: 20,
//     color: 'white',
//   },
// });

// export default Dummy;
