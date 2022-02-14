import React from 'react';
import items from '../../assets/Navbar-Items';
import socialItems from '../../assets/Social-items';
import PaymentForms from '../../svg/Payment-form.svg';
import '../../style/social.css';

const Social = () => (
  <div className="social">
    <div className="social__medias">
      <h2 className="social__medias__title">
        VISITE NOSSAS REDES SOCIAIS
      </h2>
      <ul className="social__medias__list">
        { socialItems.map(({ item, link }) => 
            <li className="social__medias__list__item">
              <a
                rel="noreferrer"
                target="_blank"
                href={ link }
                className="social__medias__list__item__link"
              >
                  { item }
              </a>
            </li>
          ) }
      </ul>
    </div>
    <div className="social__navbar">
      <ul className="social__navbar__list">
        { items.map((item) => 
          <li className="social__navbar__list__item">
            { item }
          </li>
        ) }
      </ul>
    </div>
    <div className="social__payment-form">
      <h2 className="social__payment-form__title">
        FORMAS DE PAGAMENTO
      </h2>
      <img
        src={ PaymentForms }
        alt="Formas de pagamento"
        className="social__payment-form__image"
      />
    </div>
  </div>
);

export default Social;
