import { useNavigation, useRoute } from '@react-navigation/native';
import screenName from '../../theme/screenName';
const hooks = () => {
  let route = useRoute()
   const navigation = useNavigation()
    const acceessPermission = async () => {
        navigation.navigate(screenName.screenName.allowPremission_screen,{signInFlag:route.params?.signInFlag,userInfo:route.params?.userInfo})
    };
   
  return {acceessPermission}
}
export default hooks
