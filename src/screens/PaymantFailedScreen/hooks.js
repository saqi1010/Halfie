
import { useNavigation } from '@react-navigation/native';
import screenName from '../../theme/screenName';
const hooks = () => {
   const navigation = useNavigation()
    const goBack = async () => {
      navigation.pop();
    };
   
  return {goBack}
}
export default hooks
