import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import Dashboard from  "../pages/Dashboard";
import Landing from '../pages/Landing';

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default Router