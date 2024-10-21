import deviceInfoAndLocation from "./deviceInfoAndLocaton";
import * as Keychain from 'react-native-keychain';

const loginApiSection = async (userInfo) => {
    const { location } = await deviceInfoAndLocation()
    if (!location || (location.lat === 0 && location.long === 0)) {
        return 're-Hit'
    }
    const credentials = await Keychain.getGenericPassword({ service: 'myDevicInfo' });
    if (!credentials) {
        throw new Error('No credentials found');
    }
    const convertIntoParse = await JSON.parse(credentials.username);
    const body = {
        "email": userInfo?.userInfo?.user.email,
        "address": convertIntoParse?.address,
        "location": convertIntoParse?.location,
        "deviceId": convertIntoParse?.deviceId,
        "deviceToken": convertIntoParse?.deviceToken
    };
    return body
}
const signUpApiSection = async(userInfo) => {
    const { location } = await deviceInfoAndLocation()
    if (!location || (location.lat === 0 && location.long === 0)) {
        return 're-Hit'
    }
    const credentials = await Keychain.getGenericPassword({ service: 'myDevicInfo' });
    if (!credentials) {
        throw new Error('No credentials found');
    }
    const convertIntoParse = await JSON.parse(credentials.username);
    const body = {
        socialProfile: {
          platform: "google",
          id: userInfo.userInfo.user.id,
          token: userInfo?.userInfo.idToken,
          refreshToken: userInfo.tokens
        },
        email: userInfo.userInfo.user.email,
        name: userInfo.userInfo.user.name,
        image: userInfo.userInfo.user.photo ?? '',
        ...convertIntoParse
      }
      return body
}
export { loginApiSection, signUpApiSection }
