import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import HeaderCSS from './Header.module.css';

function Header() {
    return (
       <>
       <h1 className={HeaderCSS.header}>
           <div className={HeaderCSS.headercontainer}>
               <Link to='/' className={HeaderCSS.headertext}>EVENTS</Link>
               
           </div>
       </h1>
       </>
    )
}

export default Header
