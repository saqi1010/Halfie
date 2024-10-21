import axios from 'axios';
import { STAGGING_BASE_URL, END_POINT } from '@env';
import { axiosInstance, setAdditionalHeaders } from '../../utils/axiosInstance';
import * as Keychain from 'react-native-keychain';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import moment from 'moment';

let parse = JSON.parse(END_POINT)
export const login = async (credentials) => {
  try {
    let url = parse?.LOGINUSER
    const response = await axiosInstance.post(url);
    return true
  } catch (error) {
    throw new Error('Invalid credentials');
  }
};

export const onBoardingApi = async () => {
  // console.warn("======1=>>>>>",`http://20.219.19.207:3000/api/v1/${parse?.ONBORDING}`);
  try {
    const response = await axios.get(`http://20.219.19.207:3000/api/v1/${parse?.ONBORDING}`)
    // console.warn("===2======",response.data.data);
    return response.data.data;
  } catch (error) {
    throw new Error('Invalid credentials');
  }
};


const userDataStore = (data) => {
  let userSection = {
    aboutMe: {
      fullName: data?.name,
      gender: data?.gender,
      age: data?.age,
      nationality: data?.nationality,
      personalityType: data?.personalityType,
      religionType: data?.religionType,
      ethnicity: data?.ethnicity,
      qna: data?.qna,
      interest: data?.interest,
      shortBio: data?.shortBio,
      isVisible: data?.isVisible,
      birthday: data?.birthday,
      image:data?.image,
      address:data?.address,
      location:data?.location,
      profileImages:data?.profileImages
    },  
    mypreference: data?.prefrences,
    subscription: data?.subscription,
    accessToken: data?.accessToken,
    isNotificationsEnabled:data?.isNotificationsEnabled,
    isPhoneNotificationsEnabled:data?.isPhoneNotificationsEnabled,
    isProfileCompleted:data?.isProfileCompleted
  }
  return userSection
}

export const webIndexApi = async (body,CallBack) => {
  // console.warn("==body==>>",body);
  try {
    const response = await axiosInstance.post(`/${parse?.WEBINDEX}`, body ?? {});
    let { data } = response.data;
    // console.warn("=====>indexData",data);
    let userData = userDataStore(data);

    // tokenSet
    if (data?.accessToken) {
      await AsyncStorage.setItem('accessToken', data?.accessToken.toString());
    }
    // 
    setAdditionalHeaders(data?.accessToken);
    // console.warn("========accesstoken=======>>>",axiosInstance.defaults.headers.common['accesstoken']);
    const userDataStringfy = await JSON.stringify(userData);
    await Keychain.setGenericPassword(userDataStringfy, 'userLoginData', { service: 'userLoginData' });
    return data;
  } catch (error) {
    console.log("webIndexApi", error.message);
    throw new Error('Invalid credentials');
  }
};

export const getPlanApi = async (planType, CallBack) => {
      console.warn("========accesstoken=======>>>",axiosInstance.defaults.headers.common['accesstoken']);
  let URL = typeof planType != 'undefined' ? `/${parse?.GET_PLAN}` : `/${parse?.GET_PLAN}`
  console.warn("===1======",URL);
  try {
    const response = await axiosInstance.get(URL)
    let { data } = response.data
    console.warn("getPlanApiRes====>>", data);
    if (CallBack) {
      CallBack(data);
    }
    return data;
  } catch (error) {
    throw new Error('Invalid eventDetaulApi');
  }
};


export const loginApi = async (body, CallBack) => {
  try {
    const response = await axiosInstance.post(`/${parse?.LOGINUSER}`, body)
    let { data } = response.data
    if (response?.data?.success == false) {
      CallBack({ message: response?.data?.message, success: response?.data?.success })
      return { message: response?.data?.message, success: response?.data?.success }
    } else {
      if (data) {
        setAdditionalHeaders(data.accessToken)
        webIndexApi()
        CallBack(data)
        return data;
      }
    }
  } catch (error) {
    throw new Error('Invalid credentials');
  }
};

