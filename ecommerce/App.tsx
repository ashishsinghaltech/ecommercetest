/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import AppNavigator from './src/navigation/AppNavigator';
import { getAndSaveProductListing } from './src/redux/actions';
import store from './src/redux/store';

function App(): JSX.Element {

  const [shouldLoad, updateLoad] = useState<boolean>(false)

  useEffect(() => {
    getAndSaveProductListing((sucess) => {
         updateLoad(sucess)
    })
  }, [])

  if (shouldLoad) {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  } else {
    return <View style={styles.container}><Text>{'Loading...'}</Text></View>
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  }
});

export default App;
