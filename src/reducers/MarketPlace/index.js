import initialState from '../initialState'
import { GET_CATEGORY_LIST } from '../../actions/types'
export default (state = initialState.MarketPlace, action) => {
 switch (action.type) {
   case GET_CATEGORY_LIST:
    return { ...state, categoryList: action.data }
   default:
    return state
 }
}