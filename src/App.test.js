import {render, screen , waitFor} from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('shows 6 producst from default', async () => {
    render(<App />);

    const titles = await screen.findAllByRole('heading');
    expect(titles).toHaveLength(6);
});

