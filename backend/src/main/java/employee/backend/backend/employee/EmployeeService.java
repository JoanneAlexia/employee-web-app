package employee.backend.backend.employee;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository repository; 
	
	public Employee create(EmployeeDTO data) {
		Employee newEmployee = new Employee(data.getFirstName(), data.getMiddleName(),data.getLastName(), data.getEmail(), data.getMobileNumber(), data.getAddress(),data.getContractType(), data.getStartDay(),data.getStartMonth(), data.getStartYear(), data.getEndDay(), data.getEndMonth(), data.getEndYear(), data.isOngoing(),data.getEmploymentType(),data.getHoursPerWeek());
		this.repository.save(newEmployee);
		return newEmployee; 
	}
	
	public List<Employee> getAll(){
		return this.repository.findAll();
	}
	
	public Optional<Employee> getById(Long id) {
		return this.repository.findById(id);
	}
	
	public boolean delete(Long id) {
		Optional<Employee> maybeEmployee = this.getById(id);
		if(maybeEmployee.isEmpty()) {
			return false; 
		}
		this.repository.deleteById(id);
		return true; 
		
		
	}
	
	public boolean update(Long id, EmployeeDTO data) {
		
		Optional<Employee> maybeEmployee = this.getById(id);
		if(maybeEmployee.isEmpty()) {
			return false; 
		}		
		
		Employee foundEmployee = maybeEmployee.get();
		foundEmployee.setFirstName(data.getFirstName());
		foundEmployee.setMiddleName(data.getMiddleName());
		foundEmployee.setLastName(data.getLastName());
		foundEmployee.setEmail(data.getEmail());
		foundEmployee.setMobileNumber(data.getMobileNumber());
		foundEmployee.setAddress(data.getAddress());
		foundEmployee.setContractType(data.getContractType());
		foundEmployee.setEmploymentType(data.getEmploymentType());
		foundEmployee.setOngoing(data.isOngoing());
		foundEmployee.setStartDay(data.getStartDay());
		foundEmployee.setEndDay(data.getEndDay());
		
		this.repository.save(foundEmployee);
		return true;
		
	}
}
