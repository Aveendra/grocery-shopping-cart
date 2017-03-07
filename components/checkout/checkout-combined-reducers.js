import { combineReducers } from 'redux';
import checkoutReducer from './checkout-reducer';

const CheckoutCombinedReducers = combineReducers({
  checkoutReducer
});

export default CheckoutCombinedReducers;
