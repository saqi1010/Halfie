
import { useNavigation, useRoute } from '@react-navigation/native';
import screenName from '../../theme/screenName';
import { View, Text, TouchableOpacity, Alert, Linking, BackHandler } from 'react-native';
import { styles } from './style';
import colors from '../../theme/color';
import metrics from '../../theme/metrics';
import GridentBorder from '../../components/atoms/GridentBorder';
import React from 'react';
import * as Permissions from 'react-native-permissions';
import font from '../../theme/font';
import * as Keychain from 'react-native-keychain';

const hooks = () => {
  let route = useRoute()
  const navigation = useNavigation()
  const goBack = async () => {
    navigation.pop();
  };
  const [aboutVisibility, setAboutVisibility] = React.useState(0)
  const [aboutMeAndMyPreferences, setAboutMeAndMyPreferences] = React.useState(
    { 
      "birthday": "",
      "gender": "",
      "name": "",
      "nationality": "",
      "ethnicity":"",
      "personalityType": "",
      "religionType": "",

      // "interest":null,
      // "qna": [],
      // "prefrences": {
      //     "gender": "",
      //     "ageRange": {
      //         "minAge": 0,
      //         "maxAge": 0
      //     },
      //     "areaRange":"",
      //     "bookGenre": [],
      //     "gameGenre": [],
      //     "hobbies": [],
      //     "moviesGenre": [],
      //     "musicGenre": [],
      //     "nationality":[],
      //     "ethnicity":[],
      //     "religionType":[]
      //   },
  
      // "shortBio": {
      //     "areaOfStudy": "",
      //     "describeYourSelf": "",
      //     "designation": "",
      //     "educationLevel": "",
      //     "study": "",
      //     "workIn": ""
      // },
      "isVisible": {
          "age": false,
          "nationality": false,
          "religionType": false,
          "personalityType": false,
          "shortBio": {
              "study": false,
              "workIn": false,
              "designation": false,
              "areaOfStudy": false,
              "describeYourSelf": false
          }
      }
  }
  )

 
let genderData = [
  {
    "id": 1,
    "name": "Mr.",
    "value": "male"
  },
  {
    "id": 2,
    "name": "Miss",
    "value": "female"
  }
]

let educationData = [
  {
    "id": 1,
    "name": "High School",
    "value": "high school"
  },
  {
    "id": 2,
    "name": "Diploma",
    "value": "diploma"
  },
  {
    "id": 2,
    "name": "Bachelors",
    "value": "bachelors"
  },
  {
    "id": 3,
    "name": "Masters",
    "value": "masters"
  },
  {
    "id": 4,
    "name": "PHD",
    "value": "phd"
  }
]

let educationData1 = [
  {
    "_id": 1,
    "title": "High School",
    "value": "high school"
  },
  {
    "_id": 2,
    "title": "Bachelors",
    "value": "bachelors"
  },
  {
    "_id": 3,
    "title": "Masters",
    "value": "masters"
  },
  {
    "_id": 4,
    "title": "Doctoral",
    "value": "doctoral"
  }
]
let imageStaticData = []
const [images, setImages] = React.useState(imageStaticData);
const [formState, setFormState] = React.useState({
  fullName: {
    leftData: 'G',
    title: '',
    visibility: true,
    error: ''
  },
  age:{
    title: '',
    visibility: true,
    error: ''
  },
  nationality: {
    id: '',
    title: '',
    visibility: true,
    key: '',
    error: ''
  },
  ethnicity: {
    id: '',
    title: '',
    visibility: true,
    key: '',
    error: ''
  },
  religion: {
    id: '',
    title: '',
    visibility: true,
    key: '',
    error: ''
  },
  personalityType: {
    id: '',
    title: '',
    visibility: true,
    key: '',
    error: ''
  },
  studyData: {
    title: '',
    visibility: true,
    error: ''
  },
  university: {
    leftData: 'Ed.',
    title: '',
    visibility: true,
    error: ''
  },
  work: {
    title: '',
    visibility: true,
    error: ''
  },
  role: {
    title: '',
    visibility: true,
    error: ''
  },
  yourself: {
    title: '',
    error: ''
  },
  likes: {
    title: '',
    error: ''
  },
  dislikes: {
    title: '',
    error: ''
  },
  /////
  hobbies: {
    title: [],
    error: ''
  },
  moviesGenre: {
    title: [],
    error: ''
  },
  musicGenre: {
    title: [],
    error: ''
  },
  booksGenre: {
    title: [],
    error: ''
  },
  gamesGenre: {
    title: [],
    error: ''
  },
  /////
  idealDate: {
    title: '',
    error: ''
  },
  partner: {
    title: '',
    error: ''
  },
  aboutYou: {
    title: '',
    error: ''
  },
  // prefrence

  myPreferenceFullName: {
    leftData: 'G',
    title: '',
    visibility: true,
    error: ''
  },

  myPreferenceNationality: {
    id: '',
    title: '',
    visibility: true,
    key: '',
    error: ''
  },
  myPreferenceEthnicity: {
    id: '',
    title: '',
    visibility: true,
    key: '',
    error: ''

  },
  myPreferenceReligion: {
    id: '',
    title: '',
    visibility: true,
    key: '',
    error: ''

  },
  myPreferencePersonalityType: {
    id: '',
    title: '',
    visibility: true,
    key: '',
    error: ''
  },
  myPreferenceAreaRange: {
    id: '',
    title: '',
    error: ''
  },
  myPreferenceAgeRange: {
    id: '',
    title: '',
    error: ''
  },
  myPreferenceEducation: {
    id: '',
    title: '',
    visibility: true,
    key: '',
    error: ''
  },
  /////
  myPreferenceHobbies: {
    title: [],
    error: ''
  },
  myPreferenceMoviesGenre: {
    title: [],
    error: ''
  },
  myPreferenceMusicGenre: {
    title: [],
    error: ''
  },
  myPreferenceBooksGenre: {
    title: [],
    error: ''
  },
  myPreferenceGameGenre: {
    title: [],
    error: ''
  },
  /////
  visibility: false,
  loadData: null,
});

 const  navigateToHabbit = ({header}) =>{
  navigation.navigate(screenName.screenName.hobbies_screen,{header:header})
 }

  const renderAbout = ({ item, index }) => {
    const onClick = () => {
      setAboutVisibility(index)
    }
    return (
      <TouchableOpacity onPress={onClick} activeOpacity={1} style={[index == 0 && styles.imageMainContainer]}>
        <GridentBorder
          colors={aboutVisibility == index ? colors.grident1 : colors.grayGrident}
          borderWidth={1}
          borderRadius={metrics.changeByMobileDPI(10)}
          style={styles.gridentConatiner}
        >
          <View style={styles.alignmentContainer}>
            <Text style={[styles.topTabFontStyle, { color: aboutVisibility == index ? colors.white : colors.graySolid, fontFamily: aboutVisibility == index ? font.type.latoSemiBold : font.type.latoMedium }]}>{item}</Text>
          </View>
        </GridentBorder>
      </TouchableOpacity>
    )
  }

  const navigateTest = async() => {
    const url = 'https://www.16personalities.com/free-personality-test';
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }


  const getInitialData = async() => {
    const credentials = await Keychain.getGenericPassword({ service: 'userLoginData' });
    const convertIntoParse = await JSON.parse(credentials.username);
    console.warn("=====convertIntoParse====",convertIntoParse?.subscription);
    if (convertIntoParse) {
        const aboutMe = convertIntoParse.aboutMe || {};
        const myPreference = convertIntoParse.mypreference || {};
     if(route?.params?.index == 1){
          setAboutVisibility(1)
        }
        // console.warn("sssssssssss",  aboutMe.shortBio);
        setFormState({
            // Personal Information
            fullName: {
                leftData: aboutMe?.gender !=  'Male' ? 'Mr.' : 'Miss' ,
                title: aboutMe.fullName || '',
                visibility: true,
                error: ''
            },
            age:{
              title:  18,
              visibility: true,
              error: ''
            },
            nationality: {
                id: aboutMe.nationality?._id || '',
                title: aboutMe.nationality?.title || '',
                visibility: aboutMe.isVisible?.nationality || true,
                key: '',
                error: ''
            },
            ethnicity: {
                id: aboutMe.ethnicity?._id || '',
                title: aboutMe.ethnicity?.title || '',
                visibility: true,
                key: '',
                error: ''
            },
            religion: {
                id: aboutMe.religionType?._id || '',
                title: aboutMe.religionType?.title || '',
                visibility: aboutMe.isVisible?.religionType || true,
                key: '',
                error: ''
            },
            personalityType: {
                id: aboutMe.personalityType?._id || '',
                title: aboutMe.personalityType?.title || '',
                visibility: aboutMe.isVisible?.personalityType || true,
                key: '',
                error: ''
            },
            studyData: {
                title: aboutMe.shortBio?.study || '',
                visibility: true,
                error: ''
            },
            university: {
                leftData: 'Ed.',
                title: aboutMe.shortBio?.educationLevel || '',
                visibility: true,
                error: ''
            },
            work: {
                title: aboutMe.shortBio?.workIn || '',
                visibility: true,
                error: ''
            },
            role: {
                title: aboutMe.shortBio?.designation || '',
                visibility: true,
                error: ''
            },
            yourself: {
                title: aboutMe.shortBio?.describeYourSelf || '',
                error: ''
            },
            likes: {
                title: aboutMe.likes || '',
                error: ''
            },
            dislikes: {
                title: aboutMe.dislikes || '',
                error: ''
            },
            // Interests and Hobbies
            hobbies: {
                title: aboutMe.interest?.hobbies?.map(hobby => hobby) || [],
                error: ''
            },
            moviesGenre: {
                title: aboutMe.interest?.moviesGenre?.map(movie => movie) || [],
                error: ''
            },
            musicGenre: {
                title: aboutMe.interest?.musicGenre?.map(music => music) || [],
                error: ''
            },
            booksGenre: {
                title: aboutMe.interest?.bookGenre?.map(book => book) || [],
                error: ''
            },
            gamesGenre: {
                title: aboutMe.interest?.gameGenre?.map(game => game) || [],
                error: ''
            },
            // Ideal Partner Preferences
            // qna
            idealDate: {
                title: '' || '',
                error: ''
            },
            partner: {
                title: '' || '',
                error: ''
            },
            aboutYou: {
                title: '',
                error: ''
            },

            // //////////////////
            // My Preferences
            myPreferenceFullName: {
                leftData:myPreference?.gender == 'male' ? 'Mr.' :'Miss',
                title: '',
                visibility: true,
                error: ''
            },
            myPreferenceNationality: {
                id: myPreference.nationality[0]?._id || '',
                title: myPreference.nationality[0]?.title || '',
                visibility: true,
                key: '',
                error: ''
            },
            myPreferenceEthnicity: {
                id: myPreference.ethnicity[0]?._id || '',
                title: myPreference.ethnicity[0]?.title || '',
                visibility: true,
                key: '',
                error: ''
            },
            myPreferenceReligion: {
                id: myPreference.religionType[0]?._id || '',
                title: myPreference.religionType[0]?.title || '',
                visibility: true,
                key: '',
                error: ''
            },
            myPreferenceAgeRange: {
              id: '',
              title: myPreference?.ageRange,
              error: ''
            },
            myPreferenceAreaRange: {
              id: '',
              title: myPreference?.areaRange,
              error: ''
            },
            myPreferencePersonalityType: {
                id: myPreference.personalityType[0]?._id || '',
                title: myPreference.personalityType[0]?.title || '',
                visibility: true,
                key: '',
                error: ''
            },
            myPreferenceEducation: {
                id: '',
                title: myPreference.educationLevel || '',
                visibility: true,
                key: '',
                error: ''
            },
            myPreferenceHobbies: {
                title: myPreference.hobbies?.map(hobby => hobby) || [],
                error: ''
            },
            myPreferenceMoviesGenre: {
                title: myPreference.moviesGenre?.map(movie => movie) || [],
                error: ''
            },
            myPreferenceMusicGenre: {
                title: myPreference.musicGenre?.map(music => music) || [],
                error: ''
            },
            myPreferenceBooksGenre: {
                title: myPreference.bookGenre?.map(book => book) || [],
                error: ''
            },
            myPreferenceGameGenre: {
                title: myPreference.gameGenre?.map(game => game) || [],
                error: ''
            },
            visibility: false,
            loadData: null,
        });
     
        if (aboutMe?.profileImages?.length > 0) { 
          for (let i = 0; i < aboutMe?.profileImages.length; i++) {
            setImages([...images,{path:`http://20.219.19.207:3000/assets/${aboutMe?.profileImages[i]}`}])
          }
        }
        else{
          if (convertIntoParse?.subscription == null) {
            setImages([{
              path:''
            }])
          }
        }
    }
  }

  React.useEffect(() => {
    getInitialData()
}, [route?.params]);

React.useEffect(() => {
  const backAction = () => {
    navigation.goBack();
    return true;
  };
  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
  );
  return () => backHandler.remove();
}, [navigation]);


console.warn("------->>>",images);

  return { goBack, renderAbout ,aboutVisibility,navigateToHabbit,setAboutMeAndMyPreferences,aboutMeAndMyPreferences,genderData,educationData,educationData1,setAboutVisibility,navigateTest,formState, setFormState,
    setImages,images,imageStaticData
  }
}
export default hooks
