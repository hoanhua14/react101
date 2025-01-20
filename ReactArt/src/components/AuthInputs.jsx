import { useState } from "react";
import { styled } from "styled-components";
import StyledButton from "./Button.jsx";
import Input from "./Input.jsx";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const passwordNotValid = submitted && enteredPassword.trim().length < 6;
  const emailNotValid = submitted && !enteredEmail.includes("@");

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <Input
          label="Email"
          type="email"
          invalid={emailNotValid}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />

        <Input
          label="Password"
          type="password"
          invalid={passwordNotValid}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <StyledButton className="button" onClick={handleLogin}>
          Sign In
        </StyledButton>
      </div>
    </div>
  );
}
