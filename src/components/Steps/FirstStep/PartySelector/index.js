import React, { Fragment } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import styled, { css, keyframes } from "react-emotion";

const Container = styled("div")(props => ({
  padding: "20px 0 0"
}));

const PARTY_MAX = 10;

const PartySelector = props => {
  return (
    <Container>
      <h3>Enter the number of people in your party</h3>
      <Select
        name="form-field-name"
        value={props.selectedPartyCount}
        onChange={props.handleChange}
        options={[...Array(PARTY_MAX)].map((count, idx) => {
          return {
            value: idx + 1,
            label: idx + 1
          };
        })}
      />
    </Container>
  );
};

export default PartySelector;
