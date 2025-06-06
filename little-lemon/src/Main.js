import Hero from './Hero';
import Highlight from './Highlight';
import Testimonials from './Testimonials';
import About from './About';
import { useReducer } from 'react';
import BookingPage from './BookingPage';

function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
}

function updateTimes(state, action) {
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
}
function Main(){
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return(
        <main className="container">
            <Hero />
            <Highlight />
            <Testimonials />
            <About />
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
        </main>
    )
}
export default Main;