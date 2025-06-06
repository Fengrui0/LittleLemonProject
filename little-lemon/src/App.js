import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import BookingPage from './BookingPage';
import { useReducer } from 'react';
import './App.css';

function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
}

function updateTimes(state, action) {
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
}

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
        path="/booking"
        element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}
      />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
