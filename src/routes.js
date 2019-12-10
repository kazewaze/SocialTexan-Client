import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Profile from './pages/Profile/Profile';
import Search from './pages/Search/Search';
import Home from './pages/Home/Home';
import ViewProfile from './pages/ViewProfile/ViewProfile';
import Messages from './pages/Messages/Messages';
import Notifications from './pages/Notifications/Notifications';

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/profile" component={Profile} />
    <Route path="/search" component={Search} />
    <Route path="/home" component={Home} />
    <Route path="/viewprofile" component={ViewProfile} />
    <Route path="/messages" component={Messages} />
    <Route path="/notifications" component={Notifications} />
  </Switch>
);