import React from 'react';

const DeleteEmail = ({email, removeEmail}) => {
  const handleDelete = (e)=>{
    e.preventDefault();
    removeEmail(email);
  }

  return (
    <a href="#" className="deleteX" onClick={handleDelete}>X</a>
  );
};

export default DeleteEmail;