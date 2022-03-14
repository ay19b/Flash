import React, {useState,useEffect,useRef} from 'react'
import './edit.css'
import {addFlash} from '../../features/counter/flashSlice'
import {useHistory} from 'react-router-dom';
import { useDispatch} from 'react-redux'
import {TextField} from '@material-ui/core';

function Edit() {
    let history = useHistory();
    const [front, setFront] = useState("")
    const [back, setBack] = useState("")
    const questionRef = useRef(null)
    const dispatch = useDispatch()
	  const ud=  Math.floor(Math.random() * 1000);
    const [errorFront, setErrorFront] = React.useState("");
    const [errorBack, setErrorBack] = React.useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    
    
   
    const handleSubmit = (e) => {
      e.preventDefault();
      if(front === ""){
        setErrorFront('Please fill out this field')   
      }
      if(back === ""){
        setErrorBack("Please fill out this field")
      }
      if(front && back){
        add();
        history.push("/cards");
      }
      setIsSubmit(true);
    };

    const add= () => {
     dispatch(
        addFlash({
              id:ud,
              front:front,
              back:back
            }),
            setFront(""),
            setBack("")
       ) 
    };
    useEffect(() => {
      questionRef.current.focus();
  }, []);

    return (
        <div className="edit" >
		  <div className="create">
		     <h2>Create a Flash Card</h2>
         <form onSubmit={handleSubmit}>
           
                  <TextField
                     id="outlined-size-small"
                     className='textField'
                     placeholder="Enter front..."
                     value={front}
                     error={errorFront && !front}
                     helperText={!front && errorFront}
                     variant="outlined"
                     size="small"
                     ref={questionRef}
                     onChange={e => setFront(e.target.value)} 
                     />   
                 
                  <TextField
                     id="outlined-size-small"
                     className='textField'
                     placeholder="Enter Back..."
                     value={back}
                     error={errorBack && !back}
                     helperText={!back && errorBack}
                     variant="outlined"
                     size="small"
                     onChange={e => setBack(e.target.value)}
                     />       
          
          
               <button>ADD CARD</button>
            
            </form> 
		 
		  </div>
			 
        </div>
    )
}

export default Edit