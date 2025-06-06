import { Field, Form, Formik } from "formik";
import React from "react";
import s from "./ApplyForm.module.css";

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
  return (
    <div className={s.formWrapper}>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        <Form>
          <label>
            <span>ownerName:</span>
            <Field name="ownerName" placeholder="Owner Name" />
          </label>
          <label className={s.label}>
            <span>ownerEmail:</span>
            <Field name="ownerEmail" placeholder="Owner Email" type="email" />
          </label>
          <label>
            <span>ownerPhone:</span>
            <Field name="ownerPhone" placeholder="Owner Phone" type="number" />
          </label>
          <label>
            <span>petName:</span>
            <Field name="petName" placeholder="Pet Name" />
          </label>
          <label>
            <span>petAge:</span>
            <Field name="petAge" placeholder="Pet Age" type="number" />
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
