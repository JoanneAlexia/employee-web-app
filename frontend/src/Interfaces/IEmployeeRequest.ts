export default interface IEmployeeRequest {
  firstName: string;
  middleName: string | null;
  lastName: string;
  email: string;
  mobileNumber: number;
  address: string;
  contractType: string;
  startDay: number;
  startMonth: number;
  startYear: number;
  endDay: number | null;
  endMonth: number | null;
  endYear: number | null;
  isOngoing: boolean;
  employmentType: string;
  hoursPerWeek: number;
}
