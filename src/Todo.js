import './Todo';

const Todo = ({description, deleteTodo}) => {
    const handleClick = () => {
        deleteTodo();
    };
    
    return (
        <div className="Todo">
            <p>{description}</p>
            <button onClick={handleClick}>X</button>
        </div>
    );
};

export default Todo;