import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { fetchStaticRequest } from '../../stores/action/fetchStaticAction';
import { loaderRequest } from '../../stores/action/loaderAction';
import Hobbies from '../../components/molecules/Hobbies';
import screenName from '../../theme/screenName';

const hooks = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();
  const { fetchStaticData } = useSelector(state => state.fetchStatic);

  const [hobbiesData, setHobbiesData] = React.useState([]);
  const [hobbies, setHobbies] = React.useState([]);
  const [loading, setLoading] = React.useState(false); // Add loading state

  const fetchApi = async () => {
    dispatch(loaderRequest(true));
    try {
      await dispatch(fetchStaticRequest(route?.params?.apiKey, (response) => {
        setHobbiesData(response);
      }));
    } catch (error) {
      console.error('Failed to fetch static data:', error);
    } finally {
      dispatch(loaderRequest(false));
    }
  };

  const addTheSetedData = async () => {
      setLoading(true);
      route?.params?.setFormState(prevState => ({
        ...prevState,
        [route?.params?.inputKey]: {
          ...prevState[route?.params?.inputKey],
          title: hobbies,
        },
      }));
      setLoading(false);
      // navigation.goBack();
      navigation.navigate(screenName.screenName.subScriptionForm_screen)
  };

  const renderHobbie = ({ item, index }) => (
    <Hobbies
      setFormState={route?.params?.setFormState}
      formState={route?.params?.formState}
      inputKey={route?.params?.inputKey}
      setHobbies={setHobbies}
      hobbies={hobbies}
      item={item}
      index={index}
    />
  );

  useFocusEffect(
    React.useCallback(() => {
      setHobbies(route?.params?.formState[route?.params?.inputKey]?.title || []);
    }, [route])
  );

  React.useEffect(() => {
    fetchApi();
  }, [dispatch, route?.params?.apiKey]);

  return { hobbiesData, renderHobbie, addTheSetedData, hobbies, loading }; // Return loading state
};


export default hooks;
