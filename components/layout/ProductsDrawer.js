import React from 'react';
import Link from 'next/link';

import classes from './ProductsDrawer.module.css';

const ProductsDrawer = ({ show }) => {
  let drawerClasses = classes.drawer;
  if (show) {
    drawerClasses = `${classes.drawer} ${classes.open}`;
  }

  let subDrawerClasses = classes.subDrawer;
  const subDrawerHandler = () => {
    subDrawerClasses = `${classes.subDrawer} ${classes.open}`;
  };

  return (
    <nav className={drawerClasses}>
      <ul className={classes.drawerList}>
        <li onMouseOver={subDrawerHandler}>
          <Link href={'/produktai/spauda'}>
            Spaudos
            <br /> Darbai
          </Link>
          <ul className={classes.subMenu}>
            <li>
              <Link href="/produktai/spauda/lankstinukai">Lankstinukai</Link>
            </li>
            <li>
              <Link href="/produktai/spauda/skrajutes">Skrajutės</Link>
            </li>
            <li>
              <Link href="/produktai/spauda/plakatai">Plakatai</Link>
            </li>
            <li>
              <Link href="/produktai/spauda/brosiuros">Brošiūros</Link>
            </li>
            <li>
              <Link href="/produktai/spauda/bloknotai">Bloknotai</Link>
            </li>
            <li>
              <Link href="/produktai/spauda/korteles">Kortelės</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/produktai/rasymo_priemones">
            Rašymo
            <br /> Priemonės
          </Link>
          <ul className={classes.subMenu}>
            <li>
              <Link href="/produktai/rasymo_priemones/metaliniai">
                Metaliniai
              </Link>
            </li>
            <li>
              <Link href="/produktai/rasymo_priemones/plastikiniai">
                Plastikiniai
              </Link>
            </li>
            <li>
              <Link href="/produktai/rasymo_priemones/eko">EKO</Link>
            </li>
            <li>
              <Link href="/produktai/rasymo_priemones/komplektai">
                Komplektai
              </Link>
            </li>
            <li>
              <Link href="/produktai/rasymo_priemones/piestukai">
                Pieštukai
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/produktai/apranga">Apranga</Link>
          <ul className={classes.subMenu2}>
            <li>
              <Link href="/produktai/apranga/marskineliai">Marškinėliai</Link>
            </li>
            <li>
              <Link href="/produktai/apranga/dzemperiai">Džemperiai</Link>
            </li>
            <li>
              <Link href="/produktai/apranga/kepures">Kepurės</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/produktai/veliavos">Vėliavos</Link>
          <ul className={classes.subMenu2}>
            <li>
              <Link href="/produktai/veliavos/reklamines">
                Reklaminės Vėliavos
              </Link>
            </li>
            <li>
              <Link href="/produktai/veliavos/pagrindai">Pagrindai</Link>
            </li>
            <li>
              <Link href="/produktai/veliavos/veliavos">Vėliavos</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/produktai/puodeliai">Puodeliai</Link>
          <ul className={classes.subMenu2}>
            <li>
              <Link href="/produktai/puodeliai/keramikiniai">Keramikiniai</Link>
            </li>
            <li>
              <Link href="/produktai/puodeliai/termo">Termo </Link>
            </li>
            <li>
              <Link href="/produktai/puodeliai/gertuves">Gertuves</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/produktai/juosteles">Juostelės</Link>
          <ul className={classes.subMenu2}>
            <li>
              <Link href="/produktai/juosteles/kaklajuostes">Kaklajuostės</Link>
            </li>
            <li>
              <Link href="/produktai/juosteles/pakabukai">Pakabukai</Link>
            </li>
            <li>
              <Link href="/produktai/juosteles/apyrankes">Apyrankes</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/produktai/krepsiai">Krepšiai</Link>
          <ul className={classes.subMenu2}>
            <li>
              <Link href="/produktai/krepsiai/medziaginiai">Medžiaginiai</Link>
            </li>
            <li>
              <Link href="/produktai/krepsiai/popieriniai">Popieriniai</Link>
            </li>
            <li>
              <Link href="/produktai/krepsiai/kurpines">Kuprinės</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/produktai/atsvaitai">Atšvaitai</Link>
        </li>
        <li>
          <Link href="/produktai/vokai">
            Kurjeriniai
            <br /> Vokai
          </Link>
        </li>
        <li>
          <Link href="/produktai/uzrasines">Užrašinės</Link>
        </li>
        <li>
          <Link href="/produktai/stendai">
            Tekstiniai
            <br /> Stendai
          </Link>
        </li>
        <li>
          <Link href="/produktai/kiti">Kiti</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ProductsDrawer;
