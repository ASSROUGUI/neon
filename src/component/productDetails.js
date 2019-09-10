import React, { Component } from 'react'
import './css/ProductDetails.scss';


 class ProductDetails extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
    <main className="container">
    {/* Left Column / Headphones Image */}
    <div className="left-column">
      <img data-image="black" src="images/1.png" alt="" />
      <img data-image="blue" src="images/2.png" alt="" />
      <img data-image="red" className="active" src="images/3.png" alt="" />
    </div>
    {/* Right Column */}
    <div className="right-column">
      {/* Product Description */}
      <div className="product-description">
        <span>T-shirt</span>
        <h1>Black T-shirt</h1>
        <p>Pink Floyd Slogan Black T ShirtGirl we are obsessin over slogan T s at the mo and this Pink Floyd is a total must have we love this styled with chic mom jeans and killer heels for the ultimate blogger worthy Length approx 75cm 29 5 Based on a sample size UK 8 Model wears size UK 8 EU 36 AUS 8 US 4Model Height 5 ft 8</p>
      </div>
      {/* Product Configuration */}
      <div className="product-configuration">
        {/* Product Color */}
        <div className="product-color">
          <span>Color</span>
          <div className="color-choose">
            <div>
              <input data-image="red" type="radio" id="red" name="color" defaultValue="red" defaultChecked />
              <label htmlFor="red"><span /></label>
            </div>
            <div>
              <input data-image="blue" type="radio" id="blue" name="color" defaultValue="blue" />
              <label htmlFor="blue"><span /></label>
            </div>
            <div>
              <input data-image="black" type="radio" id="black" name="color" defaultValue="black" />
              <label htmlFor="black"><span /></label>
            </div>
          </div>
        </div>
        {/* Cable Configuration */}
        <div className="cable-config">
          <span>Size</span>
          <div className="cable-choose">
          <button>S</button>
            <button>M</button>
            <button>L</button>
          </div>
        </div>
      </div>
      {/* Product Pricing */}
      <div className="product-price">
        <span>90 SR</span>
        {/* <a href={'/cartItem'+props.product._id} className="cart-btn">Add to cart</a>
        <Link to={'/cartItem'+props.product._id}> Add to cart </Link> */}
      </div>
    </div>
  </main>
       
  );
    }
};



export default ProductDetails;