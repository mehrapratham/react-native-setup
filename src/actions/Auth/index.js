import axios from 'axios'
import { SIGNUP_URL, LOGIN_URL, LOGOUT_URL, EDIT_PROFILE_URL, LOST_PASSWORD, REST_PASSWORD, UPDATE_PROFILE } from '../apiConstant'
import { HAS_ERROR } from '../types'
import {AsyncStorage } from 'react-native'


/**
* sign up for new user
* @param data
* @returns {axios.Promise}
*/
export const signup = data => {
  return dispatch => {
    return axios
      .post(`${SIGNUP_URL}`, data)
      .then(res => {
        AsyncStorage.setItem('isLoggedin','true')
        return res.data
      })
      .catch(function(error) {
        dispatch({
          type: HAS_ERROR,
          data: error,
        })
        return error
      })
  }
}

/**
* login to app with username and password
* @param data
* @returns {axios.Promise}
*/
export const login = (data) => {
  return dispatch => {
    return axios
      .post(`${LOGIN_URL}`, data)
      .then(res => {
        AsyncStorage.setItem('isLoggedin','true')
        return res.data
      })
      .catch(function(error) {
        dispatch({
          type: HAS_ERROR,
          data: error,
        })
        return error
      })
  }
}

/**
* logout from app
* @param data
* @returns {axios.Promise}
*/
export const logout = () => {
  return dispatch => {
    return axios
      .post(`${LOGOUT_URL}`)
      .then(res => {
        return res.data
      })
      .catch(function(error) {
        dispatch({
          type: HAS_ERROR,
          data: error,
        })
        return error
      })
  }
}

/**
* submit email id to get code for reset password
* @param data
* @returns {axios.Promise}
*/
export const lostPassword = (data) => {
  return dispatch => {
    return axios
      .post(`${LOST_PASSWORD}`, data)
      .then(res => {
        return res.data
      })
      .catch(function(error) {
        dispatch({
          type: HAS_ERROR,
          data: error,
        })
        return error
      })
  }
}

/**
* submit code and new password to reset password
* @param data
* @returns {axios.Promise}
*/
export const resetPassword = (data) => {
  return dispatch => {
    return axios
      .post(`${REST_PASSWORD}`, data)
      .then(res => {
        return res.data
      })
      .catch(function(error) {
        dispatch({
          type: HAS_ERROR,
          data: error,
        })
        return error
      })
  }
}

/**
* submit updated profile data to update
* @param data
* @returns {axios.Promise}
*/
export const editProfile = (data) => {
  return dispatch => {
    return axios
      .post(`${UPDATE_PROFILE}`, data)
      .then(res => {
        return res.data
      })
      .catch(function(error) {
        dispatch({
          type: HAS_ERROR,
          data: error,
        })
        return error
      })
  }
}

/**
* get profile data
* @returns {axios.Promise}
*/
export const getProfileData = () => {
  return dispatch => {
    return axios
      .get(`${UPDATE_PROFILE}`)
      .then(res => {
        return res.data
      })
      .catch(function(error) {
        dispatch({
          type: HAS_ERROR,
          data: error,
        })
        return error
      })
  }
}

/**
* get json from asyncStorage
* @param key
* @returns {axios.Promise}
*/
export const getFromLocalStorage = (key) => {
   return async dispatch => {
      try {
        let data = await AsyncStorage.getItem(key);
        data = JSON.parse(data) || [];
        if (data.length != 0) {
          return data
        }
        else{
          return null
        }
    }
    catch(error){
    }
  }
}

/**
* save json to asyncStorage
* @param key
* @param data
* @returns {axios.Promise}
*/
export const saveToLocalStorage = (key, data) => {
   return dispatch => {
     AsyncStorage.setItem(key, data)
   }
}