import React from 'react';
import './Hero.css';
import img from '../../img/hangout.svg';

function Hero(props) {
  return (
    <header className="Hero">
    <img src={img} className="Hero__img__mobile" alt="Hangout" />
      <div className="Hero__main">
        <h1 align="left" className="Hero__main__heading">{ props.heading }</h1>
        <p align="left" className="Hero__main__message">{ props.message }</p>
        <a className="Hero__main__btn" href="http://localhost:3003/auth">Sign Up</a>
        {/* { props.buttonPath ? <Link className="Hero__main__btn" to={props.buttonPath}>{ props.buttonLabel }</Link> : '' } */}
      </div>
      <img src={img} className="Hero__img" alt="Hangout" />
    </header>
  );
}

export default Hero;