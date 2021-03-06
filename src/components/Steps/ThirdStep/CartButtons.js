import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "react-emotion";

const fade = keyframes`
  from { opacity: 0; }
  50%  { opacity: .5 }
  to   { opacity: 1 }`;

const Icon = styled("div")(props => ({
  height: "20px",
  width: "20px",
  padding: "10px",
  margin: "10px",
  borderRadius: "50%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "#d3f4e6",
  fontSize: "14px",
  "&:hover": {
    background: "#bcf9df"
  },
  animation: `${fade} 1s ease-in-out`,
  cursor: "pointer"
}));

const Container = styled("div")(props => ({
  display: props.selectedValue ? "flex" : "none"
}));

const CartButtons = props => {
  return (
    <Container selectedValue={props.selectedValue}>
      <Icon onClick={props.addOrder}>+</Icon>
      <Icon onClick={props.subtractOrder}>&mdash;</Icon>
    </Container>
  );
};

CartButtons.propTypes = {
  selectedValue: PropTypes.object,
  addOrder: PropTypes.func,
  subtractOrder: PropTypes.func
};

export default CartButtons;
