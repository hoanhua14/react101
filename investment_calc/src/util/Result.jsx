import Header from "./Header";
import { calculateInvestmentResults, formatter } from "./investment";
export default function Result({ inputData }) {
  let results = calculateInvestmentResults(inputData);
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {results.map((eachYear) => {
          const totalInterest =
            eachYear.valueEndOfYear -
            eachYear.annualInvestment * eachYear.year -
            initialInvestment;
          const totalInvested = eachYear.valueEndOfYear - totalInterest;
          return (
            <tr key={eachYear.year}>
              <td>{eachYear.year}</td>
              <td>{formatter.format(eachYear.valueEndOfYear)}</td>
              <td>{formatter.format(eachYear.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
