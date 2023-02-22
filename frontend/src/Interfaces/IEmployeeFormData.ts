export default interface IEmployeeFormData {
  firstName: string;
  middleName: string | null;
  lastName: string;
  email: string;
  mobileNumber: string;
  address: string;
  contractType: string;
  startDay: string;
  startMonth: number;
  startYear: string;
  endDay: string | null;
  endMonth: number | null;
  endYear: string | null;
  isOngoing: boolean;
  employmentType: string;
  hoursPerWeek: string;
}
