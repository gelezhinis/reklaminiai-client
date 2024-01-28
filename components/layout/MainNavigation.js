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
          {/* <div className={classes.logo}><span>Rek</span>lami<span>niai</span></div> */}
          <Image src={Logo} alt="logo" width={200} />
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
      <ProductsMenu show={show} />
      {/* <ProductsDrawer show={showDrawer} /> */}
    </>
  );
}

export default MainNavigation;
