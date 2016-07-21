import React from 'react';
import BinDelete from './bin_delete';
import {Link} from 'react-router';

const BinRow = ({bin, deleteBin}) => {

  const handleDelete = (id) => {
    deleteBin(id);
  }
  const linkPath = `bin/${bin._id}`;
  return (
    <tr>
      <td><Link to={linkPath} className="glyphicon glyphicon-edit"></Link></td>
      <td>{bin._id}</td>
      <td>{bin.createdAt.toDateString()}</td>
      <td>{bin.sharedWith.map((user, index, sharedWith) =>
                                `${user}${index == sharedWith.length - 1 ? '' : ', '}`)}</td>
      <BinDelete id={bin._id} handleDelete={handleDelete}/>
    </tr>
  );
};

export default BinRow;