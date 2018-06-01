import React from "react";
import styled, { css } from "react-emotion";
import { DataContext } from "../../../context/DataProvider";
import Selector from "../Selector";
import CartButtons from "./CartButtons";
import OrderList from "./OrderList";

const Container = styled("div")(props => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "50%"
}));

const SelectorContainer = styled("div")(props => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%"
}));

const SelectorStyles = {
  flex: 1
};

const SERVING_MAX = 10;

class ThirdStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: "step3"
    };
  }

  render() {
    return (
      <DataContext.Consumer>
        {context => {
          const stepOptions = context.state.stepOptions;
          const selectedType =
            context.state.stepOptions.step1.selectedMealType.value;
          const restaurants =
            context.state.mealTypes[selectedType]["restaurants"];
          const selectedServingValue =
            stepOptions[this.state.step]["selectedServings"];
          const selectedMealValue =
            stepOptions[this.state.step]["selectedMeal"];

          let mealName;
          if (selectedMealValue) {
            mealName = selectedMealValue.value;
          }
          const order = {
            [mealName]: selectedServingValue.value
          };
          return (
            <Container>
              <SelectorContainer>
                <Selector
                  styles={SelectorStyles}
                  title={"Please Select a Meal"}
                  selectedValue={selectedMealValue}
                  handleChange={e =>
                    context.handleChange(e, "selectedMeal", this.state.step)
                  }
                  options={restaurants[
                    stepOptions.step2["selectedRestaurant"]["value"]
                  ]["menu"].map(name => {
                    return {
                      value: name,
                      label: name
                    };
                  })}
                />

                <Selector
                  styles={SelectorStyles}
                  title={"Please enter no. of servings"}
                  selectedValue={selectedServingValue}
                  handleChange={e =>
                    context.handleChange(e, "selectedServings", this.state.step)
                  }
                  options={[...Array(SERVING_MAX)].map((count, idx) => {
                    return {
                      value: idx + 1,
                      label: idx + 1
                    };
                  })}
                />
              </SelectorContainer>
              <CartButtons
                updateOrder={() => context.updateOrder(order)}
                selectedValue={selectedServingValue && selectedMealValue}
              />

              <OrderList currentOrder={context.state.currentOrder} />
            </Container>
          );
        }}
      </DataContext.Consumer>
    );
  }
}

export default ThirdStep;
