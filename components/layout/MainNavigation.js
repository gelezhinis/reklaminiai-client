import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { Context } from '../../store/context';
import ProductsDrawer from './ProductsDrawer';
import ProductsMenu from './ProductsMenu';
import classes from './MainNavigation.module.css';

import Logo from '../../public/logo.png'

function MainNavigation() {
  // const [showDrawer, setShowDrawer] = useState(false);
  const ctx = useContext(Context);
  const router = useRouter();

  const show = router.pathname.includes('produktai');

  // const drawerOpenHandler = () => {
  //   console.log('open');
  // }

  return (
    <>
      <header className={classes.header}>
        <Link href={'/produktai'}>
          <Image src={Logo} alt="logo" width={200}/>
        </Link>
        <nav>
          <ul>
            <li className={router.pathname === "/produktai" ? classes.active : ""}>
              <Link href={'/produktai'}>Produktai</Link>
            </li>
            <li className={router.pathname === "/kontaktai" ? classes.active : ""}>
              <Link href={'/kontaktai'}>Kontaktai</Link>
            </li>
            {(!ctx.admin && !ctx.isAuthenticated) && <li className={router.pathname === "/authenticate" ? classes.active : ""}><Link href={'/authenticate'}>Prisijungti</Link></li>}
            {(!ctx.admin && ctx.isAuthenticated) && <li><div className={classes.logout} onClick={ctx.logout}>Atsijungti</div></li>}
            {/* {!ctx.admin && <li>
              <Link href={'/authenticate'}>{ctx.isAuthenticated ? 'Atsijungti' : 'Prisijungti'}</Link>
            </li>} */}
            {ctx.admin && (
              <li className={router.pathname === "/admin" ? classes.active : ""}>
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
      <ProductsMenu show={show} />
      {/* <ProductsDrawer show={showDrawer} /> */}
    </>
  );
}

export default MainNavigation;
