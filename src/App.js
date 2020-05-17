import React, {createContext, Component, useContext} from 'react'

import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes'
import Layout from './components/hoc/layout'

function App() {
 const context = UserContext()
 return (
  <Router>
   <Layout>
    <Routes />
   </Layout>
  </Router>
 )
}

export default App
