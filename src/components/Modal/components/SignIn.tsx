"use client";

import { Button } from "@nextui-org/button";
import { SubmitHandler, useForm } from "react-hook-form";

import { ModalType, useModal } from "../../Providers/ModalProvider";
import CustomInput from "../../ui/inputs/CustomInput";
import Password from "../../ui/inputs/Pasword";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import SignUp from "./SignUp";

type Inputs = {
  email: string;
  password: string;
};

function SignIn() {
  const { register, handleSubmit } = useForm<Inputs>();
  const { openModal, closeModal } = useModal();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <button className="flex items-center gap-1 mb-5" onClick={closeModal}>
        <IoIosArrowBack className="w-3 h-3" />
        <span className="text-[0.75rem]">Back</span>
      </button>
      <h2>Welcome Back!</h2>
      <p className="mb-6">Enter your registration email and password.</p>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: 400, margin: "0 auto" }}
      >
        <div className="flex flex-col gap-2">
          <CustomInput
            label="Email*"
            register={register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          ></CustomInput>

          <Password register={register("password", { required: true })} />
        </div>
        <button
          style={{ textAlign: "right", display: "block", marginTop: 5 }}
          onClick={() => openModal(ModalType.ForgotPassword)}
        >
          Forgot Password?
        </button>
        <Button className="bg-black text-white" type="submit" fullWidth>
          Sign In
        </Button>
        <div className="flex items-center gap-2">
          <span className="block h-[1px] w-full bg-black"></span>
          <p className="text-center">or</p>
          <span className="block h-[1px] w-full bg-black"></span>
        </div>
        <Button
          startContent={
            <Image
              width={20}
              height={20}
              src="/icons/google-icon.svg"
              alt="facebook"
              style={{ width: 20 }}
            />
          }
          variant="bordered"
          radius="sm"
          fullWidth
        >
          Sign in with Google
        </Button>
        <Button
          startContent={
            <Image
              width={20}
              height={20}
              src="/icons/facebook-icon.svg"
              alt="facebook"
              style={{ width: 20 }}
            />
          }
          variant="bordered"
        >
          Sign in with Facebook
        </Button>
        <Button
          startContent={
            <Image
              width={20}
              height={20}
              src="/icons/apple-icon.svg"
              alt="facebook"
              style={{ width: 20 }}
            />
          }
          variant="bordered"
        >
          Sign in with Apple
        </Button>
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
      </form>
    </>
  );
}

export default SignIn;
