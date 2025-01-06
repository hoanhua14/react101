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
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>initial investment</label>

            <input
              type="number"
              value={initialInvestment}
              onChange={handleInitialInvestmentChange}
            ></input>
          </p>
          <p>
            <label>annual investment</label>
            <input
              type="number"
              value={annualInvestment}
              onChange={handleAnnualInvestmentChange}
            ></input>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>expected return</label>
            <input
              type="number"
              value={expectedReturn}
              onChange={handleExpectedReturnChange}
            ></input>
          </p>
          <p>
            <label>duration</label>
            <input
              type="number"
              value={duration}
              onChange={handleDurationChange}
            ></input>
          </p>
        </div>
      </section>
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
