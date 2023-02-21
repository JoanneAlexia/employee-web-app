package employee.backend.backend.employee;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class EmployeeDTO {
	@NotBlank
	private String firstName;
	
	private String middleName;
	
	@NotBlank
	private String lastName;
	
	@NotBlank
	private String email;
	
	@NotNull 
	private int mobileNumber; 
	
	@NotBlank 
	private String address; 
	
	@NotNull  
	private String contractType;
	
	@NotNull
	private int startDay; 
	
	@NotNull
	private int startMonth; 
	
	@NotNull
	private int startYear; 
	
	private int endDay; 
	
	private int endMonth;
	
	private int endYear;
	
	@NotNull  
	private boolean isOngoing; 

	@NotNull 
	private String employmentType;
	
	@NotNull 
	private int hoursPerWeek;
	
	public EmployeeDTO(String firstName, String middleName, String lastName, String email, int mobileNumber, String address, String contractType, int startDay, int startMonth, int startYear, int endDay, int endMonth, int endYear, boolean isOngoing, String employmentType, int hoursPerWeek) {		
		this.firstName = firstName; 
		this.lastName = lastName; 
		this.middleName = middleName;
		this.email = email; 
		this.mobileNumber = mobileNumber;
		this.address = address;
		this.contractType = contractType;
		this.startDay = startDay;
		this.startMonth = startMonth;
		this.startYear = startYear;
		this.endDay = endDay;
		this.endMonth = endMonth;
		this.endYear = endYear;
		this.isOngoing = isOngoing;
		this.employmentType = employmentType; 
		this.hoursPerWeek = hoursPerWeek;
	}

	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	} 
	
	public int getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(int mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getStartDay() {
		return startDay;
	}

	public String getContractType() {
		return contractType;
	}

	public void setContractType(String contractType) {
		this.contractType = contractType;
	}

	public String getEmploymentType() {
		return employmentType;
	}

	public void setEmploymentType(String employmentType) {
		this.employmentType = employmentType;
	}

	public void setStartDay(int startDay) {
		this.startDay = startDay;
	}

	public int getStartMonth() {
		return startMonth;
	}

	public void setStartMonth(int startMonth) {
		this.startMonth = startMonth;
	}

	public int getStartYear() {
		return startYear;
	}

	public void setStartYear(int startYear) {
		this.startYear = startYear;
	}

	public int getEndDay() {
		return endDay;
	}

	public void setEndDay(int endDay) {
		this.endDay = endDay;
	}

	public int getEndMonth() {
		return endMonth;
	}

	public void setEndMonth(int endMonth) {
		this.endMonth = endMonth;
	}

	public int getEndYear() {
		return endYear;
	}

	public void setEndYear(int endYear) {
		this.endYear = endYear;
	}

	public boolean isOngoing() {
		return isOngoing;
	}

	public void setOngoing(boolean isOngoing) {
		this.isOngoing = isOngoing;
	}
	
	public int getHoursPerWeek() {
		return hoursPerWeek;
	}

	public void setHoursPerWeek(int hoursPerWeek) {
		this.hoursPerWeek = hoursPerWeek;
	}

}