export const signUpApi = async (body, CallBack) => {
  try {
    let convertIntoStringfy = JSON.parse(body)
    const response = await axiosInstance.post(`/${parse?.CREATEUSER}`, convertIntoStringfy)
    let { data } = response.data
    if (response?.data?.success == false) {
      CallBack({ message: 'user is already exist', success: response?.data?.success })
      return { message: 'user is already exist', success: response?.data?.success }
    } else {
      if (data) {
        setAdditionalHeaders(data.accessToken)
        webIndexApi()
        CallBack(data)
        return data;
      }
    }

  } catch (error) {
    console.log("error", error.message)
    throw new Error('Invalid credentials');
  }
};

export const upcomingEventApi = async () => {
  try {
      // console.warn("=====1=====", axiosInstance.defaults.headers.common['accesstoken']);

    const response = await axiosInstance.get(`/events/get-event?registrationStatus=upcomming-booking`)
    // console.warn("=========>>>",response.data.data);
    return response.data.data;
  } catch (error) {
    throw new Error('Invalid credentials');
  }
};

export const ourServicesApi = async () => {
  try {
    const response = await axiosInstance.get(`/${parse?.OURSERVICES}`)
    return response.data.data;
  } catch (error) {
    throw new Error('Invalid credentials');
  }
};



export const wishlistApi = async () => {
  try {
    const response = await axiosInstance.get(`/${parse?.WISHLIST}`)
    return response.data.data;
  } catch (error) {
    throw new Error('Invalid wishlistApi');
  }
};


export const allEventApi = async (data,callback) => {
  console.warn("===allEventApi=====",data);
  let endPointUrl = null
  let t = ``
  if (data?.eventBool) {
    const queryParams = [];
    let convertIntoMoment = moment(data?.eventDate).format('YYYY-MM-DD')
    if (data?.country != 'All' && typeof data?.country != 'undefined') {
      queryParams.push(`country=${data.country}`);
    }
    if (data?.min) {
      queryParams.push(`minPrice=${data.min}`);
    }
    if (data?.max) {
      queryParams.push(`maxPrice=${data.max}`);
    }
    if (data?.eventDate != 'All' && typeof data?.eventDate != 'undefined') {
      queryParams.push(`eventDate=${convertIntoMoment}` );
    }
    if (queryParams.length > 0) {
      t += `?${queryParams.join('&')}`;
      console.warn("=========t====",t);
    }
     endPointUrl = `/events/get-event${t}`
  }
  else{
     endPointUrl = `/events/get-event`
  }
  console.warn("===endPointUrl=====",endPointUrl);

  // let countryName = typeof data?.CountryName == undefined ? 'India' : data?.CountryName
  try {
    const response = await axiosInstance.get(endPointUrl)
    if (callback) {
      callback(response.data.data)
      return response.data.data;
    }
    else{
      return response.data.data;
    }

  } catch (error) {
    throw new Error('Invalid allEventApi');
  }
};

export const eventDetaulApi = async (eventId) => {

  try {
    const response = await axiosInstance.get(`/${parse?.EVENTDETAIL}?eventId=${eventId}`)
    return response.data.data;
  } catch (error) {
    throw new Error('Invalid eventDetaulApi');
  }
};




export const attendeeAPi = async (eventId) => {
  try {
    const response = await axiosInstance.get(`/${parse?.ATTANDEES}?eventId=${eventId}`)
    return response.data.data;
  } catch (error) {
    throw new Error('Invalid eventDetaulApi');
  }
};

export const serviceListApi = async (categrayId) => {
  console.warn("a22222dasdasd====>>>",`/${parse?.SERVICE_LISITNG}?category=${categrayId}`);
  console.warn("===a22222dasdasd==1=====", axiosInstance.defaults.headers.common['accesstoken']);
  try {
    const response = await axiosInstance.get(`/${parse?.SERVICE_LISITNG}?category=${categrayId}`)
    console.warn("response====>>>",response.data.data);
    return response.data.data;
  } catch (error) {
    throw new Error('Invalid serviceListApi');
  }
};


