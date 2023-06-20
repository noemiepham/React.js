import React, { useState } from "react";


function App() {
  const [fullname, setName] = useState({
    fName : "",
    lName : ""
  })
  function handlename(event){
   const {name, value} = event.target;
     setName(prevValue => {
      if (name === "fName") {
        return {
          fName : value,
          lName : prevValue.lName
        }
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        }
      }
     })
  }
  
  return (
    <div className="container">
      <h1>Hello {fullname.fName} {fullname.lName}</h1>
      <form>
        <input 
        name="fName"
        onChange={handlename}
        placeholder="First Name"
        value={fullname.fName}
         />
        <input
         name="lName" 
         onChange={handlename}
         placeholder="Last Name" 
         value={fullname.lName}
         />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
