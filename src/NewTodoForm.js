import React, { useState } from 'react';
import './NewTodoForm.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const validationSchema = yup.object({
    todo: yup
        .string('Add a todo')
        .required('Cannot add an empty todo')
});

const NewTodoForm = ({addTodo}) => {

    const formik = useFormik({
        initialValues: {
          todo: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            addTodo({description: values.todo});
        },
      });

    return (
        <div>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="todo">Add Todo:</label>
                    <TextField
                        id="todo"
                        name="todo"
                        size="small"
                        value={formik.values.todo}
                        onChange={formik.handleChange}
                        error={formik.touched.todo && Boolean(formik.errors.todo)}
                        helperText={formik.touched.todo && formik.errors.todo}
                        sx={{margin: '0px 5px'}}
                    />
                    <IconButton type="submit" aria-label="button">
                        <AddCircleIcon name="add" sx={{color: '#118bd5'}}/>
                    </IconButton>
                </form>
            </Box>
        </div>
        // <Box component="form" sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        //     <label htmlFor="todo">Add Todo:</label>
        //     <TextField id="todo" name="todo" size="small" value={formik.values.todo} onChange={formik.handleChange} sx={{margin: '0px 5px'}}/>
        //     <IconButton type="submit" aria-label="button" onClick={formik.handleSubmit}>
        //         <AddCircleIcon name="add" sx={{color: '#118bd5'}}/>
        //     </IconButton>
        // </Box>
    );
};

export default NewTodoForm;