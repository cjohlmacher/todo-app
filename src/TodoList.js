import React, { useState } from 'react';
import {v4 as uuid } from 'uuid';
import './TodoList.css';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    
    const todoComponents = todos.map(({id,description}) => {
        return <Todo key={id} description={description} deleteTodo={() => deleteTodo(id)}/>
    });

    const deleteTodo = (id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    };

    const addTodo = ({description}) => {
        const id = uuid();
        setTodos((todos) => [...todos, {id, description}]);
    };

    return (
        <>
            <ul>
                {todoComponents}
            </ul>
            <NewTodoForm addTodo={addTodo}/>
        </>
    )
};

export default TodoList;