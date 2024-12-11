import { useState } from "react";

export default function Player({ player, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  let playerName = <span className="player-name">{player}</span>;
  let buttonName = "Edit";
  const handleEditClicking = () => {
    setIsEditing(true);
  };
  if (isEditing) {
    buttonName = "Save";
    playerName = <input type="text" required />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClicking}>{buttonName}</button>
    </li>
  );
}
