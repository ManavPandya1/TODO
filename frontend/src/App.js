import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FileUpload from "./components/FileUpload";
//import ItemList from './components/ItemList';
import Login from './components/Login';
import Signup from './components/Signup';
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
//import AddItem from './components/AddItem';

const App = () => {


  useEffect(() => {

  }, []);


  return (
        <>
          <Navbar/>
        </>
  );
};
export default App;