import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

class Header extends Component {
 state = {
  showNav: false,
 };
 onHideNav = () => {
  this.setState({showNav: false});
 };

 render() {
  return (
   <header className="checkboxes">
    <Link to="/formik1">Form1</Link>
    <Link to="/formik2">form2</Link>
    <Link to="/formik3">form3</Link>
    <Link to="/example">suggest</Link>
   </header>
  );
 }
}

export default Header;
