import React from "react";
import useForm from "react-hook-form";

const FormComponent = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => console.log("data=", data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">Name</label>
        <input name="name" placeholder="Name Here" ref={register} />
      </div>
      <p />
      <div>
        <label htmlFor="firstName">Name</label>
        <input name="name" placeholder="Name Here" ref={register} />
      </div>
      <p />
      <div>
        <label htmlFor="firstName">Name</label>
        <input name="name" placeholder="Name Here" ref={register} />
      </div>
      <p />
      <div>
        <label htmlFor="firstName">Name</label>
        <input name="name" placeholder="Name Here" ref={register} />
      </div>
      <p />

      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
