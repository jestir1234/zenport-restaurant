import React from "react";
import Footer from "../components/Footer";
import renderer from "react-test-renderer";
import DataProvider from "../context/DataProvider";

const currentPage = {
  next: "step2",
  page: "step1",
  prev: "step1"
};

const navigateToNextPage = () => {
  return true;
};

const navigateToPreviousPage = () => {
  return true;
};

test("Renders the <Footer /> component", () => {
  const component = renderer.create(
    <DataProvider>
      <Footer
        currentPage={currentPage}
        navigateToNextPage={navigateToNextPage}
        navigateToPreviousPage={navigateToPreviousPage}
      />
      }
    </DataProvider>
  );
  let tree = component.toJSON();
  expect(tree);

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
