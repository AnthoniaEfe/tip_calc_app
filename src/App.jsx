import "./styles/styles.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


function App() {

  const [bill, setBill] = useState(0);
  const [customTip, setCustomTip] =  useState("");
  const [numPeople, setNumPeople] = useState(0);
  const [tipPercent, setTipPercent] = useState(0)
  const [totalPerPerson, setTotalPerPerson] = useState("")
  const [tipPerPerson, setTipPerPerson] = useState("")

  const clearInput=()=>{
    setBill(0);
    setCustomTip("Custom");
    setNumPeople(0);
  }

  const handleTipButton=(e, percentage)=>{
    e.preventDefault();
    setTipPercent(percentage/100);
    setTipPerPerson((parseFloat(bill)/parseFloat(numPeople)) * parseFloat(tipPercent));
    setTotalPerPerson((parseFloat(bill)/parseFloat(numPeople)) + parseFloat(tipPerPerson));
  }

  return (
    <>
    <h1></h1>
    <div id="card-container">
      <form>
        <label>Bill 
        <FontAwesomeIcon className="icons" icon={faDollarSign} />
          <input type="number" value={bill} placeholder="0" onChange={(e)=>setBill(e.target.value)}/>
       </label>

      <div className="tip-section"> 
        <label htmlFor="tip">Select Tip % </label>
        <div className="tip-btns">
       {[5,10,15,25,50].map((percentage)=>(
        <button 
        key={percentage}
        className="tip"
        onClick={(e)=>{handleTipButton(e, percentage)}}>
          {percentage}%
        </button>
       ))}
        </div>

        <input type="number" name="tip" placeholder="custom" id="custom-tip"
         value={customTip} onChange={(e)=>setCustomTip(e.target.value)}/> 
        </div>
    
    <label>Number of People
          <FontAwesomeIcon className="icons" icon={faUser}  />
          <input type="number" placeholder="0" value={numPeople} onChange={(e)=>{setNumPeople(e.target.value)}}/>
        </label>
      </form>

      <div id="tip-container">
        <div id="tip-calc-container">
        <div id="calc-tip">
          <div className="tip-text">
            <h2>tip amount</h2>
            <p>/ person</p>
            </div>
         <p>${tipPerPerson}</p>
        </div>

        <div id="calc-total-tip">
          <div className="tip-text">
          <h2>total</h2>
          <p>/ person</p>
         </div>
     <p>${totalPerPerson}</p>
        </div>
      </div>

      <button id="reset-btn" onClick={clearInput}>RESET</button>
        
      </div>
    </div>  
    </>
  )
}

export default App
