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
    selectedPartyCount: { value: 1, label: 1 }
  },
  step2: {
    selectedRestaurant: null
  },
  step3: {
    selectedMeal: null,
    selectedServings: { value: 1, label: 1 }
  }
});

class DataProvider extends Component {
  state = {
    mealTypes: parseMealTypes(parseRestaurants()),
    stepOptions: defaultStepOptions(),
    currentOrder: {}
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

  updateOrder = order => {
    let currentOrder = this.state.currentOrder;
    let newOrder = Object.assign(currentOrder, order);
    this.setState({ currentOrder: newOrder });
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          state: this.state,
          handleChange: (selectedOption, option, currentStep) =>
            this.handleChange(selectedOption, option, currentStep),
          updateOrder: order => this.updateOrder(order)
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataProvider;
