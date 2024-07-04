import React from "react";
import "../css/Shopping_card.css";

const ShoppingCart = () => {
  return (
    <div className="shopping-cart-main">
      <div className="shopping-cart-bottomline">
        <div className="shopping-cart-heading">
          <h1>Shopping Cart</h1>
          <span>Categories &gt; Details &gt;</span>
          <span className="shopping-cart-color">Shopping Cart</span>
        </div>
        <div className="shopping-cart-coursecart">
          <span>1 Course in cart</span>
        </div>
      </div>

      <div className="shopping-cart-content">
        <div className="shopping-cart-items">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="shopping-cart-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/image.jpg`}
                alt="Course"
                className="course-image"
              />
              <div className="course-details">
                <h2>Introduction to User Experience Design</h2>
                <p>By John Doe</p>
                <p>
                  4.6 <span className="stars">⭐️⭐️⭐️⭐️⭐️</span> (250
                  ratings)
                </p>
                <p>22 Total Hours. 155 Lectures. All levels</p>
                <p>
                  <a href="#">Save for later</a>{" "}
                  <a href="#" className="remove-link">
                    Remove
                  </a>
                </p>
              </div>
              <div className="course-price">
                <p>$45.00</p>
              </div>
            </div>
          ))}
        </div>

        <div className="shopping-cart-form">
          <form>
            <h2>Order Details</h2>
            <div className="form-group form-row">
              <span>Price</span>
              <h3>$300</h3>
            </div>
            <div className="form-group form-row">
              <span>Discount</span>
              <h3>-$10</h3>
            </div>
            <div className="form-group form-row">
              <span>Tax</span>
              <h3>$20</h3>
            </div>
            <div className="form-group form-row">
              <span>Total</span>
              <h3>$290</h3>
            </div>

            <button className="" type="submit">
              Proceed to Checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
