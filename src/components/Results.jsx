import React from "react";
import { calculateInvestmentResults } from "../util/investment";

const Results = ({ input }) => {
//Co el '+' adeñante convierto los valores de entrada en numeros antes de pasarlos a calculateInvestmentResults.
  const userInput = {
    initialInvestment: +input.initialInvestment,
    annualInvestment: +input.annualInvestment,
    expectedReturn: +input.expectedReturn,
    duration: +input.duration,
  };


  const resultsData = calculateInvestmentResults(userInput)
  console.log(resultsData)
  return (
    <div>
      <p>Results....</p>  
    </div>
  );
};

export default Results;
