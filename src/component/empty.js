import React from 'react'
import {Link} from 'react-router-dom';
import {Typography,Grid,Button,makeStyles,Container,TextField} from '@material-ui/core';
import './empty.css'

const Empty = () => (
  <div className="empty">
    <div className='content'>
      <h1>
        You have no flash cards
      </h1>
      <Link to={'/edit'} >
        <Button>Make One</Button>            
      </Link>
  
    </div>
    
  </div>
)

export default Empty