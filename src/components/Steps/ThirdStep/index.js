import React from "react";
import styled, { css } from "react-emotion";
import MealSelector from "./MealSelector";
import { DataContext } from "../../../context/DataProvider";
import Selector from "../Selector";

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
          let stepOptions = context.state.stepOptions;
          let selectedType =
            context.state.stepOptions.step1.selectedMealType.value;
          let restaurants =
            context.state.mealTypes[selectedType]["restaurants"];

          return (
            <div>
              <Selector
                title={"Please Select a Meal"}
                selectedValue={stepOptions[this.state.step]["selectedMeal"]}
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
            </div>
          );
        }}
      </DataContext.Consumer>
    );
  }
}

export default ThirdStep;
