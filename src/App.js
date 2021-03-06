import React, { Component } from "react";
import styled from "react-emotion";
import NavigationSteps from "./components/NavigationSteps";
import FirstStep from "./components/Steps/FirstStep";
import SecondStep from "./components/Steps/SecondStep";
import ThirdStep from "./components/Steps/ThirdStep";
import FourthStep from "./components/Steps/FourthStep";
import Footer from "./components/Footer";
import StepContainer from "./components/StepContainer";
import DataProvider from "./context/DataProvider";
import { COLORS } from "./constants";

const Header = styled("div")`
  background: ${COLORS.aqua};
  display: flex;
  justify-content: center;
  min-height: 81px;
`;

const Container = styled("div")`
  height: 100vh;
  color: ${COLORS.dark};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const pageMap = {
  step1: FirstStep,
  step2: SecondStep,
  step3: ThirdStep,
  step4: FourthStep
};

const incrementPage = page => {
  let nextNum = parseInt(page.slice(4), 10) + 1;
  if (nextNum > 4) {
    return page;
  }
  return page.slice(0, 4) + nextNum;
};

const decrementPage = page => {
  let nextNum = parseInt(page.slice(4), 10) - 1;
  if (nextNum < 1) {
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

  navigateToPreviousPage = currentPage => {
    this.setState({
      currentPage: {
        page: currentPage.prev,
        prev: decrementPage(decrementPage(currentPage.page)),
        next: currentPage.page
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
            navigateToPreviousPage={this.navigateToPreviousPage}
          />
        </Container>
      </DataProvider>
    );
  }
}

export default App;
