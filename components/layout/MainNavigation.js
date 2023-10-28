import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Context } from '../../store/context';
import ProductsDrawer from './ProductsDrawer';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  const ctx = useContext(Context);
  const router = useRouter();

  const show = router.pathname.includes('produktai');

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
