import {useState} from "react";

function BookingForm({ availableTimes = [], dispatch = () => {}, onSubmit = () => {} }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission
    const booking = { date, time, guests, occasion };
    onSubmit(booking);
    alert('Booking submitted!');
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          dispatch({ date: e.target.value });
        }}
        required
      />

        <label htmlFor="res-time">Choose time</label>
        <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        >
        <option value="">Select a time</option>
        {(availableTimes || []).map((t) => (
            <option key={t} value={t}>{t}</option>
        ))}
        </select>


      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit">Make Your Reservation</button>
    </form>
  );
}

export default BookingForm;