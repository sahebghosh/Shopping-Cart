import React, { Component } from "react";
import {
  Button,
  Row,
  Col,
  Collapse,
  Form,
  FormGroup,
  FormLabel,
  FormControl
} from "react-bootstrap";
import { connect } from "react-redux";
import { handelChange } from "../actions/PromoAction";

class PromoCode extends Component {
  state = {
    open: false
  };

  handelChange = e => {
    this.props.handelChange(e);
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
          {this.state.open === false ? `Apply` : `Hide `} promo code
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <Row className="show-grid">
            <Col md={12}>
              <Form>
                <FormGroup controlId="formInlineName">
                  <FormLabel>Promo Code</FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Enter promo code here.."
                    value={this.props.promocode}
                    onChange={this.handelChange}
                  />
                </FormGroup>
                <Button
                  block
                  bsStyle="success"
                  className="btn-round"
                  disabled={this.props.isDisable}
                  onClick={this.props.discount}
                >
                  Apply
                </Button>
              </Form>
            </Col>
          </Row>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(
  mapStateToProps,
  { handelChange }
)(PromoCode);
