import React from 'react'
import './practice.css'
import Card from './card'
import {useSelector } from 'react-redux'
import {selectFlash} from '../../features/counter/flashSlice'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Empty from '../empty'

function Practice() {
    const flash = useSelector(selectFlash);
	  const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
	
	  <>
	    {flash.length>=1?<div className="cards">
          <AutoplaySlider
              play={false}
              cancelOnInteraction={false}
              interval={3000}
			      >
				  
          {flash.map((item)=>{
                const{id,question,answer} = item;
                return(
                 
                <div className="card">
				           <Card question={question}
                        id={id}
                        answer={answer}/>
			       	  </div>
                 )
               })}

	</AutoplaySlider>
	</div>: <Empty /> }
	</>	
    )
}

export default Practice;

