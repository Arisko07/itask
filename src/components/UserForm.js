import React from 'react';
import './UserForm.css';
import Modal from './Modal';

export function UserForm( props ) {
  // properties
  const {
    data,
    show,
    handleShow
	} = props;

  // render
  return (
    <div className="container">
      <form className="user-container">
      <h2>{data.name}</h2>
        <p >Username: {data.username}</p>
        <p >Email: {data.email}</p>
      <h2>Company Details</h2>
        <p>Name: {data.company.name}</p>
        <p >{data.company.catchPhrase}</p>
        <p >{data.company.bs}</p>
      </form>
      {show && (
        <div className='contact-container'>
          <h2>Contact Information</h2>
          <p>Phone #: {data.phone}</p>
          <p>Website: {data.website}</p>
        </div>
      )}
      <div className="button-container">
      <button key={data.id} type="button" onClick={handleShow}>
            {show ? 'close' : 'Contanct Information' }
      </button> 
      </div>
    </div>
  );
};

export default UserForm;
