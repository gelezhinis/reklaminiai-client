import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Context } from '../../store/context';
import ProductsDrawer from './ProductsDrawer';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  // const [isAdmin, setIsAdmin] = useState(false);
  const ctx = useContext(Context);
  const router = useRouter();

  const show = router.pathname.includes('produktai');

  // useEffect(() => {
  //   setIsAdmin(ctx.admin);
  // }, []);

  // let drawerClasses = classes.drawer;
  // if (show) {
  //   drawerClasses = `${classes.drawer} ${classes.open}`;
  // }

  // const logoutHandler = async () => {
  //   await fetch('http://localhost:5000/logout', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   }).then(res => {
  //     if (res.ok) {
  //       return res.json();
  //     } else {
  //       return res.json().then(data => {
  //         let errorMessage = 'Kažkas nepavyko. Apgailestaujame'
  //         throw new Error(errorMessage);
  //       })
  //     }
  //   }).then((responseData) => {
  //     if (responseData.message === 'Logging out') {
  //       ctx.logout();
  //       router.push('/');
  //     } else {
  //       throw new Error('Kažkas nepavyko. Apgailestaujame')
  //     }
  //   }).catch(err => console.log(err));
  // };


  return (
    <>
      <header className={classes.header}>
        <Link href={'/'}>
          <div className={classes.logo}><span>Rek</span>lami<span>niai</span></div>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href={'/produktai'}>Produktai</Link>
            </li>
            <li>
              <Link href={'/kontaktai'}>Kontaktai</Link>
            </li>
            {(!ctx.admin && !ctx.isAuthenticated) && <li><Link href={'/authenticate'}>Prisijungti</Link></li>}
            {(!ctx.admin && ctx.isAuthenticated) && <li><div className={classes.logout} onClick={ctx.logout}>Atsijungti</div></li>}
            {/* {!ctx.admin && <li>
              <Link href={'/authenticate'}>{ctx.isAuthenticated ? 'Atsijungti' : 'Prisijungti'}</Link>
            </li>} */}
            {ctx.admin && (
              <li>
                <Link href={'/admin'}>Admin</Link>
              </li>
            )}
            {ctx.admin && (
              <li>
                <button onClick={ctx.logout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <ProductsDrawer show={show} />
    </>
  );
}

export default MainNavigation;
