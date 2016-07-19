import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import BinRow from './bin_row';
import {Bins} from '../../imports/collections/bins';

class BinsList extends Component{
  deleteBin(id){
    Meteor.call('bins.delete', id);
    console.log('Deleted bin ID: ', id);
  }

  render(){
  const bins = this.props.bins;
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>ID</th>
            <th>Date</th>
            <th>Shared With</th>
          </tr>
        </thead>
        <tbody>
          {bins.map((bin) => <BinRow  key={bin._id} bin={bin} deleteBin={this.deleteBin.bind(this)} />)}
        </tbody>
      </table>
    );
}
};

export default createContainer(() => {
  Meteor.subscribe('bins');

  return {bins: Bins.find({}).fetch()};
}, BinsList);