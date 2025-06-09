import BookingForm from './BookingForm';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from './api';

function BookingPage({ availableTimes = [], dispatch = () => {}, bookingData =[], addBooking = () => {} }) {
  const navigate = useNavigate();

  const handleFormSubmit = data => {
    if (submitAPI(data)) {
      addBooking(data);
      navigate('/confirmation');
    }
  };

  return (
    <section className="booking-page">
      <h1>Reserve a Table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} onSubmit={handleFormSubmit} />

      <h2>Submitted Bookings</h2>
      {bookingData.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Guests</th>
              <th>Occasion</th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((booking, index) => (
              <tr key={index}>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.guests}</td>
                <td>{booking.occasion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default BookingPage;
