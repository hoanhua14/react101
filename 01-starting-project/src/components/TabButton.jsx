export default function TabButton({ children }) {
  function handleClick() {
    console.log("here");
  }
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
