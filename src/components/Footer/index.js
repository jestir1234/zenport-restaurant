import React from "react";
import styled, { css, keyframes } from "react-emotion";
import { DataContext } from "../../context/DataProvider";

const Container = styled("div")(props => ({
  width: "100%",
  height: "100px",
  border: "1px solid blue",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center"
}));

const NextButton = styled("div")(props => ({
  width: "150px",
  height: "30px",
  background: props.completed ? "#57dee1" : "#f0f0f0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  border: "1px solid #363c3c",
  fontWeight: "bold",
  letterSpacing: "2px",
  marginRight: "20px",
  cursor: "pointer",
  pointerEvents: props.completed ? "auto" : "none",
  "&:hover": {
    background: "#b4fffd"
  },
  "&:active": {
    transform: "scale(.9)"
  }
}));

const stepCompleted = (currentPage, stepOptions) => {
  return !Object.values(stepOptions[currentPage]).includes(null);
};

const Footer = props => {
  return (
    <DataContext.Consumer>
      {context => {
        const completed = stepCompleted(
          props.currentPage,
          context.state.stepOptions
        );
        return (
          <Container>
            <NextButton completed={completed}>NEXT</NextButton>
          </Container>
        );
      }}
    </DataContext.Consumer>
  );
};

export default Footer;
