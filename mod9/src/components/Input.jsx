export default function Input({ isTextArea, name }) {
  return (
    <p>
      <label>{name}</label>
      {isTextArea ? <textarea /> : <input></input>}
    </p>
  );
}
