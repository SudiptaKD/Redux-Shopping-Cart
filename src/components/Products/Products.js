import React from "react";
import { Col, Row } from "react-bootstrap";

// Redux
import { connect } from "react-redux";

import Product from "./Product/Product";

const Products = ({ products }) => {
  return (
    < >
      <Row lg={3} md={2} sm={1} xs={1}>
        {products.map((product) => (
          <Col key={product.id}  >
            <Product  product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
