import React from 'react';
import ProductCard from './ProductCard';


const ProductList = ({ products, onProductSelect, onAddToCart }) => (
  <div className="product-list">
    {products.map(product => (
      <ProductCard
        key={product.id}
        product={product}
        onSelect={onProductSelect}
        onAddToCart={onAddToCart}
      />
    ))}
  </div>
);

export default ProductList;