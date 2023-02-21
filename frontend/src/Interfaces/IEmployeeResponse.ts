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
  endDay: number;
  endMonth: number;
  endYear: number;
  ongoing: boolean;
  employmentType: String;
  hoursPerWeek: number;
}
