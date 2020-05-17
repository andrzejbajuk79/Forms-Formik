import React, {Fragment, Component} from 'react'
import ReactDOM from 'react-dom'

const portalRoot = document.getElementById('portal')
export default class Portal extends Component {
 constructor() {
  super()
  this.el = document.createElement('div')
 }
 componentDidMount = () => {
  portalRoot.appendChild(this.el)
 }
 componentUnmount = () => {
  portalRoot.removeChild(this.el)
 }
 render() {
  const {children} = this.props
  return ReactDOM.createPortal(children, this.el)
 }
}
