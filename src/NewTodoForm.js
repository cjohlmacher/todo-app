import React, { useState } from 'react';
import './NewTodoForm.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';

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
        <Box component="form" sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <label htmlFor="todo">Add Todo:</label>
            <TextField id="todo" name="todo" size="small" value={formData.todo} onChange={handleChange} sx={{margin: '0px 5px'}}/>
            {/* <input type="text" name="todo" id="todo" onChange={handleChange} value={formData.todo} /> */}
            <IconButton type="submit" aria-label="button" onClick={handleSubmit}>
                <AddCircleIcon name="add" sx={{color: '#118bd5'}}/>
            </IconButton>
        </Box>
    );
};

export default NewTodoForm;