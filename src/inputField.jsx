import React from "react";
import cn from "classnames";

const InputField = ({
  isTextArea,
  type,
  name,
  label,
  register,
  errors,
  compareField,
  checkSameValue,
  emptyErrorMsg
}) => {
  const INPUTTYPE = isTextArea ? "textarea" : "input";
  return (
    <div class="myDiv">
      <label htmlFor={name}>{label}</label>
      <INPUTTYPE
        name={name}
        placeholder="..."
        ref={register({ required: true })}
        className={cn("form-input", {
          "is-error": errors[name]
        })}
      />
      {errors[name] && errors[name].type === "required" && emptyErrorMsg}
    </div>
  );
};

InputField.defaultTypes = {
  type: "input"
};

export default InputField;
