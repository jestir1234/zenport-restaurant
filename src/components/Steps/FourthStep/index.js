import React from "react";
import styled, { css } from "react-emotion";
import { DataContext } from "../../../context/DataProvider";
import Selector from "../Selector";
import OrderList from "../ThirdStep/OrderList";

const Container = styled("div")(props => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  width: "40%",
  padding: "20px",
  border: "1px solid black"
}));

const Row = styled("div")(props => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 40px 10px 40px"
}));

const orderStyle = css({
  alignSelf: "center"
});

class FourthStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: "step4"
    };
  }

  render() {
    return (
      <DataContext.Consumer>
        {({ state }) => {
          return (
            <Container>
              <h2>Please Review Your Order</h2>
              <Row>
                <span>Meal Type</span>
                <span>Lunch</span>
              </Row>
              <Row>
                <span>No. of People</span>
                <span>{state.stepOptions.step1.selectedPartyCount.value}</span>
              </Row>
              <Row>
                <span>Restaurant</span>
                <span>{state.stepOptions.step2.selectedRestaurant.value}</span>
              </Row>
              <Row className={orderStyle}>
                <OrderList
                  currentOrder={state.stepOptions.step3.currentOrder}
                />
              </Row>
            </Container>
          );
        }}
      </DataContext.Consumer>
    );
  }
}

export default FourthStep;
