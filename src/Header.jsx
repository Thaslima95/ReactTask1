import React from 'react';
import styled from 'styled-components'
import {ArrowDropDown} from '@styled-icons/material/ArrowDropDown';

 function Header() {
  return (
    <div> <header className="header">
        <h5>Responsive Html Template</h5>
        <nav className="navbar">
            <div className="links">
                <a className="dropdownlinks" href="">HTML Template 1</a>
               <ArrowDropDown className="fa fa-caret-down" size="35"/>
                <div className="dropdown">
                    <a href="" className="linkitems">Link 1</a>
                    <a href="" className="linkitems">Link 2</a>
                    <a href="" className="linkitems">Link 3</a>
                </div>
            </div>
            <div className="links">
                <a className="dropdownlinks" href="">HTML Template 2</a>
                <ArrowDropDown className="fa fa-caret-down" size="35"/>
                <div className="dropdown">
                    <a href="" className="linkitems">Link 1</a>
                    <a href="" className="linkitems">Link 2</a>
                    <a href="" className="linkitems">Link 3</a>
                </div>
            </div>
            <a href="#" id='btn' className="btnsend"> Back to main </a>
        </nav>
    </header></div>
  )
}
export default Header;