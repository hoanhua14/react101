import { useState } from "react";
import Header from "./util/Header";
import Result from "./util/Result";
function App() {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [annualInvestment, setAnnualInvestment] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");
  const handleInitialInvestmentChange = (e) => {
    setInitialInvestment(e.target.value);
    console.log(initialInvestment);
  };
  const handleAnnualInvestmentChange = (e) => {
    setAnnualInvestment(e.target.value);
    console.log(annualInvestment);
  };
  const handleExpectedReturnChange = (e) => {
    setExpectedReturn(e.target.value);
    console.log(expectedReturn);
  };
  const handleDurationChange = (e) => {
    setDuration(e.target.value);
    console.log(duration);
  };
  return (
    <>
      <Header />
      <div id="user-input" className="input-group">
        <label>initial investment</label>
        <input
          value={initialInvestment}
          onChange={handleInitialInvestmentChange}
        ></input>
        <label>annual investment</label>
        <input
          value={annualInvestment}
          onChange={handleAnnualInvestmentChange}
        ></input>

        <label>expected return</label>
        <input
          value={expectedReturn}
          onChange={handleExpectedReturnChange}
        ></input>
        <label>duration</label>
        <input value={duration} onChange={handleDurationChange}></input>
      </div>
      <Result
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration}
      />
    </>
  );
}

export default App;
