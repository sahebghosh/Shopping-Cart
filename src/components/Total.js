import React from "react";
import { Row, Col } from "react-bootstrap";

function Total(props) {
  return (
    <Row className="show-grid">
      <Col md={6}>
        <h5>Total:</h5>
      </Col>
      <Col md={6}>
        <h5> {`$${props.total}`} </h5>
      </Col>
    </Row>
  );
}

export default Total;
