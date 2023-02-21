package employee.backend.backend.employee;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/employee")
public class EmployeeController {
	
	@Autowired 
	private EmployeeService service; 
	
	@CrossOrigin
	@GetMapping
	public ResponseEntity<List<Employee>> getAll() {
		List<Employee> allEmployees = this.service.getAll();
		return new ResponseEntity<>(allEmployees, HttpStatus.OK);
	}
	
	@CrossOrigin
	@GetMapping("/{id}")
	public ResponseEntity<Employee> getById(@PathVariable Long id) {
		Optional<Employee> maybeEmployee = this.service.getById(id);
		if(maybeEmployee.isEmpty()) {
			return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(maybeEmployee.get(), HttpStatus.OK);

	}
	
	@CrossOrigin
	@PostMapping
	public ResponseEntity<Employee> create(@Valid @RequestBody EmployeeDTO data){
		Employee createdEmployee = this.service.create(data);
		return new ResponseEntity<>(createdEmployee,HttpStatus.CREATED);
	}
	
	@CrossOrigin
	@DeleteMapping("/{id}")
	public ResponseEntity<Employee> delete(@PathVariable Long id){
		boolean isDeleted = this.service.delete(id);
		if(isDeleted){
			return new ResponseEntity<>(null,HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
	}
	
	@CrossOrigin
	@PutMapping("/{id}")
	public ResponseEntity<Employee> update(@PathVariable Long id, @RequestBody EmployeeDTO data){
		boolean isUpdated = this.service.update(id,data);
		if(isUpdated) {
			return new ResponseEntity<>(null,HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
	}
}