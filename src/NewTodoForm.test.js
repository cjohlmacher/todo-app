import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

it('should render without breaking', () => {
    render(<NewTodoForm />);
});