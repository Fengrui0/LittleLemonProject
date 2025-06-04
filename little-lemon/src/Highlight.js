function Highlight() {
  return (
    <section className="highlight-section">
      <div className="highlight-header">
        <h2>Specials</h2>
        <a href="/order" className="online-menu-btn">Online Menu</a>
      </div>
      <div className="highlight-cards">
        <Card
          title="Greek salad"
          price="$12.99"
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
          image="/images/greek-salad.jpg"
        />
        <Card
          title="Bruschetta"
          price="$5.99"
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
          image="/images/bruschetta.jpg"
        />
        <Card
          title="Lemon Dessert"
          price="$5.00"
          description="This comes straight from grandma’s recipe book. Every last ingredient has been sourced and is as authentic as can be imagined."
          image="/images/lemon-dessert.jpg"
        />
      </div>
    </section>
  );
}

function Card({ title, price, description, image }) {
  return (
    <div className="highlight-card">
      <img src={image} alt={title} className="highlight-image" />
      <div className="highlight-body">
        <div className="highlight-title">
          <h3>{title}</h3>
          <span className="price">{price}</span>
        </div>
        <p>{description}</p>
        <div className="delivery-container">
            <a href="/order" className="delivery">Order a delivery 🛵</a>
        </div>
      </div>
    </div>
  );
}

export default Highlight;
