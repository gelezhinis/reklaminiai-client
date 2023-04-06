import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import ProductsList from '../../../../components/ProductsList';
import { categories } from '../../../../utils/categories';

function SubcategoryPage(props) {
  // const [category, setCategory] = useState();
  // const [subcategory, setSubcategory] = useState();
  const [fetchedProducts, setFetchedProducts] = useState(props.products);
  const [isLoading, setIsLoading] = useState(false);
  // const {query} = useRouter();
  const router = useRouter();

  const category = props.prodCategory;
  const subcategory = props.prodSubcategory;

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/produktai/${category}/${subcategory}`)
      .then((response) => response.json())
      .then((data) => {
        setFetchedProducts(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.emessage));
  }, [category, subcategory]);

  const openProductHandler = (...props) => {
    const { id } = props[0];
    // console.log('ID', id);
    // console.log('URL', router);
    // router.push(`${router.asPath}/${id}`);

    router.push(
      // {
      //   pathname: `${router.asPath}/${id}`
      // },
      // `${router.asPath}/${id}`
      {
        pathname: `/produktai/produktas/${id}`,
      }
    );
  };

  // because of blocking fallback, we can comment following
  // if (!props.products) {
  //   return <p>Loading...</p>;
  // }

  return (
    <ProductsList
      onOpenProductCard={openProductHandler}
      loading={isLoading}
      products={fetchedProducts}
    />
  );
}

export default SubcategoryPage;

export async function getStaticProps(context) {
  const { params } = context;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/produktai/${params.kategorija}/${params.subkategorija}`
  );
  const products = await response.json();

  return {
    props: {
      prodCategory: params.kategorija,
      prodSubcategory: params.subkategorija,
      products: products,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  // const nestedSubcategories = Object.values(categories).map((ctg) =>
  //   ctg.concat()
  // );
  // const availableSubcategories = nestedSubcategories.flat(1);

  // const pathsWithParams = availableSubcategories.map((subcateg) => ({
  //   params: { subkategorija: subcateg },
  // }));

  const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/produktai`);
  const products = await response.json();

  
  const productsWithSubcategory = products.filter(prod => prod.subcategory.length > 1);
  
  const uniqueProductsWithSubcategory = productsWithSubcategory.filter((prod, index, self) => {
    return index === self.findIndex(p => p.subcategory === prod.subcategory);
  });
  // console.log('PRODUKTAI', uniqueProductsWithSubcategory);

  const pathsWithParams = uniqueProductsWithSubcategory.map((prod) => ({
    params: { kategorija: prod.category, subkategorija: prod.subcategory },
  }));

  // console.log('PRODUKTS', pathsWithParams);

  // ['rpriemones/metaliniai', 'rpriemones/eko', 'rpriemones/piestukai', ]

  return {
    paths: pathsWithParams,
    // paths: [],
    // fallback: true,
    fallback: 'blocking',
  };
}
