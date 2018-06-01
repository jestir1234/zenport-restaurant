import React from "react";
import styled, { css } from "react-emotion";
import RestaurantSelector from "./RestaurantSelector";
import MealSelector from "./MealSelector";
import { DataContext } from "../../context/DataProvider";

class FirstStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRestaurant: null,
      selectedMeal: null
    };
  }

  handleChange = (selectedOption, option) => {
    this.setState({ [option]: selectedOption });
  };

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
                selectedRestaurant={this.state.selectedRestaurant}
                handleChange={e => this.handleChange(e, "selectedRestaurant")}
                restaurants={Object.keys(context.state.restaurants)}
              />
              {this.state.selectedRestaurant ? (
                <MealSelector
                  selectedMeal={this.state.selectedMeal}
                  handleChange={e => this.handleChange(e, "selectedMeal")}
                  menu={
                    context.state.restaurants[
                      this.state.selectedRestaurant.value
                    ]["menu"]
                  }
                />
              ) : null}
            </div>
          );
        }}
      </DataContext.Consumer>
    );
  }
}

export default FirstStep;
