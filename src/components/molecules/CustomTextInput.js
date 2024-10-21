import { Animated, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import metrics from '../../theme/metrics';
import colors from '../../theme/color';
import font from '../../theme/font';
import DownArrowSvg from "../../assets/svg/DownArrowSvg.svg";
import { useNavigation } from '@react-navigation/native';
import screenName from '../../theme/screenName';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStaticRequest } from '../../stores/action/fetchStaticAction';
import { loaderRequest } from '../../stores/action/loaderAction';
import ErrorSvg from '../../assets/svg/ErrorSvg.svg';
const CustomTextInput = ({
    leftPlaceHolder,
    rightPlaceHolder,
    placeHolder,
    leftSvgVisibility = true,
    leftContainerExternalStyle,
    leftContainerExternalMainStyle,
    rightContainerExternalMainStyle,
    dropDownVisiiblity = false,
    extraComponentPlaceHolder,
    extraContainerExternalMainStyle,
    discription,
    selectedSvg,
    unSelectedSvg,
    rightDropDownVisiiblity,
    marginRightContainer,
    multiline,
    headerText,
    editable,
    // 
    setValue,
    value = '',
    svgSwtich = false,
    fetchApiValue,
    leftDrawerData,
    //Modal Text
    formState = {},
    setFormState = () => { },
    inputKey,
    apiKey,
    infetchChangeSet,
    description,
    middleDrawerData,
    extraComnponentOnPress,
    myPreference

}) => {
    const { fetchStaticData } = useSelector((state) => state.fetchStatic);


    const navigation = useNavigation()
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = React.useRef(null);
    const [inputValue, setInputValue] = useState('');
    const [showDescription, setShowDescription] = useState(false);
    const dispatch = useDispatch();
    const [leftDrawerVisibility, setLeftDrawerVisibility] = useState({ boolen: false, text: extraComponentPlaceHolder });
    const toggleDrawerVisibility = ({ boolen, text }) => setLeftDrawerVisibility({ boolen: boolen, text: text });
    const [middleDrawerVisibility, setMiddleDrawerVisibility] = useState({ boolen: false, text: leftPlaceHolder });
    const toggleMiddleDrawerVisibility = ({ boolen, text }) => setMiddleDrawerVisibility({ boolen: boolen, text: text });
    const [displayVisibility, setDisplayVisibility] = useState({ boolen: false, text: rightPlaceHolder });
    const toggleDisplay = ({ boolen, text }) => setDisplayVisibility({ boolen: boolen, text: text });

    const [errors, setErrors] = useState({});

    const validateFields = () => {
        const newErrors = {};

        if (!formState.fullName?.title) {
            newErrors.fullName = "Full name is required.";
        }

        if (!formState.nationality?.title) {
            newErrors.nationality = "Nationality is required.";
        }

        if (!formState.ethnicity?.title) {
            newErrors.ethnicity = "Ethnicity is required.";
        }

        if (!formState.gender?.title) {
            newErrors.gender = "Gender is required.";
        }

        if (!formState.religion?.title) {
            newErrors.religion = "Religion is required.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const navigateToHabbit = () => {
        if (apiKey == screenName.screenName.hide_myInformation_screen) {
            navigation.navigate(screenName.screenName.hide_myInformation_screen, { apiKey: apiKey, setFormState, formState, inputKey, description })
        } else {
            navigation.navigate(screenName.screenName.hobbies_screen, { header: headerText, apiKey: apiKey, setFormState, formState, inputKey, description })

        }
    }
    let borderBottomStyle = dropDownVisiiblity && {
        borderBottomLeftRadius: metrics.changeByMobileDPI(0),
        borderBottomRightRadius: metrics.changeByMobileDPI(0),
        borderTopLeftRadius: metrics.changeByMobileDPI(10),
        borderTopRightRadius: metrics.changeByMobileDPI(10),
    };

    const inputContainerStyle = [
        styles.inputContainer,
        isFocused && styles.inputContainerFocused,
        multiline && styles.inputContainerMultiline
    ];

    // 

    const [heightAnim] = useState(new Animated.Value(0)); // Initial height
    useEffect(() => {
        const targetHeight = showDescription ? metrics.changeByMobileDPI(107) : metrics.changeByMobileDPI(50);
        Animated.timing(heightAnim, {
            toValue: targetHeight,
            duration: 300, // Adjusted duration for smoother animation
            useNativeDriver: false,
        }).start();
    }, [showDescription]);

    // 

    let onChangeTextEvent = (text) => {
        setInputValue(text)
        setFormState(prevState => {
            return {
                ...prevState,
                [inputKey]: {
                    ...prevState[inputKey],
                    title: text,
                },
            };
        });
    }
    const renderLeftDrawer = (item, index) => {
        const leftEvemt = () => {
            if (inputKey) {
                setFormState(prevState => ({
                    ...prevState,
                    [inputKey]: {
                        ...prevState[inputKey],
                        leftData: item.name
                    }
                }));
            }
            toggleDrawerVisibility({ boolen: false, text: item.name })
        }
        return (
            <TouchableOpacity style={styles.marginBottomContainer} onPress={leftEvemt}>
                <Text style={styles.displayFontStyle}>{item.name}</Text>
            </TouchableOpacity>
        )
    }



    const toggleMiddleEvent = React.useCallback(async () => {
        dispatch(loaderRequest(true));
        try {
            await dispatch(fetchStaticRequest(fetchApiValue, (response) => {
                setFormState(prevState => {
                    return {
                        ...prevState,
                        loadData: middleDrawerData || response,
                        visibility: true,
                        fetchApiValue: infetchChangeSet || fetchApiValue,
                        key: 'title',
                        removeSearch: middleDrawerData ? true : false,
                        myPreference: myPreference ?? ''
                    };
                });
                dispatch(loaderRequest(false))
            }))
        } catch (error) {
            dispatch(loaderRequest(false))
            console.error('Failed to fetch static data:', error);
        }
    }, [dispatch, setFormState, infetchChangeSet, fetchApiValue, fetchStaticRequest]);


    const middleEventClick = () => {
        if (fetchApiValue) {
            toggleMiddleEvent();
        }
    }

    const diplayDrawerSelect = (value) => {
        const visibility = value === 'Display';
        toggleDisplay({ boolen: false, text: value });
        if (inputKey || fetchApiValue) {
            setFormState(prevState => ({
                ...prevState,
                [inputKey ?? fetchApiValue]: {
                    ...prevState[inputKey ?? fetchApiValue],
                    visibility
                }
            }));
        }
    };
    let filterTitle = '';
    if (apiKey) {
        filterTitle = formState[inputKey].title.map(e => e.title).toString();
        
    } else if (extraComponentPlaceHolder === 'G') {
        let title = formState[inputKey]?.title || '';
        let matches = title.match(/\b\w/g) || [];
        let firstChar = matches[0] || '';
        let firstCharsAfterSpace = matches.slice(1).join('') || '';
        filterTitle = !formState[inputKey]?.visibility
            ? `${firstChar}${firstCharsAfterSpace}`
            : title;
    } else if (formState[inputKey]?.title) {
        console.warn("formState[inputKey]",formState[inputKey]);
        filterTitle = formState[inputKey].title.toString();
    }


    // Test


    return (
        <>

            <View style={styles.flexDirectionContainer}>
                {/* Drawer Left */}
                {
                    extraComponentPlaceHolder &&
                    // Left DropDown    
                    <View style={[{ ...styles.leftSubContainer, ...borderBottomStyle }, extraContainerExternalMainStyle]}>
                        <TouchableOpacity onPress={extraComnponentOnPress ? extraComnponentOnPress : () => setLeftDrawerVisibility({ ...leftDrawerVisibility, boolen: true })} style={styles.flexDirectionRowContainer}>
                            {
                                svgSwtich &&
                                <DownArrowSvg height={metrics.changeByMobileDPI(13)} width={metrics.changeByMobileDPI(13)} style={styles.transformContainer1} />

                            }
                            <View style={styles.widthContainer}>
                                <Text style={styles.leftFontStyle} numberOfLines={1} >{formState[inputKey]?.leftData ?? leftDrawerVisibility.text}</Text>
                            </View>
                            {
                                !svgSwtich && leftSvgVisibility &&
                                <DownArrowSvg height={metrics.changeByMobileDPI(17)} width={metrics.changeByMobileDPI(17)} style={styles.marginRightContainer} />
                            }
                        </TouchableOpacity>
                    </View>
                }
                {
                    leftDrawerData && leftDrawerVisibility.boolen &&
                    <View style={styles.leftPositionContainer}>
                        <View style={styles.leftDropDownContainer}>
                            {leftDrawerData.map(renderLeftDrawer)}
                        </View>
                    </View>
                }

                {/* ////// */}
                {
                    // DropDown Main
                    leftPlaceHolder &&
                    <View style={[styles.leftContainer, leftContainerExternalStyle]}>
                        <TouchableOpacity disabled={fetchApiValue == 'age'} onPress={middleEventClick} style={[{ ...styles.leftMainSubContainer, ...borderBottomStyle }, leftContainerExternalMainStyle, marginRightContainer]}>
                            <View style={styles.flexContainer}>
                                <Text style={styles.leftFontStyle} numberOfLines={1} >{formState[infetchChangeSet || fetchApiValue]?.title ? formState[infetchChangeSet || fetchApiValue]?.title : leftPlaceHolder}</Text>
                            </View>
                            {
                                leftSvgVisibility &&
                                <DownArrowSvg height={metrics.changeByMobileDPI(16)} width={metrics.changeByMobileDPI(18)} />
                            }
                        </TouchableOpacity>
                    </View>
                }
                {/* ////// */}


                {
                    placeHolder &&
                    <View style={styles.mainContainer}>
                        {
                            !discription ?
                            <View style={{ ...inputContainerStyle, borderBottomWidth: 0 }}>
                            <TouchableOpacity onPress={() => { selectedSvg ? navigateToHabbit() : toggleDisplay({ ...displayVisibility, boolen: true }) }} style={styles.descriptionContainer1}>
                                        {selectedSvg && filterTitle ? selectedSvg : unSelectedSvg}
                                        <View style={[styles.flexContainer, { marginLeft: metrics.changeByMobileDPI(10) }]}>
                                            <TextInput
                                                numberOfLines={1}
                                                editable={editable || selectedSvg ? false : true}
                                                onChangeText={onChangeTextEvent}
                                                placeholder={placeHolder}
                                                placeholderTextColor={colors.graySolid}
                                                style={styles.inputFontStyle}
                                                onFocus={() => setIsFocused(true)}
                                                onBlur={() => {
                                                    setIsFocused(false);
                                                    setShowDescription(true);
                                                }}
                                                multiline={multiline}
                                            >{apiKey == screenName.screenName.hide_myInformation_screen ? "" :filterTitle}</TextInput>
                                        </View>
                                        {
                                            leftSvgVisibility &&
                                            <View style={styles.transformContainer}>
                                                <DownArrowSvg height={metrics.changeByMobileDPI(16)} width={metrics.changeByMobileDPI(16)} />
                                            </View>
                                        }
                                </TouchableOpacity>
                                    </View>
                                :
                                !showDescription ?
                                    // descirption part
                                    <View style={{ ...inputContainerStyle, borderBottomWidth: 0 }}>
                                        <View style={styles.descriptionContainer1}>
                                            <View style={[styles.flexContainer]}>
                                                <TextInput
                                                    ref={inputRef}
                                                    placeholder={placeHolder}
                                                    placeholderTextColor={colors.graySolid}
                                                    maxLength={discription}
                                                    style={styles.inputFontStyle}
                                                    onFocus={() => setIsFocused(true)}
                                                    onBlur={() => {
                                                        setIsFocused(false);
                                                        setShowDescription((formState[inputKey]?.title?.toString()?.trim()).length > 0 ? true : false);
                                                    }}
                                                    onChangeText={onChangeTextEvent}
                                                    multiline={multiline}
                                                >{formState[inputKey]?.title?.toString()}</TextInput>
                                            </View>
                                        </View>
                                        <View style={styles.descriptionContainer}>
                                            <Text style={styles.descriptionFontStyle}>{inputValue.length} / {discription}</Text>
                                        </View>
                                        {/* {
                                        discription &&
                                        <View>
                                            <Text style={styles.descriptionFontStyle}>{inputValue.length}  / {discription}</Text>
                                        </View>
                                    } */}
                                    </View>
                                    :
                                    <>
                                        {/* <TouchableOpacity onPress={() => {
                                        setInputValue(inputValue)
                                        setShowDescription(false)
                                    }} style={styles.descirptionContainer}>
                                        <View style={styles.flexContainer}>
                                           <Text style={{...styles.addInputFontStyle,marginBottom:metrics.changeByMobileDPI(10)}}>{placeHolder}</Text>
                                            <Text style={styles.addInputFontStyle}>{inputValue}</Text>
                                        </View>
                                    </TouchableOpacity> */}
                                        <Animated.View style={[styles.descirptionContainer, { height: heightAnim }]}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    setShowDescription(false);
                                                }}
                                                style={styles.flexContainer}
                                            >
                                                <View style={styles.flexContainer}>
                                                    <Text style={{ ...styles.addInputFontStyle, marginBottom: metrics.changeByMobileDPI(10) }}>
                                                        {placeHolder}
                                                    </Text>
                                                    <Text style={styles.addInputFontStyle}>{inputValue}</Text>
                                                </View>
                                            </TouchableOpacity>
                                            {/* <View style={styles.descriptionContainer}>
                                            <Text style={styles.descriptionFontStyle}>
                                                {inputValue.length} / {discription}
                                            </Text>
                                        </View> */}
                                        </Animated.View>
                                        <View style={styles.descriptionContainer}>
                                            <View></View>
                                            <Text style={styles.descriptionFontStyle}>{inputValue.length} / {discription}</Text>
                                        </View>
                                    </>
                        }

                    </View>
                }
            </View>
            <View style={styles.marginContainer}>
                {formState[infetchChangeSet || fetchApiValue || inputKey]?.error && (
                    <View style={styles.flexRowContainer}>
                        <ErrorSvg height={metrics.changeByMobileDPI(17)} width={metrics.changeByMobileDPI(17)} />
                        <Text style={styles.errorStyle}>{formState[infetchChangeSet || fetchApiValue || inputKey]?.error}</Text>
                    </View>
                )}
            </View>
        </>
    );
};

