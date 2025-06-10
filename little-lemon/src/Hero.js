import Salad from "./greek salad.jpg";
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <Link to="/booking" className="reserve-btn">Reserve a Table</Link>

      </div>
      <div className="hero-image">
        <img src={Salad} alt="Restaurant Dish" />
      </div>
    </section>
  );
}

export default Hero;
