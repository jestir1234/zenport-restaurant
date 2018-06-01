import React, { Component } from "react";
import styled, { css } from "react-emotion";
import NavigationSteps from "./components/NavigationSteps";
import FirstStep from "./components/Steps/FirstStep";
import SecondStep from "./components/Steps/SecondStep";
import ThirdStep from "./components/Steps/ThirdStep";
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
  step2: SecondStep,
  step3: ThirdStep
};

const incrementPage = page => {
  let nextNum = parseInt(page.slice(4)) + 1;
  if (nextNum > 4) {
    return page;
  }
  return page.slice(0, 4) + nextNum;
};

class App extends Component {
  constructor() {
    super();
    this.state = { currentPage: { page: "step1", prev: null, next: "step2" } };
  }

  navigateToNextPage = currentPage => {
    this.setState({
      currentPage: {
        page: incrementPage(currentPage.page),
        prev: currentPage.page,
        next: incrementPage(incrementPage(currentPage.page))
      }
    });
  };

  render() {
    return (
      <DataProvider>
        <Container>
          <Header>
            <h1>ZENPORT MENUS</h1>
          </Header>
          <NavigationSteps currentPage={this.state.currentPage.page} />
          <StepContainer
            render={() =>
              React.createElement(pageMap[this.state.currentPage.page])
            }
          />
          <Footer
            currentPage={this.state.currentPage}
            navigateToNextPage={this.navigateToNextPage}
          />
        </Container>
      </DataProvider>
    );
  }
}

export default App;
