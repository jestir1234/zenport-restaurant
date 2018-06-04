import React from "react";
import FourthStep from "../components/Steps/FourthStep";
import renderer from "react-test-renderer";
import DataProvider from "../context/DataProvider";
import getElementWithContext from "react-test-context-provider";

const context = {
  handleChange: (e, selectedPartyCount, step) =>
    console.log("handleChangeFunction"),
  state: {
    stepOptions: {
      step1: {
        selectedPartyCount: {
          value: 4
        },
        selectedMealType: {
          value: "lunch"
        }
      },
      step2: {
        selectedRestaurant: {
          McDonalds: ["Burger", "Fries"]
        }
      },
      step3: {
        currentOrder: {
          Burger: 1,
          Fries: 1
        }
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

var FourthStepWithContext = getElementWithContext(
  context,
  <DataProvider>
    <FourthStep />
  </DataProvider>
);

test("Renders the <SecondStep /> component", () => {
  const component = renderer.create(FourthStepWithContext);
  let tree = component.toJSON();
  expect(tree);

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
