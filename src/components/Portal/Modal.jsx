import React, {Component} from 'react'
import Portal from './Portal'
import styled from 'styled-components'
import Icon from '../Icon'
const ModalWrapper = styled.div`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
`

const ModalCard = styled.div`
 min-width: 320px;
 z-index: 10;
 position: relative;
 background: teal;
 border-radius: 5px;
 padding: 20px 10px 40px;
 box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
 margin-bottom: 100px;
`

const ClosedButton = styled.button`
 position: absolute;
 border: none;
 background-color: transparent;
 padding: 10px;
 right: 0;
 top: 0;
`

const BackDrop = styled.div`
 position: absolute;
 height: 100%;
 width: 100%;
 top: 0;
 left: 0;
 background-color: grey;
 opacity: 0.3;
`
class Modal extends Component {
 render() {
  const {children, toggle, on} = this.props
  return (
   <>
    <Portal>
     {on && (
      <ModalWrapper>
       <ModalCard>
        {this.props.children}

        <ClosedButton onClick={toggle}>
         <Icon name="close" />
        </ClosedButton>
       </ModalCard>
       <BackDrop onClick={toggle} />
      </ModalWrapper>
     )}
    </Portal>
   </>
  )
 }
}

export default Modal
