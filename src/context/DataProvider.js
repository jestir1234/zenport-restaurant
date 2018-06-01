import React, { Component } from "react";
import data from "../data.json";

export const DataContext = React.createContext();

const parseRestaurants = () => {
  let restaurants = {};
  let uniqRestaurants = Array.from(
    new Set(data[0].dishes.map(dish => dish.restaurant))
  );
  uniqRestaurants.forEach(name => {
    restaurants[name] = { availableMeals: "", menu: [] };
  });

  data[0].dishes.forEach(dish => {
    let currentMenu = restaurants[dish.restaurant].menu;
    currentMenu.push(dish.name);
    restaurants[dish.restaurant] = {
      availableMeals: dish.availableMeals,
      menu: currentMenu
    };
  });
  return restaurants;
};

const parseMealTypes = restaurants => {
  let mealTypes = {};
  Object.keys(restaurants).forEach(restaurant => {
    let restaurantMealTypes = restaurants[restaurant]["availableMeals"];
    restaurantMealTypes.forEach(type => {
      if (mealTypes[type]) {
        mealTypes[type]["restaurants"][restaurant] = restaurants[restaurant];
      } else {
        mealTypes[type] = { restaurants: {} };
      }
    });
  });
  return mealTypes;
};

const defaultStepOptions = () => ({
  step1: {
    selectedMealType: null,
    selectedPartyCount: 1
  },
  step2: {
    selectedRestaurant: null
  },
  step3: {
    selectedMeal: null
  }
});

class DataProvider extends Component {
  state = {
    restaurants: parseRestaurants(),
    mealTypes: parseMealTypes(parseRestaurants()),
    stepOptions: defaultStepOptions()
  };

  handleChange = (selectedOption, option, currentStep) => {
    this.setState(prevState => ({
      ...prevState,
      stepOptions: {
        ...prevState.stepOptions,
        [currentStep]: {
          ...prevState.stepOptions[currentStep],
          [option]: selectedOption
        }
      }
    }));
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          state: this.state,
          handleChange: (selectedOption, option, currentStep) =>
            this.handleChange(selectedOption, option, currentStep)
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataProvider;
