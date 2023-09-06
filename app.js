// TODO
const {useState} = React

const GroceryItem = (props) => {
    const [status, setStatus] = useState(false);
    const styleChange = {
        textDecoration: status ? 'line-through' : 'none',
        cursor: 'pointer',
    }
    const handleClick = () => {
        setStatus(!status);
        console.log(status);
    };
    const onMouseEnter = (e) => {
        e.target.style.fontWeight = 'bold';
    };

    const onMouseLeave = (e) => {
        e.target.style.fontWeight = 'normal';
    }
    return(
        <li
            onClick={handleClick}
            style={styleChange}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >{props.groceryItem}</li>
    )
};

const GroceryList = (props) => {
    console.log(props.groceryItems)
    return (
        <ul>
            {props.groceryItems.map((groceryItem) =>
                <GroceryItem groceryItem={groceryItem}/>
            )}

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
