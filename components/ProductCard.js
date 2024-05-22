import Card from '../components/ui/Card';
import classes from './ProductCard.module.css';

const ProductCard = (props) => {
  const { title, price, imagesUrl } = props;

  const { pr5 } = price;
  const API = process.env.NEXT_PUBLIC_API_URL;

  return (
    <Card>
      <div className={classes.product}>
        <div className={classes.img_container}>
          <img src={`${API}/${imagesUrl[0]}`} alt="product_img" />
        </div>
        <div className={classes.product_info}>
          <h2>{title}</h2>
          <h5>
            Kainos nuo {pr5.split('- ')[1]} (priklausomai nuo užsakyto kiekio)
          </h5>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
