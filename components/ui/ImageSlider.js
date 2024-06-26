import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import classes from './ImageSlider.module.css';
// import "./styles.css";

const ImageSlider = (props) => {
  const API = process.env.NEXT_PUBLIC_API_URL;

  return (
    // <Carousel className={classes.main}>
    //   {props.images.map((image, index) => {
    //     return <div key={index} className={classes.slider_wrapper}>
    //       <img src={`http://localhost:5000/${image}`} alt="Image" />
    //     </div>
    //   })}
    // </Carousel>
    <Carousel
      className="main-slide"
      showStatus={false}
      swipeable={true}
      showArrows={false}
      dynamicHeight={true}
      
    >
      {props.images.map((image, index) => {
        return (
          <div key={index} className={classes.slider_wrapper}>
            <img src={`${API}/${image}`} alt="Image" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;
