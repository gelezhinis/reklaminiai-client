import React, {useState} from 'react';

import {FaBraille} from 'react-icons/fa6';

import ProductsDrawer from './ProductsDrawer';
import classes from './ProductsMenu.module.css';

const ProductsMenu = ({show}) => {
  const [showDrawer, setShowDrawer] = useState(false);
  let boxClasses = classes.box;
  if (show) {
    boxClasses = `${classes.box} ${classes.open}`;
  }

  const megaMenuHandler = () => {
    setShowDrawer(true);
  }

  const closeDrawerHandler = () => {
    setShowDrawer(false);
  }

  return (
    <>
    <nav className={boxClasses} onClick={megaMenuHandler}>
      {/* <div className={classes.menu}></div> */}
      <FaBraille size={28} className={classes.icon} />
    </nav>
    <ProductsDrawer show={showDrawer} onDrawerClose={closeDrawerHandler} />
    </>
  );
};

export default ProductsMenu;