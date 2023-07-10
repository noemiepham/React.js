import React, {useState} from "react";

function Input(props){
     const [inputText, setInput] = useState("");
     
     function handleText(event){
          const newText = event.target.value;
          setInput(newText);
     }
     return (
          <div className="form">
               <input type="text" value={inputText} onChange={handleText}
               className="form-control" name="" placeholder="" />
               <button
               onClick ={() => {
                    props.addOn(inputText);
                    setInput("");
                 }}
               >
               <span>Add</span>
               </button>
          </div>
     )
}
export default Input