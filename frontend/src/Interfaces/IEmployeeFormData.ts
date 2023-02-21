export default interface IEmployeeFormData {
  firstName: String;
  middleName: String | null;
  lastName: String;
  email: String;
  mobileNumber: string;
  address: String;
  contractType: string;
  startDay: String;
  startMonth: number;
  startYear: String;
  endDay: String | null;
  endMonth: number | null;
  endYear: String | null;
  isOngoing: boolean;
  employmentType: String;
  hoursPerWeek: String;
}
