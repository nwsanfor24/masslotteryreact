import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

// import Posts from './components/Posts';
// import PostForm from './components/PostForm';
// import Table from './components/Table';

import store from './store';

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <div className="App">
          {/* <Table /> */}
        </div>
      </Provider>
    );
  }
}

export default App;
