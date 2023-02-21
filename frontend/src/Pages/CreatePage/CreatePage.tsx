import styles from "./CreatePage.module.scss";
import { Link, useNavigate } from "react-router-dom";
import EmployeeForm from "../../Components/EmployeeForm/EmployeeForm";
import axios from "axios";

const CreatePage = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };

  const employee = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobileNumber: null,
    address: "",
    startDate: "",
    endDate: "",
    employmentType: "fullTime",
    isOngoing: true,
    contractType: "permanent",
    hoursPerWeek: null,
  };

  const onSubmit = (data: any) => {
    const dataToSend = data;

    axios
      .post(`http://localhost:8080/employee`, dataToSend)
      .then((res) => {
        alert(
          `New employee ${res.data.firstName} ${res.data.lastName} successfully added to database`
        );
        routeChange();
      })
      .catch((error) => {
        console.log(error);
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
      <EmployeeForm employee={employee} onSubmit={onSubmit} />
    </div>
  );
};

export default CreatePage;
