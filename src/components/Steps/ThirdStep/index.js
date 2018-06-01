import React from "react";
import styled, { css } from "react-emotion";
import MealSelector from "./MealSelector";
import { DataContext } from "../../../context/DataProvider";

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
          if (this.state.selectedRestaurant) {
            console.log(
              context.state.restaurants[this.state.selectedRestaurant.value][
                "menu"
              ]
            );
          }

          let stepOptions = context.state.stepOptions;
          let selectedType =
            context.state.stepOptions.step1.selectedMealType.value;

          let restaurants =
            context.state.mealTypes[selectedType]["restaurants"];

          return (
            <div>
              <MealSelector
                selectedMeal={stepOptions[this.state.step]["selectedMeal"]}
                handleChange={e =>
                  context.handleChange(e, "selectedMeal", this.state.step)
                }
                menu={
                  restaurants[stepOptions.step2["selectedRestaurant"]["value"]][
                    "menu"
                  ]
                }
              />
            </div>
          );
        }}
      </DataContext.Consumer>
    );
  }
}

export default ThirdStep;
