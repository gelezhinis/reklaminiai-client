import Card from './ui/Card';
import classes from './CategoryCard.module.css';

const CategoryCard = (props) => {

  const imageStyle = {
    backgroundImage: props.image ? `url(${props.image})` : '',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
    borderRadius: '6px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Card>
      <div className={classes.card}>
        <div style={imageStyle}></div>
        <h1 className={classes.cardTitle}>{props.title}</h1>
      </div>
    </Card>
  );
};

export default CategoryCard;
