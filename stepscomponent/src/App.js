import { useState} from 'react';

const messages = [
  "Learn React *",
  " Apply for jobs .",
  "Invest your new income ",
]

function App () {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function pre() {
    if (step > 1) {
      setStep((s) => s + 1 );
    }
  }
  function next() {
    if ( step < 3) {
      setStep( step + 1 );
    }
  }
  return (
    <div>
      <button className='close' onClick={()=> setIsOpen(!isOpen)}>x</button>

      {isOpen && (
        <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message"> step {step} : {messages[step - 1]}</p>

      <div className="buttons">
        <button 
        style={{ backgroundColor:" #7950f2", color:"#fff"}}
        onClick= {() => pre()}
        >
        Previous
        </button>
        <button 
        style={{ backgroundColor:" #7950f2", color:"#fff"}}
        onClick= {() => next()}
        >Next</button>
      </div>
    </div>
      )}
    </div>
  )
}

export default App; 