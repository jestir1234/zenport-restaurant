import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import "react-select/dist/react-select.css";
import styled, { keyframes } from "react-emotion";
import { MEDIA_BREAKPOINTS, COLORS } from "../../../constants";

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
  whiteSpace: "nowrap",
  [MEDIA_BREAKPOINTS.down("xs")]: {
    whiteSpace: "normal"
  }
}));

const Error = styled("span")(props => ({
  color: COLORS.red,
  position: "absolute",
  maxWidth: "300px"
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

Selector.propTypes = {
  styles: PropTypes.object,
  title: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  options: PropTypes.array
};

export default Selector;
