import React from 'react';

import classes from './Modal.module.css';

const Modal = (props) => {
  let modalClasses = classes.modal;
  if (props.message.length < 100) {
    modalClasses = `${classes.modal} ${classes.short}`;
  }

  return (
    <div className={modalClasses}>
      {props.message.length > 100 ? (
        <div className={classes.message_container}>
          <p>{props.message}</p>
        </div>
      ) : (
        <div>{props.message}</div>
      )}
      {props.message.length > 100 && (
        <div className={classes.checkbox_container}>
          <input type="checkbox" onChange={props.onAgreement} />
          <p>Sutinku su nuostatomis</p>
        </div>
      )}
      <div className={classes.button_container}>
        <button
          disabled={!props.enableButton}
          className={classes.button}
          onClick={
            props.message.length > 100
            ? props.onCloseModal
              : () => props.onCloseModal('/')
          }
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;
