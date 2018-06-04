import React from "react";
import ThirdStep from "../components/Steps/ThirdStep";
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
      },
      step2: {}
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

var ThirdStepWithContext = getElementWithContext(
  context,
  <DataProvider>
    <ThirdStep />
  </DataProvider>
);

test("Renders the <SecondStep /> component", () => {
  const component = renderer.create(ThirdStepWithContext);
  let tree = component.toJSON();
  expect(tree);

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
