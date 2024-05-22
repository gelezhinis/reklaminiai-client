import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import ImageSlider from './ui/ImageSlider';
import { Context } from '../store/context';

import classes from './SingleProduct.module.css';

const SingleProduct = (props) => {
  const ctx = useContext(Context);
  const router = useRouter();

  const {
    id,
    title,
    price1,
    price2,
    price3,
    price4,
    price5,
    description,
    imageUrl,
  } = props.product;

  const API = process.env.NEXT_PUBLIC_API_URL;

  const productEditHandler = () => {
    router.push(
      {
        pathname: '/admin',
        query: {
          productId: id,
          productCategory: props.product.category,
          productSubcategory: props.product.subcategory,
          productTitle: title,
          productPrice1: price1,
          productPrice2: price2,
          productPrice3: price3,
          productPrice4: price4,
          productPrice5: price5,
          productDescription: description,
        },
      },
      '/admin'
    );
  };

  const productDeleteHandler = async () => {
    console.log('SingleProduct ID', id);
    await fetch(`${API}/admin/delete-product/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${ctx.token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        router.back();
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className={classes.container}>
      <ImageSlider images={imageUrl} />
      <div className={classes.right}>
        <div className={classes.info}>
          <h3>{title}</h3>
          {ctx.isAuthenticated ? (
            <div>
              <p>{price1}</p>
              {price2 && <p>{price2}</p>}
              {price3 && <p>{price3}</p>}
              {price4 && <p>{price4}</p>}
              {price5 && <p>{price5}</p>}
            </div>
          ) : (
            <p>
              Norėdami matyti visas kainas,{' '}
              <Link href={'/authenticate'}>
                <span>užsiregistruokite ir prisijunkite</span>
              </Link>
              .
            </p>
          )}
          <p className={classes.description}>{description}</p>
        </div>
        {ctx.admin && (
          <div className={classes.actions}>
            <button className={classes.button} onClick={productEditHandler}>
              Edit
            </button>
            <button className={classes.button} onClick={productDeleteHandler}>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
