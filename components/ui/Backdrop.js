import React from 'react';

import classes from './Backdrop.module.css';

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onBackdropClose.bind(this, '/')}></div>
  );
}

export default Backdrop;