import React, { Fragment } from 'react';
import './App.css';
import Clock from './components/Clock';
import Register from './components/Register';
import Alert from './components/Alert';

import {Provider} from 'react-redux';
import store from './store';

const App= ()=>( 
  <Provider store={store}>
    <Fragment>
      <Alert />
      <Clock />
      <Register />
    </Fragment> 
  </Provider>
);

export default App;
