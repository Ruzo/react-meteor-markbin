import React, {Component} from 'react';
import Codemirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

class BinEditor extends Component {

  updateMarkdown(content){
    Meteor.call('bins.markdown.update', this.props.bin, content);
  }

  render() {
    const options = {
      mode: 'markdown',
      lineNumbers: true
    }
    return (
      <div className="col-sm-6 col-md-5 col-lg-6">
        <h5>Input</h5>
        <Codemirror value={this.props.bin.markdown} options={options} onChange={this.updateMarkdown.bind(this)}/>
      </div>
    );
  }
}

export default BinEditor;