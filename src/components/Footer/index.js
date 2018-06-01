import React from "react";
import styled, { css } from "react-emotion";

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
  background: "#57dee1",
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
  "&:hover": {
    background: "#b4fffd"
  },
  "&:active": {
    transform: "scale(.9)"
  }
}));

const Footer = props => {
  return (
    <Container>
      <NextButton>NEXT</NextButton>
    </Container>
  );
};

export default Footer;
