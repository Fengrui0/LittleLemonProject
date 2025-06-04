function About() {
  return (
    <section className="about-section">
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div className="about-images">
        <img src="/images/about1.jpg" alt="About 1" className="about-img img-back" />
        <img src="/images/about2.jpg" alt="About 2" className="about-img img-front" />
      </div>
    </section>
  );
}

export default About;
