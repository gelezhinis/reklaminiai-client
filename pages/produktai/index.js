import { useContext } from 'react';

import { Context } from '../../store/context';
import {links, linksWithoutSubs} from '../../utils/mobile-links';
import CategoriesList from '../../components/CategoriesList';

function CategoriesPage() {
  const ctx = useContext(Context);

  return (
    <>
      {!ctx.isMobileDevice && <CategoriesList links={links[0].sublinks} linksWithoutSubs={linksWithoutSubs} />}
    </>
  );
}

export default CategoriesPage;
