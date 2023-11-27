import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <div>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<News key="general" pageSize={12} country="in" category="general" apikey="07976c05ec5745479940d02e61d850df" />} />
              <Route exact path="/business" element={<News key="business" pageSize={12} country="in" category="business" apikey="07976c05ec5745479940d02e61d850df" />} />
              <Route exact path="/entertainment" element={<News key="entertainment" pageSize={12} country="in" category="entertainment" apikey="07976c05ec5745479940d02e61d850df" />} />
              <Route exact path="/health" element={<News key="health" pageSize={12} country="in" category="health" apikey="07976c05ec5745479940d02e61d850df" />} />
              <Route exact path="/science" element={<News key="science" pageSize={12} country="in" category="science" apikey="07976c05ec5745479940d02e61d850df" />} />
              <Route exact path="/sports" element={<News key="sports" pageSize={12} country="in" category="sports" apikey="07976c05ec5745479940d02e61d850df" />} />
              <Route exact path="/technology" element={<News key="technology" pageSize={12} country="in" category="technology" apikey="07976c05ec5745479940d02e61d850df" />} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    )
  }
}


