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
  padding: "20px 10px 0 10px",
  ...props.styles
}));

const Header = styled("h3")(props => ({
  whiteSpace: "nowrap"
}));

const Error = styled("span")(props => ({
  color: "red",
  position: "absolute"
}));

const Selector = props => {
  return (
    <Container styles={props.styles}>
      <Header>{props.title}</Header>
      <Select
        name="form-field-name"
        value={props.selectedValue}
        onChange={props.handleChange}
        options={props.options}
      />
      <Error>{props.errorMessage}</Error>
    </Container>
  );
};

export default Selector;
