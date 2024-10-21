import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const mockupWidth = 375;
const metrics = {
screenWidth: width < height ? width: height,
screenHeight: width < height ? height : width,
changeByMobileDPI : (temp) => width / (mockupWidth / temp)
};
export default metrics;