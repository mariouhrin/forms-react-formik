import React from "react";
import { Field } from "formik";

export function InputField({ props }) {
  return (
    <Field
      placeholder={props.placeholder}
      name={props.name}
      className={props.errors[props.name] && props.touched[props.name] ? "form-input form-error" : "form-input"}
    />
  );
}