export const serviceDetailApi = async (serviceId) => {

  try {
    const response = await axiosInstance.get(`/${parse?.SERVICE_DETAIL}?supplierId=${serviceId}`)
    return response.data.data;
  } catch (error) {
    throw new Error('Invalid serviceDetailApi');
  }

};

export const paymentApi = async (params) => {
  let dynamicLink = `/${parse?.PAYMENT}?${params.key}=${params?.id}&paymentType=${params.paymentType}`
  // console.warn("paymentApi=Url=",dynamicLink);
  try {
    if (dynamicLink) {
      const response = await axiosInstance.get(dynamicLink);
      // console.warn("paymentApi==",response.data.data);
      return response.data.data;
    }
  } catch (error) {
    console.error('Error in paymentApi:', error);
    throw new Error('Invalid paymentApi');
  }
};

export const signOutApi = async () => {
  try {
    const response = await axiosInstance.post(`/${parse?.SIGNOUT}`)
    return response.data.data;
  } catch (error) {
    throw new Error('Invalid signOutApi');
  }
};

export const deleteAccountApi = async () => {
  try {
    const response = await axiosInstance.post(`/${parse?.DELETEACCOUNT}`)
    return response.data.data;
  } catch (error) {
    throw new Error('Invalid deleteAccountApi');
  }
};

export const userExistApi = async (body, CallBack) => {
  try {
    const response = await axiosInstance.post(`/${parse?.USEREXIST}`, body)
    CallBack({ message: response?.data?.message, success: response?.data?.success })
    return { message: response?.data?.message, success: response?.data?.success }
  } catch (error) {
    console.log("error", error.message)
    throw new Error('Invalid credentials');
  }
};

export const getCountryApi = async () => {
  // console.warn("=====1=====", axiosInstance.defaults.headers.common['accesstoken']);
  // console.warn("------1----1----1",`/${parse?.GET_COUNTRY}`);
  try {
    const response = await axiosInstance.get(`/${parse?.GET_COUNTRY}`)
    // console.warn("------1----1----1",response.data);
    return response.data.data;
  } catch (error) {
    throw new Error('Invalid getCountryApi');
  }
};


export const subscriptionDetailApi = async (body, CallBack) => {
  // console.warn("=====1=====", axiosInstance.defaults.headers.common['accesstoken'],`/${parse?.MATCHPROFILE}`, body);
  try {
    let convertIntoStringfy = body
    const response = await axiosInstance.post(`/${parse?.MATCHPROFILE}`, convertIntoStringfy)
    let { data } = response.data
    return data
  } catch (error) {
    console.warn("error==", error.message);
    throw new Error('Invalid getCountryApi');
  }
};

export const orderDetailApi = async (body, CallBack) => {
  try {
    const uri = body 
      ? `/${parse?.GETORDERDETAIL}?transactionId=${body}` 
      : `/${parse?.GETORDERDETAIL}`;
    console.debug("GETORDERDETAIL API Request URI:", uri);
    if (uri) {
      const response = await axiosInstance.get(uri);
      const { data } = response?.data;
      if (typeof CallBack === 'function') {
        CallBack(data);
      }
      return data;
    }
  } catch (error) {
    console.error("Error in orderDetailApi:", error.message);
    if (error.response) {
      console.error("API responded with an error:", error.response.data);
    } else {
      console.error("Request failed:", error.message);
    }
    throw new Error(`Failed to fetch order details: ${error.message}`);
  }
};

export const initateRefundApi = async (body, CallBack) => {
  try {
    let convertIntoStringfy = body
    const response = await axiosInstance.post(`/${parse?.INITIATEREFUND}`, convertIntoStringfy)
    let { data } = response.data
    console.warn("------->>",data);
    return data
  } catch (error) {
    console.warn("error==", error.message);
    throw new Error('Invalid initateRefundApi');
  }
};



