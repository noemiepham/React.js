import React from 'react';
import Arvata from './Avatar';
import Detail from './Detail';
function Card(props){
     return (   
      
          <div className="card">
               <div className="top">
                    <h2 className="name">{props.name}</h2>
                    <Arvata img={props.img}/>
               
               </div>
               <div className="bottom">
               <Detail  detailInfo = {props.tel}/>
               <Detail  detailInfo = {props.email}/>
               </div>
          </div>
     )
}

export default Card;