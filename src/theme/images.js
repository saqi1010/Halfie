
const images = {
    onBordingImage1: require('../assets/images/onBoradingImage1.png'),
    onBordingImage2: require('../assets/images/onBoradingImage2.png'),
    onBordingImage3: require('../assets/images/onBoradingImage3.png'),
    quickLinkImage1: require('../assets/images/ProfileImage1.png'),
    quickLinkImage2: require('../assets/images/ProfileImage2.png'),
    quickLinkImage3: require('../assets/images/ProfileImage3.png'),
    emptyPerferenceImage: require('../assets/images/Male.png'),
    emptylikeReceivedImages: require('../assets/images/Female.png'),

};
const imagesArray = {
    onBordingImageData: [
        {
            "onboardingText1": 'Welcome to HALFIE!',
            image: images.onBordingImage1
        },
        {
            "onboardingText1": 'Unlock Exclusive Services!',
            image:  images.onBordingImage2
        },
        {
            "onboardingText1": 'Connect Traditionally!',
            image:  images.onBordingImage3
        },
    ]
};

const hobbiesImageData = {
    hobbies1: require('../assets/images/image1.png'),
    hobbies2: require('../assets/images/image2.png'),
    hobbies3: require('../assets/images/image3.png')
};

export default {
    images,
    imagesArray,
    hobbiesImageData
}