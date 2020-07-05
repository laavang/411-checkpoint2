import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Router from './Router'
import './App.css';
import Navigation from './components/Navigation'
import LoggedInBar from './components/LoggedInBar'

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Navigation />
      <LoggedInBar />
      <Router />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
