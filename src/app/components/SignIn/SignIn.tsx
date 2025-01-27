"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import Password from "../../ui/inputs/Pasword";
import CustomInput from "../../ui/inputs/CustomInput";
import { ModalType, useModal } from "../../Providers/ModalProvider";

type Inputs = {
  email: string;
  password: string;
};

function SignIn() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();
  const { openModal } = useModal();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <>
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
        <Link
          href={""}
          style={{ textAlign: "right", display: "block", marginTop: 5 }}
        >
          Forgot Password?
        </Link>
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
            <img
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
            <img
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
            <img
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
