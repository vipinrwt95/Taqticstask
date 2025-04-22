import React, { useState } from 'react';

const Cart = ({ items, onClose, onRemove, isOpen,onIncrement,onDecrement }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setOrderPlaced(true);
    }, 2000);
  };

  const handlePromoApply = () => {
    setPromoApplied(true);
    setTimeout(() => setPromoApplied(false),500);
  };

  return (
    <div className={`cart ${isOpen ? 'cart--open' : ''}`} data-testid="cart">
      <div className="cart__header">
        <h2>Your Cart</h2>
        <button className="cart__close" onClick={onClose}>×</button>
      </div>
      
      <div className="cart__items">
        {items.length === 0 ? (
          <div className="cart__empty">
            <svg 
              className="cart__empty-icon" 
              viewBox="0 0 24 24"
              fill="none" 
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path 
                className="cart__body"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p className="cart__empty-text">Your cart feels lonely...</p>
          </div>
        ) : (
          <>
            {items.map(item => (
              <div key={item.id} className="cart__item">
                <img src={item.image||null} alt={item.title} className="cart__item-image" />
                <div className="cart__item-info">
                  <h4>{item.title}</h4>
                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn"
                      onClick={()=>{
                        onDecrement(item?.id)
                      }}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      className="quantity-btn"
                      onClick={()=>{
                        onIncrement(item?.id)
                      }}
                    >
                      +
                    </button>
                  </div>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button 
                  className="cart__remove"
                  onClick={() => onRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            
            <div className="promo-section">
              <input
                type="text"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="promo-input"
              />
              <button 
                className="promo-btn"
                onClick={handlePromoApply}
              >
                Apply
              </button>
              {promoApplied && <span className="promo-success">🎉 Promo applied!</span>}
            </div>
          </>
        )}
      </div>

      {items.length > 0 && (
       
          <div style={{marginBottom:'5px'}}>
           
            {orderPlaced ? (
            <div className="place-order-btn">
              <p>🎉 Order placed successfully!</p>
            
            </div>
          ) : (
            <button 
              className="place-order-btn"
              onClick={handlePlaceOrder}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <div className="spinner"></div>
                  Processing...
                </>
              ) : (
                `Place Order of $${items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}`
              )}
            </button>
          )}
          </div>
          
        
        
      )}
    </div>
  );
};

export default Cart;