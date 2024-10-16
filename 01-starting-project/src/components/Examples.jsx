import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
export default function Examples() {
  const [selected, setSelected] = useState();

  function handleSelect(selected) {
    setSelected(selected);
  }

  const renderText = () => {
    return (
      <>
        {!selected ? (
          <>pls choose smth</>
        ) : (
          <>
            <h3>{EXAMPLES[selected]?.title}</h3>
            <p>{EXAMPLES[selected]?.description}</p>
            <pre>{EXAMPLES[selected]?.code}</pre>
          </>
        )}
      </>
    );
  };
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selected === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selected === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selected === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selected === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>

      {renderText()}
    </section>
  );
}
