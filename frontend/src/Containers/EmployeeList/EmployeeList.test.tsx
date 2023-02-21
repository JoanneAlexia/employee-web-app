import EmployeeList from "./EmployeeList";
import axios, { AxiosResponse } from "axios";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("Test Employee List", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });
  test("should render employee name, email and contract length and type to screen", async () => {
    const mAxiosResponse = {
      data: [
        {
          id: 1,
          firstName: "John",
          middleName: "",
          lastName: "Smith",
          email: "johnsmith@gmail.com",
          mobileNumber: null,
          address: "",
          startDay: 1,
          startMonth: 1,
          startYear: 2020,
          endDay: 1,
          endMonth: 1,
          endYear: 2022,
          employmentType: "fullTime",
          isOngoing: true,
          contractType: "permanent",
          hoursPerWeek: null,
        },
        {
          id: 1,
          firstName: "Jane",
          middleName: "",
          lastName: "Random",
          email: "janerandom@gmail.com",
          mobileNumber: null,
          address: "",
          startDay: 1,
          startMonth: 1,
          startYear: 2020,
          endDay: 1,
          endMonth: 1,
          endYear: 2023,
          employmentType: "fullTime",
          isOngoing: true,
          contractType: "contract",
          hoursPerWeek: null,
        },
      ],
    } as AxiosResponse;
    vi.spyOn(axios, "get").mockResolvedValueOnce(mAxiosResponse);
    render(
      <BrowserRouter>
        <EmployeeList />
      </BrowserRouter>
    );
    expect(await screen.findByText("John Smith")).toBeInTheDocument();
    expect(await screen.findByText("permanent - 2yrs")).toBeInTheDocument();
    expect(await screen.findByText("johnsmith@gmail.com")).toBeInTheDocument();
    expect(await screen.findByText("Jane Random")).toBeInTheDocument();
    expect(await screen.findByText("contract - 3yrs")).toBeInTheDocument();
    expect(await screen.findByText("janerandom@gmail.com")).toBeInTheDocument();
  });
  test("should alert user if no data in database", async () => {
    const mAxiosResponse = {
      data: [],
    } as AxiosResponse;
    vi.spyOn(axios, "get").mockResolvedValueOnce(mAxiosResponse);
    render(
      <BrowserRouter>
        <EmployeeList />
      </BrowserRouter>
    );
    expect(
      await screen.findByText("No employees in database")
    ).toBeInTheDocument();
  });
  test("should alert user if could not connect to database", async () => {
    vi.spyOn(axios, "get").mockRejectedValue(new Error());
    render(
      <BrowserRouter>
        <EmployeeList />
      </BrowserRouter>
    );
    expect(
      await screen.findByText("Error loading database")
    ).toBeInTheDocument();
  });
});
