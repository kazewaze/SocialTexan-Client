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
        <h2>Uh Oh... Your not signed in</h2>
        <h2>Click Sign In at the top</h2>
        <h2>Or Sign Up below</h2>
        <a style={{backgroundColor: '#4f2d7e'}} href="http://localhost:3003/auth" className="Nav__bottom__links__link">Sign Up</a>
      </div>
      }

      <p>

      Restore your Mac from a backup
Other ways to back up and restore files
If you back up to multiple disks, you can switch disks before entering Time Machine. Press and hold the Option key, then choose Browse Other Backup Disks from the Time Machine menu.
To exclude items from your backup, open Time Machine preferences, click Options, then click the Add (+) button to add an item to be excluded. To stop excluding an item, such as an external hard drive, select the item and click the Remove (–) button.
If using Time Machine to back up to a network disk, you can verify those backups to make sure they're in good condition. Press and hold Option, then choose Verify Backups from the Time Machine menu. 
In OS X Lion v10.7.3 or later, you can start up from your Time Machine disk, if necessary. Press and hold Option as your Mac starts up. When you see the Startup Manager screen, choose “EFI Boot” as the startup disk.

Restore your Mac from a backup
Other ways to back up and restore files
If you back up to multiple disks, you can switch disks before entering Time Machine. Press and hold the Option key, then choose Browse Other Backup Disks from the Time Machine menu.
To exclude items from your backup, open Time Machine preferences, click Options, then click the Add (+) button to add an item to be excluded. To stop excluding an item, such as an external hard drive, select the item and click the Remove (–) button.
If using Time Machine to back up to a network disk, you can verify those backups to make sure they're in good condition. Press and hold Option, then choose Verify Backups from the Time Machine menu. 
In OS X Lion v10.7.3 or later, you can start up from your Time Machine disk, if necessary. Press and hold Option as your Mac starts up. When you see the Startup Manager screen, choose “EFI Boot” as the startup disk.

Restore your Mac from a backup
Other ways to back up and restore files
If you back up to multiple disks, you can switch disks before entering Time Machine. Press and hold the Option key, then choose Browse Other Backup Disks from the Time Machine menu.
To exclude items from your backup, open Time Machine preferences, click Options, then click the Add (+) button to add an item to be excluded. To stop excluding an item, such as an external hard drive, select the item and click the Remove (–) button.
If using Time Machine to back up to a network disk, you can verify those backups to make sure they're in good condition. Press and hold Option, then choose Verify Backups from the Time Machine menu. 
In OS X Lion v10.7.3 or later, you can start up from your Time Machine disk, if necessary. Press and hold Option as your Mac starts up. When you see the Startup Manager screen, choose “EFI Boot” as the startup disk.

Restore your Mac from a backup
Other ways to back up and restore files
If you back up to multiple disks, you can switch disks before entering Time Machine. Press and hold the Option key, then choose Browse Other Backup Disks from the Time Machine menu.
To exclude items from your backup, open Time Machine preferences, click Options, then click the Add (+) button to add an item to be excluded. To stop excluding an item, such as an external hard drive, select the item and click the Remove (–) button.
If using Time Machine to back up to a network disk, you can verify those backups to make sure they're in good condition. Press and hold Option, then choose Verify Backups from the Time Machine menu. 
In OS X Lion v10.7.3 or later, you can start up from your Time Machine disk, if necessary. Press and hold Option as your Mac starts up. When you see the Startup Manager screen, choose “EFI Boot” as the startup disk.

Restore your Mac from a backup
Other ways to back up and restore files
If you back up to multiple disks, you can switch disks before entering Time Machine. Press and hold the Option key, then choose Browse Other Backup Disks from the Time Machine menu.
To exclude items from your backup, open Time Machine preferences, click Options, then click the Add (+) button to add an item to be excluded. To stop excluding an item, such as an external hard drive, select the item and click the Remove (–) button.
If using Time Machine to back up to a network disk, you can verify those backups to make sure they're in good condition. Press and hold Option, then choose Verify Backups from the Time Machine menu. 
In OS X Lion v10.7.3 or later, you can start up from your Time Machine disk, if necessary. Press and hold Option as your Mac starts up. When you see the Startup Manager screen, choose “EFI Boot” as the startup disk.

Restore your Mac from a backup
Other ways to back up and restore files
If you back up to multiple disks, you can switch disks before entering Time Machine. Press and hold the Option key, then choose Browse Other Backup Disks from the Time Machine menu.
To exclude items from your backup, open Time Machine preferences, click Options, then click the Add (+) button to add an item to be excluded. To stop excluding an item, such as an external hard drive, select the item and click the Remove (–) button.
If using Time Machine to back up to a network disk, you can verify those backups to make sure they're in good condition. Press and hold Option, then choose Verify Backups from the Time Machine menu. 
In OS X Lion v10.7.3 or later, you can start up from your Time Machine disk, if necessary. Press and hold Option as your Mac starts up. When you see the Startup Manager screen, choose “EFI Boot” as the startup disk.

Restore your Mac from a backup
Other ways to back up and restore files
If you back up to multiple disks, you can switch disks before entering Time Machine. Press and hold the Option key, then choose Browse Other Backup Disks from the Time Machine menu.
To exclude items from your backup, open Time Machine preferences, click Options, then click the Add (+) button to add an item to be excluded. To stop excluding an item, such as an external hard drive, select the item and click the Remove (–) button.
If using Time Machine to back up to a network disk, you can verify those backups to make sure they're in good condition. Press and hold Option, then choose Verify Backups from the Time Machine menu. 
In OS X Lion v10.7.3 or later, you can start up from your Time Machine disk, if necessary. Press and hold Option as your Mac starts up. When you see the Startup Manager screen, choose “EFI Boot” as the startup disk.

      </p>
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