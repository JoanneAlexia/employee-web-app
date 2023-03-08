import styles from "./UpdatePage.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmployeeForm from "../../Components/EmployeeForm/EmployeeForm";
import { employeeDefaults } from "../../services/employeeData";
import { getById, updateById } from "../../services/API";
import IEmployeeRequest from "../../Interfaces/IEmployeeRequest";

const UpdatePage = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };

  const [errorMessage, setErrorMessage] = useState("");

  const { id } = useParams();
  const [employee, setEmployee] = useState<IEmployeeRequest>(employeeDefaults);

  useEffect(() => {
    getById(id)
      .then((response) => {
        let employeeResponse = response.data;
        delete employeeResponse.id;
        //Null values returned as 0
        if (employeeResponse.endDay === 0) {
          employeeResponse.endDay = null;
        }
        if (employeeResponse.endMonth === 0) {
          employeeResponse.endMonth = null;
        }
        if (employeeResponse.endYear === 0) {
          employeeResponse.endYear = null;
        }
        setEmployee(employeeResponse);
      })
      .catch((error) => {
        if (error.code === "Network Error") {
          setErrorMessage("Problem connecting to employee database");
        } else if (error.response.status) {
          setErrorMessage("Employee does not exist in database");
        }
      });
  }, []);

  const onSubmit = (data: IEmployeeRequest) => {
    updateById(id, data).then((res) => {
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
