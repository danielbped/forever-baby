import React from 'react';
import Slider from 'react-slick';
import items from '../../assets/Highlights-items';
import ItemCard from './ItemCard';
import "../../style/highlights.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Highlights = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <div className="highlights">
      <h1
        className="highlights__title"
      >
        FOREVER BABY
        {" "}
        <span
          className="highlights__title__span"
        >
          DESTAQUES
        </span>
      </h1>
      <div className="highlights__carousel">
        <Slider { ...settings }>
          { items.map((item) => <ItemCard { ...item } />) }
        </Slider>
      </div>
    </div>
  );
}

export default Highlights;
