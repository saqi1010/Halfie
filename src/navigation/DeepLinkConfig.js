import screenName from "../theme/screenName";
const config = {
  screens: {
    splash_screen: screenName.screenName.splash_screen,
    paymant_screen: screenName.screenName.paymant_screen,
    paymentFailed_screen: screenName.screenName.paymentFailed_screen,
  },
};
const linking = {
  prefixes: ['https://20.219.19.207:3000/api/v1','http://20.219.19.207:3000/api/v1'],
  config,
};

export default linking;

