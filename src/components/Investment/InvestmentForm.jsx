import React, { useState } from "react";
import "./InvestmentForm.css";

const InvestmentForm = (props) => {
    const initialUserInput={
        currentSavings:0,
        yearlyContributions: 0,
        expectedReturn: 0,
        duration: 0,
    }
  const [userInput, setUserInput] = useState(initialUserInput);
 

  const inputChangeHandler = (identifier, value) => {
    setUserInput((prevState) => {
        return { ...prevState, [identifier]: value };
      });
  };
  
  const submitHandler = (e) => {
    e.preventDefault();
    props.onCalculateHandler(userInput)
    // props.addYearlyData(results)
    
    // const inputData = {
    //   currentSavings: userInput.currentSavings,
    //   yearlyContributions: userInput.yearlyContributions,
    //   expectedReturn: userInput.expectedReturn,
    //   duration: userInput.duration,
    // };
    // console.log(inputData);
    // props.addUserInput(inputData);
  };
  const resetHandler=()=>{
    setUserInput(initialUserInput)
  }
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings (₹)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput.currentSavings}
            onChange={(e) => {
              inputChangeHandler("currentSavings", e.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings (₹)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput.yearlyContributions}
            onChange={(e) => {
              inputChangeHandler("yearlyContributions", e.target.value);
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput.expectedReturn}
            onChange={(e) => {
              inputChangeHandler("expectedReturn", e.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={(e) => {
              inputChangeHandler("duration", e.target.value);
            }}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={resetHandler} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
