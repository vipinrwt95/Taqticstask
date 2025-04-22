import React from 'react';


const Filter = ({ categories, selectedCategory, onSelect }) => (
  <div className="filter">
    <select
      value={selectedCategory}
      onChange={(e) => onSelect(e.target.value)}
      className="filter__select"
    >
      {categories.map(category => (
        <option key={category} value={category}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </option>
      ))}
    </select>
  </div>
);

export default Filter;