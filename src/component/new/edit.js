import React, {useState,useEffect,useRef} from 'react'
import './edit.css'
import {addFlash} from '../../features/counter/flashSlice'
import {Link} from 'react-router-dom';
import { useDispatch} from 'react-redux'
import {Button,TextField} from '@material-ui/core';

function Edit() {
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const questionRef = useRef(null)
    const dispatch = useDispatch()
	  const ud=  Math.floor(Math.random() * 1000);

    
    useEffect(() => {
        questionRef.current.focus();
    }, []);


    const add= () => {
      if (question === "" || answer === "") {
        alert("Input is Empty");
      } else {
       dispatch(
        addFlash({
              id:ud,
              question:question,
              answer:answer
            }),
            setQuestion(""),
            setAnswer("")
       ) 
      }
	
    };

    return (
        <div className="edit" >
		  <div className="create">
		     <h2>Create a Flash Card</h2>
         <form>
           
                  <TextField
                     id="outlined-size-small"
                     className='textField'
                     placeholder="Enter front..."
                     value={question}
                     variant="outlined"
                     size="small"
                     ref={questionRef}
                     onChange={e => setQuestion(e.target.value)} 
                     />   

                  <TextField
                     id="outlined-size-small"
                     className='textField'
                     placeholder="Enter Back..."
                     value={answer}
                     variant="outlined"
                     size="small"
                     onChange={e => setAnswer(e.target.value)}
                     />       
          
          
            <Link to={'/cards/'} >
              <Button onClick={() => add()}>ADD CARD</Button>            
            </Link>
            
            </form> 
		 
		  </div>
			 
        </div>
    )
}

export default Edit
