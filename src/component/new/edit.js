import React, {useState,useEffect,useRef} from 'react'
import './edit.css'
import {addFlash} from '../../features/counter/flashSlice'
import {Link} from 'react-router-dom';
import { useDispatch} from 'react-redux'

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
            <div className="input">
                 <label>Question</label>
                 <input placeholder="Enter Term" 
                        value={question}
					              onChange={e => setQuestion(e.target.value)}
					              type="text"
                        ref={questionRef}
                        />
                 </div>
            <div className="input">
                <label>Answer</label>
                <input placeholder="Enter Definition"
                       value={answer}
                       onChange={e => setAnswer(e.target.value)}
                       type="text"
                       />
            </div>
            <Link to={'/cards/'} >
              <button onClick={() => add()}>ADD CARD</button>            
            </Link>
            
            </form> 
		 
		  </div>
			 
        </div>
    )
}

export default Edit
