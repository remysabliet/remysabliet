import React from 'react'
import { Routes, Route } from 'react-router-dom' 

import NoMatch from 'pages/NoMatch'
import HomePage from 'pages/home'

const AppRoutes = props => (
  <Routes>
    <Route path="/" element={<HomePage {...props} />} />
    <Route path="*" element={<NoMatch />} />
  </Routes>
)

export default AppRoutes
