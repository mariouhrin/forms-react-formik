import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { CustomErrorMessage } from "./CustomErrorMessage";
import { InputField } from "./InputField";

export function FormikExample() {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validateOnChange={false}
      validationSchema={validateSchema()}
      onSubmit={(values, action) => {
        console.log("actions", action);
        console.log(values);
      }}
    >
      {({ handleReset, errors, touched }) => (
        <>
          <h2>Formik builtin with error component</h2>
          <Form className="form-wrapper">
            <div>
              <InputField props={{ placeholder: "first name", name: "firstName", errors, touched }} />
              <CustomErrorMessage name="firstName" />
            </div>
            <div>
              <InputField props={{ placeholder: "last name", name: "lastName", errors, touched }} />
              <CustomErrorMessage name="lastName" />
            </div>
            <div>
              <InputField props={{ placeholder: "email", name: "email", errors, touched }} />
              <CustomErrorMessage name="email" />
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        </>
      )}
    </Formik>
  );
}

const validateSchema = () =>
  Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short First Name !")
      .max(50, "Too Long First Name !")
      .required("Required First Name"),
    lastName: Yup.string()
      .min(2, "Too Short Last Name !")
      .max(50, "Too Long Last Name !")
      .required("Required Last Name"),
    email: Yup.string()
      .email()
      .min(3, "Too Short Email !")
      .max(20, "Too long Email !")
      .required("Required Email")
  });
