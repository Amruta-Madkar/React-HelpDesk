import React from 'react';
import Data from './Data';



function Card(props){

console.log(Data[1].name);
    
    return (
        <>
    <div className="container">
      <div className="card">
          <div className="card-header">
          <img src={props.img} alt="rover" />
        </div>
        <div className="card-body">
          <span className="card-info">{props.name} </span>
          <div>
              <a href={props.link} target='_blank'>
                  <button className='button'>Watch Now</button>
              </a>
          </div>
          
         
         </div> 
        </div>
      </div>
      
      
      </>

        
    );

    






}

export default Card;