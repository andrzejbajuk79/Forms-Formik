import React from 'react'
import logo from '../logo.svg'
import '../App.css'
import Toggle from './advanced/ToggleRenderProps'

function Home() {
 return (
  <div className="App">
   <img src={logo} className="App-logo" alt="logo" />

   <Toggle
    render={({on, toggle}) => {
     return (
      <>
       {on && <h2>may name</h2>}
       <button onClick={toggle}>show/hide</button>
      </>
     )
    }}
   />
  </div>
 )
}

export default Home
