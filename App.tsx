// This is the second project which includes state management thing.
// In this project we are using redux core. 
// Apart from this there are two more projects which includes state managment thing;
// they are LocationApp and OnlineTestApp.

import 'react-native-gesture-handler';
import React from 'react'
import { Provider } from 'react-redux';

import store from './app/redux/store'

import StackNavigation from './app/routes/StackNavigation'

// console.log('store.getState():',store.getState());

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigation/>
    </Provider>
  )
}

export default App