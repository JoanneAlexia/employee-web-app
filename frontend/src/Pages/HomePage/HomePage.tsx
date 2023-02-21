import React from "react";
import styles from "./HomePage.module.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import IEmployeeData from "../../Interfaces/IEmployeeRequest";
import EmployeeList from "../../Containers/EmployeeList/EmployeeList";

const HomePage = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("employee/create");
  };

  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.header_heading}>Employees' list</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.buttonWrapper}>
          <p>Please click on 'Edit' to find more details of each employee.</p>
          <button onClick={routeChange} className={styles.addBtn}>
            Add employee
          </button>
        </div>
        <EmployeeList />
      </main>
    </div>
  );
};

export default HomePage;
