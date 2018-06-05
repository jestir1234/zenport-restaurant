# Zenport Restaurant

Visit here - [Zenport Restaurant](http://mattnguyen.win/zenport-restaurant/)

### Technologies Used
* React/Context API
* ES6
* Emotion (css-in-js)
* PropTypes
* Jest
* Create React App
* React Select

### Components

This folder contains all the components for the App:

  - NavigationSteps
  - Footer
  - StepContainer
  - Steps
    - FirstStep
    - SecondStep
    - ThirdStep
      - CartButtons
      - OrderList
    - FourthStep
    - Selector


### Constants

This folder contains common constants such as `media breakpoints` and `colors`.

### Context

Contains the `DataContext` and `DataProvider` which provides the components with relevant state information via the `DataContext.Consumer`, along with callback functions to update state.

### Tests
Contains snapshot tests for Footer, NavigationSteps, FirstStep, SecondStep, ThirdStep, and FourthStep components.