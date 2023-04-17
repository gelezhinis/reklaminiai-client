import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Context } from '../../store/context';
import SocialLinks from '../ui/SocialLinks';
import MobileNavLinks from './MobileNavLinks';

const SideDrawer = ({ show, onSideDrawerClick }) => {
  const { isAuthenticated, admin, logout } = useContext(Context);
  const router = useRouter();

  let drawerClasses = 'side-drawer';
  if (show) {
    drawerClasses = 'side-drawer open';
  }

  const logoutHandler = () => {
    logout();
    // history.replace('/');
    onSideDrawerClick();
  };

  return (
    <nav className={drawerClasses}>
      <Link onClick={onSideDrawerClick} href={'/'}>
        <div className="logo">
          <span>Rek</span>lami<span>niai</span>
        </div>
      </Link>
      <ul>
        <div className="side-drawer-nav">
          {/* <Link onClick={onSideDrawerClick} href={'/'}>
            Produktai
          </Link> */}
          <MobileNavLinks onProductClick={onSideDrawerClick} />
          <Link onClick={onSideDrawerClick} href={'/kontaktai'}>
            Kontaktai
          </Link>
          {!admin && !isAuthenticated && (
            <li>
              <Link onClick={onSideDrawerClick} href={'/authenticate'}>
                Prisijungti
              </Link>
            </li>
          )}
          {!admin && isAuthenticated && (
            <li>
              <div onClick={logoutHandler}>Atsijungti</div>
            </li>
          )}
          {admin && (
            <li>
              <Link onClick={onSideDrawerClick} href={'/admin'}>
                Admin
              </Link>
            </li>
          )}
          {admin && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
          {/* {isAuthenticated && (
            <Link
              onClick={onSideDrawerClick}
              activeClassName="active"
              to="/admin"
            >
              Admin
            </Link>
          )}
          {isAuthenticated && <div onClick={logoutHandler}>Atsijungti</div>} */}
        </div>
        <div className="social-container">
          <div className="copyright">
            <p>
              Created by <br /> Reactive Solutions
            </p>
            <p>Copyright &copy; 2023. All Rights Reserved</p>
          </div>
          <SocialLinks />
        </div>
      </ul>
    </nav>
  );
};

export default SideDrawer;
