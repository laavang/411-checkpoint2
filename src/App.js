import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Router from './Router'
import './App.css';
import Navigation from './containers/Navigation'

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
