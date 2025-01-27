import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    setSubmitted(true);
  };
  return (
    <section id="player">
      <h2>Welcome {submitted ? { enteredPlayerName } : "unknown"}</h2>
      <p>
        <input
          type="text"
          value={enteredPlayerName}
          onChange={handleNameChange}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
