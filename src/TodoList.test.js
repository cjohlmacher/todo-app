import { fireEvent, render } from '@testing-library/react';
import TodoList from './TodoList';

const addTodo = (getByLabelText, getByRole) => {
    const todoInput = getByLabelText('Add Todo:');
    const addButton = getByRole('button', {name: '+'});
    fireEvent.change(todoInput, {target: {name: 'todo', value: 'Wash dishes'}});
    fireEvent.click(addButton);
};

it('should render without breaking', () => {
    render(<TodoList />);
});

it('should add a todo on submit', () => {
    const { getByLabelText, getByRole, getByText } = render(<TodoList />);
    addTodo(getByLabelText, getByRole);
    const newTodo = getByText("Wash dishes");
    expect(newTodo).toBeInTheDocument();
});

it('should delete a todo on delete click', () => {
    const { getByLabelText, getByRole, getByText } = render(<TodoList />);
    addTodo(getByLabelText, getByRole);
    const newTodo = getByText("Wash dishes");
    const deleteButton = getByText('X');
    fireEvent.click(deleteButton);
    expect(newTodo).not.toBeInTheDocument();
});