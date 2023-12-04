import { SAVE_PRODUCT_LIST, ADD_TO_CART } from './type';
import * as network from '../../network'
import store from '../store';
import IProduct from '../../model/interface/iProduct';

export const getAndSaveProductListing = (sucess: (arg: boolean) => void) => {
    network.GET('https://my-json-server.typicode.com/benirvingplt/products/products').then((result) => {
        sucess(true)
        store.dispatch({ type: SAVE_PRODUCT_LIST, payload: result })
    })
}

export const addToCart = (item: IProduct) => {
    store.dispatch({ type: ADD_TO_CART, payload: { ...item, quantity: 1 } })
}

export const increaseQty = (item: IProduct) => {
    const qty = item.quantity === undefined ? 1 : item.quantity
    store.dispatch({ type: ADD_TO_CART, payload: { ...item, quantity: qty + 1 } })
}

export const decreaseQty = (item: IProduct) => {
    if (item.quantity !== 1) {
        const qty = item.quantity === undefined ? 1 : item.quantity
        store.dispatch({ type: ADD_TO_CART, payload: { ...item, quantity: qty - 1 } })
    }
}