import Card from '../components/ui/Card';
import classes from './ProductCard.module.css';

const ProductCard = (props) => {
  const {title, price, description, imagesUrl} = props;

  const {pr1, pr2, pr3, pr4} = price;

  return (
    <Card>
      <div className={classes.product}>
        <div className={classes.img_container}>
          <img
            src=
            {`${process.env.NEXT_PUBLIC_DOMAIN}/${imagesUrl[0]}`}
            alt=""
          />
        </div>
        <div className={classes.product_info}>
          <p>{title}</p>
          {/* <p>nuo {pr4.split('EUR -')[0]} iki {pr1.split('-')[0]}</p> */}
          <p>nuo {pr4.split('EUR -')[0]} EUR</p>
          <p>{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
