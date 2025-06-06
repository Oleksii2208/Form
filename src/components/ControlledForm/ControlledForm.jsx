import { useState } from "react";
import s from "./Controlled.module.css";

const ControlledForm = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    age: "",
    summary: "",
    label: "",
    role: "frontend",
    accept: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  // Це дублювання коду......
  // const handleChangeName = (e) => {
  //   setValues({ ...values, username: e.target.value });
  // };
  // const handleChangeEmail = (e) => {
  //   setValues({ ...values, email: e.target.value });
  // };

  const handleChangeInput = (e) => {
    // const { name, value } = e.target;
    // console.log(name, value);

    // switch (name) {
    //   case "username":
    //     return setValues({ ...values, username: value });
    //   case "email":
    //     return setValues({ ...values, email: value });
    //   default:
    //     break;
    // }

    // Aбо через динамічне зміну ключа(зміна name то атрибут з input)Цей варіант найрозповсюдженіший та найпростіший
    if (e.target.type === "checkbox") {
      return setValues({ ...values, [e.target.name]: e.target.checked });
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Трохи про rest and Spread
  // const obj = {
  //   password: 123,
  //   name: "Alex",
  //   email: "test",
  // };
  // const { password, ...restData } = obj;
  // console.log(password);
  // console.log(restData);
  return (
    <section className={s.formWrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          <span>Name:</span>
          <input
            onChange={handleChangeInput}
            value={values.username}
            className={s.input}
            name="username"
            placeholder="Enter the name:"
          />
        </label>
        <label className={s.label}>
          <span>Email:</span>
          <input
            onChange={handleChangeInput}
            value={values.email}
            className={s.input}
            name="email"
            placeholder="Enter the email:"
          />
        </label>
        <label className={s.label}>
          <span>Age:</span>
          <input
            onChange={handleChangeInput}
            value={values.age}
            className={s.input}
            name="age"
            type="number"
            placeholder="Enter the age:"
          />
        </label>
        <label className={s.label}>
          <span>Summary:</span>
          <input
            onChange={handleChangeInput}
            value={values.summary}
            className={s.input}
            name="summary"
            placeholder="Enter the summary:"
          />
        </label>
        <label className={s.label}>
          <span>Label:</span>
          <select
            onChange={handleChangeInput}
            value={values.label}
            className={s.input}
            name="label"
          >
            <option value="junior">junior</option>
            <option value="middle">middle</option>
            <option value="senior">senior</option>
          </select>
        </label>
        <div>
          <label>
            <input
              type="radio"
              checked={values.role === "backend"}
              onChange={handleChangeInput}
              name="role"
              value="backend"
            />{" "}
            Backend
          </label>
          <label>
            <input
              type="radio"
              checked={values.role === "frontend"}
              onChange={handleChangeInput}
              name="role"
              value="frontend"
            />{" "}
            Frontend
          </label>
          <label>
            <input
              type="radio"
              checked={values.role === "fullstack"}
              onChange={handleChangeInput}
              name="role"
              value="fullstack"
            />{" "}
            Fullstack
          </label>
          <label>
            <input
              type="radio"
              checked={values.role === "devOps"}
              onChange={handleChangeInput}
              name="role"
              value="devOps"
            />{" "}
            DevOps
          </label>
        </div>
        <label>
          <input
            type="checkbox"
            checked={values.accept}
            name="accept"
            onChange={handleChangeInput}
          />
          I want to see this webinar
        </label>
        <button className={s.button} disabled={!values.accept}>
          Register
        </button>
      </form>
    </section>
  );
};

export default ControlledForm;
