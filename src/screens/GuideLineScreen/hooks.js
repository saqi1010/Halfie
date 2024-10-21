
import { useNavigation } from '@react-navigation/native';

import screenName from '../../theme/screenName';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { paymentRequest } from '../../stores/action/paymentAction';
import { paymentStatusRequest } from '../../stores/action/paymentStatusAction';

const hooks = () => {
const dispatch = useDispatch();
const { paymentData } = useSelector((state) => state.payment);
const { eventDetailData } = useSelector((state) => state.eventDetail);
const [webViewVisibility, setwebViewVisibility] = React.useState('')
  const navigation = useNavigation();
  const navigateToOneTimeVerification =  () => {
      console.warn("dsd",eventDetailData[0]._id);
      dispatch(paymentStatusRequest(eventDetailData[0]._id));
  };

  React.useEffect(() =>{
    if (paymentData?.url) {
      setwebViewVisibility(paymentData)
    }
  },[dispatch,paymentData?.url])


  return { navigateToOneTimeVerification ,paymentData,webViewVisibility};
};

export default hooks;
