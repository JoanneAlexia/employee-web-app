export default interface IEmployeeRequest {
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
  isOngoing: boolean;
  employmentType: String;
  hoursPerWeek: number;
}
