import Image from 'next/image';
import foto from '../img/reklaminiai.jpg';
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <div className={classes.main}>
      <Image 
        src={foto}
        alt="reklaminiai.lt"
      />
    </div>
  );
};

export default Hero;
