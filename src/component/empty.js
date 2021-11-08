import React from 'react'
import {Link} from 'react-router-dom';
import './empty.css'

const Empty = () => (
  <div className="empty">
    <div className='content'>
      <h1 className="">
        You have no flash cards
      </h1>
      <Link to={'/edit'} >
        <button>Make One</button>            
      </Link>
  
    </div>
    
  </div>
)

export default Empty