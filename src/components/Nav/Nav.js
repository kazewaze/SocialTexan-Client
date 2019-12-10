import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <nav className="Nav">
      <div className="Nav__top">
        <Link className="Nav__logo" to="/"><h1>Social<span style={{fontWeight: 900}}>Texan</span></h1></Link>
          {/* {!props.userName ? <a href="http://localhost:3003/auth" className="Nav__links__link">Sign In</a> : <a href="http://localhost:3003/auth/logout" className="Nav__top__links__link">Sign Out</a>} */}
      </div>
          <div className="Nav__bottom">
          {props.userData.userName ? <li><Link className="Nav__top__links__link--control" to={{pathname: '/home', state: { data: props.userData, loggedIn: props.userData.userName ? true : false }}}>Home</Link></li> : ''}
          {props.userData.userName ? <li><Link className="Nav__top__links__link--control" to="/search">Search</Link></li> : ''}
          {props.userData.userName ? <li><Link className="Nav__top__links__link--control" to="/notifications">Notifications</Link></li> : ''}
          {props.userData.userName ? <li><Link className="Nav__top__links__link--control" to="/messages">Messages</Link></li> : ''}

          {props.userName ? <li><Link className="Nav__bottom__links__link" to="/profile">Profile</Link></li> : ''}
            {props.userName ? <a href="http://localhost:3003/auth/logout" className="Nav__bottom__links__link">Sign Out</a> : <a href="http://localhost:3003/auth" className="Nav__bottom__links__link">Sign In</a>}
          </div>
    </nav>
  );
}

export default Nav;