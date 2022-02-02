import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

it('should render without breaking', () => {
    render(<NewTodoForm />);
});

it('should match the snapshot', () => {
    const {asFragment} = render(<NewTodoForm addTodo={() => console.log('added')}/>);
    expect(asFragment()).toMatchSnapshot();
});