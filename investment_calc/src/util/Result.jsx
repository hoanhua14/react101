import Header from "./Header";
import { calculateInvestmentResults } from "./investment";
export default function Result({ results }) {
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
        {results.map((eachYear) => (
          <tr key={eachYear.year}>
            <td>{eachYear.year}</td>
            <td>{eachYear.year}</td>
            <td>{eachYear.interest}</td>
            <td>{eachYear.valueEndOfYear}</td>
            <td>{eachYear.annualInvestment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
