import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import ProductsList from '../../../components/ProductsList';
import CategoriesList from '../../../components/CategoriesList';
import { categories } from '../../../utils/categories';
import {sublinks} from '../../../utils/subcategories';

function CategoryPage(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedProducts, setFetchedProducts] = useState(props.products);
  const router = useRouter();

  const filteredSubCat = sublinks.filter(sublink => sublink.category === props.prodCategory);

  const API = process.env.NEXT_PUBLIC_API_URL;

  const category = props.prodCategory;

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API}/produktai/${category}`)
      .then((response) => response.json())
      .then((data) => {
        setFetchedProducts(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.emessage));

    // const filteredSubCat = sublinks.filter(sublink => sublink.category === props.prodCategory);
    // setSubcategory(filteredSubCat);
  }, [category, API]);

  const openProductHandler = (...props) => {
    const { id } = props[0];
    // console.log('ID', id);
    // console.log('URL', router);
    // router.push(`${router.asPath}/${id}`);
    router.push(
      // {
      //   pathname: `${router.asPath}/${id}`,
      //   query: props[0],
      // },
      // `${router.asPath}/${id}`
      {
        pathname: `/produktai/produktas/${id}`,
      }
    );
  };

  let content;
  if (category === 'atsvaitai' || category === 'uzrasines' || category === 'vokai' || category === 'stendai' || category === 'kiti') {
    content = <ProductsList
    onOpenProductCard={openProductHandler}
    loading={isLoading}
    products={fetchedProducts}
  />;
  } else {
    content = <CategoriesList links={filteredSubCat[0].sublink} />;
  }

  return (
    <>
      {content}
    </>
  );
}

export default CategoryPage;

export async function getStaticProps(context) {
  const { req, res, params } = context;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/produktai/${params.kategorija}`
    );
    const products = await response.json();
  
    // console.log('Server Side');
  
    // const prodId = params.id;
    // console.log('REQ', req);
    // console.log('RES', res);
    // console.log('PARAMS', params);
  
    return {
      props: {
        prodCategory: params.kategorija,
        products: products,
      },
    };
  } catch(err) {
    console.log(err.message);
  }
}

export async function getStaticPaths() {
  const availableCategories = [];
  for (const cat in categories) {
    availableCategories.push(cat);
  }
  const pathsWithParams = availableCategories.map((categ) => ({
    params: { kategorija: categ },
  }));

  return {
    paths: pathsWithParams,
    // fallback: 'blocking',
    // paths: [],
    fallback: true,
  };
}
