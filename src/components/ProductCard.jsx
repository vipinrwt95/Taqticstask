import React from 'react';


const ProductCard = ({ product, onSelect, onAddToCart }) => (
  <div className="product-card">
    <img 
      src={product.image||null} 
      alt={product.title} 
      className="product-card__image"
      onClick={() => onSelect(product)}
    />
    <div className="product-card__content">
      <h3 className="product-card__title">{product.title}</h3>
      <p className="product-card__price">${product.price}</p>
      <button 
        className="product-card__button"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  </div>
);

export default ProductCard;