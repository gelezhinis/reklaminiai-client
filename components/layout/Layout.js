import {useContext} from 'react';

import {Context} from '../../store/context';
import MainNavigation from './MainNavigation';
import MobileNavigation from './MobileNavigation';
import Footer from './Footer';
import classes from './Layout.module.css';

function Layout(props) {
  const {isMobileDevice} = useContext(Context);

  return (
    <div className={classes.body}>
      {isMobileDevice ? <MobileNavigation /> : <MainNavigation />}
      <main className={classes.main}>{props.children}</main>
      {!isMobileDevice && <Footer /> }
    </div>
  );
}

export default Layout;