import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import s from "./ApplyForm.module.css";
import * as Yup from "yup";
const ApplyForm = () => {
  const onSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };
  const initialValues = {
    ownerName: "",
    ownerEmail: "",
    ownerPhone: "",
    petName: "",
    petAge: "",
    petGender: "male",
    summary: "",
    agree: false,
    type: "cat",
  };

  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

  const applySchema = Yup.object().shape({
    ownerName: Yup.string()
      .min(3, "Мінімум 3 символи")
      .max(20, "Максимум 20 символів")
      .required(),
    ownerEmail: Yup.string().matches(re, "Is not email!").required(),
    ownerPhone: Yup.string().required(),
    petName: Yup.string().required(),
    petAge: Yup.number().min(1, "Min 1").max(40, "Max 40").required(),
    type: Yup.string().oneOf(["cat", "dog", "bird"]),
  });
  return (
    <div className={s.formWrapper}>
      <Formik
        validationSchema={applySchema}
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        <Form>
          <label>
            <span>ownerName:</span>
            <Field name="ownerName" placeholder="Owner Name" />
            <ErrorMessage
              className={s.error}
              name="ownerName"
              component="div"
            />
          </label>
          <label className={s.label}>
            <span>ownerEmail:</span>
            <Field name="ownerEmail" placeholder="Owner Email" type="email" />
            <ErrorMessage
              className={s.error}
              name="ownerEmail"
              component="div"
            />
          </label>
          <label>
            <span>ownerPhone:</span>
            <Field name="ownerPhone" placeholder="Owner Phone" type="number" />
            <ErrorMessage
              className={s.error}
              name="ownerPhone"
              component="div"
            />
          </label>
          <label>
            <span>petName:</span>
            <Field name="petName" placeholder="Pet Name" />
            <ErrorMessage className={s.error} name="petName" component="div" />
          </label>
          <label>
            <span>petAge:</span>
            <Field name="petAge" placeholder="Pet Age" type="number" />
            <ErrorMessage className={s.error} name="petAge" component="div" />
          </label>
          <div>
            <label>
              <Field name="petGender" type="radio" value="male" /> Male
            </label>
            <label>
              <Field name="petGender" type="radio" value="female" /> Female
            </label>
          </div>
          <label>
            <span>Select pet type:</span>
            <Field name="type" as="select">
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
              <option value="bird">Bird</option>
              <option value="rat">Rat</option>
            </Field>
            <ErrorMessage className={s.error} name="type" component="div" />
          </label>
          <label>
            <span>Summary:</span>
            <Field name="summary" as="textarea" rows={5} />
          </label>
          <div>
            <label>
              <Field name="agree" type="checkbox" /> I agree with rules!
            </label>
          </div>
          <button type="submit">Apply</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ApplyForm;
