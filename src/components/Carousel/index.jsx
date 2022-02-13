import React from 'react';
import Slider from 'react-slick';
import items from '../../assets/Carousel-items';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/carousel.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="carousel">
      <Slider { ...settings }>
        { items.map((item) => 
          <div className="carousel__item">
            <img
              src={item}
              alt="carousel"
              className="carousel__item__image"
            />
          </div>)
        }
      </Slider>
    </div>
  );
};

export default Carousel;
