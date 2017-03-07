import { combineReducers } from 'redux';
import homeCartReducer from './home-cart-reducer';
import cartReducer from '../cart/cart-reducer';
const HomeCartCombinedReducers = combineReducers({
  homeCartReducer,
  cartReducer
});

export default HomeCartCombinedReducers;
