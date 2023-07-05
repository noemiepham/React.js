import React, { useState } from "react";

function App(){
     const [inputText, setInput] = useState("");
     const [items, setItems] = useState([]);
     function handleText(event){
          const newText = event.target.value;
          setInput(newText);
     }
     function handleItems(prev){
          setItems(prev => {return [...prev, inputText]});
          setInput("")
     }
     return (
     <div className="container">
          <div className="heading">
               <h1>TodoList</h1>
          </div>
          <div className="form">
               <input type="text" value={inputText} onChange={handleText}
               className="form-control" name="" placeholder="" />
          <button
          onClick={handleItems}
          ><span>Add</span></button>
          </div>
          <div>
               <ul>
                    {items.map(item => (<li key={item}> {item} </li>))}
               </ul>
          </div>
     </div>
     );
}


export default App;