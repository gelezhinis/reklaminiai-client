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
    fetch(`http://localhost:5000/produktai/${category}/${subcategory}`)
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
    `http://localhost:5000/produktai/${params.kategorija}/${params.subkategorija}`
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

  const response = await fetch('http://localhost:5000/produktai');
  const products = await response.json();

  const pathsWithParams = products.map((prod) => ({
    params: { kategorija: prod.category, subkategorija: prod.subcategory },
  }));

  // console.log('PRODS', pathsWithParams);

  return {
    paths: pathsWithParams,
    fallback: 'blocking',
    // fallback: false,
  };
}
