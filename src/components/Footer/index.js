import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "react-emotion";
import { DataContext } from "../../context/DataProvider";
import { COLORS, MEDIA_BREAKPOINTS } from "../../constants";

const Container = styled("div")(props => ({
  width: "100%",
  height: "100px",
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
  fontWeight: "bold",
  letterSpacing: "2px",
  cursor: "pointer",
  width: "150px",
  [MEDIA_BREAKPOINTS.down("xs")]: {
    width: "120px"
  },
  height: "30px",
  "&:hover": {
    background: COLORS.lightAqua,
    color: COLORS.dark
  },
  "&:active": {
    transform: "scale(.9)"
  }
});

const NextButton = styled("div")(props => ({
  marginRight: "30px",
  background: props.completed ? COLORS.darkAqua : COLORS.grey,
  pointerEvents: props.completed ? "auto" : "none",
  color: props.completed ? COLORS.white : COLORS.dark,
  [MEDIA_BREAKPOINTS.down("xs")]: {
    marginRight: "20px"
  }
}));

NextButton.propTypes = {
  completed: PropTypes.bool
};

const PreviousButton = styled("div")(props => ({
  marginLeft: "30px",
  visibility: props.currentPage.page === "step1" ? "hidden" : "visible",
  background: props.disableBack ? COLORS.grey : COLORS.darkAqua,
  pointerEvents: props.disableBack ? "none" : "auto",
  color: props.disableBack ? COLORS.dark : COLORS.white,
  [MEDIA_BREAKPOINTS.down("xs")]: {
    marginLeft: "20px"
  }
}));

PreviousButton.propTypes = {
  disableBack: PropTypes.bool
};

const stepCompleted = (currentPage, stepOptions) => {
  if (currentPage === "step4") {
    return true;
  }

  if (currentPage === "step3") {
    return stepOptions[currentPage]["validMealCount"];
  }

  return Object.values(stepOptions[currentPage]).every(hasValue);
};

const hasValue = currentValue => {
  if (!currentValue) {
    return false;
  }

  if (typeof currentValue === "object") {
    return Object.keys(currentValue).length > 0;
  }

  return true;
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
        const nextAction =
          props.currentPage.page === "step4"
            ? () => context.logFinalOrder()
            : () => props.navigateToNextPage(props.currentPage);
        return (
          <Container>
            <PreviousButton
              className={buttonClass}
              disableBack={disableBack}
              currentPage={props.currentPage}
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
              onClick={completed ? nextAction : null}
            >
              {props.currentPage.page === "step4" ? "Submit" : "Next"}
            </NextButton>
          </Container>
        );
      }}
    </DataContext.Consumer>
  );
};

Footer.propTypes = {
  currentPage: PropTypes.object,
  navigateToNextPage: PropTypes.func,
  navigateToPreviousPage: PropTypes.func
};

export default Footer;
