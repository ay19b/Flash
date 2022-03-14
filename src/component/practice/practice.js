import React from 'react';
import './practice.css';
import Card from './card';
import {useSelector } from 'react-redux';
import {selectFlash} from '../../features/counter/flashSlice'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Empty from '../empty/empty';
import {Container} from '@material-ui/core';


function Practice() {
    const flash = useSelector(selectFlash);
	  const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
	
	  <>
	    {flash.length>=1?<div className="cards">
        <Container>
          <AutoplaySlider
              play={false}
              cancelOnInteraction={false}
              interval={3000}
			      >
				  
          {flash.map((item)=>{
                const{id,front,back} = item;
                return(
                 
                <div className="card" key={id}>
				           <Card front={front}
                        id={id}
                        back={back}
                        key={id}/>
			       	  </div>
                 )
               })}

	         </AutoplaySlider>
        </Container>
	      </div>: <Empty /> }
	  </>	
    )
}

export default Practice;

