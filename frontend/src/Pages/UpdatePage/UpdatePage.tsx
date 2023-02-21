import styles from "./UpdatePage.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import EmployeeForm from "../../Components/EmployeeForm/EmployeeForm";
import IEmployeeResponse from "../../Interfaces/IEmployeeResponse";

const UpdatePage = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };
  const { id } = useParams();
  const [employee, setEmployee] = useState<IEmployeeResponse>({
    id: 0,
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobileNumber: 123,
    address: "",
    startDay: 1,
    startMonth: 1,
    startYear: 2022,
    endDay: 1,
    endMonth: 1,
    endYear: 2022,
    employmentType: "fullTime",
    ongoing: true,
    contractType: "permanent",
    hoursPerWeek: 40,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/employee/${id}`)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (data: any) => {
    console.log(data);
    const dataToSend = {
      firstName: data.firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      email: data.email,
      mobileNumber: parseInt(data.mobile),
      address: data.address,
      contractType: data.contractType,
      startDay: parseInt(data.startDay),
      startMonth: parseInt(data.startMonth),
      startYear: parseInt(data.startYear),
      endDay: parseInt(data.endDay),
      endMonth: parseInt(data.endMonth),
      endYear: parseInt(data.endYear),
      isOngoing: data.isOngoing,
      employmentType: data.employmentType,
    };

    axios
      .put(`http://localhost:8080/employee/${id}`, dataToSend)
      .then((res) => {
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
      <EmployeeForm employee={employee} onSubmit={onSubmit} />
    </div>
  );
};

export default UpdatePage;
