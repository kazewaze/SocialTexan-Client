import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <footer className="Footer">
      <div className="Footer__inner">
        <div className="Footer__info-section">
          <h3 className="Footer__info-section__link"><Link style={{color: '#fff'}} to="/about">About</Link></h3>
          <h3 className="Footer__info-section__link"><Link style={{color: '#fff'}} to="/contact">Contact</Link></h3>
        </div>
        <img className="Footer__img" src={"https://www.tarleton.edu/common/_css/images/Bleed_Purple_Button.png"} alt="Bleed Purple!" />
        <h3>SocialTexan <span role="img" aria-label="Copyright">©️</span> 2019</h3>
      </div>
    </footer>
  );
}

export default Footer;