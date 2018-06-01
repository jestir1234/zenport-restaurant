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

class DataProvider extends Component {
  state = {
    restaurants: parseRestaurants()
  };

  render() {
    return (
      <DataContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataProvider;
