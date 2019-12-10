import React, { Component } from 'react';
import './Search.css';
import Header from '../../components/Header/Header';

class Search extends Component {
  render() {
    return (
      <div className="Search">
        { 
        <Header>Search</Header>
        }
      </div>
    );
  }
}

export default Search;