
function TodoItem({todo, onDelete}){
    let mystyle = {
        margin: "40px auto"
    }
    const handleDelete = () => {
        onDelete(todo);
    };
    return (
        <>
            <div style={mystyle}>
                <h4>{todo.title}</h4>
                <p>{todo.desc}</p>
                <button onClick={handleDelete} className="btn btn-primary">delete</button>
                <hr/>
            </div>
        </>
    )
}
export default TodoItem;