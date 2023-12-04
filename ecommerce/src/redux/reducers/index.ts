import IProduct from '../../model/interface/iProduct';
import { SAVE_PRODUCT_LIST, ADD_TO_CART } from '../actions/type';
const productListingInitialState = {
  productList: []
};

const cartInitialState = {
    productList: []
  };

interface IAction<T> {
    type: string
    payload: T
}

export const productListingReducer = (state = productListingInitialState, action: IAction<IProduct[]>) => {
  switch(action.type) {
    case SAVE_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload
      };
    default:
      return state;
  }
}

export const cartReducer = (state = cartInitialState, action: IAction<IProduct>) => {
    switch(action.type) {
        case ADD_TO_CART:
          return {
            ...state,
            cart: action.payload
          };
        default:
          return state;
      }
}