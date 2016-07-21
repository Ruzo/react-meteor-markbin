import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import Header from './header';
import {Bins} from '../../imports/collections/bins';
import * as binActions from '../actions/bins';

class App extends Component {

  binsInsertHandleClick(e){
    e.preventDefault();
    binActions.insert()
  }

  render() {
    return (
      <div>
        <Header binsInsert = {this.binsInsertHandleClick.bind(this)} />
        {this.props.children}
      </div>
    );
  }
}

export default App;