export default CustomTextInput;

const styles = StyleSheet.create({
    flexDirectionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: metrics.changeByMobileDPI(20),
        // marginBottom: metrics.changeByMobileDPI(20)
    },
    leftSubContainer: {
        height: metrics.changeByMobileDPI(24),
        // borderWidth: 0.7,
        // borderColor: colors.graySolid,
        borderRadius: metrics.changeByMobileDPI(100),
        justifyContent: 'center',
        marginRight: metrics.changeByMobileDPI(10),
        elevation: 5,
        backgroundColor: colors.white
        // paddingHorizontal: metrics.changeByMobileDPI(10),

    },
    flexDirectionRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: metrics.changeByMobileDPI(7),

    },
    leftMainSubContainer: {
        height: metrics.changeByMobileDPI(40),
        borderWidth:0.5,
        borderColor:colors.gray_75,
        // borderWidth: 0.7,
        // borderColor: colors.graySolid,
        elevation: 5,
        backgroundColor: colors.white,
        borderRadius: metrics.changeByMobileDPI(100),
        paddingHorizontal: metrics.changeByMobileDPI(20),
        justifyContent: 'center',
        marginRight: metrics.changeByMobileDPI(10),
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftFontStyle: {
        fontSize: font.size.font14,
        fontFamily: font.type.quicksandMedium,
        color: colors.greySolid,
        marginRight: metrics.changeByMobileDPI(10),
    },
    rightSubContainer: {
        height: metrics.changeByMobileDPI(24),
        // borderWidth: 0.7,
        // borderColor: colors.graySolid,
        width: metrics.changeByMobileDPI(76),
        borderRadius: metrics.changeByMobileDPI(100),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: metrics.changeByMobileDPI(10),
        justifyContent: 'center'
        , backgroundColor: colors.white,
        elevation: 5
    },
    rightFontStyle: {
        fontSize: font.size.font10,
        fontFamily: font.type.quicksandMedium,
        color: colors.greySolid,
        marginRight: metrics.changeByMobileDPI(5)
    },
    inputContainer: {
        // height: metrics.changeByMobileDPI(44),
        // borderBottomWidth: 0.7,
        // borderColor: colors.graySolid,
        elevation: 0.5,
        backgroundColor: colors.white,
        borderRadius: metrics.changeByMobileDPI(100),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputContainerFocused: {
        borderBottomWidth: 1.5,
        borderColor: '#eca19f'
    },
    inputContainerMultiline: {
        maxHeight: metrics.changeByMobileDPI(107),
    },
    inputFontStyle: {
        fontSize: font.size.font15,
        fontFamily: font.type.quicksandMedium,
        color: colors.black,
        padding: 0
    },
    addInputFontStyle: {
        fontSize: font.size.font14,
        fontFamily: font.type.quicksandMedium,
        color: colors.black,
    },
    mainContainer: {
        flex: 1
    },
    leftContainer: {},
    rightContainer: {
        marginLeft: metrics.changeByMobileDPI(10)
    },
    dropDownContainer: {
        height: metrics.changeByMobileDPI(90),
        backgroundColor: colors.gray,
        borderRadius: metrics.changeByMobileDPI(10),
        overflow: 'hidden'

    },
    rightDropDownContainer: {
        height: metrics.changeByMobileDPI(90),
        backgroundColor: colors.gray,
        borderRadius: metrics.changeByMobileDPI(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftDropDownContainer: {
        height: metrics.changeByMobileDPI(90),
        maxHeight: metrics.changeByMobileDPI(120),
        width: metrics.changeByMobileDPI(80),
        backgroundColor: colors.gray,
        borderRadius: metrics.changeByMobileDPI(10),
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: metrics.changeByMobileDPI(10),
    },
    descriptionFontStyle: {
        fontSize: font.size.font12,
        fontFamily: font.type.quicksandMedium,
        color: colors.black,
    },
    positionContainer: {
        position: 'absolute',
        zIndex: 100,
        top: 0,
        bottom: 0,
        left: 0,
        right: 8,
    },
    rightPositionContainer: {
        position: 'absolute',
        zIndex: 100,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    leftPositionContainer: {
        position: 'absolute',
        zIndex: 100,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    flexContainer: {
        flex: 1,
    },
    descriptionContainer1: {
        flex: 1,
        height: metrics.changeByMobileDPI(40),
        elevation: 5,
        borderWidth:0.5,
        borderColor:colors.gray_75,
        borderRadius: metrics.changeByMobileDPI(100),
        backgroundColor: colors.white,
        paddingHorizontal: metrics.changeByMobileDPI(10),
        flexDirection: 'row',
        alignItems: 'center',
    },
    transformContainer1: {
        transform: [{
            rotate: '90deg'
        }],
        marginLeft: metrics.changeByMobileDPI(7)
    },
    rightConatiner: {
        transform: [{
            rotate: '-90deg'
        }],
    },
    displayFontStyle: {
        fontSize: font.size.font12,
        fontFamily: font.type.quicksandSemiBold,
        color: colors.graySolid,
    },
    descirptionContainer: {
        height: metrics.changeByMobileDPI(107),
        elevation: 5,
        backgroundColor: colors.white,
        borderRadius: metrics.changeByMobileDPI(25),
        paddingHorizontal: metrics.changeByMobileDPI(20),
        paddingVertical: metrics.changeByMobileDPI(10)
    },
    descriptionContainer: {
        alignSelf: 'flex-end',
        marginRight: metrics.changeByMobileDPI(10),
        marginTop: metrics.changeByMobileDPI(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    marginBottomContainer: {
        marginBottom: metrics.changeByMobileDPI(5)
    },
    widthContainer: {
        // flex:1,
        width: metrics.changeByMobileDPI(40),
        alignItems: 'center'
    },
    transformContainer: {
        transform: [{
            rotate: '-90deg'
        }],
        marginLeft: metrics.changeByMobileDPI(5)
    },
    errorStyle: {
        fontSize: font.size.font12,
        fontFamily: font.type.quicksandMedium,
        color: colors.tomatoRed,
        marginLeft: metrics.changeByMobileDPI(7),
    },
    flexRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: metrics.changeByMobileDPI(5),

    },

    marginContainer: {
        paddingHorizontal: metrics.changeByMobileDPI(20),
        marginVertical: metrics.changeByMobileDPI(10)
    }
});
