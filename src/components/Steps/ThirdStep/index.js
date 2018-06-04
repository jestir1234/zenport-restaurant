import React from "react";
import styled from "react-emotion";
import { DataContext } from "../../../context/DataProvider";
import Selector from "../Selector";
import CartButtons from "./CartButtons";
import OrderList from "./OrderList";

// STYLES
const Container = styled("div")(props => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start"
}));

const SelectorContainer = styled("div")(props => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%"
}));

const SelectorStyles = {
  flex: 1
};

// CONSTANTS
const SERVING_MAX = 10;

// HELPER FUNCTIONS
const onlyUnique = (value, index, self) => self.indexOf(value) === index;

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
          let selectedType;
          let restaurants;
          if (context.state.stepOptions.step1.selectedMealType) {
            selectedType =
              context.state.stepOptions.step1.selectedMealType.value;
            restaurants = context.state.mealTypes[selectedType]["restaurants"];
          }
          let selectedRestaurant = stepOptions.step2["selectedRestaurant"];
          let menus = [];
          if (selectedRestaurant) {
            menus =
              restaurants[stepOptions.step2["selectedRestaurant"]["value"]][
                "menu"
              ];
          }

          if (context.state.mealTypes[selectedType]) {
            restaurants = context.state.mealTypes[selectedType]["restaurants"];
          }
          const selectedServingValue =
            stepOptions[this.state.step]["selectedServings"];
          const selectedMealValue =
            stepOptions[this.state.step]["selectedMeal"];

          let mealName;
          let addedOrder = {};
          if (selectedMealValue) {
            mealName = selectedMealValue.value;
          }
          if (selectedServingValue) {
            addedOrder[mealName] = selectedServingValue.value;
          }

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
                  options={menus.filter(onlyUnique).map(name => {
                    return {
                      value: name,
                      label: name
                    };
                  })}
                />

                <Selector
                  errorMessage={stepOptions[this.state.step]["errorMessage"]}
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
                addOrder={() => context.addOrder(addedOrder)}
                subtractOrder={() => context.subtractOrder(mealName)}
                selectedValue={selectedServingValue && selectedMealValue}
              />

              <OrderList
                currentOrder={
                  context.state.stepOptions[this.state.step]["currentOrder"]
                }
              />
            </Container>
          );
        }}
      </DataContext.Consumer>
    );
  }
}

export default ThirdStep;
