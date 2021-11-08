import React from 'react'
import './cards.css'
import { useDispatch,useSelector } from 'react-redux'
import {selectFlash} from '../../features/counter/flashSlice'
import Empty from '../empty'
import Card from './card'


function Cards() {
    const flash = useSelector(selectFlash);

    return (
     <>
     {flash.length>=1?
	    <div className="list-cards">
        {flash.map((item)=>{ 
              return(
                  
              <Card id={item.id}
               question={item.question}
                answer={item.answer}/>
                    )
              })
            }
			</div>:<Empty />}
		</>  
    )
}

export default Cards