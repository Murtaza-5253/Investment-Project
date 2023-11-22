import { useState } from "react";
import Header from "./components/Header/Header";
import InvestmentForm from "./components/Investment/InvestmentForm";
import InvestmentTable from "./components/Investment/InvestmentTable";

function App() {
 
  const [userInput, setUserInput] = useState(null)
  // const addYearlyData=(yearlyData)=>{
  //   setInvestData((prev)=>{
  //     return[yearlyData,...prev]
  //   })
  const calculateHandler = (userInput) => {
    setUserInput(userInput)
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

     // per-year results

     
    // setResults(yearlyData)

    // do something with yearlyData ...
  };
  const yearlyData = [];
  if(userInput){
    
    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlyContributions; // as mentioned: feel free to change the shape...
    const expectedReturn = + userInput.expectedReturn / 100;
    const duration = +userInput.duration;


   // The below code calculates yearly results (total savings, interest etc)
   for (let i = 0; i < duration; i++) {
     const yearlyInterest = currentSavings * expectedReturn;
     currentSavings += yearlyInterest + yearlyContribution;
    
     yearlyData.push({
       // feel free to change the shape of the data pushed to the array!
       year: i + 1,
       yearlyInterest: yearlyInterest,
       savingsEndOfYear: currentSavings,
       yearlyContribution: yearlyContribution,
       
     });
   }
  }
  

  return (
    <div>
      <Header />
      <InvestmentForm onCalculateHandler={calculateHandler}/>
      {!userInput && <p style={{textAlign:'center'}}>No investment calculated</p>}
      {userInput && 
      <InvestmentTable investData={yearlyData} initialInvestment={userInput.currentSavings}/>}
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
