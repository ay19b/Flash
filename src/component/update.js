import React, {useState} from 'react'
import './new/edit.css'
import {updateFlash} from '../features/counter/flashSlice'
import {selectFlash} from '../features/counter/flashSlice'
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'


function Update() {
    const { id } = useParams();
    const flash = useSelector(selectFlash);
    const item = flash.find(e=>e.id == id)
    let [question, setQuestion] = useState(item.question);
    let [answer, setAnswer] = useState(item.answer);
   	const dispatch = useDispatch()
    


       const update= () => {
        if (question == "" || answer == "") {
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
            <div className="input">
                 <label>Question</label>
                 <input placeholder="Enter Term" 
                        value={question}
					    onChange={e => setQuestion(e.target.value)}
					    type="text"
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
                <button onClick={() => update()}>UPDATE</button>                
            </Link> 
			</div>
        </div>



    )
}

export default Update;
