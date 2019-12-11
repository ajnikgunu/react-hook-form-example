import React from "react";

const InputField = ({ name, label, register, errors }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        placeholder="..."
        ref={register({ required: true })}
        className={cn("form-input", {
          "is-error": errors[name]
        })}
      />
      {errors[name] &&
        errors[name].type === "required" &&
        "This field is required"}
    </>
  );
};

export default InputField;
