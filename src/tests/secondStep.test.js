import React from "react";
import SecondStep from "../components/Steps/SecondStep";
import renderer from "react-test-renderer";
import DataProvider from "../context/DataProvider";
import getElementWithContext from "react-test-context-provider";

const context = {
  handleChange: (e, selectedPartyCount, step) =>
    console.log("handleChangeFunction"),
  state: {
    stepOptions: {
      step1: {
        selectedPartyCount: 4
      }
    },
    mealTypes: {
      lunch: {
        restaurants: {
          McDonalds: ["Burger", "Fries"]
        }
      }
    }
  }
};

var SecondStepWithContext = getElementWithContext(
  context,
  <DataProvider>
    <SecondStep />
  </DataProvider>
);

test("Renders the <SecondStep /> component", () => {
  const component = renderer.create(SecondStepWithContext);
  let tree = component.toJSON();
  expect(tree);

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
