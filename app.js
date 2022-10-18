// TODO
const { useState } = React;
const GroceryList = (props) => (
  <div>
    <h2>Grocery List</h2>
    <ul>
      {props.groceryItems.map((item) => <GroceryListItem item = {item}/>)}
    </ul>
  </div>
);

const GroceryListItem = (props) => {
  const [isDone, setIsDone] = useState(false);
  const onMouseOver = () => setIsDone(!isDone);
  const style = {fontWeight: isDone ? 'bold' : 'normal'};
  return (
  <li style={style} onMouseOver={onMouseOver}>{props.item}</li>
  )
};

ReactDOM.render(<GroceryList groceryItems = {['Eggs', 'Milk', 'Cheese']}/>, document.getElementById('app'));