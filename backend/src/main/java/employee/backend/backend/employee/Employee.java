package employee.backend.backend.employee;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Employee {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	Long id; 

	@Column
	String firstName;
	
	@Column 
	String middleName;

	@Column
	String lastName;
	
	@Column 
	String email; 
	
	@Column 
	int mobileNumber; 
	
	@Column 
	String address; 
	
	@Column 
	String contractType;
	
	@Column 
	int startDay; 
	
	@Column 
	int startMonth; 
	
	@Column 
	int startYear; 
	
	@Column 
	int endDay; 
	
	@Column 
	int endMonth;
	
	@Column 
	int endYear;
	
	@Column 
	boolean isOngoing; 

	@Column
	String employmentType;
	
	@Column
	int hoursPerWeek;
	
	public Employee() {
		
	}
	
	public Employee(String firstName, String middleName, String lastName, String email, int mobileNumber, String address, String contractType, int startDay, int startMonth, int startYear,int endDay, int endMonth, int endYear , boolean isOngoing, String employmentType, int hoursPerWeek) {
		this.firstName = firstName; 
		this.middleName = middleName;
		this.lastName = lastName; 
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
		this.employmentType= employmentType; 
		this.hoursPerWeek = hoursPerWeek;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public boolean getIsOngoing() {
		return isOngoing;
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

	public void setIsOngoing(boolean isOngoing) {
		this.isOngoing = isOngoing;
	}

	public int getHoursPerWeek() {
		return hoursPerWeek;
	}

	public void setHoursPerWeek(int hoursPerWeek) {
		this.hoursPerWeek = hoursPerWeek;
	}
}
