import React,{useState} from 'react'
import './edit.css'
import {updateFlash} from '../../features/counter/flashSlice'
import {selectFlash} from '../../features/counter/flashSlice'
import { useParams,useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import {Button,TextField} from '@material-ui/core';


function Update() {
    const { id } = useParams();
    let history = useHistory();
    const flash = useSelector(selectFlash);
    const item = flash.find(e=>e.id == id)
    let [front, setFront] = useState(item.front);
    let [back, setBack] = useState(item.back);
    const [errorFront, setErrorFront] = React.useState("");
    const [errorBack, setErrorBack] = React.useState("");
    const [isSubmit, setIsSubmit] = useState(false);
   	const dispatch = useDispatch()



       const handleSubmit = (e) => {
        e.preventDefault();
        if(front === ""){
          setErrorFront('Please fill out this field')   
        }
        if(back === ""){
          setErrorBack("Please fill out this field")
        }
        if(front && back){
            update();
            history.push("/cards");
        }
        setIsSubmit(true);
      }; 
       const update= () => {
        dispatch(
            updateFlash({
                id:id,
                front:front,
                back:back
              }),
              setFront(""),
              setBack("")
         ) 
      };
    
    return (
       
        <div className="edit" key={item.id}>
		    <div className="create">
			<h2>update a Flash Card</h2>
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
                <div className="btns">
                 <button>UPDATE</button>
                 <Link to={"/cards"}> 
                   <button>CANCEL</button>
                 </Link>
                </div>
            </form>
			</div>
        </div>



    )
}

export default Update;
