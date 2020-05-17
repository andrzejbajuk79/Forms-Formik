import React from 'react'
import logo from '../logo.svg'
import '../App.css'
import {Modal} from '../elements'
import {Toggle, Portal} from '../Utils'

function Home() {
 return (
  <>
   <div className="App">
    <div className="container-page ">
     <div className="row">
      <div className="col-md-10 offset-md-1 col-xs-12">
       <img src={logo} className="App-logo" alt="logo" />
      </div>
     </div>

     <Toggle>
      {({on, toggle}) => {
       return (
        <>
         <button onClick={toggle}>Login</button>
         <Modal on={on} toggle={toggle}>
          <h3>moj </h3>
         </Modal>
        </>
       )
      }}
     </Toggle>
    </div>
   </div>
  </>
 )
}

export default Home
