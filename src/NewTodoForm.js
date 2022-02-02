import React, { useState } from 'react';
import './NewTodoForm.css';

const NewTodoForm = ({addTodo}) => {
    const defaultFormData = {
        todo: ''
    };

    const [formData, setFormData] = useState(defaultFormData);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({description: formData.todo});
        setFormData(defaultFormData);
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((formData) => ({...formData, [name]: value}));
    };

    return (
        <form className="NewTodoForm">
            <label htmlFor="todo">Add Todo:</label>
            <input type="text" name="todo" id="todo" onChange={handleChange} value={formData.todo} />
            <button type="submit" onClick={handleSubmit}>+</button>
        </form>
    );
};

export default NewTodoForm;