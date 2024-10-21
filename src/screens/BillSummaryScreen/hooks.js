
// import { useNavigation } from '@react-navigation/native';
// import { useDispatch, useSelector } from 'react-redux';
// import { paymentRequest } from '../../stores/action/paymentAction';
// import { useStripe } from '@stripe/stripe-react-native';
// import screenName from '../../theme/screenName';
// import React, { useEffect, useState } from 'react';

// const hooks = () => {
//   const navigation = useNavigation();
//   const { eventDetailData } = useSelector((state) => state.eventDetail);
//   const { paymentData } = useSelector((state) => state.payment);
//   const dispatch = useDispatch();
//   const { initPaymentSheet, presentPaymentSheet } = useStripe();

//   const navigateToOneTimeVerification = async () => {
//     if (eventDetailData?._id &&  paymentData.clientSecret) {
//       let currencyCodeInUppercase = eventDetailData.currency.toUpperCase();
//        await initPaymentSheet({
//           merchantDisplayName: 'Example, Inc.',
//           paymentIntentClientSecret:paymentData.clientSecret,
//           // currencyCode:'INR',
//           // countryCode: 'INR',
//         });
//         const { error } = await presentPaymentSheet();
//         if (error) {
//           navigation.navigate(screenName.screenName.paymentFailed_screen)
//         } else {
//         navigation.navigate(screenName.screenName.paymant_screen)
//         }
//       } else {
//         console.log('Error retrieving client secret');
//       }
//   };

//   React.useEffect(() => {
//     dispatch(paymentRequest(eventDetailData._id));
//   },[dispatch])

//   return { navigateToOneTimeVerification,paymentData };
// };

// export default hooks;


// // const { paymentData } = useSelector((state) => state.payment);
// // const dispatch = useDispatch();