import React, {Component} from 'react'

export default class Toggle extends Component {
 state = {
  on: false,
 }
 toggle = () => {
  console.log('klik')

  this.setState({on: !this.state.on})
 }
 render() {
  const {children} = this.props

  return children({
   on: this.state.on,
   toggle: this.toggle,
  })
 }
}
