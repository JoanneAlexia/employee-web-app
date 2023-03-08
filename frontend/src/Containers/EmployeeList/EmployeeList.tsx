import styles from "./EmployeeList.module.scss";
import EmployeeCard from "../../Components/EmployeeCard/EmployeeCard";
import { useState, useEffect } from "react";
import IEmployeeResponse from "../../Interfaces/IEmployeeResponse";
import { getAll } from "../../services/API";

const EmployeeList = () => {
  const [employees, setEmployees] = useState<Array<IEmployeeResponse>>([]);
  const [employeeRemoved, setEmployeeRemoved] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getAll()
      .then((response) => {
        setEmployees(response.data);
        if (response.data.length === 0) {
          setErrorMessage("No employees in database");
        }
      })
      .catch((err) => setErrorMessage("Error loading database"));
  }, [employeeRemoved]);

  return (
    <div className={styles.EmployeeList}>
      <p>{errorMessage}</p>
      <div className={styles.Employees}>
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            data={employee}
            setEmployeeRemoved={setEmployeeRemoved}
            employeeRemoved={employeeRemoved}
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
