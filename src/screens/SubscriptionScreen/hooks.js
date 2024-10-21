
import { useNavigation } from '@react-navigation/native';

import screenName from '../../theme/screenName';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { paymentRequest } from '../../stores/action/paymentAction';

const hooks = () => {
const dispatch = useDispatch();
const { paymentData } = useSelector((state) => state.payment);
const { eventDetailData } = useSelector((state) => state.eventDetail);
const [webViewVisibility, setwebViewVisibility] = React.useState('')
  const navigation = useNavigation();
  const navigateToOneTimeVerification =  () => {
    dispatch(paymentRequest(eventDetailData._id));
  };

  React.useEffect(() =>{
    if (paymentData?.url) {
      setwebViewVisibility(paymentData)
    }
  },[dispatch,paymentData?.url])


  return { navigateToOneTimeVerification ,paymentData,webViewVisibility};
};

export default hooks;
