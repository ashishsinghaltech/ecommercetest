import ProductListing from '../../../../__mock__/ProductListing.json'

export const initStore = {
    productList: { productList: ProductListing },
    cart: { cart: ProductListing[0] }
}
