export default interface IEmployeeResponse {
  id: number;
  firstName: String;
  middleName: String | null;
  lastName: String;
  email: String;
  mobileNumber: number;
  address: String;
  contractType: String;
  startDay: number;
  startMonth: number;
  startYear: number;
  endDay: number | null;
  endMonth: number | null;
  endYear: number | null;
  ongoing: boolean;
  employmentType: String;
  hoursPerWeek: number;
}
