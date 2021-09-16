import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// Redux
import { connect } from "react-redux";

import Product from "./Product/Product";

const Products = ({ products }) => {
  return (
    <Container >
      <Row lg={3} md={3} sm={2} xs={2}>
        {products.map((product) => (
          <Col>
            <Product key={product.id} product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
