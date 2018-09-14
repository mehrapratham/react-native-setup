import { combineReducers } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import MarketPlace from './MarketPlace';
/*combine reducers*/
export default combineReducers({
 router: routerReducer,
 MarketPlace: MarketPlace
});