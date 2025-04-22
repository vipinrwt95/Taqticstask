// Add this before the closing </div> in your App.jsx
<footer className="footer">
  <div className="footer__content">
    <div className="footer__section">
      <h3>Shop</h3>
      <ul>
        <li><a href="#">All Products</a></li>
        <li><a href="#">Featured</a></li>
        <li><a href="#">New Arrivals</a></li>
        <li><a href="#">Sale Items</a></li>
      </ul>
    </div>
    <div className="footer__section">
      <h3>Support</h3>
      <ul>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Shipping Info</a></li>
        <li><a href="#">Returns</a></li>
      </ul>
    </div>
    <div className="footer__section">
      <h3>Company</h3>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
  </div>
  <div className="footer__bottom">
    &copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.
  </div>
</footer>