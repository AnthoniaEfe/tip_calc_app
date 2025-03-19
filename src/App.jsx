import "./styles/styles.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faDollarSign } from "@fortawesome/free-solid-svg-icons";


function App() {


  return (
    <>
    <h1></h1>
    <div id="card-container">
      <form>
        <label>Bill 
        <FontAwesomeIcon className="icons" icon={faDollarSign} />
          <input type="number" name="bill-input" id="bill-input" placeholder="0"/>
       </label>

      <div className="tip-section"> 
        <label htmlFor="tip">Select Tip % </label>
        <button className="tip" name="tip">5%</button>
        <button className="tip" name="tip">10%</button>
        <button className="tip" name="tip">15%</button>
        <button className="tip" name="tip">25%</button>
        <button className="tip" name="tip">50%</button>
        <input type="number" name="tip" placeholder="custom" id="custom-tip"/> 
        </div>
    
    <label>Number of People
          <FontAwesomeIcon className="icons" icon={faUser}  />
          <input type="number" name="people-num" id="people-num" placeholder="5"/>
        </label>
      </form>

      <div id="tip-container">
        <div id="tip-calc-container">
        <div id="calc-tip">
          <div className="tip-text">
            <h2>tip amount</h2>
            <p>/ person</p>
            </div>
          <p className="tip-value">$34.55</p>
        </div>

        <div id="calc-total-tip">
          <div className="tip-text">
          <h2>total</h2>
          <p>/ person</p>
         </div>
          <p className="tip-value">$50.85</p>
        </div>
      </div>

      <button id="reset-btn">RESET</button>
        
      </div>
    </div>  
    </>
  )
}

export default App
