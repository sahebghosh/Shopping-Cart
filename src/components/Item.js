import React, { Component } from "react";
import { Button, Row, Col, Collapse, Media } from "react-bootstrap";

class Item extends Component {
  state = {
    open: false
  };
  render() {
    return (
      <div>
        <Button
          bsStyle="link"
          onClick={() => {
            this.setState({ open: !this.state.open });
          }}
        >
          {this.state.open === false ? `See` : `Hide `} item details
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Media>
              <img
                width={100}
                height={100}
                alt="Item"
                src="https://i5.walmartimages.com/asr/ac2e37b2-dd26-4459-8906-e2e50f549dec_1.3b9a3faa5fcfc0680362a22318f20f2c.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
              />
              <Media.Body>
                <p>AT&T Apple iPhone XS Max 64GB, Space Gray</p>
                <Row className="show-grid">
                  <Col md={6}>
                    <strong> {`$${this.props.price}`} </strong>
                    <strong className="price-strike">
                      {`$${this.props.price}`}
                    </strong>
                  </Col>
                  <Col md={6}>Qty: 1</Col>
                </Row>
              </Media.Body>
            </Media>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Item;
