import ProductCard from './ProductCard';
import classes from './ProductsList.module.css';

const ProductsList = ({onOpenProductCard, loading, products}) => {

  return (
    <div className={classes.container}>
      {loading ? <p>Loading...</p> : <ul className={classes.list}>
        {products.map(prod => {
          return (
            <li key={prod.id} onClick={onOpenProductCard.bind(this, prod)}>
              <ProductCard title={prod.title} price={{pr1: prod.price1, pr2: prod.price2, pr3: prod.price3, pr4: prod.price4}} description={prod.description} imagesUrl={prod.imageUrl} />
            </li>
          );
        })}
      </ul>}
    </div>
  );
};


export default ProductsList;