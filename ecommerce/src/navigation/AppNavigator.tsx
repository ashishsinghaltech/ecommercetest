import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../screens/cart';
import ProductListingPage from '../screens/productListing';
import { NavigationService } from '../utils/navigationService';

const Stack = createNativeStackNavigator();

export const NavigationStack = () => {
    return (
        <Stack.Navigator initialRouteName="ProductListingPage">
            <Stack.Screen
                name="CartScreen"
                component={CartScreen}
                options={{  headerShown: false }}
            />
            <Stack.Screen
                name="ProductListingPage"
                component={ProductListingPage}
                options={{ headerShown: false}}
            />
        </Stack.Navigator>
    );
};

const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer ref={NavigationService.navigationRef}>
            <NavigationStack />
        </NavigationContainer>
    );
};

export default AppNavigator;
