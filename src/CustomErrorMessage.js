import React from "react";
import { ErrorMessage } from "formik";

export function CustomErrorMessage({ name }) {
  return (
    <ErrorMessage
      name={name}
      render={msg => (
        <div style={{ fontSize: "10px", color: "red", marginBottom: "10px", textAlign: "left" }}>{msg}</div>
      )}
    />
  );
}
