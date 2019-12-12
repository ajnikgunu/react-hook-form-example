import React from "react";
import useForm from "react-hook-form";

import MyInput from "./inputField";

import i18n from "i18next";

const FormComponent = () => {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange"
  });

  const { isValid } = formState;

  const onSubmit = data => console.log("data=", data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <MyInput
          name="name"
          label={i18n.t("FORM.LABELS.NAME")}
          errors={errors}
          register={register}
          emptyErrorMsg={i18n.t("FORM.ERRORS.EMPTY_NAME")}
        />
      </div>
      <div>
        <MyInput
          checkSameValue
          name="email"
          label={i18n.t("FORM.LABELS.EMAIL")}
          compareField="confirmemail" //filed to compare the same value
          errors={errors}
          register={register}
          emptyErrorMsg={i18n.t("FORM.ERRORS.EMPTY_EMAIL")}
        />
      </div>
      <div>
        <MyInput
          checkSameValue
          name="confirmemail"
          label={i18n.t("FORM.LABELS.CONFIRM_EMAIL")}
          compareFiel="email" //filed to compare the same value
          errors={errors}
          register={register}
          emptyErrorMsg={i18n.t("FORM.ERRORS.EMPTY_CONFIRM_EMAIL")}
        />
      </div>
      <div>
        <MyInput
          isTextArea
          name="message"
          label={i18n.t("FORM.LABELS.MESSAGE")}
          errors={errors}
          register={register}
          emptyErrorMsg={i18n.t("FORM.ERRORS.EMPTY_MESSAGE")}
        />
      </div>

      <button type="button" onClick={handleSubmit} disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
