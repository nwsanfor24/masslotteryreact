import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import './App.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import mainReducer from './reducers/index';
// import Posts from './components/Posts';
// import PostForm from './components/PostForm';
// import Table from './components/Table';
import BoxCon from './container/box-container';

let store = createStore(mainReducer, applyMiddleware(thunk));




// import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BoxCon />
        </div>
      </Provider>
    );
  }
}

export default App;
