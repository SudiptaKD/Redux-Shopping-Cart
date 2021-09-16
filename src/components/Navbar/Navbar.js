import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar as NavbarTag, Nav, Container, Row, Col, Button } from "react-bootstrap";

import CartIcon from '../Assets/Icons/trolley.svg'
import ShopIcon from '../Assets/Icons/shop.svg'

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <NavbarTag bg="dark" variant="dark">
      <Container>
        <NavbarTag.Brand>
          <Link to="/" style={{textDecoration:'none'}}>
            <Row>
              <Col>  
                <h2>
                  Shop
                </h2>
              </Col>
              <Col>
                <img style={{height:'50px', width:'50px'}}
                    src={ShopIcon}
                    alt="shop"
                  />
              </Col>
            </Row>
          </Link>
        </NavbarTag.Brand>
        <Nav style={{height:'60px'}}>
          <Button variant="success">
            <Link to="/cart" style={{textDecoration:'none'}}>
              <Row>
                <Col>  
                  <img style={{height:'50px', width:'50px'}}
                    src={CartIcon}
                    alt="cart"
                  />
                </Col>
                <Col>
                  <h1 >
                    {cartCount}
                  </h1>
                </Col>
              </Row>
            </Link>
          </Button>
        </Nav>
      </Container>
    </NavbarTag>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
