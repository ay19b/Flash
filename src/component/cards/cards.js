import React from 'react'
import './card.css'
import {useSelector } from 'react-redux'
import {selectFlash} from '../../features/counter/flashSlice'
import {Container} from '@material-ui/core';
import Empty from '../empty/empty'
import Card from './card'



function Cards() {
    const flash = useSelector(selectFlash);
    return (
     <>
    
     {flash.length>=1?
	    <div className="list-cards">
        <Container>
        {flash.map((item)=>{ 
              return(
                  
              <Card id={item.id}
               front={item.front}
                back={item.back}/>
                    )
              })
            }
        </Container>
			</div>:<Empty />}
		</>  
    )
}

export default Cards