import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { WEB_CLIENT_ID } from '@env';
import axios from 'axios';
import auth from '@react-native-firebase/auth';
import { useEffect } from 'react';
import * as Keychain from 'react-native-keychain';
import { useDispatch } from 'react-redux';
import { deviceAndLocationRequest } from '../stores/action/deviceAndLocationAction';
import { loaderRequest } from '../stores/action/loaderAction';

GoogleSignin.configure({
  webClientId: '709079413589-e16ncopf68helul9ubvmlo0a3lkn9ilm.apps.googleusercontent.com',
});

const useGoogleSignIn = () => {
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    try {
      // dispatch(loaderRequest(true));
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const userInfo = await GoogleSignin.signIn();
      const tokens = await GoogleSignin.getTokens();
      const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
      const response = await auth().signInWithCredential(googleCredential);
      return { response, userInfo, tokens: tokens.accessToken };
    } catch (error) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          console.log('User cancelled the login flow');
          dispatch(loaderRequest(false));
          break;
        case statusCodes.IN_PROGRESS:
          console.log('Sign in is in progress');
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          console.log('Play Services not available');
          break;
        default:
          console.error('An unexpected error occurred:', error);
      }
      throw error;
    }
  };
  return { signInWithGoogle };
};
export default useGoogleSignIn;
