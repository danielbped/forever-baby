import React, { useState } from 'react';
import Input from '../Input';
import Button from './Button';
import BurgerMenu from './BurgerMenu';
import Logo from '../../svg/Logo.svg';
import IconCart from '../../svg/Icon-cart.svg';
import IconProfile from '../../svg/Icon-profile.svg';
import '../../style/header.css';

const Header = () => {
  const [search, setSearch] = useState("");
  const isDisabled = () => {
    return search.length < 3 || search.match(/\W/)
  };

  return (
    <header className="header">
      <div className="header__menu__logo">
        <BurgerMenu
          className="header__menu__logo__burger-menu"
        />
        <a
          href="/"
          className="header__menu__logo__logo"
        >
          <img src={ Logo } alt="logo" />
        </a>
      </div>
      <Input
        name="searchbar"
        value={ search }
        placeholder="Qual o mimo de hoje para o seu anjinho?"
        className="header__searchbar"
        isDisabled={ isDisabled }
        onChange={ setSearch }
        title="BUSCAR"
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
    </header>
  );
};

export default Header;
