import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { ContactRow } from "..";
import { Contact } from "../../features/contacts/contactsSlice";

const dummyProps: Contact = {
  id: 123,
  first_name: "Sallar",
  last_name: "Bhutto",
  department: "Sales",
  email: "sallartest@gmail.com",
  contribution: 30,
  avatar: "../../assests/images/inventorum_logo.png",
};

describe("Contact row", () => {
  afterEach(cleanup);
  it("should display avatar, names, department, email, contribution ", async () => {
    render(<ContactRow contact={dummyProps} />);
    const nameElement = screen.getByText(/Sallar Bhutto/i);
    const departmentElement = screen.getByText(/Sales/i);
    const emailElement = screen.getByText(/sallartest@gmail.com/i);
    const contributionlement = screen.getByText(/30.00 Є/i);
    const avatorElement = screen.getByRole("img");

    expect(nameElement).toBeInTheDocument();
    expect(departmentElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(contributionlement).toBeInTheDocument();
    expect(avatorElement).toBeInTheDocument();
  });

  it("should display department and contribution default values if not provided in the object", async () => {
    const contactProps = {
      ...dummyProps,
    };
    delete contactProps.department;
    delete contactProps.contribution;

    render(<ContactRow contact={dummyProps} />);
    const departmentElement = screen.getByText(/Department/i);
    const contributionlement = screen.getByText(/0.00 Є/i);

    expect(departmentElement).toBeInTheDocument();
    expect(contributionlement).toBeInTheDocument();
  });
});
