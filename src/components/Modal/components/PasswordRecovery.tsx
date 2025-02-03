"use client";

import { Button } from "@nextui-org/button";

import { IoIosArrowBack } from "react-icons/io";
import { ModalType, useModal } from "../../Providers/ModalProvider";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "../../ui/inputs/CustomInput";
import ConfirmInput from "../../ui/inputs/ConfirmInput";

type Inputs = {
  email: string;
  confirmEmail: string;
};

function PasswordRecovery() {
  const {
    register,

    handleSubmit,
    getValues,
  } = useForm<Inputs>();
  const { openModal } = useModal();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data, "data");
    openModal(ModalType.CheckEmail);
  };

  return (
    <>
      <button
        className="flex items-center gap-1 mb-5"
        onClick={() => openModal(ModalType.SignIn)}
      >
        <IoIosArrowBack className="w-3 h-3" />
        <span className="text-[0.75rem]">Back</span>
      </button>
      <div className="pt-8 flex flex-col gap-4 justify-center">
        <div>
          <h3 className="">Password Recovery</h3>
          <p>Enter your email to recover your password</p>
        </div>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            label="Email*"
            register={register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
          <ConfirmInput
            checkValue={() => getValues("email")}
            label="Confirm Your Email*"
            register={register("confirmEmail", {
              required: true,
              validate: (value) => value === getValues("email"),
            })}
          ></ConfirmInput>
          <Button className="bg-black text-white  mt-5" fullWidth>
            Recover Password
          </Button>
        </form>
        <p className="text-center">
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={() => {
              openModal(ModalType.SignUp);
            }}
          >
            Sign Up
          </button>
        </p>
      </div>
    </>
  );
}

export default PasswordRecovery;
