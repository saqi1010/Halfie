import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import HideMyInformation from '../../components/atoms/HideMyInformation';
import screenName from '../../theme/screenName';

const useHideInformationHooks = () => {
    const dispatch = useDispatch();
    const route = useRoute();
    const navigation = useNavigation();
    const [selectedReasons, setSelectedReasons] = React.useState(route?.params?.formState);
    const DummyData = [
        { title: 'Display my full name initials', inputKey: 'fullName' },
        { title: 'Hide my gender', inputKey: 'leftData' },
        { title: 'Hide my age', inputKey: 'age' },
        { title: 'Hide my nationality', inputKey: 'nationality' },
        { title: 'Hide my ethnicity', inputKey: 'ethnicity' },
        { title: 'Hide my religion', inputKey: 'religion' },
        { title: 'Hide my personality type', inputKey: 'personalityType' },
        { title: 'Hide my education level', inputKey: 'university' },
    ];

    const hideInformationEvent = async () => {
        // Dispatch actions or any other logic if required
        // console.warn("====>> Hides Information Event triggered",selectedReasons);

        // Example: Update the formState with the selected reasons
        // route?.params?.setFormState((prevState) => ({
        //     ...prevState,
        //     ...selectedReasons,
        // }));

        // Navigate back to the subscription form screen
        navigation.navigate(screenName.screenName.subScriptionForm_screen);
    };

    const renderHide = ({ item, index }) => {
        return (
            <HideMyInformation
            item={item}
            index={index}
                selectedReasons={selectedReasons}
                setSelectedReasons={setSelectedReasons}
            />
        );
    };

    return { hideInformationEvent, renderHide, DummyData };
};

export default useHideInformationHooks;
