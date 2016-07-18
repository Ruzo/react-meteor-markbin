import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

Meteor.startup(() => ReactDOM.render(<App />, document.getElementById("container")));
