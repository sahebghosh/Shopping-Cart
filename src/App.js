import React, { Component } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Subtotal from "./components/Subtotal";
import Saving from "./components/Saving";
import Tax from "./components/Tax";
import Total from "./components/Total";
import Item from "./components/Item";
import PromoCode from "./components/PromoCode";
import { connect } from "react-redux";
import { handelChange } from "./actions/PromoAction";

class App extends Component {
  state = {
    total: 755,
    saving: -2.89,
    tax: 0,
    estimatedTotal: 0,
    disablePromoButton: false
  };

  componentDidMount = () => {
    this.setState(
      {
        tax: (this.state.total + this.state.saving) * 0.045
      },
      function() {
        this.setState({
          estimatedTotal: this.state.total + this.state.saving + this.state.tax
        });
      }
    );
  };

  handelDiscount = () => {
    if (this.props.promoCode === "REACT") {
      this.setState(
        {
          estimatedTotal: this.state.estimatedTotal * 0.9
        },
        function() {
          this.setState({
            disablePromoButton: true
          });
        }
      );
    }
  };

  render() {
    return (
      <div className="container">
        <Container className="shopping-cart">
          <Subtotal price={this.state.total.toFixed(2)} />
          <Saving save={this.state.saving} />
          <Tax tax={this.state.tax.toFixed(2)} />
          <hr />
          <Total total={this.state.estimatedTotal.toFixed(2)} />
          <Item price={this.state.estimatedTotal.toFixed(2)} />
          <hr />
          <PromoCode
            discount={this.handelDiscount}
            isDisable={this.state.disablePromoButton}
          />
        </Container>
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
)(App);
