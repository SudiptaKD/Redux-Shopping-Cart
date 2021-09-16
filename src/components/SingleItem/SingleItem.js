import React from "react";

import { Card, Button, Container } from "react-bootstrap";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const SingleItem = ({ current, addToCart }) => {
  return (
      <Container>
        <Card  className='my-4 rounded text-center shadow mb-1'
          style={{ width: '18rem',border:'none', backgroundColor:'#dae0eb' }}>
          <Card.Img variant="top" src={current.image} alt={current.title} style={{height:'250px', width:'300px'}} />
          <Card.Body>
            <Card.Title>{current.title}</Card.Title>
            <Card.Text>{current.description}</Card.Text>
            <Card.Text>${current.price}</Card.Text>
            <Button variant="primary" onClick={() => addToCart(current.id)}>
              Add to cart
            </Button>
          </Card.Body>
        </Card>
      </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
