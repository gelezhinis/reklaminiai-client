import classes from './FormCard.module.css';

const FormCard = (props) => {
  return (
    <section className={classes.form} style={props.style}>{props.children}</section>
  );
};

export default FormCard;