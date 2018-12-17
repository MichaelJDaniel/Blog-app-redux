import React, { Component } from 'react';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import Footer from './components/Footer'
import './App.css';

const App = () => {
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/blog/:id" component={Blog}/>
  </Switch>
   
  
}
export default App;
