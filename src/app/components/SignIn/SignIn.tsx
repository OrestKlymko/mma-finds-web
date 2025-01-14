"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import Password from "../../ui/inputs/Pasword";
import CustomInput from "../../ui/inputs/CustomInput";

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

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: 400, margin: "0 auto" }}
    >
      <h2>Welcome Back!</h2>
      <p>Enter your registration email and password.</p>

      <CustomInput
        placeholder="Email*"
        register={register("email", { required: true })}
      ></CustomInput>

      <Password register={register} option={{ required: true }} />

      <Link
        href={""}
        style={{ textAlign: "right", display: "block", marginTop: 5 }}
      >
        Forgot Password?
      </Link>

      <Button className="bg-black text-white" type="submit" fullWidth>
        Sign In
      </Button>

      <p className="text-center">or</p>

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

      <p>
        Don’t have an account? <Link href="/signup">Sign Up</Link>
      </p>
    </form>
  );
}

export default SignIn;
