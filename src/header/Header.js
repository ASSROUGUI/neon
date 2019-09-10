import React from 'react'
import { Link } from 'react-router-dom'
import { Button ,Navbar, NavbarBrand} from 'reactstrap'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)


// const Product = props =>(


//   <div className="Product-Wrapper">
//   <div className="Product">
//       <div className="Product-Image-Wrapper">
//         <img src={props.product.image} className="Product-Image" />
      
//       </div>
//     <div className="Product-Title">
//       <p className="Product-Name">{props.product.name}</p>
//     </div>
//     <div className="Product-Data">
//       <small className="Product-Price">{props.product.price}</small>
//       <button onClick="" className="product-button Product-Add">Add to Cart</button>
//     </div>


//     </div>
//    </div>
// )
const Header = ({ props }) => (
  
  <Navbar className="nav" color="light" light expand="md">
   <NavbarBrand href="/">Neon</NavbarBrand>

    <ul>
     <li className="nav-item" ><Link className="nav-link" to="/products">Products</Link></li>
     <li className="nav-item" ><Link className="nav-link" to="/cartItem"><i className="material-icons">shopping cart</i></Link></li>
   
   </ul>

  <header className="main-header">
    { props && <span>Welcome, {props.email}</span>} 
   { props ? authenticatedOptions : unauthenticatedOptions }

  </header>
  {/* <Link to={'/editProduct/'+props.header._id} class="btn btn-info" > Edit  </Link> */}

  <Link to="/create" className="nav-link"> Create product </Link>

  </Navbar>
 
)

export default Header
