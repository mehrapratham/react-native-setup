import initialState from '../initialState'
import { ADD_TO_CART_LIST } from '../../actions/types'
export default (state = initialState.CartData, action) => {
 switch (action.type) {
   case ADD_TO_CART_LIST:
    return { ...state, cart: action.data }
   default:
    return state
 }
}