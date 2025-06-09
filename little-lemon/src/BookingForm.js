import { useState } from "react";

function BookingForm({ availableTimes = [], dispatch = () => {}, onSubmit = () => {} }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date) {
    alert("Please choose a date.");
    return;
  }
  if (!time) {
    alert("Please choose a time.");
    return;
  }
  if (!guests) {
    alert("Please choose number of guests.");
    return;
  }
  if (guests < 1 || guests > 10) {
    alert("Number of guests must be between 1 and 10.");
    return;
  }
  if (!occasion) {
    alert("Please select an occasion.");
    return;
  }

    const booking = { date, time, guests, occasion };
    onSubmit(booking);
    alert('Booking submitted!');
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} aria-label="Booking form" noValidate>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          dispatch({ date: e.target.value });
        }}
        aria-required="true"
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        aria-required="true"
      >
        <option value="">Select a time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value))}
        placeholder="Enter number of guests"
        aria-required="true"
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        aria-required="true"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit" aria-label="Make Your Reservation">
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
