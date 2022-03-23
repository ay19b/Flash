import React, {useState,useEffect} from 'react'
import './card.css'
import {GiTrashCan} from 'react-icons/gi'
import {HiPencilAlt} from 'react-icons/hi'
import { useDispatch} from 'react-redux'
import AlertDialog from './dialoge'
import {deleteFlash} from '../../features/counter/flashSlice'
import {Link} from 'react-router-dom';



function Card({id,front,back}) {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                          <Link to={`/${id}`} key={id}>
                            <GiTrashCan color="black" onClick={handleClickOpen}/>
                          </Link>
                          </div>
                          <AlertDialog  open={open} handleClose={handleClose} />
                  </div>
    
 )

}

export default Card