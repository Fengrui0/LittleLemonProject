// BookingForm.test.js
import { render, screen } from '@testing-library/react';
import BookingForm from '../BookingForm';

test('renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
    const label = screen.getByLabelText(/choose date/i);
    expect(label).toBeInTheDocument();
});
