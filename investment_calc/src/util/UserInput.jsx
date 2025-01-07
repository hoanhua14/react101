import { useState } from "react";
export default function UserInput(userInput, setUserInput) {
  const handleChange = (inputId, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputId]: newValue,
      };
    });
    console.log(userInput);
  };
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>

          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) => handleChange("initialInvestment", e.target.value)}
          ></input>
        </p>
        <p>
          <label>annual investment</label>

          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(e) => handleChange("annualInvestment", e.target.value)}
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) => handleChange("expectedReturn", e.target.value)}
          ></input>
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(e) => handleChange("duration", e.target.value)}
          ></input>
        </p>
      </div>
    </section>
  );
}
