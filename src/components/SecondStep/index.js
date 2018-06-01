import React from "react";
import styled, { css } from "react-emotion";
import RestaurantSelector from "./RestaurantSelector";
import MealSelector from "./MealSelector";
import { DataContext } from "../../context/DataProvider";

class SecondStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRestaurant: null,
      selectedMeal: null,
      step: "step2"
    };
  }

  // handleChange = (selectedOption, option) => {
  //   this.setState({ [option]: selectedOption });
  // };

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
          return (
            <div>
              <RestaurantSelector
                selectedRestaurant={
                  context.state.stepOptions[this.state.step][
                    "selectedRestaurant"
                  ]
                }
                handleChange={e =>
                  context.handleChange(e, "selectedRestaurant", "step2")
                }
                restaurants={Object.keys(context.state.restaurants)}
              />
              {this.state.selectedRestaurant ? (
                <MealSelector
                  selectedMeal={
                    context.state.stepOptions[this.state.step]["selectedMeal"]
                  }
                  handleChange={e =>
                    context.handleChange(e, "selectedMeal", "step2")
                  }
                  // menu={
                  //   context.state.restaurants[
                  //     this.state.selectedRestaurant.value
                  //   ]["menu"]
                  // }
                  menu={Object.keys(
                    context.state.mealTypes[
                      context.state.stepOptions.step1.selectedMealType
                    ]["restaurants"]
                  )}
                />
              ) : null}
            </div>
          );
        }}
      </DataContext.Consumer>
    );
  }
}

export default SecondStep;
