import React from 'react';

import classes from './HamburgerMenu.module.css';

const HamburgerMenu = ({onClick}) => (
   <nav className={classes.hamburger_nav}>
      <button className={classes.toggle_button} onClick={onClick} >
         <div className={classes.toggle_button_line} />
         <div className={classes.toggle_button_line} />
         <div className={classes.toggle_button_line} />
      </button>
   </nav>
);

export default HamburgerMenu;