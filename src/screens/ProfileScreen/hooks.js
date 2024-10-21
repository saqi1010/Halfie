
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { signOutRequest } from '../../stores/action/signOutAction';
import { accountDeleteRequest } from '../../stores/action/accountDeleteAction';
import screenName from '../../theme/screenName';
import { setAdditionalHeaders } from '../../utils/axiosInstance';
import * as Keychain from 'react-native-keychain';

const hooks = () => {
  const navigation = useNavigation()
  let dispatch = useDispatch()
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
  const signOut = async () => {
    dispatch(signOutRequest())
    navigateToCreateAccount()
  };
  const accountDelete = async () => {
    dispatch(accountDeleteRequest())
    navigateToCreateAccount()
  };

  return { signOut, accountDelete }
}
export default hooks
