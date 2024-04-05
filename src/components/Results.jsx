import React from "react";
import { calculateInvestmentResults } from "../util/investment";

const Results = ({ input }) => {
  const resultsData = calculateInvestmentResults(input)
  console.log(resultsData)
  return (
    <div>
      <p>Results....</p>
    </div>
  );
};

export default Results;
