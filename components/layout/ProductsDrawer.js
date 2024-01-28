import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {FaCaretDown} from 'react-icons/fa6';

import Pic from '../../public/img/menu.jpg'
import classes from './ProductsDrawer.module.css';

const ProductsDrawer = ({ show, onDrawerClose }) => {
  const [subMenuVisible, setSubMenuVisible] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
    seventh: false,
  });

  const [iconRotated, setIconRotated] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
    seventh: false,
  });

  let drawerClasses = classes.drawer;
  if (show) {
    drawerClasses = `${classes.drawer} ${classes.open}`;
  }

  // let subDrawerClasses = classes.subDrawer;

  // const subDrawerHandler = () => {
  //   subDrawerClasses = `${classes.subDrawer} ${classes.open}`;
  // };

  const closeDrawerHandler = () => {
    onDrawerClose();
  }

  const subMenuHandler1 = () => {
    setSubMenuVisible({
      first: !subMenuVisible.first,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      sixth: false,
      seventh: false,
    });
    setIconRotated({
      first: !iconRotated.first,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      sixth: false,
      seventh: false,
    });
  }

  const subMenuHandler2 = () => {
    setSubMenuVisible({
      first: false,
      second: !subMenuVisible.second,
      third: false,
      fourth: false,
      fifth: false,
      sixth: false,
      seventh: false,
    });
    setIconRotated({
      first: false,
      second: !iconRotated.second,
      third: false,
      fourth: false,
      fifth: false,
      sixth: false,
      seventh: false,
    });
  }
  const subMenuHandler3 = () => {
    setSubMenuVisible({
      first: false,
      second: false,
      third: !subMenuVisible.third,
      fourth: false,
      fifth: false,
      sixth: false,
      seventh: false,
    });
    setIconRotated({
      first: false,
      second: false,
      third: !iconRotated.third,
      fourth: false,
      fifth: false,
      sixth: false,
      seventh: false,
    });
  }
  const subMenuHandler4 = () => {
    setSubMenuVisible({
      first: false,
      second: false,
      third: false,
      fourth: !subMenuVisible.fourth,
      fifth: false,
      sixth: false,
      seventh: false,
    });
    setIconRotated({
      first: false,
      second: false,
      third: false,
      fourth: !iconRotated.fourth,
      fifth: false,
      sixth: false,
      seventh: false,
    });
  }
  const subMenuHandler5 = () => {
    setSubMenuVisible({
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: !subMenuVisible.fifth,
      sixth: false,
      seventh: false,
    });
    setIconRotated({
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: !iconRotated.fifth,
      sixth: false,
      seventh: false,
    });
  }
  const subMenuHandler6 = () => {
    setSubMenuVisible({
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      sixth: !subMenuVisible.sixth,
      seventh: false,
    });
    setIconRotated({
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      sixth: !iconRotated.sixth,
      seventh: false,
    });
  }
  const subMenuHandler7 = () => {
    setSubMenuVisible({
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      sixth: false,
      seventh: !subMenuVisible.seventh,
    });
    setIconRotated({
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      sixth: false,
      seventh: !iconRotated.seventh,
    });
  }

  return (
    <nav className={drawerClasses}>
      <div className={classes.exit} onClick={closeDrawerHandler}>
        <div className={classes.x}></div>
      </div>
      <Image className={classes.image} src={Pic} alt='picture' width={'100%'} height={130} />
      <div className={classes.drawerListContainer}>

      <ul className={classes.drawerList}>
        <li>
          <span>
          <Link href={'/produktai/spauda'}>
            <label onClick={closeDrawerHandler}>Spaudos Darbai</label>
          </Link>
            <span onClick={subMenuHandler1}><FaCaretDown size={15} className={iconRotated.first ? `${classes.icon} ${classes.iconRotate}` : classes.icon}/></span>
            </span>
          <ul className={subMenuVisible.first ? `${classes.subMenu} ${classes.openSub}` : classes.subMenu}>
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
          <span>
          <Link href="/produktai/apranga">
            <label onClick={closeDrawerHandler}>Apranga</label>
          </Link>
            <span onClick={subMenuHandler3}><FaCaretDown size={15} className={iconRotated.third ? `${classes.icon} ${classes.iconRotate}` : classes.icon} /></span></span>
          <ul className={subMenuVisible.third ? `${classes.subMenu} ${classes.openSub}` : classes.subMenu}>
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
          <span>
          <Link href="/produktai/veliavos"><label onClick={closeDrawerHandler}>Vėliavos</label>
          </Link>
          <span onClick={subMenuHandler4}><FaCaretDown size={15} className={iconRotated.fourth ? `${classes.icon} ${classes.iconRotate}` : classes.icon} /></span></span>
          <ul className={subMenuVisible.fourth ? `${classes.subMenu} ${classes.openSub}` : classes.subMenu}>
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
          <span>
          <Link href="/produktai/puodeliai"><label onClick={closeDrawerHandler}>Puodeliai</label>
          </Link>
          <span onClick={subMenuHandler5}><FaCaretDown size={15} className={iconRotated.fifth ? `${classes.icon} ${classes.iconRotate}` : classes.icon} /></span>
          </span>
          <ul className={subMenuVisible.fifth ? `${classes.subMenu} ${classes.openSub}` : classes.subMenu}>
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
          <Link href="/produktai/atsvaitai" onClick={closeDrawerHandler}>Atšvaitai</Link>
        </li>
        <li>
          <Link href="/produktai/vokai" onClick={closeDrawerHandler}>
            Kurjeriniai Vokai
          </Link>
        </li>
      </ul>
      <ul className={classes.drawerList}>
      <li>
          <span>
          <Link href="/produktai/rasymo_priemones">
            <label onClick={closeDrawerHandler}>Rašymo Priemonės</label>
          </Link>
          <span onClick={subMenuHandler2}><FaCaretDown size={15} className={iconRotated.second ? `${classes.icon} ${classes.iconRotate}` : classes.icon} /></span></span>
          <ul className={subMenuVisible.second ? `${classes.subMenu} ${classes.openSub}` : classes.subMenu}>
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
          <span>
          <Link href="/produktai/juosteles"><label onClick={closeDrawerHandler}>Juostelės</label>
          </Link>
          <span onClick={subMenuHandler6}><FaCaretDown size={15} className={iconRotated.sixth ? `${classes.icon} ${classes.iconRotate}` : classes.icon} /></span></span>
          <ul className={subMenuVisible.sixth ? `${classes.subMenu} ${classes.openSub}` : classes.subMenu}>
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
          <span>
          <Link href="/produktai/krepsiai"><label onClick={closeDrawerHandler}>Krepšiai</label>
          </Link>
          <span onClick={subMenuHandler7}><FaCaretDown size={15} className={iconRotated.seventh ? `${classes.icon} ${classes.iconRotate}` : classes.icon} /></span></span>
          <ul className={subMenuVisible.seventh ? `${classes.subMenu} ${classes.openSub}` : classes.subMenu}>
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
          <Link href="/produktai/uzrasines" onClick={closeDrawerHandler}>Užrašinės</Link>
        </li>
        <li>
          <Link href="/produktai/stendai" onClick={closeDrawerHandler}>
            Tekstiniai Stendai
          </Link>
        </li>
        <li>
          <Link href="/produktai/kiti" onClick={closeDrawerHandler}>Kiti</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default ProductsDrawer;
