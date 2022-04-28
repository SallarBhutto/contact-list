import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Routes from "./routes";
import Providers from "./providers";

describe("App", () => {
  afterEach(cleanup);
  it("should render app component with Home in the drawer", async () => {
    render(
      <Providers>
        <Routes />
      </Providers>
    );
    const homeDrawerItem = screen.getByText(/Home/i);

    expect(homeDrawerItem).toBeInTheDocument();
  });
});
