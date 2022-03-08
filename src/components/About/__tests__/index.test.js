import React from "react";
// Renders the component - Jest creates simulated DOM in a Node.js environment to approximate the DOM.
// Cleanup removes components from the DOM to prevent memory leaking as well as variable/data collisions between tests.
import { render, cleanup } from "@testing-library/react";
// jest-dom offers access to custom matchers used to test DOM elements.
import "@testing-library/jest-dom/extend-expect";

import About from "..";
// Ensures no leftover memory data after each test.
afterEach(cleanup);

// Declare component we're testing.
describe("About component", () => {
  // renders About test.
  // First test - verify the component is rendering.
  it("renders", () => {
    render(<About />);
  });
  // Second test.
  it("matches snapshot DOM node structure", () => {
    // render About.
    //   asFragment returns snapshot of About component.
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
