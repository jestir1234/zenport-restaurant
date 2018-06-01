import React, { Fragment } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";

const RestaurantSelector = props => {
  return (
    <Fragment>
      <h3>Please Select a Restaurant</h3>
      <Select
        name="form-field-name"
        value={props.selectedOption}
        onChange={props.handleChange}
        options={props.restaurants.map(name => {
          return {
            value: name,
            label: name
          };
        })}
      />
    </Fragment>
  );
};

export default RestaurantSelector;
