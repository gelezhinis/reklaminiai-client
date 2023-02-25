import React, { useState } from 'react';

import HamburgerMenu from '../ui/HamburgerMenu';
import SideDrawer from './SideDrawer';
import Backdrop from '../ui/Backdrop';

const MobileNavigation = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const showSideDrawer = () => {
    setSideDrawerOpen(true);
  };
  const hideSideDrawer = () => {
    setSideDrawerOpen(false);
  };

  return (
    <>
      <HamburgerMenu onClick={showSideDrawer} />
      <SideDrawer show={sideDrawerOpen} onSideDrawerClick={hideSideDrawer} />
      {sideDrawerOpen && <Backdrop onBackdropClose={hideSideDrawer} />}
    </>
  );
};

export default MobileNavigation;
