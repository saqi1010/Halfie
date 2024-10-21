import { FlatList, RefreshControl, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import GridentButton from '../../components/atoms/GridentButton'
import hooks from './hooks'
import CustomTextInput from '../../components/molecules/CustomTextInput'
import UnSelectedSvg from '../../assets/svg/UnFillMenuSvg.svg'
import SelectedSvg from '../../assets/svg/FillMenuSvg.svg'
import metrics from '../../theme/metrics'
import ImageSlider from '../../components/atoms/ImageSlider'
import { aboutData, reportData } from '../../theme/staticData'
import ImageAdderSlider from '../../components/atoms/ImageAdderSlider'
import { useNavigation, useRoute } from '@react-navigation/native'
import screenName from '../../theme/screenName'
import FormCustomModal from '../../components/molecules/FormCustomModal'
import Location from '../../components/atoms/Location'
import ErrorSvg from '../../assets/svg/ErrorSvg.svg';
import { useDispatch, useSelector } from 'react-redux'
import { userUpdateRequest } from '../../stores/action/userUpdateAction'
import { loaderRequest } from '../../stores/action/loaderAction'
import { uploadImageRequest } from '../../stores/action/uplaodImageAction'
import { fetchStaticRequest } from '../../stores/action/fetchStaticAction'
import GenderSelect from '../../components/atoms/GenderSelect'
import EducationLevel from '../../components/atoms/EducationLevel'
import EyeSvg from '../../assets/svg/EyeSvg.svg'
import PriceRange from '../../components/atoms/PriceRange'
import FocusAwareStatusBar from '../../components/organisms/FocusAwareStatusBar'
const SubcriptionFormScreen = () => {
  const { goBack, renderSelectImage, renderAbout, aboutVisibility, setAboutMeAndMyPreferences, aboutMeAndMyPreferences, genderData, educationData, educationData1, setAboutVisibility, navigateTest, formState, setFormState , setImages,images,imageStaticData} = hooks()
  const navigation = useNavigation()
  let route = useRoute()
  let { updateUserData } = useSelector(state => state.updateUser)


  const dispatch = useDispatch()


  React.useEffect(() => {
    // let counnt = route?.params?.plan?.key || 
    for (let i = 0; i < route?.params?.plan?.key; i++) {
      imageStaticData.push({
        imageData: null
      });
    }
  }, [])



  const [imageError, setImageError] = React.useState(false)


  ////
  function validateImageData(dataArray) {
    return dataArray.some(item => item.imageData !== null);
  }

  const validateFields = () => {
    const fullNameRegex = /^[A-Za-z\s]+$/; // Only alphabets and spaces
    const dropdownRegex = /^[A-Za-z\s]+$/; // Only alphabets and spaces
    const textLength3Regex = /^.{3,}$/; // Minimum 3 characters
    const textLength23Regex = /^.{23,}$/; // Minimum 23 characters
    const textLength10Regex = /^.{10,}$/; // Minimum 23 characters

    const dropdownArrayLengthRegex = /.+/; // At least one option selected (not empty)
    const newFormState = { ...formState };
    let isValid = true;
    console.warn("imagesimages",images);
    
    let checkImageLength = images.filter(item => item.path != null)
    
    if (checkImageLength.length == 0) {
      setImageError(true)
      isValid = false;
    } else {
      setImageError(false)
    }
    if (!fullNameRegex.test(formState.fullName.title) || formState.fullName.leftData == 'G') {
      if (formState.fullName.leftData === 'G') {
        newFormState.fullName.error = "Please select a gender.";
      } else {
        newFormState.fullName.error = "Please enter a valid full name.";
      }
      isValid = false;
    } else {
      newFormState.fullName.error = "";
    }

    if (!(formState.nationality.title.length > 0)) {
      newFormState.nationality.error = "Please select a valid nationality.";
      isValid = false;
    } else {
      newFormState.nationality.error = "";
    }

    if (!(formState.ethnicity.title.length > 0)) {
      newFormState.ethnicity.error = "Please select a valid ethnicity.";
      isValid = false;
    } else {
      newFormState.ethnicity.error = "";
    }

    if (!(formState.religion.title.length > 0)) {
      newFormState.religion.error = "Please select a valid religion.";
      isValid = false;
    } else {
      newFormState.religion.error = "";
    }

    if (!(formState.personalityType.title.length > 0)) {
      newFormState.personalityType.error = "Please select a valid personality type.";
      isValid = false;
    } else {
      newFormState.personalityType.error = "";
    }

    if (!textLength10Regex.test(formState.yourself.title)) {
      newFormState.yourself.error = "Description of yourself must be at least 10 characters long.";
      isValid = false;
    } else {
      newFormState.yourself.error = "";
    }

    if (formState.hobbies.title.length === 0 || !dropdownArrayLengthRegex.test(formState.hobbies.title.join(','))) {
      newFormState.hobbies.error = "Please select at least one hobby.";
      isValid = false;
    } else {
      newFormState.hobbies.error = "";
    }

    if (formState.moviesGenre.title.length === 0 || !dropdownArrayLengthRegex.test(formState.moviesGenre.title.join(','))) {
      newFormState.moviesGenre.error = "Please select at least one movie genre.";
      isValid = false;
    } else {
      newFormState.moviesGenre.error = "";
    }

    if (formState.musicGenre.title.length === 0 || !dropdownArrayLengthRegex.test(formState.musicGenre.title.join(','))) {
      newFormState.musicGenre.error = "Please select at least one music genre.";
      isValid = false;
    } else {
      newFormState.musicGenre.error = "";
    }

    if (formState.booksGenre.title.length === 0 || !dropdownArrayLengthRegex.test(formState.booksGenre.title.join(','))) {
      newFormState.booksGenre.error = "Please select at least one book genre.";
      isValid = false;
    } else {
      newFormState.booksGenre.error = "";
    }

    // if (!textLength23Regex.test(formState.idealDate.title)) {
    //   newFormState.idealDate.error = "Ideal Date description must be at least 23 characters long.";
    //   isValid = false;
    // } else {
    //   newFormState.idealDate.error = "";
    // }

    // if (!textLength23Regex.test(formState.partner.title)) {
    //   newFormState.partner.error = "Partner preferences must be at least 23 characters long.";
    //   isValid = false;
    // } else {
    //   newFormState.partner.error = "";
    // }

    // if (!textLength23Regex.test(formState.aboutYou.title)) {
    //   newFormState.aboutYou.error = "About You section must be at least 23 characters long.";
    //   isValid = false;
    // } else {
    //   newFormState.aboutYou.error = "";
    // }

    setFormState(newFormState);
    return isValid;
  };
  const validateMyPreferenceFields = () => {
    const fullNameRegex = /^[A-Za-z\s]+$/; // Only alphabets and spaces
    const dropdownRegex = /^[A-Za-z\s]+$/; // Only alphabets and spaces
    const textLength3Regex = /^.{3,}$/; // Minimum 3 characters
    const textLength23Regex = /^.{23,}$/; // Minimum 23 characters
    const dropdownArrayLengthRegex = /.+/; // At least one option selected (not empty)
    const newFormState = { ...formState };
    let isValid = true;
    if (formState.myPreferenceFullName.leftData === 'G') {
      newFormState.myPreferenceFullName.error = "Please select a gender.";
      isValid = false;
    } else {
      newFormState.myPreferenceFullName.error = "";
    }
    if (!(formState.myPreferenceNationality.title.length > 0)) {
      newFormState.myPreferenceNationality.error = "Please select a valid nationality.";
      isValid = false;
    } else {
      newFormState.myPreferenceNationality.error = "";
    }

    if (!(formState.myPreferenceEthnicity.title.length > 0)) {
      newFormState.myPreferenceEthnicity.error = "Please select a valid ethnicity.";
      isValid = false;
    } else {
      newFormState.myPreferenceEthnicity.error = "";
    }

    if (!(formState.myPreferenceReligion.title.length > 0)) {
      newFormState.myPreferenceReligion.error = "Please select a valid religion.";
      isValid = false;
    } else {
      newFormState.myPreferenceReligion.error = "";
    }

    if (!(formState.myPreferencePersonalityType.title.length > 0)) {
      newFormState.myPreferencePersonalityType.error = "Please select a valid personality type.";
      isValid = false;
    } else {
      newFormState.myPreferencePersonalityType.error = "";
    }

    if (!(formState.myPreferenceEducation.title.length > 0)) {
      newFormState.myPreferenceEducation.error = "Please select a valid personality type.";
      isValid = false;
    } else {
      newFormState.myPreferenceEducation.error = "";
    }


    if (formState.myPreferenceHobbies.title.length === 0 || !dropdownArrayLengthRegex.test(formState.myPreferenceHobbies.title.join(','))) {
      newFormState.myPreferenceHobbies.error = "Please select at least three hobbies genre.";
      isValid = false;
    } else {
      newFormState.myPreferenceHobbies.error = "";
    }


    if (formState.myPreferenceMoviesGenre.title.length === 0 || !dropdownArrayLengthRegex.test(formState.myPreferenceMoviesGenre.title.join(','))) {
      newFormState.myPreferenceMoviesGenre.error = "Please select at least three movies genre.";
      isValid = false;
    } else {
      newFormState.myPreferenceMoviesGenre.error = "";
    }



    if (formState.myPreferenceMusicGenre.title.length === 0 || !dropdownArrayLengthRegex.test(formState.myPreferenceMusicGenre.title.join(','))) {
      newFormState.myPreferenceMusicGenre.error = "Please select at least three movies genre.";
      isValid = false;
    } else {
      newFormState.myPreferenceMusicGenre.error = "";
    }



    if (formState.myPreferenceBooksGenre.title.length === 0 || !dropdownArrayLengthRegex.test(formState.myPreferenceBooksGenre.title.join(','))) {
      newFormState.myPreferenceBooksGenre.error = "Please select at least three book genre.";
      isValid = false;
    } else {
      newFormState.myPreferenceBooksGenre.error = "";
    }

    if (formState.myPreferenceGameGenre.title.length === 0 || !dropdownArrayLengthRegex.test(formState.myPreferenceGameGenre.title.join(','))) {
      newFormState.myPreferenceGameGenre.error = "Please select at least three game genre.";
      isValid = false;
    } else {
      newFormState.myPreferenceGameGenre.error = "";
    }





    dispatch(loaderRequest(false));
    setFormState(newFormState);
    return isValid;
  };
  let questionReplaceWithId = async () => {
    try {
      let fetchData = [];
      await dispatch(fetchStaticRequest('questions', (fetchedQuestionIds) => {
        fetchData = fetchedQuestionIds;
      }));
      const questionIds = fetchData.length ? fetchData : [
        { "_id": "667bdc48bfd9cf6b7f2f8b26", "title": "Describe yourself..." },
        { "_id": "667bdc48bfd9cf6b7f2f8b2a", "title": "What are you looking for?" },
        { "_id": "667bdc48bfd9cf6b7f2f8b28", "title": "What are your dislikes?" },
        { "_id": "667bdc48bfd9cf6b7f2f8b27", "title": "What are your likes?" },
        { "_id": "667bdc48bfd9cf6b7f2f8b2b", "title": "What is a fun fact about you?" },
        { "_id": "667bdc48bfd9cf6b7f2f8b29", "title": "What is your ideal date?" }
      ];

      const qna = [
        { answer: formState.likes.title, question: "What are your likes?" },
        { answer: formState.dislikes.title, question: "What are your dislikes?" },
        { answer: formState.aboutYou.title, question: "What is a fun fact about you?" },
        { answer: formState.idealDate.title, question: "What is your ideal date?" },
        { answer: formState.partner.title, question: "What are you looking for?" }
      ];

      const updatedQna = qna.map(item => {
        const matchedQuestion = questionIds.find(q => q.title === item.question);
        return {
          ...item,
          question: matchedQuestion ? matchedQuestion._id : item.question
        };
      });
      return updatedQna;

    } catch (error) {
      console.log("error", error);
    }
  };
  const createUserBody = async (formState) => {
    const {
      fullName,
      nationality,
      ethnicity,
      personalityType,
      religion,
      studyData,
      role,
      university,
      work,
      booksGenre,
      hobbies,
      moviesGenre,
      musicGenre,
      gamesGenre,
      myPreferenceFullName,
      myPreferenceEducation,
      myPreferenceNationality,
      myPreferenceEthnicity,
      myPreferenceReligion,
      myPreferencePersonalityType,
      myPreferenceBooksGenre,
      myPreferenceHobbies,
      myPreferenceMoviesGenre,
      myPreferenceMusicGenre,
      myPreferenceGameGenre,
      visibility,
      yourself,
    } = formState;

    const mapToIds = (array) => array?.title?.map((item) => item._id) || [];
    let qna = await questionReplaceWithId();
    return {
      birthday: "2000-04-25",
      gender: fullName?.leftData != 'Mr.' ? 'male' : 'female',
      interest: {
        bookGenre: mapToIds(booksGenre),
        gameGenre: mapToIds(gamesGenre),
        hobbies: mapToIds(hobbies),
        moviesGenre: mapToIds(moviesGenre),
        musicGenre: mapToIds(musicGenre)
      },
      name: fullName?.title || "Rasbhari",
      nationality: nationality?.id,
      ethnicity: ethnicity?.id,
      personalityType: personalityType?.id,
      qna,
      prefrences: {
        gender: myPreferenceFullName?.leftData != 'Mr.' ? 'male' : 'female',
        ageRange: { minAge: 18, maxAge: 40 },
        areaRange: "country",
        educationLevel: myPreferenceEducation?.title?.toLowerCase() || "bachelors",
        bookGenre: mapToIds(myPreferenceBooksGenre),
        gameGenre: mapToIds(myPreferenceGameGenre),
        hobbies: mapToIds(myPreferenceHobbies),
        moviesGenre: mapToIds(myPreferenceMoviesGenre),
        musicGenre: mapToIds(myPreferenceMusicGenre),
        nationality:myPreferenceNationality?.id == '101010101010101' ? [] : [myPreferenceNationality?.id],
        ethnicity: myPreferenceEthnicity?.id == '101010101010101' ? [] : [myPreferenceEthnicity?.id],
        religionType: myPreferenceReligion?.id == '101010101010101' ? [] : [myPreferenceReligion?.id]
      },
      religionType: religion?.id,
      shortBio: {
        areaOfStudy: studyData?.title,
        describeYourSelf: yourself?.title ?? '',
        designation: role?.title,
        educationLevel: university?.leftData?.toLowerCase() || "bachelors",
        study: university?.title,
        workIn: work?.title
      },
      isVisible: {
        age: visibility,
        nationality: nationality?.visibility,
        religionType: religion?.visibility,
        personalityType: personalityType?.visibility,
        shortBio: {
          study: studyData?.visibility,
          workIn: work?.visibility,
          designation: role?.visibility,
          areaOfStudy: studyData?.visibility,
          describeYourSelf: false
        }
      }
    };
  };


  // Usage


  const savePerference = async () => {
    if (aboutVisibility == 0) {
      if (validateFields()) {
        setAboutVisibility(1)
      }
    } else {
      dispatch(loaderRequest(true));
      if (validateMyPreferenceFields()) {
        let checkImageLength = images.filter(item => item.imageData != null)
        if (checkImageLength.length != 0) {
          await dispatch(uploadImageRequest(images, (response) => {
          }))
        }
        const userBody = await createUserBody(formState);
        await dispatch(userUpdateRequest(userBody, (response) => {
          dispatch(loaderRequest(false));
          navigation.navigate(screenName.screenName.detail_screen);
        }));
      }
    }
  }

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setFormState(
        {
          fullName: {
            leftData: 'G',
            title: '',
            visibility: true,
          },
          nationality: {
            id: '',
            title: '',
            visibility: true,
            key: ''
          },
          ethnicity: {
            id: '',
            title: '',
            visibility: true,
            key: ''

          },
          religion: {
            id: '',
            title: '',
            visibility: true,
            key: ''

          },
          personalityType: {
            id: '',
            title: '',
            visibility: true,
            key: ''
          },
          studyData: {
            title: '',
            visibility: true,
          },
          university: {
            leftData: 'Ed.',
            title: '',
            visibility: true,
          },
          work: {
            title: '',
            visibility: true,
          },
          role: {
            title: '',
            visibility: true,
          },
          yourself: {
            title: '',
          },
          likes: {
            title: '',
          },
          dislikes: {
            title: '',
          },
          /////
          hobbies: {
            title: [],
          },
          moviesGenre: {
            title: [],
          },
          musicGenre: {
            title: [],
          },
          booksGenre: {
            title: [],
          },
          /////
          idealDate: {
            title: '',
          },
          partner: {
            title: '',
          },
          aboutYou: {
            title: '',
          },
          // prefrence

          myPreferenceFullName: {
            leftData: 'G',
            title: '',
            visibility: true,
          },

          myPreferenceNationality: {
            id: '',
            title: '',
            visibility: true,
            key: ''
          },
          myPreferenceEthnicity: {
            id: '',
            title: '',
            visibility: true,
            key: ''
          },
          myPreferenceReligion: {
            id: '',
            title: '',
            visibility: true,
            key: ''

          },
          myPreferencePersonalityType: {
            id: '',
            title: '',
            visibility: true,
            key: ''
          },
          //
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
          // 

          myPreferenceEducation: {
            id: '',
            title: '',
            visibility: true,
            key: ''
          },
          /////
          myPreferenceHobbies: {
            title: [],
          },
          myPreferenceMoviesGenre: {
            title: [],
          },
          myPreferenceMusicGenre: {
            title: [],
          },
          myPreferenceBooksGenre: {
            title: [],
          },
          myPreferenceGameGenre: {
            title: [],
          },
          /////
          visibility: false,
          loadData: null,
        }
      )
      setRefreshing(false);
    }, 1000);
  }


  return (
    <View style={styles.mainContainer}>
            <FocusAwareStatusBar isTopSpace={false} isLightBar={true} barColor={'#00000000'} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >

        <View style={styles.subContainer}>
          <Text style={styles.titleFontStyle}>{aboutVisibility == 0 ? 'Who are you?' : 'What Do You Like?'}</Text>
          <FlatList data={aboutData} horizontal renderItem={renderAbout} contentContainerStyle={styles.contentContainerStyle} />

          {
            aboutVisibility == 0 ?
              <>
                <View style={styles.subContainer}>
                  <View style={styles.sliderSectionContainer}>
                    <ImageAdderSlider imageData={imageStaticData} setImages={setImages} images={images} />
                    {
                      imageError &&
                      <View style={styles.flexRowContainer}>
                        <ErrorSvg height={metrics.changeByMobileDPI(17)} width={metrics.changeByMobileDPI(17)} />
                        <Text style={styles.errorStyle}>{'Please select at least one image'}</Text>
                      </View>
                    }
                  </View>
                  <Text style={styles.topicFontStyle}>Let’s Introduce You!</Text>
                  <CustomTextInput
                    dropDownVisiiblity={false}
                    // extraComponentPlaceHolder={'G'}
                    rightPlaceHolder={'Display'}
                    placeHolder={'What is your full name?'}
                    editable={true}
                    // rightDropDownVisiiblity={true}
                    // leftDrawerData={genderData}
                    setFormState={setFormState}
                    formState={formState}
                    inputKey={'fullName'}
                    leftSvgVisibility={false}
                  />
                  <GenderSelect extraComponentPlaceHolder={formState.fullName.leftData} formState={formState} setFormState={setFormState} inputKey={'fullName'}
                    data={genderData}
                  />
                  <CustomTextInput leftPlaceHolder={'How old are you?'}
                    leftContainerExternalStyle={styles.leftContainerExternalStyle}
                    rightContainerExternalMainStyle={styles.rightContainerExternalMainStyle}
                    leftContainerExternalMainStyle={styles.leftContainerExternalMainStyle}
                    fetchApiValue={'age'}
                    setFormState={setFormState}
                    formState={formState} />
                  <CustomTextInput leftPlaceHolder={'What is your Nationality?'}
                    rightPlaceHolder={'Display'} leftContainerExternalStyle={styles.leftContainerExternalStyle}
                    rightContainerExternalMainStyle={styles.rightContainerExternalMainStyle}
                    leftContainerExternalMainStyle={styles.leftContainerExternalMainStyle}
                    fetchApiValue={'nationality'}
                    setFormState={setFormState}
                    formState={formState} />
                  <CustomTextInput leftPlaceHolder={'What is your Ethnicity?'} rightPlaceHolder={'Display'} leftContainerExternalStyle={styles.leftContainerExternalStyle} rightContainerExternalMainStyle={styles.rightContainerExternalMainStyle} leftContainerExternalMainStyle={styles.leftContainerExternalMainStyle}
                    fetchApiValue={'ethnicity'}
                    setFormState={setFormState}
                    formState={formState} />
                  <CustomTextInput leftPlaceHolder={'What is your Religion?'} rightPlaceHolder={'Display'} leftContainerExternalStyle={styles.leftContainerExternalStyle} rightContainerExternalMainStyle={styles.rightContainerExternalMainStyle} leftContainerExternalMainStyle={styles.leftContainerExternalMainStyle}
                    fetchApiValue={'religion'}
                    setFormState={setFormState}
                    formState={formState} />

                  <CustomTextInput
                    extraComnponentOnPress={navigateTest}
                    extraContainerExternalMainStyle={styles.extraContainerExternalMainStyle} leftPlaceHolder={'What is your Personality Type?'} rightPlaceHolder={'Display'} leftContainerExternalStyle={styles.leftContainerExternalStyle} rightContainerExternalMainStyle={styles.rightContainerExternalMainStyle} leftContainerExternalMainStyle={styles.leftContainerExternalMainStyle} svgSwtich={true}
                    formState={formState}
                    setFormState={setFormState}
                    fetchApiValue={'personalityType'}
                  />
                  <CustomTextInput
                    inputKey={'yourself'}
                    dropDownVisiiblity={false} rightPlaceHolder={''} placeHolder={'A short description about you...'}
                    discription={100} multiline={true}
                    setFormState={setFormState}
                    formState={formState}
                  />
                  {/* <Text style={styles.topicFontStyle}>ABOUT ME</Text>
                  <CustomTextInput
                    dropDownVisiiblity={false}
                    rightPlaceHolder={'Display'}
                    inputKey={'studyData'}
                    placeHolder={'What is your area of study? e.g. Computer Science'}
                    setFormState={setFormState}
                    formState={formState}
                  />
                  <CustomTextInput
                    extraComponentPlaceHolder={'Ed.'} extraContainerExternalMainStyle={styles.extraContainerExternalMainStyle}
                    placeHolder={'Your school or university?'} rightPlaceHolder={'Display'} leftContainerExternalStyle={styles.leftContainerExternalStyle}
                    rightContainerExternalMainStyle={styles.rightContainerExternalMainStyle1}
                    leftContainerExternalMainStyle={styles.leftContainerExternalMainStyle}
                    inputKey={'university'}
                    leftDrawerData={educationData}
                    setFormState={setFormState}
                    formState={formState}
                  /> */}
                  {/*  */}
                  {/* <CustomTextInput dropDownVisiiblity={false}
                    inputKey={'work'}
                    rightPlaceHolder={'Display'} placeHolder={'Where do you work? (e.g. Amazon or Student)'}
                    setFormState={setFormState}
                    formState={formState}
                  />
                  <CustomTextInput dropDownVisiiblity={false} rightPlaceHolder={'Display'}
                    inputKey={'role'}
                    placeHolder={'What is your role? (e.g. Graphic Designer)'}
                    setFormState={setFormState}
                    formState={formState}
                  /> */}


                  {/* -----desc----- */}

                  {/* -----desc----- */}


                  {/* ----hobbies----- */}
                  <CustomTextInput
                    inputKey={'hobbies'}
                    setFormState={setFormState}
                    formState={formState}
                    rightPlaceHolder={'d'}
                    headerText={'Your Hobbies'}
                    description={'Select minimum 3 hobbies'}
                    apiKey={'hobbies'}
                    dropDownVisiiblity={false} placeHolder={'What are your hobbies?'}
                    selectedSvg={<SelectedSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />}
                    unSelectedSvg={<UnSelectedSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />}
                  />
                  <CustomTextInput
                    inputKey={'moviesGenre'}
                    setFormState={setFormState}
                    formState={formState}
                    dropDownVisiiblity={false}
                    rightPlaceHolder={'dcd'}
                    apiKey={'moviesGenre'}
                    headerText={'Favorite Movie Genres'}
                    description={'Select minimum 3 movie genres'}
                    placeHolder={'Your favorite movie genres?'}
                    selectedSvg={<SelectedSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />}
                    unSelectedSvg={<UnSelectedSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />} />

                  <CustomTextInput
                    inputKey={'musicGenre'}
                    setFormState={setFormState}
                    formState={formState}
                    headerText={'Favorite Music Genres'}
                    description={'Select minimum 3 music genres'}
                    rightPlaceHolder={'ddg'}
                    apiKey={'musicGenre'}
                    dropDownVisiiblity={false} placeHolder={'Your favorite music genres?'}
                    selectedSvg={<SelectedSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />}
                    unSelectedSvg={<UnSelectedSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />} />

                  <CustomTextInput
                    inputKey={'booksGenre'}
                    setFormState={setFormState}
                    formState={formState}
                    headerText={'Favorite Book Genres'}
                    description={'Select minimum 3 book genre'}
                    apiKey={'booksGenre'}
                    rightPlaceHolder={'sdfðd'}
                    dropDownVisiiblity={false} placeHolder={'Your favorite book genres?'}
                    selectedSvg={<SelectedSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />}
                    unSelectedSvg={<UnSelectedSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />} />

                  <CustomTextInput
                    inputKey={'gamesGenre'}
                    setFormState={setFormState}
                    formState={formState}
                    headerText={'Favorite Game Genres'}
                    description={'Select minimum 3 game genre'}
                    apiKey={'gamesGenre'}
                    rightPlaceHolder={'sdfðd'}
                    dropDownVisiiblity={false} placeHolder={'Your favorite game genres?'}
                    selectedSvg={<SelectedSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />}
                    unSelectedSvg={<UnSelectedSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />} />

                  <CustomTextInput
                    inputKey={'gamesGenre'}
                    setFormState={setFormState}
                    formState={formState}
                    headerText={''}
                    description={''}
                    apiKey={screenName.screenName.hide_myInformation_screen}
                    rightPlaceHolder={'sdfðd'}
                    dropDownVisiiblity={false} placeHolder={'Hide Your Information'}
                    selectedSvg={<EyeSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)} />}
                    unSelectedSvg={<EyeSvg height={metrics.changeByMobileDPI(20)} width={metrics.changeByMobileDPI(20)} />} />

                  <View style={styles.educationLevelContainer}>
                    <Text style={styles.educationLevelFontStyle}>What is your education level?</Text>
                    <EducationLevel
                      inputKey={'university'}
                      dataArea={educationData} formState={formState} setFormState={setFormState} aboutVisibility={aboutVisibility} state={'area'} setState={() => { }}
                    />
                  </View>

                  {/* ----- */}
                  <Text style={styles.topicFontStyle}>Optional Information....</Text>
                  <CustomTextInput
                    dropDownVisiiblity={false}
                    rightPlaceHolder={'Display'}
                    inputKey={'studyData1'}
                    placeHolder={'What is your area of study? e.g. Bio'}
                    setFormState={setFormState}
                    formState={formState}
                    leftSvgVisibility={false}
                  />
                  <CustomTextInput
                    // extraComponentPlaceHolder={'Ed.'}
                    leftSvgVisibility={false}
                    extraContainerExternalMainStyle={styles.extraContainerExternalMainStyle}
                    placeHolder={'Your school or university?'} rightPlaceHolder={'Display'} leftContainerExternalStyle={styles.leftContainerExternalStyle}
                    rightContainerExternalMainStyle={styles.rightContainerExternalMainStyle1}
                    leftContainerExternalMainStyle={styles.leftContainerExternalMainStyle}
                    inputKey={'study'}
                    leftDrawerData={educationData}
                    setFormState={setFormState}
                    formState={formState}
                  />
                  <CustomTextInput
                    leftSvgVisibility={false}
                    dropDownVisiiblity={false}
                    inputKey={'work'}
                    rightPlaceHolder={'Display'} placeHolder={'Where do you work? e.g. Halfie'}
                    setFormState={setFormState}
                    formState={formState}
                  />
                  <CustomTextInput
                    leftSvgVisibility={false}
                    dropDownVisiiblity={false} rightPlaceHolder={'Display'}
                    inputKey={'role'}
                    placeHolder={'What is your role? e.g. Designer'}
                    setFormState={setFormState}
                    formState={formState}
                  />


                  <CustomTextInput
                    leftSvgVisibility={false}
                    dropDownVisiiblity={false} rightPlaceHolder={''}
                    placeHolder={'What are your likes?'} multiline={true}
                    inputKey={'likes'}
                    setFormState={setFormState}
                    formState={formState}
                  />
                  <CustomTextInput
                    leftSvgVisibility={false}
                    dropDownVisiiblity={false}
                    rightPlaceHolder={''} placeHolder={'What are your dislikes?'}
                    inputKey={'dislikes'}
                    setFormState={setFormState}
                    formState={formState}
                    multiline={true} />

                  <CustomTextInput
                    leftSvgVisibility={false}
                    dropDownVisiiblity={false} rightPlaceHolder={''} placeHolder={'What is your ideal date?'} multiline={true}
                    inputKey={'idealDate1'}
                    setFormState={setFormState}
                    formState={formState}
                  />
                  <CustomTextInput
                    leftSvgVisibility={false}
                    dropDownVisiiblity={false} rightPlaceHolder={''} placeHolder={'What are you looking for in a partner?'} multiline={true}
                    inputKey={'partner'}
                    setFormState={setFormState}
                    formState={formState}
                  />
                  <CustomTextInput
                    leftSvgVisibility={false}
                    dropDownVisiiblity={false} rightPlaceHolder={''} placeHolder={'What is a fun fact about you?'} multiline={true}
                    inputKey={'aboutYou'}
                    setFormState={setFormState}
                    formState={formState} />
                </View>
              </>
              :
              <>
                <View style={styles.subContainer}>
                  <Text style={styles.topicFontStyle}>My Preferences</Text>
                  <GenderSelect extraComponentPlaceHolder={'G'} formState={formState} setFormState={setFormState} inputKey={'myPreferenceFullName'}
                    suggestionTitle={'Do you prefer a gender'}
                    data={genderData}
                    flexManage={0.9}

                  />

                  <View style={styles.educationLevelContainer}>
                    <Text style={{ ...styles.educationLevelFontStyle, marginBottom: metrics.changeByMobileDPI(20) }}>Choose Your Preferred Age Range:</Text>
                    <View style={styles.marginBottomContainer}>
                      <PriceRange
                        min={18}
                        max={100}
                        minAndMaxVisibility={true}
                        onValueChange={() => { }}
                      />
                    </View>
                  </View>
                  {/* <AgeSlider/> */}
                  <View style={styles.educationLevelContainer}>
                    <Text style={{ ...styles.educationLevelFontStyle, marginBottom: metrics.changeByMobileDPI(20) }}>We will show profiles that are within your:</Text>
                    <Location aboutVisibility={aboutVisibility} formState={formState} inputKey={'myPreferenceAreaRange'} state={formState['myPreferenceAreaRange'].title} setState={() => { }} />
                  </View>
                  {/* <CustomTextInput
                    dropDownVisiiblity={false}
                    // extraComponentPlaceHolder={'G'}
                    // placeHolder={'What’s Your Preferred Gender?'}
                    leftDrawerData={genderData}
                    setFormState={setFormState}
                    formState={formState}
                  // inputKey={'myPreferenceFullName'}
                  /> */}
                  <CustomTextInput leftPlaceHolder={'Which Nationality do you prefer?'}
                    leftContainerExternalStyle={styles.leftContainerExternalStyle}
                    rightContainerExternalMainStyle={styles.rightContainerExternalMainStyle}
                    leftContainerExternalMainStyle={styles.leftContainerExternalMainStyle}
                    infetchChangeSet={'myPreferenceNationality'}
                    fetchApiValue={'nationality'}
                    setFormState={setFormState}
                    formState={formState}
                    myPreference={'Any Nationality'} />
                  <CustomTextInput leftPlaceHolder={'Which Ethnicity do you prefer?'} leftContainerExternalStyle={styles.leftContainerExternalStyle} rightContainerExternalMainStyle={styles.rightContainerExternalMainStyle} leftContainerExternalMainStyle={styles.leftContainerExternalMainStyle}
                    infetchChangeSet={'myPreferenceEthnicity'}
                    fetchApiValue={'ethnicity'}
                    setFormState={setFormState}
                    formState={formState}
                    myPreference={'Any Ethnicity'}
                  />
                  <CustomTextInput leftPlaceHolder={'Which Religion do you prefer?'} leftContainerExternalStyle={styles.leftContainerExternalStyle} rightContainerExternalMainStyle={styles.rightContainerExternalMainStyle} leftContainerExternalMainStyle={styles.leftContainerExternalMainStyle}
                    fetchApiValue={'religion'}
                    infetchChangeSet={'myPreferenceReligion'}
                    setFormState={setFormState}
                    formState={formState}
                    myPreference={'Any Religion'}
                  />
                  <CustomTextInput extraContainerExternalMainStyle={styles.extraContainerExternalMainStyle} leftPlaceHolder={'Which Personality do you prefer?'}
                    leftContainerExternalStyle={styles.leftContainerExternalStyle} rightContainerExternalMainStyle={styles.rightContainerExternalMainStyle} leftContainerExternalMainStyle={styles.leftContainerExternalMainStyle} svgSwtich={true}
                    setFormState={setFormState}
                    infetchChangeSet={'myPreferencePersonalityType'}
                    fetchApiValue={'personalityType'}
                    formState={formState}
                    myPreference={'Any Personality Type'}
                  />

                  <View style={styles.educationLevelContainer}>
                    <Text style={styles.educationLevelFontStyle}>Your Preferred education level?</Text>
                    <EducationLevel
                      inputKey={'myPreferenceEducation'}
                      dataArea={educationData} formState={formState} setFormState={setFormState} aboutVisibility={aboutVisibility} state={'area'} setState={() => { }} inputKey={'myPreferenceEducation'} />
                  </View>

                  {/* <CustomTextInput extraContainerExternalMainStyle={styles.extraContainerExternalMainStyle} leftPlaceHolder={'You Preferred Minimum Education Level?'}
                    leftContainerExternalStyle={styles.leftContainerExternalStyle}
                    leftContainerExternalMainStyle={styles.leftContainerExternalMainStyle}
                    svgSwtich={true}
                    setFormState={setFormState}
                    infetchChangeSet={'myPreferenceEducation'}
                    fetchApiValue={'eductaion'}
                    middleDrawerData={educationData1}
                    formState={formState}
                    myPreference={'Any Education Level'}
                  /> */}

                  <CustomTextInput
                    inputKey={'myPreferenceHobbies'}
                    setFormState={setFormState}
                    formState={formState}
                    rightPlaceHolder={'d'}
                    headerText={'Your Hobbies'}
                    description={'Select minimum 3 hobbies'}
                    apiKey={'hobbies'}
                    dropDownVisiiblity={false} placeHolder={'Your partner’s hobbies?'}
                    selectedSvg={<SelectedSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />}
                    unSelectedSvg={<UnSelectedSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />}
                  />
                  <CustomTextInput
                    inputKey={'myPreferenceMoviesGenre'}
                    setFormState={setFormState}
                    formState={formState}
                    dropDownVisiiblity={false}
                    rightPlaceHolder={'dcd'}
                    apiKey={'moviesGenre'}
                    description={'Select minimum 3 movie genres'}
                    headerText={'Favorite Movie Genres'}
                    placeHolder={'Your partner’s movie genres?'}
                    selectedSvg={<SelectedSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />}
                    unSelectedSvg={<UnSelectedSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />} />

                  <CustomTextInput
                    inputKey={'myPreferenceMusicGenre'}
                    setFormState={setFormState}
                    formState={formState}
                    description={'Select minimum 3 music genres'}
                    headerText={'Favorite Music Genres'}
                    rightPlaceHolder={'ddg'}
                    apiKey={'musicGenre'}
                    dropDownVisiiblity={false} placeHolder={'Your partner’s music genres?'}
                    selectedSvg={<SelectedSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />}
                    unSelectedSvg={<UnSelectedSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />} />

                  <CustomTextInput
                    inputKey={'myPreferenceBooksGenre'}
                    setFormState={setFormState}
                    formState={formState}
                    headerText={'Favorite Book Genres'}
                    description={'Select minimum 3 book genres'}
                    apiKey={'booksGenre'}
                    rightPlaceHolder={'sdfðd'}
                    dropDownVisiiblity={false} placeHolder={'Your partner’s book genres'}
                    selectedSvg={<SelectedSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />}
                    unSelectedSvg={<UnSelectedSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />} />
                  <CustomTextInput
                    inputKey={'myPreferenceGameGenre'}
                    setFormState={setFormState}
                    formState={formState}
                    headerText={'Favorite Game Genres'}
                    description={'Select minimum 3 game genres'}
                    apiKey={'gamesGenre'}
                    rightPlaceHolder={'sdfðd'}
                    dropDownVisiiblity={false} placeHolder={'Your partner’s game genres?'}
                    selectedSvg={<SelectedSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />}
                    unSelectedSvg={<UnSelectedSvg height={metrics.changeByMobileDPI(18)} width={metrics.changeByMobileDPI(18)} />} />
                </View>
              </>
          }

        </View>
        <GridentButton
          extrenalStyle={styles.extrenalStyle1}
          onClick={savePerference}
          buttonText={aboutVisibility == 0 ? 'SAVE MY PROFILE' : 'SAVE PREFERENCES'}
        />
        <View style={styles.termAndConditionContianer}>
          <Text style={styles.guidenceFontStyle}>By proceeding to save your profile details, I agree to the<Text style={styles.guidenceFontStyleButLinkcolor}> Halfie’s Privacy Policies, Community Guidelines </Text>and <Text style={styles.guidenceFontStyleButLinkcolor}>Terms of Service</Text></Text>
        </View>
      </ScrollView>
      <FormCustomModal
        formState={formState}
        setFormState={setFormState}
      />

    </View>
  )
}
export default SubcriptionFormScreen
