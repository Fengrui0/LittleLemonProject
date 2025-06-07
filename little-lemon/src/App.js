import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import BookingPage from './BookingPage';
import { useState, useReducer, useEffect } from 'react';
import ConfirmedBooking from './ConfirmedBooking';

import './App.css';
import { initializeTimes, updateTimes } from './utils';

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, []);
  const [bookingData, setBookingData] = useState([]);


  useEffect(() => {
    const today = new Date();
    const times = initializeTimes(today);
    dispatch({ type: 'initialize', times });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking"
          element={(
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              bookingData={bookingData}
              addBooking={data => setBookingData(prev => [...prev, data])}
            />
          )}
        />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
