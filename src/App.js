import React, { Component } from "react";
import styled, { css } from "react-emotion";
import NavigationSteps from "./components/NavigationSteps";
import SecondStep from "./components/SecondStep";
import FirstStep from "./components/FirstStep";
import Footer from "./components/Footer";
import StepContainer from "./components/StepContainer";
import DataProvider from "./context/DataProvider";

const Header = styled("div")`
  background: #57dee1;
  display: flex;
  justify-content: center;
`;

const Container = styled("div")`
  height: 100vh;
`;

const pageMap = {
  step1: FirstStep,
  step2: SecondStep
};

class App extends Component {
  constructor() {
    super();
    this.state = { currentPage: "step1" };
  }
  render() {
    return (
      <DataProvider>
        <Container>
          <Header>
            <h1>ZENPORT MENUS</h1>
          </Header>
          <NavigationSteps currentPage={this.state.currentPage} />
          <StepContainer
            render={() => React.createElement(pageMap[this.state.currentPage])}
          />
          <Footer currentPage={this.state.currentPage} />
        </Container>
      </DataProvider>
    );
  }
}

export default App;
