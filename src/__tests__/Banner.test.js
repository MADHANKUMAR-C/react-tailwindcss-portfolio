import { render, screen } from '@testing-library/react';
import AppBanner from '../components/shared/AppBanner';
import userEvent from '@testing-library/user-event';

// This runs before each test. This is good instead of having the component render in each test case
const setup = () => render(<AppBanner />);

// Get user event
function setupUserEvent(jsx) {
	return {
		user: userEvent.setup(),
		...render(jsx),
	};
}

test('it shows the title in the banner', () => {
	setup();
	expect(screen.getByText(/Hi, Iam MADHANKUMAR C/i)).toBeInTheDocument();
});

