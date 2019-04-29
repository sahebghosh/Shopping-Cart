import React, { Component } from "react";
import { Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

var styles = {
  saving: {
    textDecoration: "underline"
  },
  totalSave: {
    color: "red",
    fontWeight: 800
  }
};

class Saving extends Component {
  render() {
    const { save } = this.props;
    const tooltip = (
      <Tooltip id="tooltip">
        <p>
          We are here to maintain product quality, in order to gain customer
          trust. So we provide little value added savings to our customer
          purchase. Enjoy shopping with us.
        </p>
      </Tooltip>
    );

    return (
      <Row className="show-grid">
        <Col md={6}>
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <div style={styles.saving}>Customer value saving</div>
          </OverlayTrigger>
        </Col>
        <Col md={6} style={styles.totalSave}>
          {`$${save}`}
        </Col>
      </Row>
    );
  }
}

export default Saving;
