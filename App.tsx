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