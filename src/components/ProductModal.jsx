// src/components/ProductModal/ProductModal.jsx
import React from 'react';

const ProductModal = ({ product, onClose, onAddToCart }) => (
  <div className="modal">
    <div className="modal-content">
      <span className="modal-close" onClick={onClose}>&times;</span>
      <img 
        src={product.image||null} 
        alt={product.title} 
        className="modal-image"
      />
      <div className="modal-details">
        <h2 className="modal-title">{product.title}</h2>
        <p className="modal-category">{product.category}</p>
        <p className="modal-description">{product.description}</p>
        <div className="modal-footer">
          <p className="modal-price">${product.price}</p>
          <button 
            className="modal-add-to-cart"
            onClick={() => {
              onAddToCart(product);
              onClose();
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ProductModal;