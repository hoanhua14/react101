import { useState } from "react";
import Header from "./util/Header";
import Result from "./util/Result";
import UserInput from "./util/UserInput";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 100,
    expectedReturn: 100000,
    duration: 12,
  });
  return (
    <>
      <Header />
      <UserInput userInput={userInput} setUserInput={setUserInput} />
      <Result />
    </>
  );
}

export default App;
