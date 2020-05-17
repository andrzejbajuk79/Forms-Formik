import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
 position: fixed;
 top: 0;
 z-index: 70;
 left: 0;
 background-color: rgba(0, 0, 0, 0.7);
 width: 100%;
 height: 100vh;
 opacity: ${({on}) => (on ? '1' : '0')}; 
 /* visibility: ${({on}) => (on ? 'visible' : 'hidden')};
 transition: all 0.1s;  */
`
//jak klikniemy uruchmiamy useState w Profile.js
const BackDrop = ({on, toggle}) => {
 return <Wrapper onClick={toggle} on={on} />
}
export default BackDrop
