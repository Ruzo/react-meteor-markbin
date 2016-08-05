import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Template} from 'meteor/templating';
import {Blaze} from 'meteor/blaze';
import AccountsUI from 'meteor/ian:accounts-ui-bootstrap-3';

class Accounts extends Component {
  componentDidMount(){
    this.view = Blaze.render(Template._loginButtons, ReactDOM.findDOMNode(this.refs.container));
  }

  componentWillUnmount(){
    Blaze.remove(this.view);
  }

  render() {
    return (
      <div ref="container"></div>
    );
  }
}

export default Accounts;