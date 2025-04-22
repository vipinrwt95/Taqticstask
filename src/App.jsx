import React from 'react';
import { useState, useEffect,useRef } from 'react';
import { getProducts, getCategories } from './utils/api';
import ProductList from './components/ProductList';
import Filter from './components/Filter';
import Cart from './components/Cart';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import './App.css';
import ProductModal from './components/ProductModal';
// import footer from './components/Footer';

function App() {
  const [state, setState] = useState({
    products: [],
    categories: [],
    isLoading: true,
    error: null,
  });
  const [cartOpen,setCartOpen]=useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [products, categories] = await Promise.all([
          getProducts(),
          getCategories(),
        ]);
        setState({ products, categories: ['all', ...categories], isLoading: false, error: null });
      } catch (error) {
        setState(prev => ({ ...prev, isLoading: false, error: error.message }));
      }
    };
    fetchData();
  }, []);

  const filteredProducts = selectedCategory === 'all'
    ? state.products
    : state.products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };


  // In App.js
const handleIncrement = (itemId) => {
  setCart(prevCart => 
    prevCart.map(item => 
      item.id === itemId 
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const handleDecrement = (itemId) => {
  setCart(prevCart => 
    prevCart.map(item => 
      item.id === itemId 
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    )
  );
};

useEffect(() => {
  let lastScroll = 0;
  const navbar = navbarRef.current;
  if (!navbar) return; 

  const navbarHeight = navbar.offsetHeight;

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      navbar.classList.remove('hidden');
      return;
    }

    if (currentScroll > lastScroll && currentScroll > navbarHeight) {
      // Scroll down
      navbar.classList.add('hidden');
    } else if (currentScroll < lastScroll) {
      // Scroll up
      navbar.classList.remove('hidden');
    }

    lastScroll = currentScroll;
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);





  if (state.isLoading) return <Loader />;
  if (state.error) return <div className="error">{state.error}</div>;

  return (
    <>
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar
      ref={navbarRef}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
        opencart={()=>{setCartOpen(prev => !prev)}}
      />
      
     {<><Filter
        categories={state.categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <ProductList
        products={filteredProducts}
        onProductSelect={setSelectedProduct}
        onAddToCart={handleAddToCart}
      /></>} 

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

     {cartOpen && <Cart
  items={cart}
  onClose={() => setCartOpen(false)}
  onRemove={handleRemoveFromCart}
  onIncrement={handleIncrement}
  onDecrement={handleDecrement}
  isOpen={cartOpen}
/>}

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
    </div>
    {/* <footer /> */}
    </>
  );
}

export default App;