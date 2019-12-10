import React, { Component } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';

class Home extends Component {
  render() {

    return (
      <div className="Home">
        <Header>{ this.props.location.state.loggedIn ? 'Yepp' : 'Nope' }</Header>
      </div>
    );
  }
}

export default Home;