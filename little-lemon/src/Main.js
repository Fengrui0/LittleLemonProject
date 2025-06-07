import Hero from './Hero';
import Highlight from './Highlight';
import Testimonials from './Testimonials';
import About from './About';
import { useReducer } from 'react';
import BookingPage from './BookingPage';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from './api';

function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
}

function updateTimes(state, action) {
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
}
function Main(){
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate();

    const submitForm = (formData) => {
      const success = submitAPI(formData);
      if (success) {
        navigate('/confirmation');
      }
    };
    return(
        <main className="container">
            <Hero />
            <Highlight />
            <Testimonials />
            <About />
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
        </main>
    )
}
export default Main;