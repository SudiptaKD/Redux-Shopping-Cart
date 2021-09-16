import React, { useState } from "react";

import { Card, Button, Row, Col, Container } from "react-bootstrap";
import RemoveIcon from '../../Assets/Icons/remove.svg'

import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <Container style={{marginLeft:'10px'}}>
      <Card  className='my-4 rounded text-center shadow mb-1'
          style={{ border:'none', backgroundColor:'#dae0eb' }}>
        <Row>
          <Col xl={1} lg={1} md={3} sm ={3} xs={4} >
            <Card.Img variant="top" src={item.image} alt={item.title} style={{height:'60px'}} />
          </Col>
          <Col xl={2} lg={2} md={3} sm ={3} xs={4}  >
            <Card.Title >{item.title}</Card.Title>
          </Col>
          <Col xl={2} lg={2} md={3} sm ={3} xs={4} >
            <Card.Text className="fw-bolder fs-5">Price:<br/>${item.price}</Card.Text>
          </Col>
          <Col xl={2} lg={2} md={3} sm ={3} xs={5} >
            <Card.Text className="fw-bolder fs-5">Total item:<br/>{input}</Card.Text>
          </Col>
          <Col xl={2} lg={2} md={6} sm ={6} xs={7} >
            <label htmlFor="qty" className="fw-bold fs-6">Quantity :</label>
               <input style={{width:'120px'}}
                   min="1"
                   type="number"
                   id="qty"
                   name="qty"
                   value={input}
                 onChange={onChangeHandler}
                 />
          </Col>
          <Col xl={2} lg={2} md={3} sm ={3} xs={6}  >
            <Card.Text className="fw-bolder fs-5">Total Price:<br/>${input*item.price}</Card.Text>
          </Col>
          <Col xl={1} lg={1} md={3} sm ={3} xs={6}  >
            <Button  onClick={() => removeFromCart(item.id)}>
              <img style={{height:'50px', width:'50px'}}
                    src={RemoveIcon}
                    alt="remove"
                  />
            </Button>
          </Col>
        </Row>
      </Card>  
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
