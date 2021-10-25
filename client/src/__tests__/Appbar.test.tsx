//import React from "react";
import { render, screen } from "@testing-library/react";
import { Appbar } from "../components";
//import TestRenderer from "react-test-renderer";
import { MockedProvider } from "@apollo/client/testing";

describe("tests", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = render(
      <MockedProvider addTypename={false}>
        <Appbar />
      </MockedProvider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });
  test("Should render Appbar component", () => {
    const linkElement = screen.getByTestId("appbar");
    expect(linkElement).toBeInTheDocument();
  });
  test("Should render with given text", () => {
    const linkElement = screen.getByTestId("appbar");
    expect(linkElement).toHaveTextContent("Rural India Student Database");
  });
});
