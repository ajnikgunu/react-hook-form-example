import React from "react";
import useForm from "react-hook-form";

import MyInput from "./inputField";

const FormComponent = () => {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange"
  });

  const { isValid } = formState;

  const onSubmit = data => console.log("data=", data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <MyInput name="name" label="Name" errors={errors} register={register} />
      </div>
      <div>
        <MyInput
          checkSameValue
          name="email"
          label="Email"
          compareField="confirmemail" //filed to compare the same value
          errors={errors}
          register={register}
        />
      </div>
      <div>
        <MyInput
          checkSameValue
          name="confirmemail"
          label="Confirm Email"
          compareFiel="email" //filed to compare the same value
          errors={errors}
          register={register}
        />
      </div>
      <div>
        <MyInput
          isTextArea
          name="message"
          label="Message"
          errors={errors}
          register={register}
        />
      </div>

      <button type="button" onClick={handleSubmit} disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
