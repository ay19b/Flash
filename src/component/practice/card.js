import React from 'react'
import './itemSlide.css'



function ItemSlide({id,question,answer}) {

return(
               <div className='inner-card' key={id}>
                        <div className="front-card" >
                          <h2>{question}</h2>
                        </div>
                        <div className="back-card">
                          <h2>{answer}</h2>
                        </div>
               </div> 
)

}

export default ItemSlide
