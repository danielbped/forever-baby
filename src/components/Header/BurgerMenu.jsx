import React from 'react';
import items from '../../assets/Navbar-Items';
import { fallDown as Menu } from 'react-burger-menu';

const BurgerMenu = ({ className }) => {
  const styles = {
    bmBurgerButton: {
      position: 'relative',
      width: '3rem',
      height: '2rem',
      marginLeft: '1rem'
    },
    bmOverlay: {
      background: 'transparent',
    },
    bmMenu: {
      height: 'auto',
    },
    bmCross: {
      background: 'white'
    }
  }
  return (
    <Menu
      styles={ styles }
      burgerButtonClassName={ `${className}__button` }
      burgerBarClassName={ `${className}__bar` }
      crossButtonClassName={ `${className}__cross-button` }
      crossClassName={ `${className}__cross` }
      menuClassName={ `${className}__menu` }
      itemListClassName={ `${className}__item` }
      overlayClassName={ `${className}__overlay` }
    >
      { items.map((item) => 
        <a
          className={ `${className}__item` }
          href="/"
        >
          { item }
        </a>
        )
      }
    </Menu>
  )
}

export default BurgerMenu;
