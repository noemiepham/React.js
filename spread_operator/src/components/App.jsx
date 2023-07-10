import React, { useState } from "react";
import Input from "./Input";


function App(){
     const [items, setItems] = useState([]);
     function handleItems(inputText){
          setItems(prev => {return [...prev, inputText]});
    
     }
     return (
     <div className="container">
          <div className="heading">
               <h1>TodoList</h1>
          </div>
          <Input 
          addOn = {handleItems}
          />    
          <div>
               <ul>
                    {items.map(item => (
                         <li key={item}
                         id = {item}
                         text={item}
                         > {item} </li>))}
               </ul>
          </div>
     </div>
     );
}


export default App;