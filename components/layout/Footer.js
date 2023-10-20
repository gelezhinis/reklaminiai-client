import React from 'react';

import SocialLinks from '../ui/SocialLinks';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.copyright}>
        <p>Created by Reactive Solutions</p>
        <p>Copyright &copy; 2022. All Rights Reserved</p>
      </div>
      <SocialLinks />
    </footer>
  );
};

export default Footer;