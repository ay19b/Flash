import React from 'react'
import {Link} from 'react-router-dom';
import {Button,Container} from '@material-ui/core';
import './empty.css'

const Empty = () => (
  <div className="empty">
    <Container>
    <div className='content'>
      <h1>
        You have no flash cards.
      </h1>
      <Link to={'/edit'} >
        <Button>Make One</Button>            
      </Link>
    </div>
    </Container>
  </div>
)

export default Empty