import React from "react";
import data from "../../data.json";
import styled, { css } from "react-emotion";
import RestaurantSelector from "./RestaurantSelector";

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

class FirstStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: parseRestaurants(),
      selectedOption: null
    };
  }

  componentWillMount() {
    console.log(data); // @todo delete
  }

  handleChange = selectedOption => this.setState({ selectedOption });

  render() {
    console.log(this.state.restaurants);
    return (
      <div>
        <RestaurantSelector
          selectedOption={this.state.selectedOption}
          handleChange={this.handleChange}
          restaurants={Object.keys(this.state.restaurants)}
        />
      </div>
    );
  }
}

export default FirstStep;
