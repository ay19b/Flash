import React from 'react'
import './navbar.css'
import {CgAdd} from "react-icons/cg"
import {ImAddressBook} from 'react-icons/im'
import {MdFindInPage} from "react-icons/md"
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav >
             <h1>FlashCard</h1>
             <ul className="list-nav">
			  <li><Link className="nav-link" to={"/cards"}> <h4>Cards</h4> <MdFindInPage /></Link></li>
              <li><Link className="nav-link" to={'/edit'}><h4>New</h4> <CgAdd /></Link></li>
              <li><Link className="nav-link" to={"/practice"}><h4>Practice</h4> <ImAddressBook /></Link></li>
             </ul>
           
        </nav>
    )
}

export default Navbar