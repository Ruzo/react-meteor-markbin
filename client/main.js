import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {Meteor} from 'meteor/meteor';
import '../imports/startup/accounts-config';

Meteor.startup(() => ReactDOM.render(
  <Router history={browserHistory} routes={routes} />, document.getElementById("container")
  )
);
