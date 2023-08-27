// components/Dashboard/Purchase/Purchase.jsx
import React, { useState } from 'react';
import './Purchase.css';

function Purchase() {
  const [selectedItem, setSelectedItem] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleItemChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can add code to process the purchase, update inventory, etc.
    console.log(`Purchased ${quantity} of ${selectedItem}`);
  };

  return (
    <div className="purchase-container">
      <h1>Purchase Products</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Select Item:
          <select value={selectedItem} onChange={handleItemChange}>
            <option value="item1">Item 1</option>
            <option value="item2">Item 2</option>
            <option value="item3">Item 3</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <br />
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
        </label>
        <br />
        <button type="submit">Purchase</button>
      </form>
    </div>
  );
}

export default Purchase;
