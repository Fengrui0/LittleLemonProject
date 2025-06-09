// BookingForm.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../BookingForm';

describe('BookingForm', () => {
  test('renders the date label', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
    const label = screen.getByLabelText(/choose date/i);
    expect(label).toBeInTheDocument();
  });

  test('shows alert if date is missing', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} onSubmit={() => {}} />);

    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '2' } });
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    expect(alertMock).toHaveBeenCalledWith("Please choose a date.");
    alertMock.mockRestore();
  });

  test('shows alert if number of guests is out of range', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} onSubmit={() => {}} />);

    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2025-06-09' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '11' } });
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    expect(alertMock).toHaveBeenCalledWith("Number of guests must be between 1 and 10.");
    alertMock.mockRestore();
  });

  test('submits successfully with valid input', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const onSubmit = jest.fn();

    render(
      <BookingForm
        availableTimes={['17:00']}
        dispatch={() => {}}
        onSubmit={onSubmit}
      />
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2025-06-09' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    expect(onSubmit).toHaveBeenCalledWith({
      date: '2025-06-09',
      time: '17:00',
      guests: 2,
      occasion: 'Birthday',
    });
    expect(alertMock).toHaveBeenCalledWith('Booking submitted!');
    alertMock.mockRestore();
  });
});
