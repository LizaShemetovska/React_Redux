import React, { Component } from 'react';
import NewPost from './NewPost';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <NewPost/>
          </div>
          <div className="col-xl-6">
         Display posts
          </div>
        </div>
      </div>
    );
  }
}

export default App;
