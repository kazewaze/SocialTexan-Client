import React, { Component } from 'react';
import './Landing.css';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <Hero
         heading="A place to connect"
         message="SocialTexan is a place for Tarleton students to meetup, share what is happening on campus, and maybe even find that special someone."
         buttonPath={"localhost:3003"}
         buttonLabel="Sign Up"
        />
        <Section
         heading="SocialTexan over Facebook?"
         message="Facebook is a great platform, but it lacks the benefits of having your own seperate network."
         backgroundClr="#ebebeb"
        />
      </div>
    );
  }
}

export default Landing;