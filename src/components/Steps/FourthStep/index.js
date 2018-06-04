import React from "react";
import styled, { css } from "react-emotion";
import { DataContext } from "../../../context/DataProvider";
import OrderList from "../ThirdStep/OrderList";
import { MEDIA_BREAKPOINTS, COLORS } from "../../../constants";

const Container = styled("div")(props => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  width: "500px",
  padding: "20px",
  border: `1px solid ${COLORS.dark}`
}));

const Row = styled("div")(props => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 40px 10px 40px",
  [MEDIA_BREAKPOINTS.down("md")]: {
    padding: "10px 20px 10px 20px"
  }
}));

const headerStyle = css({
  [MEDIA_BREAKPOINTS.down("md")]: {
    fontSize: "16px",
    fontWeight: "bold"
  }
});

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
          let selectedMealType = state.stepOptions.step1.selectedMealType;
          let selectedPartyCount = state.stepOptions.step1.selectedPartyCount;
          let selectedRestaurant = state.stepOptions.step2.selectedRestaurant;

          if (selectedMealType) {
            selectedMealType = selectedMealType.value;
          }

          if (selectedPartyCount) {
            selectedPartyCount =
              state.stepOptions.step1.selectedPartyCount.value;
          }

          if (selectedRestaurant) {
            selectedRestaurant =
              state.stepOptions.step2.selectedRestaurant.value;
          }

          return (
            <Container>
              <h2 className={headerStyle}>Please Review Your Order</h2>
              <Row>
                <span>Meal Type</span>
                <span>{selectedMealType}</span>
              </Row>
              <Row>
                <span>No. of People</span>
                <span>{selectedPartyCount}</span>
              </Row>
              <Row>
                <span>Restaurant</span>
                <span>{selectedRestaurant}</span>
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
