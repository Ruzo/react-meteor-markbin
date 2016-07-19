import React from 'react';

const BinDelete = ({id, handleDelete}) => {

  const handleClick = () => handleDelete(id);

  return (
    <td><a href="#" className="glyphicon glyphicon-trash" onClick={handleClick.bind(this)}></a></td>
  );
};

export default BinDelete;