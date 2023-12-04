import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { configureStore } from '../../../redux/store';
import ProductListingScreen from '../index';
import { NavigationService } from '../../../utils/navigationService';

describe('TestSuite - Price Listing Screen', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  test('Price Listing Screen Component Rendered', async () => {
    render(<Provider store={configureStore} ><ProductListingScreen /></Provider>);

    await waitFor(() => {
      screen.findByTestId('addToCartBtn')
      screen.findByTestId('productListing')
      screen.findByTestId('product_0')
      screen.findByTestId('productImg_0')
      screen.findByTestId('productName_0')
      screen.findByTestId('productPrice_0')
    })
  });

  test('Test Select Item', async () => {
    const spyOn = jest.spyOn(NavigationService, 'navigateTo')
    render(<Provider store={configureStore} ><ProductListingScreen /></Provider>);
    
    const product_0 = await screen.findByTestId('product_0')
    await fireEvent.press(product_0)

    const addToCartBtn = await screen.findByTestId('addToCartBtn')
    await fireEvent.press(addToCartBtn)

    expect(spyOn).toHaveBeenCalled()
  });
})
