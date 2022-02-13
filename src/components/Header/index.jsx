import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
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
      <img src={ Logo } alt="logo" />
      <Input
        name="searchbar"
        placeholder="Qual o mimo de hoje para o seu anjinho?"
        className="header__searchbar"
        isDisabled={ isDisabled }
        onChange={ setSearch }
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
