export default function TabButton({ children, isSelected, test, ...props }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children} {test ? test : null}
      </button>
    </li>
  );
}
