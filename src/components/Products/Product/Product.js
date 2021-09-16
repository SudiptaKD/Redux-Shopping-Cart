import React from "react";
import { Link } from "react-router-dom";

import { Card, Button } from "react-bootstrap";

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <>
      <Card  className='my-4 rounded text-center shadow mb-1'
         style={{ width: '18rem',border:'none', backgroundColor:'#dae0eb' }}>
        <Card.Img variant="top" src={product.image} alt={product.title} style={{height:'200px'}} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          {/* <Card.Text>{product.description}</Card.Text> */}
          <Card.Text className="fw-bolder fs-4">${product.price}</Card.Text>
          <Button variant="info"  onClick={() => loadCurrentItem(product)}>
            <Link to={`/product/${product.id}`} style={{textDecoration:'none'}}>
              View Item
            </Link>
          </Button>{'   '}
          <Button variant="primary" onClick={() => addToCart(product.id)}>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
