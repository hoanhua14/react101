import reactLogo from "../assets/react-core-concepts.png";

function picker(max) {
  return Math.floor(Math.random() * (max + 1));
}

const subText = ["Core", "Crucial", "Fundamental"];

export default function Header() {
  const word = subText[picker(2)];
  return (
    <header>
      <img src={reactLogo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {word} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
