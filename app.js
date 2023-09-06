// TODO
const {useState} = React

const GroceryItem = (props) => {
    return(
        <li>{props.groceryItem}</li>
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
