import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";
export default function CoreConcepts() {
  return (
    <Section id={"core-concepts"} title={"Core concepts"}>
      <ul>
        <CoreConcept />
      </ul>
    </Section>
  );
}
