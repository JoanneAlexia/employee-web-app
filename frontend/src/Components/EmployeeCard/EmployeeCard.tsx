import React from "react";
import styles from "./EmployeeCard.module.scss";
import { Link } from "react-router-dom";
import IEmployeeData from "../../Interfaces/IEmployeeRequest";
import axios from "axios";

const EmployeeCard = ({ data, setEmployeeRemoved }: any) => {
  const handleRemove = () => {
    axios
      .delete(`http://localhost:8080/employee/${data.id}`)
      .then((res: any) => {
        setEmployeeRemoved(true);
        console.log(res);
      })
      .catch((error) => {
        alert("Employee was not successfully deleted");
      });
  };

  return (
    <div className={styles.EmployeeCard}>
      <div className={styles.EmployeeInformation}>
        <h4 className={styles.Name}>{`${data.firstName} ${data.lastName}`}</h4>
        <p className={styles.Contract}>
          {data.contractType}
          {` - ${data.endYear - data.startYear}yrs`}
        </p>
        <p className={styles.Email}>{data.email}</p>
      </div>
      <div className={styles.EmployeeLinks}>
        <Link to={`employee/${data.id}`} className={styles.EmployeeLinks_link}>
          Edit
        </Link>
        <span>|</span>
        <a onClick={handleRemove} className={styles.EmployeeLinks_link}>
          Remove
        </a>
      </div>
    </div>
  );
};

export default EmployeeCard;
