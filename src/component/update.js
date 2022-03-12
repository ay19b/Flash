import React,{useState} from 'react'
import './new/edit.css'
import {updateFlash} from '../features/counter/flashSlice'
import {selectFlash} from '../features/counter/flashSlice'
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import {Typography,Grid,Button,makeStyles,Container,TextField} from '@material-ui/core';


function Update() {
    const { id } = useParams();
    const flash = useSelector(selectFlash);
    const item = flash.find(e=>e.id == id)
    let [question, setQuestion] = useState(item.question);
    let [answer, setAnswer] = useState(item.answer);
   	const dispatch = useDispatch()

       const update= () => {
        if (question === "" || answer === "") {
          alert("Input is Empty");
        } else {
         dispatch(
            updateFlash({
                id:id,
                question:question,
                answer:answer
              }),
              setQuestion(""),
              setAnswer("")
         ) 
        }
      };
    
    return (
       
        <div className="edit" key={item.id}>
		    <div className="create">
			<h2>update a Flash Card</h2>
            <form>
            <TextField
                     id="outlined-size-small"
                     className='textField'
                     label="front Card..."
                     value={question}
                     variant="outlined"
                     size="small"
                     onChange={e => setQuestion(e.target.value)} 
                     />   

                  <TextField
                     id="outlined-size-small"
                     className='textField'
                     label="Back Card..."
                     value={answer}
                     variant="outlined"
                     size="small"
                     onChange={e => setAnswer(e.target.value)}
                     />   
            
            <Link to={'/cards/'} >
                <Button onClick={() => update()}>UPDATE</Button>                
            </Link> 
            </form>
			</div>
        </div>



    )
}

export default Update;