export const planDetailApi = async (body, CallBack) => {
  console.warn("=====1=====planDetailApi", axiosInstance.defaults.headers.common['accesstoken'],`/${parse?.GETPLANDETAIL}`, body);
  try {
    let convertIntoStringfy = body
    const response = await axiosInstance.get(`/${parse?.GETPLANDETAIL}`, convertIntoStringfy)
    let { data } = response.data
    if (CallBack) CallBack(data);
    return data
  } catch (error) {
    console.warn("error==planDetailApi", error.message);
    throw new Error('Invalid planDetailApi');
  }
};

export const addUserReportApi = async (body, CallBack) => {
  try {
    let convertIntoStringfy = JSON.parse(body)
    const response = await axiosInstance.post(`/${parse?.ADD_USER_REORT}`, convertIntoStringfy)
    let { data } = response.data
    return data
  } catch (error) {
    console.log("error addUserReport", error.message)
    throw new Error('Invalid credentials');
  }
};
export const getUserReportApi = async () => {
  try {
    const response = await axiosInstance.get(`/${parse?.GET_USER_REORT}`)
    return response.data.data;
  } catch (error) {
    console.log("error getUserReport", error.message)
    throw new Error('Invalid credentials');
  }
};
// My Perfence APis
export const fetchStaticApi = async (value, CallBack) => {
  try {
    const response = await axiosInstance.get(`/${parse?.FETCH_STATICS}?type=${value}`)
    CallBack(response.data.data)
    return response.data.data;
  } catch (error) {
    console.log("error fetchStaticApi", error.message)
    throw new Error('Invalid credentials');
  }
};

export const updateUserApi = async (body, CallBack) => {
  let convertIntoStringfy = body
  try {
    const response = await axiosInstance.post(`/${parse?.UPDATE_USER}`, convertIntoStringfy)
    let { data } = response.data
    return data
  } catch (error) {
    console.log("error updateUserApi", error.message)
    throw new Error('Invalid credentials');
  }
};



export const uploadImageApi = async (body, CallBack) => {
  try {
    const formData = new FormData();
    if (!body) throw new Error('Body is undefined or empty');
    const parsedBody = typeof body == 'string' ? JSON.parse(body) : body;
    let removeNullCode = parsedBody?.filter(imageObject => imageObject?.imageData)
    removeNullCode.map((imageObject, index) => {
      const { imageData } = imageObject;
      formData.append('media', {
        uri: imageData.path,
        type: imageData.mime || 'image/jpeg',
        name: `image${index + 1}.jpg`,
      });
    })
    const requestOptions = {
      method: 'POST',
      headers: {
        'accessToken': axiosInstance.defaults.headers.common['accesstoken'],
      },
      body: formData,
      redirect: 'follow',
    };
    const response = await fetch("http://20.219.19.207:3000/api/v1/user/update-profile-photo", requestOptions);
    const result = await response.json();
    if (CallBack) CallBack(result);
    return result;

  } catch (error) {
    console.error("Error in uploadImageApi:", error.message);
    throw new Error('Image upload failed');
  }
}


// Id verification 
const getMimeTypeFromExtension = (filePath) => {
  const extension = filePath.split('.').pop().toLowerCase();
  const mimeTypes = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    webp: 'image/webp',
    mp4: 'video/mp4',
    mov: 'video/quicktime',
    avi: 'video/x-msvideo',
    wmv: 'video/x-ms-wmv',
    flv: 'video/x-flv',
    mkv: 'video/x-matroska',
    mp3: 'audio/mpeg',
    wav: 'audio/wav',
    ogg: 'audio/ogg',
    mp4a: 'audio/mp4',
  };
  return mimeTypes[extension] || 'application/octet-stream'; 
};
export const uploadIdVerificationImageApi = async (filePath, CallBack) => {
  if (!filePath?.imageThumbnail) {
    console.error('File path is undefined or empty');
    throw new Error('File path is undefined or empty');
  }
  const formData = new FormData();
  const mimeType = getMimeTypeFromExtension(filePath?.imageThumbnail);
  formData.append('media', {
    uri: filePath?.imageThumbnail,
    type: mimeType,
    name: `image_${Date.now()}.${mimeType.split('/')[1]}`,
  });
  try {
    const response = await fetch("http://20.219.19.207:3000/api/v1/common/upload-id-images", {
      method: 'POST',
      headers: {
        'accessToken': filePath?.accessToken,
      },
      body: formData,
    });

    console.warn("======inside=====",filePath?.accessToken);

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error(`Upload failed: ${errorMessage}`);
      throw new Error(`Upload failed: ${errorMessage}`);
    }
    const result = await response.json();
    if (CallBack) CallBack(result);
    return result;

  } catch (error) {
    console.error("Error in uploadIdVerificationImageApi:", error.message);
    throw new Error('Image upload failed');
  }
};


