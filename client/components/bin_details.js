import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import {Bins} from '../../imports/collections/bins';
import BinEditor from './bin_editor';
import BinView from './bin_view';

class BinDetails extends Component {

  render() {
    const bin = this.props.bin;
    return (
      <div>
        <div className="detailsHeader">
          <div className="col-xs-6 col-sm-4"><strong>ID:</strong> {bin && bin._id}</div>
          <div className="col-xs-6 col-sm-4"><strong>Date:</strong> {bin && bin.createdAt.toLocaleDateString()}</div>
          <div className="col-xs-6 col-sm-4"><strong>Owner:</strong> {bin && bin.ownerEmail}</div>
        </div>
        {bin && <BinEditor bin = {bin} />}
        {bin && <BinView bin = {bin} />}
      </div>
    );
  }
}

export default createContainer((props) => {
  Meteor.subscribe('bins');

  return {bin: Bins.findOne(props.params.id)};
}, BinDetails);