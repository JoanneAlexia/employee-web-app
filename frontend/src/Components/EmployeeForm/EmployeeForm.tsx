import styles from "./EmployeeForm.module.scss";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const EmployeeForm = ({ employee, onSubmit }: any) => {
  //Cancel button navigates to home page
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };

  //To allow monitoring of changing state of checkbox
  const [isOngoing, setIsOngoing] = useState(employee.ongoing);
  const onChangeOngoing = (event: any) => {
    setIsOngoing(event.target.checked);
  };

  //Form Validation
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    middleName: yup.string(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    mobile: yup.string().matches(/\d{10}/, "Phone number is not valid"),
    address: yup.string(),
    contractType: yup.string().required(),
    startDay: yup.number().min(1).max(31).required(),
    startMonth: yup.number().min(1).max(12).required(),
    startYear: yup.number().min(1900).max(2023).required(),
    endDay: yup.number().min(1).max(31),
    endMonth: yup.number().min(1).max(12),
    endYear: yup.number().min(1900).max(new Date().getFullYear()),
    employmentType: yup.string().required(),
    isOngoing: yup.boolean().required(),
    hoursPerWeek: yup.number().min(1).max(168).required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: employee,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    reset(employee);
  }, [employee]);

  return (
    <div>
      {/*PERSONAL INFORMATION*/}
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <section className={styles.form_section}>
          <h2 className={styles.form_heading}>Personal Information</h2>
          <div className={styles.inputSection}>
            <label htmlFor="firstName" className={styles.inputSection_label}>
              First Name
            </label>
            <input
              {...register("firstName")}
              className={styles.inputSection_input}
              type="text"
              name="firstName"
              id="firstName"
              required
            ></input>
          </div>
          <div className={styles.inputSection}>
            <label htmlFor="middleName" className={styles.inputSection_label}>
              Middle Name (if applicable)
            </label>
            <input
              {...register("middleName")}
              className={styles.inputSection_input}
              type="text"
              name="middleName"
              id="middleName"
            ></input>
          </div>
          <div className={styles.inputSection}>
            <label htmlFor="lastName" className={styles.inputSection_label}>
              Last Name
            </label>
            <input
              {...register("lastName")}
              className={styles.inputSection_input}
              type="text"
              name="lastName"
              id="lastName"
              required
            ></input>
          </div>
        </section>
        {/*CONTACT DETAILS*/}
        <section className={styles.form_section}>
          <h2 className={styles.form_heading}>Contact details</h2>
          <div className={styles.inputSection}>
            <label htmlFor="email" className={styles.inputSection_label}>
              Email address
            </label>
            <input
              {...register("email")}
              className={styles.inputSection_input}
              type="text"
              name="email"
              id="email"
              required
            ></input>
            {errors.email?.message ? (
              <p className={styles.errorMessage}>
                {errors.email?.message?.toString()}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className={styles.inputSection}>
            <label htmlFor="mobileNumber" className={styles.inputSection_label}>
              Mobile number
            </label>
            <p>Must be an Australian number</p>
            <input
              {...register("mobileNumber")}
              className={styles.inputSection_input}
              type="text"
              name="mobileNumber"
              id="mobileNumber"
              required
            ></input>
            {errors.mobile?.message ? (
              <p className={styles.errorMessage}>
                {errors.mobile?.message?.toString()}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className={styles.inputSection}>
            <label htmlFor="address" className={styles.inputSection_label}>
              Residential address
            </label>
            <p>Start typing to search</p>
            <input
              {...register("address")}
              className={styles.inputSection_input}
              type="text"
              name="address"
              id="address"
              required
            ></input>
          </div>
        </section>
        {/*EMPLOYEE STATUS*/}
        <section className={styles.form_section}>
          <h2 className={styles.form_heading}>Employee status</h2>
          <div className={styles.inputSection}>
            <label className={styles.inputSection_label}>
              What is contract type?
            </label>
            <Controller
              control={control}
              name="contractType"
              render={(props) => (
                <select
                  className={styles.inputDropdown}
                  data-testid="contractType"
                  value={props.field.value}
                  onChange={(e) => props.field.onChange(e.target.value)}
                  required
                >
                  <option value="permanent">Permanent</option>
                  <option value="contract">Contract</option>
                </select>
              )}
            />
          </div>
          <div className={styles.inputSection}>
            <label className={styles.inputSection_label}>Start date</label>
            <div className={styles.date}>
              <div className={styles.dateSection}>
                <label className={styles.dateSection_label}>Day</label>
                <input
                  {...register("startDay")}
                  className={styles.dateSection_input_text}
                  type="text"
                  data-testid="startDay"
                  required
                ></input>
              </div>
              <div className={styles.dateSection}>
                <label className={styles.dateSection_label}>Month</label>
                <select
                  {...register("startMonth")}
                  className={styles.dateSection_input_dropdown}
                  data-testid="startMonth"
                  required
                >
                  <option value={1}>January</option>
                  <option value={2}>February</option>
                  <option value={3}>March</option>
                  <option value={4}>April</option>
                  <option value={5}>May</option>
                  <option value={6}>June</option>
                  <option value={7}>July</option>
                  <option value={8}>August</option>
                  <option value={9}>September</option>
                  <option value={10}>October</option>
                  <option value={11}>November</option>
                  <option value={12}>December</option>
                </select>
              </div>
              <div className={styles.dateSection}>
                <label className={styles.dateSection_label}>Year</label>
                <input
                  {...register("startYear")}
                  className={styles.dateSection_input_text}
                  type="text"
                  data-testid="startYear"
                  required
                ></input>
              </div>
            </div>
            {errors.startDay?.message ||
            errors.startYear?.message ||
            errors.endDay?.message ||
            errors.endYear?.message ? (
              <p className={styles.errorMessage}>Invalid date format</p>
            ) : (
              ""
            )}
          </div>
          <div className={styles.inputSection}>
            <label className={styles.inputSection_label}>Finish date</label>
            <div className={styles.date}>
              <div className={styles.dateSection}>
                <label className={styles.dateSection_label}>Day</label>
                <input
                  {...register("endDay")}
                  className={styles.dateSection_input_text}
                  type="text"
                  disabled={isOngoing}
                  data-testid="endDay"
                ></input>
              </div>
              <div className={styles.dateSection}>
                <label className={styles.dateSection_label}>Month</label>
                <select
                  {...register("endMonth")}
                  className={styles.dateSection_input_dropdown}
                  disabled={isOngoing}
                  data-testid="endMonth"
                >
                  <option value={1}>January</option>
                  <option value={2}>February</option>
                  <option value={3}>March</option>
                  <option value={4}>April</option>
                  <option value={5}>May</option>
                  <option value={6}>June</option>
                  <option value={7}>July</option>
                  <option value={8}>August</option>
                  <option value={9}>September</option>
                  <option value={10}>October</option>
                  <option value={11}>November</option>
                  <option value={12}>December</option>
                </select>
              </div>
              <div className={styles.dateSection}>
                <label className={styles.dateSection_label}>Year</label>
                <input
                  {...register("endYear")}
                  className={styles.dateSection_input_text}
                  type="text"
                  disabled={isOngoing}
                  data-testid="endYear"
                ></input>
              </div>
            </div>
            <div className={styles.ongoing}>
              <Controller
                control={control}
                name="isOngoing"
                render={(props) => (
                  <input
                    type="checkbox"
                    className={styles.input_checkbox}
                    data-testid="isOngoing"
                    onChange={(e) => {
                      props.field.onChange(e.target.checked);
                      setIsOngoing(e.target.checked);
                      if (!props.field.value) {
                        setValue("endDay", null);
                        setValue("endMonth", null);
                        setValue("endYear", null);
                      }
                    }}
                  />
                )}
              />
              <label htmlFor="isOngoing" className={styles.ongoing_label}>
                Ongoing
              </label>
            </div>
          </div>
          {errors.endDay?.message || errors.endYear?.message ? (
            <p className={styles.errorMessage}>Invalid date format</p>
          ) : (
            ""
          )}
          <div className={styles.inputSection}>
            <label className={styles.inputSection_label}>
              Is this on a full-time or part-time basis?
            </label>
            <Controller
              control={control}
              name="employmentType"
              render={(props) => (
                <select
                  className={styles.inputDropdown}
                  data-testid="employmentType"
                  value={props.field.value}
                  onChange={(e) => props.field.onChange(e.target.value)}
                  required
                >
                  <option value="fullTime">Full-Time</option>
                  <option value="partTime">Part-Time</option>
                </select>
              )}
            />
          </div>
          <div className={styles.inputSection}>
            <label htmlFor="hoursPerWeek" className={styles.inputSection_label}>
              Hour per week
            </label>
            <input
              {...register("hoursPerWeek")}
              className={styles.hours}
              type="text"
              id="hoursPerWeek"
              required
            ></input>
          </div>
          {errors.hoursPerWeek?.message ? (
            <p className={styles.errorMessage}>Invalid hours entered</p>
          ) : (
            ""
          )}
        </section>
        <input
          className={[styles.btn, styles.btn_blue].join(" ")}
          type="submit"
          data-testid="submitBtn"
        ></input>
        <button onClick={routeChange} className={styles.btn}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
