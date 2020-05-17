import React, {Component} from 'react'
import styled from 'styled-components'

import {elevation, transition, colors, absolute} from '../Utils'

import Icon from './Icon'
import Portal from '../Utils/Portal'

const ModalWrapper = styled.div`
 ${absolute({})};
 height: 100%;
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
`

const ModalCard = styled.div`
 min-width: 320px;
 color: ${colors.purp};
 z-index: 100;
 position: relative;
 margin-bottom: 100px;
 background: white;
 border-radius: 5px;
 padding: 20px 10px 40px;
 ${elevation[3]};
 ${transition({})};
 &:hover {
  ${elevation[4]}
 }
`

const ClosedButton = styled.button`
 ${absolute({
  y: 'top',
  x: 'right',
 })};
 border: none;
 background-color: transparent;
 padding: 10px;
`

const BackDrop = styled.div`
 ${absolute({})};
 height: 100%;
 width: 100%;
 background-color: grey;
 opacity: 0.3;
`
class Modal extends Component {
 render() {
  console.log(this.props)

  const {toggle, on} = this.props
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
