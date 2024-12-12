import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  let editableName = <span className="player-name">{playerName}</span>;
  const handleEditClick = () => {
    //best practice to avoid stale data
    setIsEditing((editing) => !editing);
    console.log(isEditing);
  };
  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };
  if (isEditing) {
    editableName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleNameChange}
      />
    );
  }
  return (
    <li>
      <span className="player">
        {editableName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
