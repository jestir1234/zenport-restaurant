import React, { Fragment } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import styled, { css, keyframes } from "react-emotion";

const fade = keyframes`
  from { opacity: 0; }
  50%  { opacity: .5 }
  to   { opacity: 1 }`;

const Container = styled("div")(props => ({
  animation: `${fade} 1s ease-in-out`,
  padding: "20px 0 0"
}));

const MealSelector = props => {
  return (
    <Container>
      <h3>Please Select a Meal</h3>
      <Select
        name="form-field-name"
        value={props.selectedMeal}
        onChange={props.handleChange}
        options={props.menu.map(name => {
          return {
            value: name,
            label: name
          };
        })}
      />
    </Container>
  );
};

export default MealSelector;
