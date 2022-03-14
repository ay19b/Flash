import React from 'react'
import './card.css'
import {GiTrashCan} from 'react-icons/gi'
import {HiPencilAlt} from 'react-icons/hi'
import { useDispatch} from 'react-redux'
import {deleteFlash} from '../../features/counter/flashSlice'
import {Link} from 'react-router-dom';



function Card({id,front,back}) {
    const dispatch = useDispatch()

    return (

                  <div className="bat" key={id}>
                          <div className="inf">
                            <h3>{front}</h3>
                            <p>{back}</p>
                          </div>
                          
                          <div className="tools">
                          <Link to={`/update/${id}`} key={id}>
                             <HiPencilAlt  />
                          </Link>
                          <GiTrashCan color="black" onClick={() =>dispatch(deleteFlash(id))}/>
                          </div>
                  </div>
    
 )

}

export default Card