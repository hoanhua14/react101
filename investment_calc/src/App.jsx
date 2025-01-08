import { useState } from "react";
import Header from "./util/Header";
import Result from "./util/Result";
import UserInput from "./util/UserInput";
import { calculateInvestmentResults } from "./util/investment";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 100,
    expectedReturn: 100000,
    duration: 12,
  });
  // let results = calculateInvestmentResults(userInput);
  const handleChange = (inputId, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputId]: +newValue,
      };
    });
  };
  const inputIsValid = userInput.duration >= 1;
  console.log(userInput);
  return (
    <>
      <Header />
      <UserInput
        userInput={userInput}
        setUserInput={setUserInput}
        handleChange={handleChange}
      />
      {inputIsValid && <Result inputData={userInput} />}
      {!inputIsValid && (
        <p className="center">Pleae enter a duration greater than zero</p>
      )}
    </>
  );
}

export default App;
