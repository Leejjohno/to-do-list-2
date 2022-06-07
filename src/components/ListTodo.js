
const ListTodo = ({todoArray, deleteHandler, tickHandler}) => {

    return (
        <div>
            {todoArray.map((todo, index) => (
                <div key={index}>
                    <p>{todo}</p>
                    <button value={index} onClick={(event) => deleteHandler(event)}>X</button>
                    <button value={index} onClick={(event) => tickHandler(event)}>✓</button>
                </div>
            ))}
        </div>
        )
}
export default ListTodo;