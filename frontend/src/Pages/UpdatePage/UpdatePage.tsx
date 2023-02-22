import styles from "./UpdatePage.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import EmployeeForm from "../../Components/EmployeeForm/EmployeeForm";
import IEmployeeFormData from "../../Interfaces/IEmployeeFormData";
import { employeeDefaults } from "../../services/employeeData";

const UpdatePage = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };

  const [errorMessage, setErrorMessage] = useState("");

  const { id } = useParams();
  const [employee, setEmployee] = useState<IEmployeeFormData>(employeeDefaults);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/employee/${id}`)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        if (error.code === "Network Error") {
          setErrorMessage("Problem connecting to employee database");
        } else if (error.response.status) {
          setErrorMessage("Employee does not exist in database");
        }
      });
  }, []);

  const onSubmit = (data: any) => {
    console.log(data.mobileNumber);
    axios.put(`http://localhost:8080/employee/${id}`, data).then((res) => {
      alert(
        `Employee ${data.firstName} ${data.lastName} successfully updated.`
      );
      routeChange();
    });
  };

  return (
    <div>
      <header className={styles.header}>
        <Link className={styles.header_link} to="/">
          {"< Back"}
        </Link>
        <h1 className={styles.header_heading}>Employee details</h1>
      </header>
      {errorMessage ? <p className={styles.errorMsg}>{errorMessage}</p> : ""}
      <EmployeeForm employee={employee} onSubmit={onSubmit} />
    </div>
  );
};

export default UpdatePage;
