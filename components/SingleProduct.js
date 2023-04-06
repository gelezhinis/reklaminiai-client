import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import ImageSlider from './ui/ImageSlider';
import { Context } from '../store/context';

import classes from './SingleProduct.module.css';

const SingleProduct = (props) => {
  const ctx = useContext(Context);
  const router = useRouter();

  const { id, title, price1, price2, price3, price4, description, imageUrl } =
    props.product;

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
          productDescription: description,
        },
      },
      '/admin'
    );
  };

  const productDeleteHandler = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/admin/delete-product/${id}`, {
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
          {ctx.isAuthenticated ? <div>
            <p>{price1}</p>
            {price2 && <p>{price2}</p>}
            {price3 && <p>{price3}</p>}
            {price4 && <p>{price4}</p>}
          </div> : <p>Norėdami matyti kainas, prisijungite.</p>}
          <p>{description}</p>
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
