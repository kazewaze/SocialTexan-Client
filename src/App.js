import React, { Component } from 'react';
import './normalize.css';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import routes from './routes';
import BottomMobileNav from './components/BottomMobileNav/BottomMobileNav';
// import { updateUserData } from './ducks/reducer';
// import { connect } from 'react-redux';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      userImg: '',
      userID: 0,
    }
  }

  componentDidMount() {
    axios.get('/auth/me')
    .then(res => {
      this.setState({
        userName: res.data.user_name,
        userImg: res.data.img,
        userID: res.data.id
      });
    });

    // this.props.dispatch(updateUserData(this.state));
  }

  render() {
    return (
      <div className="App">
        <Nav userData={this.state}/>

        <Wrapper>
          { routes }
        </Wrapper>

        { this.state.userName ? <BottomMobileNav userData={this.state} /> : '' }
        <Footer userName={this.state.userName} />
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {};
// }

export default App;