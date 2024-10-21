// import { Animated, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { styles } from './style'
// import GridentButton from '../../components/atoms/GridentButton'
// import hooks from './hooks'
// import { STRIPE_PUBLIC_KEY } from '@env';
// import { StripeProvider, useStripe } from '@stripe/stripe-react-native';

// const BillSummaryScreen = () => {
//   const { navigateToOneTimeVerification,paymentData } = hooks()
//   return (
//     <View style={styles.mainContainer}>
//          <StripeProvider publishableKey={STRIPE_PUBLIC_KEY}>
//           <View style={styles.justifyCenterContainer}>
//         <View style={styles.subContainer}>
//           <Text style={styles.titleFontStyle}>BILL SUMMARY</Text>
//        {
//         paymentData &&
//           <View style={styles.taxMainContainer}>
//             <View style={styles.flexDirectionContainer}>
//               <View style={styles.flexContainer}>
//                 <Text style={styles.itemFontStyle}>Item</Text>
//                 <Text style={styles.bronzeFontStyle}>Bronze Plan</Text>
//                 <Text style={styles.taxFontStyle}> {paymentData?.taxRate}% Tax</Text>
//                 <Text style={styles.totalFontStyle}>Total</Text>
//               </View>
//               <View style={styles.verticaleLine}></View>
//               <View style={styles.flexContainer}>
//                 <Text style={styles.itemFontStyle}>Amount</Text>
//                 <Text style={styles.bronzeFontStyle}>{paymentData?.currency?.toUpperCase()} {paymentData?.basePrice}</Text>
//                 <Text style={styles.taxFontStyle}>{paymentData?.currency?.toUpperCase()} {paymentData?.taxAmount}</Text>
//                 <Text style={styles.totalFontStyle}>{paymentData?.currency?.toUpperCase()} {paymentData?.finalAmount}</Text>
//               </View>
//             </View>
//           </View>
//        }
            
//           <View style={styles.termAndConditionContianer}>
//             <Text style={styles.guidenceFontStyle}>By proceeding to register for any event or consult/purchase any service, I agree to the<Text style={styles.guidenceFontStyleButLinkcolor}> Raahi’s Privacy Statement, Refund Policies, Community Guidelines</Text>and <Text style={styles.guidenceFontStyleButLinkcolor}>Terms of Service</Text></Text>
//           </View>
//           <GridentButton
//             extrenalStyle={styles.extrenalStyle}
//             onClick={navigateToOneTimeVerification}
//             buttonText='Pay Now'
//           />
//         </View>
//         </View>

//       </StripeProvider>
//     </View>
//   )
// }
// export default BillSummaryScreen
