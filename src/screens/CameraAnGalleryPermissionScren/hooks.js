import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { requestCameraPermission, requestGalleryPermission } from '../../utils/permissions';

const hooks = () => {
  const { eventDetailData } = useSelector((state) => state.eventDetail);
  const navigation = useNavigation();

  const PermissionAllow = async () => {
    const camera = await requestCameraPermission();
    if (camera ) {
      navigation.goBack()
    }
  };

  return { PermissionAllow };
};

export default hooks;
