function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonials">
        <TestimonialCard name="John" rating="⭐⭐⭐⭐⭐" text="Fantastic experience!" />
        <TestimonialCard name="Emily" rating="⭐⭐⭐⭐" text="Delicious food and great service." />
        <TestimonialCard name="Carlos" rating="⭐⭐⭐⭐⭐" text="Authentic flavors, loved it!" />
        <TestimonialCard name="Ava" rating="⭐⭐⭐⭐" text="Highly recommend this place." />
      </div>
    </section>
  );
}

function TestimonialCard({ name, rating, text }) {
  return (
    <div className="testimonial-card">
      <p className="rating">{rating}</p>
      <div className="user">
        <img
          src="https://via.placeholder.com/50"
          alt={name}
          className="user-avatar"
        />
        <p className="user-name">{name}</p>
      </div>
      <p className="review-text">{text}</p>
    </div>
  );
}

export default Testimonials;
