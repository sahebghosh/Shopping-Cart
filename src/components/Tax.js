import React from "react";
import { Row, Col } from "react-bootstrap";

function Tax(props) {
  return (
    <Row className="show-grid">
      <Col md={6}>Estimated Tax:</Col>
      <Col md={6}> {`$${props.tax}`} </Col>
    </Row>
  );
}

export default Tax;
