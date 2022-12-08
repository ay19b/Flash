import React from 'react'
import {Dialog,DialogContentText,DialogTitle,DialogActions,DialogContent,Button} from '@material-ui/core'
import {MdClose} from "react-icons/md";
import {FaTrash} from "react-icons/fa";
import { useParams} from 'react-router-dom';
import {selectFlash} from '../../features/counter/flashSlice'
import { useSelector,useDispatch } from "react-redux";
import {deleteFlash} from '../../features/counter/flashSlice'
import './card.css'


export default function AlertDialog({open,handleClose}) {
  const prod = useSelector(selectFlash);
  const dispatch = useDispatch();
  const { Id  } = useParams();
  const flash =prod.find(e=>e.id == Id)
  
  const Remove= () => {
    dispatch(deleteFlash(flash.id))
    handleClose()
  }


  return (
    
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description" 
      >
      <DialogTitle id="responsive-dialog-title">
        {"Remove from cards"}
      <MdClose onClick={handleClose}/>
      </DialogTitle>
      <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Are you sure you want to remove this item from the cards?
      </DialogContentText>
      </DialogContent>
      <DialogActions>
       <Button variant="outlined"  startIcon={<FaTrash />}  onClick={Remove}  autoFocus>
         Remove Product 
       </Button>
      
      </DialogActions>
     </Dialog>
    
   
     );
   }