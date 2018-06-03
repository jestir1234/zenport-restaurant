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
    selectedServings: { value: 1, label: 1 },
    currentOrder: {},
    validMealCount: false,
    errorMessage: ""
  }
});

class DataProvider extends Component {
  state = {
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

  addOrder = order => {
    let newOrder = { ...this.state.stepOptions.step3.currentOrder, ...order };
    this.setState(
      prevState => ({
        ...prevState,
        stepOptions: {
          ...prevState.stepOptions,
          step3: {
            ...prevState.stepOptions.step3,
            currentOrder: newOrder
          }
        }
      }),
      this.validateMealCount
    );
  };

  subtractOrder = dish => {
    let currentOrder = { ...this.state.stepOptions.step3.currentOrder };
    delete currentOrder[dish];
    this.setState(
      prevState => ({
        ...prevState,
        stepOptions: {
          ...prevState.stepOptions,
          step3: {
            ...prevState.stepOptions.step3,
            currentOrder
          }
        }
      }),
      this.validateMealCount
    );
  };

  validateMealCount = () => {
    let currentOrders = this.state.stepOptions.step3.currentOrder;
    let totalMeals =
      Object.keys(currentOrders).length > 0
        ? Object.values(this.state.stepOptions.step3.currentOrder).reduce(
            (acc, val) => acc + val
          )
        : 0;

    let selectedPartyCount = this.state.stepOptions.step1.selectedPartyCount
      .value;
    let errorMessage = "";

    if (totalMeals > 10) {
      errorMessage = "Exceeded max total servings of 10.";
    }

    if (totalMeals < selectedPartyCount) {
      errorMessage =
        "Total servings must be equal to or greater than the no. of people in your group.";
    }

    this.setState(prevState => ({
      ...prevState,
      stepOptions: {
        ...prevState.stepOptions,
        step3: {
          ...prevState.stepOptions.step3,
          validMealCount: totalMeals <= 10 && totalMeals >= selectedPartyCount,
          errorMessage
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
            this.handleChange(selectedOption, option, currentStep),
          addOrder: order => this.addOrder(order),
          subtractOrder: dish => this.subtractOrder(dish)
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataProvider;
