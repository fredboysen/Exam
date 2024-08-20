import { render } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders correctly', () => {
	const { asFragment } = render(<MyComponent />);
	expect(asFragment()).toMatchSnapshot();
});


