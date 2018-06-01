import React, { Fragment } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import styled, { css, keyframes } from "react-emotion";

const Container = styled("div")(props => ({
  padding: "20px 0 0"
}));

const MealTypeSelector = props => {
  return (
    <Container>
      <h3>Please Select a Meal Type</h3>
      <Select
        name="form-field-name"
        value={props.selectedMealType}
        onChange={props.handleChange}
        options={props.mealTypes.map(name => {
          return {
            value: name,
            label: name
          };
        })}
      />
    </Container>
  );
};

export default MealTypeSelector;
