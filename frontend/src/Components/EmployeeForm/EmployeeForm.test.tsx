import EmployeeForm from "./EmployeeForm";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Test create employee form", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("should show error message when email entered is not valid", async () => {
    const employee = {
      firstName: "John",
      middleName: "Daniel",
      lastName: "Smith",
      email: "john",
      mobileNumber: "1234567890",
      address: "123 Fake St.",
      startDay: "2",
      startMonth: 3,
      startYear: "2020",
      endDay: "20",
      endMonth: 4,
      endYear: "2022",
      employmentType: "fullTime",
      isOngoing: true,
      contractType: "permanent",
      hoursPerWeek: "40",
    };
    const submitFunction = vi.fn();
    render(
      <BrowserRouter>
        <EmployeeForm employee={employee} onSubmit={submitFunction} />
      </BrowserRouter>
    );
    const submitBtn = screen.getByTestId("submitBtn");
    await userEvent.click(submitBtn);
    expect(
      await screen.findByText("Please enter a valid email address")
    ).toBeInTheDocument();
  });

  test("should show error message when invalid start date information entered", async () => {
    const employee = {
      firstName: "John",
      middleName: "Daniel",
      lastName: "Smith",
      email: "john",
      mobileNumber: "0123456789",
      address: "123 Fake St.",
      startDay: "40",
      startMonth: 3,
      startYear: "2020",
      endDay: "20",
      endMonth: 4,
      endYear: "2022",
      employmentType: "fullTime",
      isOngoing: true,
      contractType: "permanent",
      hoursPerWeek: "20",
    };
    const submitFunction = vi.fn();
    render(
      <BrowserRouter>
        <EmployeeForm employee={employee} onSubmit={submitFunction} />
      </BrowserRouter>
    );
    const submitBtn = screen.getByTestId("submitBtn");
    await userEvent.click(submitBtn);
    expect(await screen.findByText("Invalid date format")).toBeInTheDocument();
  });

  test("should show error message when invalid hours entered correct", async () => {
    const employee = {
      firstName: "John",
      middleName: "Daniel",
      lastName: "Smith",
      email: "john",
      mobileNumber: "0123456789",
      address: "123 Fake St.",
      startDay: "2",
      startMonth: 3,
      startYear: "2020",
      endDay: "20",
      endMonth: 4,
      endYear: "2022",
      employmentType: "fullTime",
      isOngoing: true,
      contractType: "permanent",
      hoursPerWeek: "200",
    };
    const submitFunction = vi.fn();
    render(
      <BrowserRouter>
        <EmployeeForm employee={employee} onSubmit={submitFunction} />
      </BrowserRouter>
    );
    const submitBtn = screen.getByTestId("submitBtn");
    await userEvent.click(submitBtn);
    expect(
      await screen.findByText("Invalid hours entered")
    ).toBeInTheDocument();
  });
});
