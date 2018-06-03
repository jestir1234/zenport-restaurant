import React from "react";
import styled, { css, keyframes } from "react-emotion";
import { DataContext } from "../../context/DataProvider";

const Container = styled("div")(props => ({
  width: "100%",
  height: "100px",
  border: "1px solid blue",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}));

const buttonClass = css({
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
  width: "150px",
  height: "30px",
  "&:hover": {
    background: "#b4fffd"
  },
  "&:active": {
    transform: "scale(.9)"
  }
});

const NextButton = styled("div")(props => ({
  marginRight: "20px",
  background: props.completed ? "#57dee1" : "#f0f0f0",
  pointerEvents: props.completed ? "auto" : "none"
}));

const PreviousButton = styled("div")(props => ({
  marginLeft: "20px",
  background: props.disableBack ? "#f0f0f0" : "#57dee1",
  pointerEvents: props.disableBack ? "none" : "auto"
}));

const stepCompleted = (currentPage, stepOptions) => {
  if (currentPage === "step4") {
    return true;
  }
  return !Object.values(stepOptions[currentPage]).includes(null);
};

const Footer = props => {
  return (
    <DataContext.Consumer>
      {context => {
        const completed = stepCompleted(
          props.currentPage.page,
          context.state.stepOptions
        );

        const disableBack = props.currentPage.page === "step1";
        return (
          <Container>
            <PreviousButton
              className={buttonClass}
              disableBack={disableBack}
              onClick={
                disableBack
                  ? null
                  : () => props.navigateToPreviousPage(props.currentPage)
              }
            >
              Previous
            </PreviousButton>
            <NextButton
              className={buttonClass}
              completed={completed}
              onClick={
                completed
                  ? () => props.navigateToNextPage(props.currentPage)
                  : null
              }
            >
              NEXT
            </NextButton>
          </Container>
        );
      }}
    </DataContext.Consumer>
  );
};

export default Footer;
