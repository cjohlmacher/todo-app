import { render } from '@testing-library/react';
import Todo from './Todo';

it('should render without breaking', () => {
    render(<Todo />);
});

it('should match the snapshot', () => {
    const {asFragment} = render(<Todo description="Wash dishes" deleteTodo={() => console.log('deleted')}/>);
    expect(asFragment()).toMatchSnapshot();
});