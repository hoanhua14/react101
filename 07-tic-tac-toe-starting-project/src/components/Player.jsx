import { useState } from "react";

export default function Player({ player, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  let playerName = <span className="player-name">{player}</span>;
  let buttonName = "Edit";
  const handleEditClick = () => {
    //best practice to avoid stale data
    setIsEditing((editing) => !editing);
  };
  if (isEditing) {
    buttonName = "Save";
    playerName = <input type="text" required />;
  } else {
    buttonName = "Edit";
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonName}</button>
    </li>
  );
}
