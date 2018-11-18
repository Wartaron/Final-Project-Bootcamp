import React from "react";
// import { Link } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import FooterApp from '../components/FooterApp';

test("renders correctly", () => {
  const tree = renderer
    .create(
      <FooterApp />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
