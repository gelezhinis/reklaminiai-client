import { useEffect, useState } from 'react';

import SingleProduct from '../../../components/SingleProduct';

function ProductPage(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedProduct, setFetchedProduct] = useState(props.product);

  const API = process.env.NEXT_PUBLIC_API_URL;

  const productId = props.productId;

  useEffect(() => {
    // console.log('USE_EFFECT');
    setIsLoading(true);
    fetch(`${API}/produktai/produktas/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setFetchedProduct(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [productId, API]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <SingleProduct product={fetchedProduct} />;
}

export async function getStaticProps(context) {
  const { params } = context;

  const prodId = params.produktas;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/produktai/produktas/${prodId}`
  );

  const product = await response.json();

  return {
    props: {
      productId: prodId,
      product: product,
    },
    revalidate: 600
  };
}

export async function getStaticPaths() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/produktai`);
  const products = await response.json();

  // const pathsWithParams = products.map(prod => ({params: {kategorija: prod.category, subkategorija: prod.subcategory, produktas: prod.id}}));
  const pathsWithParams = products.map((prod) => ({
    params: { produktas: prod.id.toString() },
  }));

  // console.log('PATHS', pathsWithParams);

  return {
    paths: pathsWithParams,
    fallback: 'blocking',
  };
}

export default ProductPage;
