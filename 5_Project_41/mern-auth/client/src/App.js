import React, { Component } from "react"
import { Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./store";
import './App.css';
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

class App extends Component {
  render() {
    return (
      <>
      <Provider store={store}>
      <Navbar />
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
      </Routes>
      </Provider>
      </>
    )
  }
}

export default App;
