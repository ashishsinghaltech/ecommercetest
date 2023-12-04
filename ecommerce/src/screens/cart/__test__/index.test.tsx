import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { configureStore } from '../../../redux/store';
import CartScreen from '../index';

describe('TestSuite - Cart Screen', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  test('Check Component Rendered', async () => {
    render(<Provider store={configureStore} ><CartScreen /></Provider>);

    await waitFor(() => {
      screen.findByTestId('decreaseQty')
      screen.findByTestId('increaseQty')
      screen.findByTestId('quantity')
      screen.findByTestId('price')
      screen.findByTestId('productImg')
    })
  });

  test('Test Product Qty increase', async () => {
    render(<Provider store={configureStore} ><CartScreen /></Provider>);
    
    const increaseQty = await screen.findByTestId('increaseQty')
    await fireEvent.press(increaseQty)
 
    expect(screen.getByTestId("quantity").props.children).toEqual(1);
  });
})
