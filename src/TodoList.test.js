import { fireEvent, render, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import TodoList from './TodoList';

const addTodo = async (getByLabelText, getByRole) => {
    const todoInput = getByLabelText('Add Todo:');
    const addButton = getByRole('button');
    fireEvent.change(todoInput, {target: {name: 'todo', value: 'Wash dishes'}});
    fireEvent.click(addButton);
};

it('should render without breaking', () => {
    render(<TodoList />);
});

it('should match the snapshot', () => {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it('should add a todo on submit', async () => {
    const { getByLabelText, getByRole, getByText } = render(<TodoList />);
    addTodo(getByLabelText, getByRole);
    await waitFor( () => { 
        const newTodo = getByText("Wash dishes");
        expect(newTodo).toBeInTheDocument();
    });
});

it('should match the snapshot after adding todo', async () => {
    const { getByLabelText, getByRole, getByText, asFragment } = render(<TodoList />);
    addTodo(getByLabelText, getByRole);
    await waitFor( () => {
        const newTodo = getByText("Wash dishes");
        expect(newTodo).toBeInTheDocument();
    });
    expect(asFragment()).toMatchSnapshot();
});

it('should delete a todo on delete click', async () => {
    const { getByLabelText, getByRole, getByText, queryByText, getByTestId } = render(<TodoList />);
    addTodo(getByLabelText, getByRole);
    await waitFor( () => {
        const newTodo = getByText("Wash dishes");
        expect(newTodo).toBeInTheDocument();
    });
    const deleteButton = getByTestId('DeleteOutlinedIcon');
    fireEvent.click(deleteButton);
    await waitFor( () => {
        const newTodo = queryByText("Wash dishes");
        expect(newTodo).toBe(null);
    });
    const newTodo = queryByText("Wash dishes");
    expect(newTodo).not.toBeInTheDocument();
});