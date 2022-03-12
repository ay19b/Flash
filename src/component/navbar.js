import React, { useState, useEffect } from 'react';
import {CgAdd} from "react-icons/cg"
import {ImAddressBook} from "react-icons/im"
import {MdFindInPage} from "react-icons/md"
import {RiCloseLine} from 'react-icons/ri'
import {FaReply} from "react-icons/fa"
import {FiMenu} from "react-icons/fi"
import {Link} from 'react-router-dom';
import './navbar.css'
import {AppBar,Typography,Grid,makeStyles,Container} from '@material-ui/core';





function Navbar() {
	const [showLinks, setShowLinks] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
      };
   
    const handleClick = (e) => {
    e.preventDefault()
    setShowLinks(!showLinks);
  }
   const changeBackground=()=>{
      if(window.scrollY>=60){
        setNavbar(true)
      }else{
        setNavbar(false)
      }
    }

  useEffect(() => {
    changeBackground()
    window.addEventListener('scroll',changeBackground)  
  })

    return (
	 <nav className='nav'>
		 <Container>
	       <Grid container spacing={2}>
		     <Grid item md={4} sm={5} xs={6} className='GridLogo'>
           <Typography variant='h5' className="logo"><FaReply className='svgLogo'/> FlashCard</Typography>
         </Grid>
			   <Grid item md={8} sm={7}>
           
            <ul className={!showLinks ?"listNav":"listNav active"}>
            <div className='head-nav'>
             <Typography variant='h5' className="logo-white"><FaReply className='svgLogo'/> FlashCard</Typography>
             <Typography variant='h4' className='iconClose'><RiCloseLine onClick={toggleLinks} color='white'/></Typography>
           </div>
              <li onClick={toggleLinks}>
              <Link to={"/cards"} > 
                <Typography variant='h6' className='itemNav'>Cards</Typography>
              </Link>
              </li>
              <li onClick={toggleLinks}>
              <Link to={'/edit'}>
               <Typography variant='h6' className='itemNav'>New</Typography>
              </Link>
              </li>
              <li onClick={toggleLinks}>
              <Link to={"/practice"}>
                <Typography variant='h6' className='itemNav'>Practice</Typography>
              </Link>
              </li>
            </ul>
			 </Grid>
       <Grid item xs={5} className='menu'>
			   <Typography variant='h4' className='menuIcon'>
           <FiMenu onClick={toggleLinks}/>
           
         </Typography>
	   	</Grid>
		</Grid>
    
		</Container>  	 
	 </nav>
    )
}

export default Navbar