import { CommonActions, useNavigation } from '@react-navigation/native';
import { useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Keychain from 'react-native-keychain';
import { signOutRequest } from '../../stores/action/signOutAction';
import { accountDeleteRequest } from '../../stores/action/accountDeleteAction';
import { userUpdateRequest } from '../../stores/action/userUpdateAction';
import { setAdditionalHeaders } from '../../utils/axiosInstance';
import screenName from '../../theme/screenName';

const hooks = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [emailNotificatBoolean, setEmailNotificatBoolean] = useState(false);
  const [phoneNotificatBoolean, setPhoneNotificatBoolean] = useState(false);

  const handleEmailNotificationToggle = useCallback(async (key, value) => {
    const credentials = await Keychain.getGenericPassword({ service: 'userLoginData' });
    const userData = JSON.parse(credentials.username);
    const updatedData = { ...userData, [key]: value };
    await Keychain.setGenericPassword(JSON.stringify(updatedData), credentials.password, { service: 'userLoginData' });
  }, []);

  const emailNotification = useCallback(async () => {
    const userBody = { isEmailNotificationsEnabled: !emailNotificatBoolean };
    await dispatch(userUpdateRequest(userBody, async () => {
      await handleEmailNotificationToggle('isEmailNotificationsEnabled', !emailNotificatBoolean);
      setEmailNotificatBoolean(!emailNotificatBoolean);
    }));
  }, [emailNotificatBoolean, handleEmailNotificationToggle]);

  const phoneNotification = useCallback(async () => {
    const userBody = { isPhoneNotificationsEnabled: !phoneNotificatBoolean };
    await dispatch(userUpdateRequest(userBody, async () => {
      await handleEmailNotificationToggle('isPhoneNotificationsEnabled', !phoneNotificatBoolean);
      setPhoneNotificatBoolean(!phoneNotificatBoolean);
    }));
  }, [phoneNotificatBoolean, handleEmailNotificationToggle]);

  const notificalInitial = useCallback(async () => {
    const credentials = await Keychain.getGenericPassword({ service: 'userLoginData' });
    const userData = JSON.parse(credentials.username);
    setEmailNotificatBoolean(!!userData.isEmailNotificationsEnabled);
    setPhoneNotificatBoolean(!!userData.isPhoneNotificationsEnabled);
  }, []);

  const resetStackAndGoToCreateAccount = CommonActions.reset({
    index: 0,
    routes: [{ name: screenName.screenName.createAccount_screen }],
  });

  const navigateToCreateAccount = async() => {
    setAdditionalHeaders('')
    await Keychain.resetGenericPassword({ service: 'userLoginData' });
    await Keychain.resetGenericPassword({ service: 'accessToken' });
    navigation.dispatch(resetStackAndGoToCreateAccount)
  }

  const signOut = useCallback(() => {
    dispatch(signOutRequest());
    navigateToCreateAccount();
  }, [dispatch]);

  const accountDelete = useCallback(() => {
    dispatch(accountDeleteRequest());
    navigateToCreateAccount();
  }, [dispatch]);

  useEffect(() => {
    notificalInitial();
  }, [notificalInitial]);

  return {
    emailNotification,
    phoneNotification,
    emailNotificatBoolean,
    phoneNotificatBoolean,
    setEmailNotificatBoolean,
    setPhoneNotificatBoolean,
    signOut,
    accountDelete,
  };
};

export default hooks;
