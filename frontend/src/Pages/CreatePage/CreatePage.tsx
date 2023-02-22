import styles from "./CreatePage.module.scss";
import { Link, useNavigate } from "react-router-dom";
import EmployeeForm from "../../Components/EmployeeForm/EmployeeForm";
import axios from "axios";
import { employeeDefaults } from "../../services/employeeData";
import { createPost } from "../../services/API";

const CreatePage = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };

  const onSubmit = (data: any) => {
    axios
      .post(`http://localhost:8080/employee`, data)
      .then((res) => {
        alert(
          `New employee ${res.data.firstName} ${res.data.lastName} successfully added to database`
        );
        routeChange();
      })
      .catch((error) => {
        alert(`Error occurred when trying to add user to database.`);
      });
  };

  return (
    <div className={styles.CreatePage}>
      <header className={styles.header}>
        <Link className={styles.header_link} to="/">
          {"< Back"}
        </Link>
        <h1 className={styles.header_heading}>Add new employee</h1>
      </header>
      <EmployeeForm employee={employeeDefaults} onSubmit={onSubmit} />
    </div>
  );
};

export default CreatePage;
