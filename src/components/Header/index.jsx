import React from 'react';
import Input from './Input';
import Button from './Button';
import Logo from '../../svg/Logo.svg';
import IconCart from '../../svg/Icon-cart.svg';
import IconProfile from '../../svg/Icon-profile.svg';
import '../../style/header.css';

const Header = () => (
  <div className="header">
    <img src={ Logo } alt="logo" />
    <Input
      name="searchbar"
      placeholder="Qual o mimo de hoje para o seu anjinho?"
      className="header__searchbar"
    />
    <div className="header__buttons">
      <Button
        img={ IconProfile }
        title="MINHA CONTA"
        className="header__buttons__div"
      />
      <Button
        img={ IconCart }
        title="CARRINHO"
        className="header__buttons__div"
      />
    </div>
  </div>
);

export default Header;
