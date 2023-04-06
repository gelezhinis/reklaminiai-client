import Link from 'next/link';

import CategoryCard from './CategoryCard';
// import { links, linksWithoutSubs } from '../utils/mobile-links';
import classes from './CategoriesList.module.css';

const CategoriesList = ({links, linksWithoutSubs}) => {
  return (
    <ul className={classes.list}>
      {links.map((sublink, index) => {
        return (
          <Link href={sublink.path} key={index}>
            <li>
              <CategoryCard title={sublink.name}/>
            </li>
          </Link>
        );
      })}
      {linksWithoutSubs && linksWithoutSubs.map((link, index) => {
        return (
          <Link href={link.path} key={index}>
            <li>
              <CategoryCard title={link.name} />
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default CategoriesList;
