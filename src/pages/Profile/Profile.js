import React, { Component } from 'react';
import './Profile.css';
import ninja from '../../img/ninja.png';
// import { connect } from 'react-redux';
import axios from 'axios';

class Profile extends Component {
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
    }

  render() {
    return (
      <div className="Profile">
        { this.state.userName ?
        <div>
          <h1>Welcome {this.state.userName}</h1>
          { this.state.userImg ? <img className="profile-img" src={this.state.userImg} alt="profile" /> : <img className="profile-img" src={ninja} alt="Ninja" /> }
        </div>
        :
      <div>
        <h1>You need to Sign In first!</h1>
        <a style={{backgroundColor: '#4f2d7e'}} href="http://localhost:3003/auth" className="Nav__bottom__links__link">Sign In</a>
      </div>
      }
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     userData: state.userData
//   };
// }

export default Profile;