
import React, { Fragment } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Todo from '../src/Components/Todo';
import App from './App';
import MyApp from './MyApp'
import Layout from './Layout';

const Routing = () => {
  return (

  <>
    <BrowserRouter>
    <Layout/>
      <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="/MyApp" element={<MyApp />} />

      
      </Routes>
    </BrowserRouter>
  
  </>
  )
}

export default Routing