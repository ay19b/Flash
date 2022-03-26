import React,{useState} from 'react'
import './card.css'
import {BiRotateRight} from 'react-icons/bi'


function Card({id,front,back}) {
   const [rotate, setRotate] = useState(false);

   const toggleLinks = () => {
    setRotate(!rotate);
  };
      return(
               <div className={!rotate?'inner-card':'inner-card rotat'} key={id} >
                        <div className="front-card">
                          <h2>{front}</h2>
                          <BiRotateRight className="btn-rotate" onClick={toggleLinks}/>
                        </div>
                        <div className="back-card">
                          <h2>{back}</h2>
                          <BiRotateRight className="btn-rotate" onClick={toggleLinks}/>
                        </div>
               </div> 
)

}

export default Card;