export const uploadIdVerificationVideoApi = async (filePath, CallBack) => {
  if (!filePath?.thumbnailData) {
    console.error('File path is undefined or empty');
    throw new Error('File path is undefined or empty');
  }
  const formData = new FormData();
  const mimeType = getMimeTypeFromExtension(filePath?.thumbnailData);
  formData.append('video', {
    uri: filePath?.thumbnailData,
    type: mimeType,
    name: `video_${Date.now()}.${mimeType.split('/')[1]}`, 
  });
  try {
    const response = await fetch("http://20.219.19.207:3000/api/v1//common/upload-id-video", {
      method: 'POST',
      headers: {
        'accessToken': filePath?.accessToken,
      },
      body: formData,
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      console.error(`Upload failed: ${errorMessage}`);
      throw new Error(`Upload failed: ${errorMessage}`);
    }
    const result = await response.json();
    console.warn("======result======>",result);
    if (CallBack) CallBack(result);
    return result;

  } catch (error) {
    console.error("Error in uploadIdVerificationVideoApi:", error.message);
    throw new Error('Video upload failed');
  }
};


// 


export const getFriendApi = async () => {
  try {
    const response = await axiosInstance.get(`/${parse?.GET_FRIEND}`)
    return response.data.data;
  } catch (error) {
    console.log("error getFriendApi", error.message)
    throw new Error('Invalid credentials');
  }
};

export const getUserDetailApi = async () => {
  try {
    const response = await axiosInstance.get(`/${parse?.USER_DETAIL}`)
    return response.data.data;
  } catch (error) {
    console.log("error getFriendApi", error.message)
    throw new Error('Invalid credentials');
  }
};



export const paymentStatusApi = async (transactionId) => {
  try {
    const response = await axiosInstance.get(`/${parse?.PAYMENT_STATUS}?transactionId=${transactionId}`);
    // console.warn("======>",response.data);
    return response.data.data;
  } catch (error) {
    console.log('Error in paymentStatusApi:', error);
    throw new Error('Invalid paymentStatusApi');
  }
};

// export const paymentOrderDetailApi = async (transactionId) => {
//   try {
//     const response = await axiosInstance.get(`/${parse?.PAYMENT_ORDER_DETAIL}?transactionId=${transactionId}`);
//     return response.data.data;
//   } catch (error) {
//     console.error('Error in paymentOrderDetailApi:', error);
//     throw new Error('Invalid paymentOrderDetailApi');
//   }
// };


export const matchProfileApi = async (body, CallBack) => {
  try {
    let convertIntoStringfy = JSON.parse(body)
    const response = await axiosInstance.post(`/${parse?.MATCHPROFILE}`, convertIntoStringfy)
    let { data } = response.data
    // if (CallBack) CallBack(result);
    return data;
  } catch (error) {
    console.log("matchProfileApi", error.message)
    throw new Error('Invalid credentials');
  }
};

export const matchOperationApi = async (body, CallBack) => {
  try {
    let convertIntoStringfy = body
    let url = `/${parse?.MATCHOPERATION}`
    const response = await axiosInstance.post(url, convertIntoStringfy)
    console.warn("======body2===>>>", response.data);
    if (CallBack) CallBack(response.data?.success);
    return response.data?.success;
  } catch (error) {
    console.log("matchOperationApi", error.message)
    throw new Error('Invalid credentials');
  }
};
