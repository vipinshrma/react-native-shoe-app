//@ts-nocheck

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './src/Navigation';
import { store } from './src/store/store';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation />

        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
      </View>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

export default App;
