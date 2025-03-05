import Input from "./Input";
export default function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <Input name={"Title"} />
      <Input name={"Description"} isTextArea={true} />
      <Input name={"Due Date"} />
    </div>
  );
}
