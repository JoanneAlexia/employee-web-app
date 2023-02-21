package employee.backend.backend.employee;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class EmployeeServiceTest {
	
	
	@Mock 
	private EmployeeRepository employeeRepository;
	
	@InjectMocks
	private EmployeeService employeeService; 
	
	@BeforeEach
	public void init() {
		MockitoAnnotations.openMocks(this);
	}
	
//	@BeforeEach
//	void setUp() {
//		underTest = new EmployeeService();
//	}
	
	@Test
	void getAllEmployeesTest() {
//		//when 
//		underTest.getAll();
//		//then 
//		verify(employeeRepository).findAll();
		
		List<Employee> repositoryList = new ArrayList<Employee>();
		Employee empOne = new Employee("John", "", "Smith", "howtodoinjava@gmail.com", 1234567890, "123 fake St.", "permanent", 1,1,2020,2,2,2022,false,"fullTime",40);
		Employee empTwo = new Employee("Jane", "", "Smith", "howtodoinjava@gmail.com", 1234567890, "123 fake St.", "contract", 1,1,2020,2,2,2022,false,"partTime",40);
		repositoryList.add(empOne);
		repositoryList.add(empTwo);
		
		when(employeeRepository.findAll()).thenReturn(repositoryList);
		
		List<Employee> serviceList = employeeService.getAll();
		
		assertEquals(2, serviceList.size());
		verify(employeeRepository, times(1)).findAll();
	}
	
//	@Test
//	void canCreateEmployee() {
//		//given
//		EmployeeDTO employeeDTO = new EmployeeDTO("Joanne", "Bob", "Random","email@email.com",1234567890,"123 Fake Street",true, 1,1,2021,1,1,2022,true,true,40);
//		//when 
//		underTest.create(employeeDTO);
//		//then 
//		ArgumentCaptor<Employee> employeeArgumentCaptor = ArgumentCaptor.forClass(Employee.class);
//		verify(employeeRepository).save(employeeArgumentCaptor.capture());
//		Employee capturedEmployee = employeeArgumentCaptor.getValue();
//		assertThat(capturedEmployee).isEqualTo(employeeDTO);
//		
//		
//	}
}
