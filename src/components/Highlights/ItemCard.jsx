import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import IconCart from '../../svg/Icon-cart.svg';

const ItemCard = ({ title, price, thumbnail, rate } ) => {
  const [added, setAdded] = useState(false);
  const handleClick = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 3000)
  }

  const settings = {
    size: 30,
    value: rate,
    edit: false
  };

  return (
    <div className="item-card">
      <a
        href="/"
        className="item-card__image-link"
      >
        <img
          src={ thumbnail }
          alt={ title }
          className="item-card__image-link__image"
        />
      </a>
      <a
        href="/"
        className="item-card__title-link"
      >
        <h2 className="item-card__title-link__title">{ title }</h2>
      </a>
      <p className="item-card__price">R$ { price }</p>
      <div className="item-card__rate">
        <ReactStars { ...settings } />
      </div>
      <div
        className={`item-card__button-div${added ? '__added' : ''}`}
        onClick={ handleClick }
      >
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
          { added ? 'PRODUTO ADICIONADO!' : 'ADICIONAR AO CARRINHO' }
        </span>
      </div>
    </div>
  )
}

export default ItemCard;
