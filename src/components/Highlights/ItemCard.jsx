import React from 'react';
import ReactStars from "react-rating-stars-component";
import IconCart from '../../svg/Icon-cart.svg';

const ItemCard = ({ title, price, thumbnail, rate, id } ) => {
  const settings = {
    size: 30,
    value: rate,
    edit: false
  };

  return (
    <div className="item-card">
      <img
        src={ thumbnail }
        alt={ title }
        className="item-card__image"
      />
      <h2 className="item-card__title">{ title }</h2>
      <p className="item-card__price">R$ { price }</p>
      <div className="item-card__rate">
        <ReactStars { ...settings } />
      </div>
      <div className="item-card__button-div">
        <button
          type="button"
          className="item-card__button-div__button"
        >
          <img
            src={ IconCart }
            alt="adicionar item"
            className="item-card__button-div__button__image"
          />
        </button>
        <span className="item-card__button-div__title">
          ADICIONAR AO CARRINHO
        </span>
      </div>
    </div>
  )
}

export default ItemCard;
