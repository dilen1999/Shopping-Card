import React from 'react';
import '../css/Shopping_card.css'; // Ensure this file exists and is correctly linked

const ShoppingCart = () => {
  return (
    <div className='shopping-cart-main'>
      <div className='shopping-cart-heading'>
        <h1>Shopping Cart</h1>
        <span>Categories &gt; Details &gt; Shopping Cart</span>
      </div>

      <div className='shopping-cart-items'>
        {[1, 2, 3].map((_, index) => (
          <div key={index} className='shopping-cart-item'>
            <img
              src='https://via.placeholder.com/100' // Replace with actual image source
              alt='Course'
              className='course-image'
            />
            <div className='course-details'>
              <h2>Introduction to User Experience Design</h2>
              <p>By John Doe</p>
              <p>4.6 <span className='stars'>⭐️⭐️⭐️⭐️⭐️</span> (250 ratings)</p>
              <p>22 Total Hours. 155 Lectures. All levels</p>
              <p><a href='#'>Save for later</a> <a href='#' className='remove-link'>Remove</a></p>
            </div>
            <div className='course-price'>
              <p>$45.00</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;
