import CreatePage from "./CreatePage";
import axios, { AxiosResponse } from "axios";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Test create employee page", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });
  test("should make post request when submit button is selected", async () => {
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

    const mockData = {
      id: 1,
      firstName: "John",
      middleName: "Daniel",
      lastName: "Smith",
      email: "johnsmith@gmail.com",
      mobileNumber: "1234567890",
      address: "123 Fake St.",
      startDay: 2,
      startMonth: 3,
      startYear: 2020,
      endDay: null,
      endMonth: null,
      endYear: null,
      employmentType: "fullTime",
      isOngoing: false,
      contractType: "permanent",
      hoursPerWeek: 40,
    };

    vi.spyOn(axios, "post").mockResolvedValueOnce({ data: mockData });

    render(
      <BrowserRouter>
        <CreatePage />
      </BrowserRouter>
    );
    const firstNameInput = screen.getByLabelText("First Name");
    const middleNameInput = screen.getByLabelText(
      "Middle Name (if applicable)"
    );
    const lastNameInput = screen.getByLabelText("Last Name");
    const emailInput = screen.getByLabelText("Email address");
    const mobileInput = screen.getByLabelText("Mobile number");
    const addressInput = screen.getByLabelText("Residential address");
    const startDayInput = screen.getByTestId("startDay");
    const startMonthInput = screen.getByTestId("startMonth");
    const startYearInput = screen.getByTestId("startYear");
    const employmentTypeInput = screen.getByTestId("employmentType");
    const contractTypeInput = screen.getByTestId("contractType");
    const hoursPerWeekInput = screen.getByLabelText("Hour per week");
    const isOngoingCheckbox = screen.getByTestId("isOngoing");
    const submitBtn = screen.getByTestId("submitBtn");

    await userEvent.type(firstNameInput, "John");
    await userEvent.type(middleNameInput, "Daniel");
    await userEvent.type(lastNameInput, "Smith");
    await userEvent.type(emailInput, "johnsmith@gmail.com");
    await userEvent.type(mobileInput, "1234567890");
    await userEvent.type(addressInput, "123 Fake St.");
    await userEvent.type(startDayInput, "2");
    await userEvent.selectOptions(startMonthInput, "3");
    //await userEvent.type(startYearInput, "2020");
    await userEvent.click(isOngoingCheckbox);
    await userEvent.selectOptions(employmentTypeInput, "fullTime");
    await userEvent.selectOptions(contractTypeInput, "permanent");
    //await userEvent.type(hoursPerWeekInput, "25");
    await userEvent.click(submitBtn);

    expect(alertMock).toBeCalled();
    expect(alertMock).toBeCalledWith(
      `New employee ${mockData.firstName} ${mockData.lastName} successfully added to database`
    );
  });
});
