import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from "react-dom/client";
import React, { Component } from 'react';
import Header from './components/header/header';
import News from './components/news/news';
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  render() {
    return (
      <div>
        <Main>
        <Header/>
        <LoadingBar color='#f11946' progress={100} />
        <Routes>
          <Route exact path='/' element={<News pageSize = {9} country = "in" category="general"/>} />
          <Route exact path='/business' element={<News pageSize = {9} country = "in" category="business"/>} />
          <Route exact path='/entertainment' element={<News pageSize = {9} country = "in" category="entertainment"/>} />
          <Route exact path='/health' element={<News pageSize = {9} country = "in" category="health"/>} />
          <Route exact path='/science' element={<News pageSize = {9} country = "in" category="science"/>} />
          <Route exact path='/sports' element={<News pageSize = {9} country = "in" category="sports"/>} />
          <Route exact path='/technology' element={<News pageSize = {9} country = "in" category="technology"/>} />
        </Routes>
        </Main>
      </div>
    );
  };
};

