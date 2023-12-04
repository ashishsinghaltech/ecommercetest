import { createStore, combineReducers } from 'redux';
import { productListingReducer, cartReducer } from '../reducers';
import { initStore } from './__mock__/MockStore';

const rootReducer = combineReducers({
    productList: productListingReducer,
    cart: cartReducer
});
const store = createStore(rootReducer);

export const configureStore = createStore(rootReducer, initStore);

export default store;