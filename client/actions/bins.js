import {Meteor} from 'meteor/meteor';

export const insert = () => {
  Meteor.call('bins.insert');
}