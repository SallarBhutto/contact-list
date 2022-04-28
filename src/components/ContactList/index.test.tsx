import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import ContactList from "./index";
import Providers from "../../providers";

describe("Contact row", () => {
  afterEach(cleanup);
  it("should display Loading...", async () => {
    render(
      <Providers>
        <ContactList />
      </Providers>
    );
    const loadingElement = screen.getByText(/Loading.../i);

    expect(loadingElement).toBeInTheDocument();
  });
});
