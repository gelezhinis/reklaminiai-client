import React from 'react'

import {FaFacebook, FaInstagram} from 'react-icons/fa';
import classes from './SocialLinks.module.css';

const SocialLinks = () => {
  return (
    <div className={classes.social}>
      <a href="https://www.facebook.com/reklaminiai" rel="noreferrer" target="_blank"><FaFacebook size="16" /></a>
      <a href="https://www.instagram.com/reklaminiai/" rel="noreferrer" target="_blank"><FaInstagram size="18" /></a>
    </div>
  );
};

export default SocialLinks