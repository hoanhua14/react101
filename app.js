// TODO
const {useState} = React
const GroceryList = (props) => {

    const [status, setStatus] = useState(false);

    const styleChange = {
        'text-decoration': status ? 'line-through' : 'none',
    }

    const onListItemClick = () => {
        setStatus(!status);
        console.log(status);

    }

    return (
        <ul>
            <li onClick={onListItemClick} style={styleChange}>{props.groceryItems[0]}</li>
            <li>{props.groceryItems[1]}</li>

        </ul>
    )
}
const App = () => {
    const groceryItems = ['watermelon', 'orange', 'banana']
    return (
        <>
            <div>My grocery list</div>
            <GroceryList groceryItems={groceryItems}/>
        </>)
}



ReactDOM.render(<App/>, document.getElementById('app'))
