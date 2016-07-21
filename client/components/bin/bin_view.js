import React from 'react';
import {markdown} from 'markdown';

const BinView = ({bin}) => {
  const HTMLmarkup = {__html: markdown.toHTML(bin.markdown)};
  return (
    <div className="col-sm-6 col-md-5 col-md-offset-2 col-lg-6 col-lg-offset-0">
      <h5>Output</h5>
      <div className="binView" dangerouslySetInnerHTML = {HTMLmarkup}></div>
    </div>
  );
};

export default BinView;