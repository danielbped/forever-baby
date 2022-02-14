import React from 'react';
import '../../style/footer.css';
import items from '../../assets/Footer-items';

const Footer = () => (
  <div className="footer">
    <div className="footer__first">
      <p className="footer__first__text">
        { items[0] }
      </p>
      <p className="footer__first__text">
        { items[1] }
      </p>
    </div>
    <div className="footer_second">
      <p className="footer__second__text">
        { items[2] }
      </p>
      <p className="footer__second__text">
        { items[3] }
      </p>
    </div>
  </div>
);

export default Footer;
