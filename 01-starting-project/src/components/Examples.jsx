import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";
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
    <Section id={"examples"} title={"Examples"}>
      <menu>
        <TabButton
          isSelected={selected === "components"}
          onClick={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selected === "jsx"}
          onClick={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selected === "props"}
          onClick={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selected === "state"}
          onClick={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>

      {renderText()}
    </Section>
  );
}
