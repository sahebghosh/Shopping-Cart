import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Subtotal extends Component {
  render() {
    const { price } = this.props;
    return (
      <Row className="show-grid">
        <Col md={6}>Subtotal</Col>
        <Col md={6}> {`$${price}`} </Col>
      </Row>
    );
  }
}

export default Subtotal;
