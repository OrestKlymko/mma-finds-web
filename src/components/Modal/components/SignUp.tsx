import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@nextui-org/button";

import { useEffect } from "react";
import { ModalType, useModal } from "../../Providers/ModalProvider";
import FileInput from "../../ui/inputs/FileInput";
import CustomInput from "../../ui/inputs/CustomInput";
import SwitchCustom from "../../ui/inputs/Switch";
import ConfirmInput from "../../ui/inputs/ConfirmInput";
import PhoneInput from "../../ui/inputs/PhoneInput";
import Password from "../../ui/inputs/Pasword";
import { IoIosArrowBack } from "react-icons/io";
import { Inputs } from "../../../types/inputs";
import SignIn from "./SignIn";

function SignUp() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setValue,
    getValues,
  } = useForm<Inputs>({ mode: "all" });
  const { openModal, closeModal } = useModal();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(isValid, "isValid");
    console.log(data, "data");
  };

  useEffect(() => {
    console.log(isValid, "isValid");
    console.log(errors, "errors");
  }, [isValid, errors]);

  return (
    <>
      <button className="flex items-center gap-1 mb-5" onClick={closeModal}>
        <IoIosArrowBack className="w-3 h-3" />
        <span className="text-[0.75rem]">Back</span>
      </button>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: 400, margin: "0 auto" }}
      >
        <h2>Sign Up as Manager</h2>

        <FileInput
          register={register("photo", { required: true })}
          label="Your profile picture*"
          setValue={setValue}
        />

        <CustomInput
          label="Name and Surname*"
          register={register("name", { required: true })}
        ></CustomInput>

        <CustomInput
          label="Management Company Name"
          register={register("management")}
        ></CustomInput>

        <CustomInput
          label="Based In*"
          register={register("based", { required: true })}
        ></CustomInput>

        <CustomInput
          label="Social Media*"
          register={register("social", { required: true })}
        ></CustomInput>

        <CustomInput
          label="About Me"
          register={register("about")}
        ></CustomInput>

        <SwitchCustom register={register("isFighter")}>
          I am a fighter representing myself
        </SwitchCustom>

        <CustomInput
          label="Email*"
          register={register("email", { required: true, pattern: /^\S+@\S+$/ })}
        ></CustomInput>

        <ConfirmInput
          checkValue={() => getValues("email")}
          label="Confirm Your Email*"
          register={register("confirmEmail", {
            required: true,
            validate: (value) => value === getValues("email"),
          })}
        ></ConfirmInput>

        <PhoneInput
          register={register("phone", {
            required: true,
          })}
        ></PhoneInput>

        <Password
          validation
          register={register("password", { required: true })}
        />

        <ConfirmInput
          isPassword
          checkValue={() => getValues("password")}
          label="Confirm password"
          register={register("confirmPassword", {
            required: true,
            validate: (value) => value === getValues("password"),
          })}
        ></ConfirmInput>

        <SwitchCustom register={register("isAgree", { required: true })}>
          <p className="text-[0.75rem]">
            I agree with{" "}
            <a className="text-green" href="#" target="_blank">
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a className="text-green" href="#" target="_blank">
              Privacy Policy
            </a>
            *
          </p>
        </SwitchCustom>

        <Button className="bg-black text-white mt-6" type="submit" fullWidth>
          Create my account
        </Button>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <button
            className="text-green"
            type="button"
            onClick={() => {
              openModal(ModalType.SignIn);
            }}
          >
            Sign In
          </button>
        </p>
      </form>
    </>
  );
}

export default SignUp;
