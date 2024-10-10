import { CORE_CONCEPTS } from "../data";
export default function CoreConcept() {
  return (
    <div>
      {CORE_CONCEPTS.map((concept) => {
        return (
          <li key={concept.title}>
            <img src={concept.image} alt={concept.title}></img>
            <h1>{concept.title}</h1>
            <p>{concept.description}</p>
          </li>
        );
      })}
    </div>
  );
}
