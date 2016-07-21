import React, {Component} from 'react';
import DeleteEmail from './delete_email'

class BinShare extends Component {
  removeEmail(email){
    Meteor.call('bins.remove.shared.email', this.props.bin, email);
  }

  sharedList(email, index, sharedWith){
    const comma = index == (sharedWith.length-1) ? <span>. &nbsp;</span> : <span>, &nbsp;</span>;
    return (<span key={index} ref="sharedEmail" className="sharedEmail">
              {email}
              <DeleteEmail email={email} removeEmail={this.removeEmail.bind(this)} />
              {comma}
            </span>
          );
  }

  addSharedEmail(e){
    e.preventDefault();
    Meteor.call('bins.add.shared.email', this.props.bin._id, this.refs.email.value);
    this.refs.email.value = '';
  }

  render() {
    return (
      <div className="binShare row">
        <div className="col-xs-4 col-md-2">
          <form onSubmit={this.addSharedEmail.bind(this)}>
            <div className="input-group">
              <input type="email" ref="email" className="form-control" placeholder="Enter an email" />
              <span className="input-group-btn">
                <button className="btn btn-secondary" type="submit">Share Bin</button>
              </span>
            </div>
          </form>
        </div>
        <div className="col-xs-14 col-sm-8 col-md-10">
          <div className="sharedList"><strong>Shared with:</strong>  {this.props.bin.sharedWith.map(this.sharedList.bind(this))}</div>
        </div>
      </div>
    );
  }
}

export default BinShare;