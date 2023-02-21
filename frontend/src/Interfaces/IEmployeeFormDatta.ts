export default interface IEmployeeData {
  firstName: String;
  middleName: String | null;
  lastName: String;
  email: String;
  mobileNumber: number;
  address: String;
  isPermanent: boolean;
  startDay: number;
  startMonth: number;
  startYear: number;
  endDay: number;
  endMonth: number;
  endYear: number;
  isOngoing: boolean;
  isFullTime: boolean;
}
