import React from 'react';
import PropTypes from 'prop-types';
import './UserForm.css';


const Modal = ({ handleClose, show, address,phone,website }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <p>
          {phone}
        </p>
        <p>
          {website}
        </p>
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default Modal;
