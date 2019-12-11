import React from "react";
import useForm from "react-hook-form";

import MyInput from "./inputField";

const FormComponent = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => console.log("data=", data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <MyInput name="name" label="Name" errors={errors} register={register} />
      </div>
      <div>
        <MyInput
          name="email"
          label="Email"
          errors={errors}
          register={register}
        />
      </div>
      <div>
        <MyInput
          name="confirmemail"
          label="Confirm Email"
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

      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
