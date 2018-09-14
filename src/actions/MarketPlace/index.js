import axios from 'axios'
import { CATEGORY_URL } from '../apiConstant'
import { HAS_ERROR, GET_CATEGORY_LIST } from '../types'
import {AsyncStorage} from 'react-native'
import store from '../../store'
export const categoryList = () => {
  return dispatch => {
    return axios
      .get(`${CATEGORY_URL}`,{
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res => {
        dispatch({
          type: GET_CATEGORY_LIST,
          data: res.data.data,
        })
        return res.data.data
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