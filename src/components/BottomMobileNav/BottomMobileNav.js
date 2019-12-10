import React from 'react';
import './BottomMobileNav.css';
import { Link } from 'react-router-dom';
import home from '../../img/home.png';
import search from '../../img/search.png';
import notify from '../../img/bell.png';
import message from '../../img/message.png';

function BottomMobileNav(props) {
  return (
    <nav className="BottomMobileNav">
      <Link to="/home"><img src={home} alt="Home" /></Link>
      <Link to="/search"><img src={search} alt="Search" /></Link>
      <Link to="/notifications"><img src={notify} alt="Notifications" /></Link>
      <Link to="/messages"><img src={message} alt="Messages" /></Link>
    </nav>
  );
}

export default BottomMobileNav;