import React, { Component } from "react";
import styled, { css } from "react-emotion";
import NavigationSteps from "./components/NavigationSteps";
import FirstStep from "./components/FirstStep";
import Footer from "./components/Footer";
import StepContainer from "./components/StepContainer";

const Header = styled("div")`
  background: #57dee1;
  display: flex;
  justify-content: center;
`;

const Container = styled("div")`
  height: 100%;
`;

class App extends Component {
  constructor() {
    super();
    this.state = { currentPage: FirstStep };
  }
  render() {
    return (
      <Container>
        <Header>
          <h1>ZENPORT MENUS</h1>
        </Header>
        <NavigationSteps />
        <StepContainer
          render={() => React.createElement(this.state.currentPage)}
        />
        <Footer />
      </Container>
    );
  }
}

export default App;
