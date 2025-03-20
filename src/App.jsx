import "./styles/styles.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


function App() {
  const [errors, setErrors] = useState({ bill: false, numPeople: false });
  const [bill, setBill] = useState(0);
  const [customTip, setCustomTip] =  useState("");
  const [numPeople, setNumPeople] = useState(0);
  const [tipPercent, setTipPercent] = useState(0)
  const [totalPerPerson, setTotalPerPerson] = useState("0")
  const [tipPerPerson, setTipPerPerson] = useState("0")

  const clearInput=()=>{
    setBill("");
    setCustomTip("");
    setNumPeople("");
    setTipPercent(0);
    setTipPerPerson(0);
    setTotalPerPerson(0);
    setErrors({ bill: false, numPeople: false });
  }

  const validateInputs = () => {
    let newErrors = { bill: false, numPeople: false };

    if (!bill || parseFloat(bill) <= 0) {
      newErrors.bill = true;
    }
    if (!numPeople || parseInt(numPeople) <= 0) {
      newErrors.numPeople = true;
    }

    setErrors(newErrors);

    return !newErrors.bill && !newErrors.numPeople; // Returns true if there are no errors
  };

  const handleTip=(e, percentage)=>{
    e.preventDefault();
    setTipPercent(percentage/100);

    if (!validateInputs()) return; 

    if (bill && numPeople && tipPercent) {
      const tipAmount = (parseFloat(bill) / parseFloat(numPeople)) * parseFloat(tipPercent);
      const totalAmount = (parseFloat(bill) / parseFloat(numPeople)) + tipAmount;
      setTipPerPerson(tipAmount.toFixed(2));
      setTotalPerPerson(totalAmount.toFixed(2));
    } else {
      setTipPerPerson(0);
      setTotalPerPerson(0);
    }
  }

  return (
    <>
    <h1></h1>
    <div id="card-container">
      <form>
        <label>Bill 
        <FontAwesomeIcon className="icons" icon={faDollarSign} />
        {errors.bill && <p className="error-message">Can't be zero</p>}
          <input type="number" value={bill} placeholder="0" 
          className={errors.bill ? "error-input" : ""} onChange={(e)=>setBill(e.target.value)}/>
       </label>

      <div className="tip-section-container"> 
        <label htmlFor="tip">Select Tip % </label>
        <div className="tip-section">
       {[5,10,15,25,50].map((percentage)=>(
        <button 
        key={percentage}
        className="tip"
        onClick={(e)=>{handleTip(e, percentage)}}>
          {percentage}%
        </button>
       ))}
        </div>

        <input type="number" name="tip" placeholder="custom" id="custom-tip"
         value={customTip} onChange={(e)=>{
          setCustomTip(e.target.value);
          setTipPercent(e.target.value / 100);
          handleTip(e, e.target.value / 100);}
          }/> 
        </div>
    
    <label>Number of People
          <FontAwesomeIcon className="icons" icon={faUser}  />
          {errors.numPeople && <p className="error-message">Can't be zero</p>}
          <input type="number" placeholder="0" value={numPeople}
          className={errors.numPeople ? "error-input" : ""} onChange={(e)=>{setNumPeople(e.target.value)}}/>
        </label>
      </form>

      <div id="tip-container">
        <div id="tip-calc-container">
        <div id="calc-tip">
          <div className="tip-text">
            <h2>tip amount</h2>
            <p>/ person</p>
            </div>
         <p className="tip-value">${tipPerPerson}</p>
        </div>

        <div id="calc-total-tip">
          <div className="tip-text">
          <h2>total</h2>
          <p>/ person</p>
         </div>
     <p className="tip-value">${totalPerPerson}</p>
        </div>
      </div>

      <button id="reset-btn" onClick={clearInput}>RESET</button>
        
      </div>
    </div>  
    </>
  )
}

export default App
