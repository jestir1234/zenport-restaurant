import React from "react";
import styled, { css } from "react-emotion";
import RestaurantSelector from "./RestaurantSelector";
import MealSelector from "./MealSelector";
import { DataContext } from "../../../context/DataProvider";

class SecondStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: "step2"
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
              <RestaurantSelector
                selectedRestaurant={
                  stepOptions[this.state.step]["selectedRestaurant"]
                }
                handleChange={e =>
                  context.handleChange(e, "selectedRestaurant", this.state.step)
                }
                restaurants={Object.keys(restaurants)}
              />
            </div>
          );
        }}
      </DataContext.Consumer>
    );
  }
}

export default SecondStep;
