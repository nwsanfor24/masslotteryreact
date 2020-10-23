import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Draws from './components/Draws';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Draws />
        </div>
      </Provider>
    );
  }
}

export default App;
