"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

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

      <Input
        className="rounded-sm"
        {...register("email")}
        placeholder="Email*"
        fullWidth
        variant="bordered"
        size="md"
        radius="sm"
      />

      <Input
        {...register("password")}
        placeholder="Password*"
        // type={isVisible ? "text" : "password"}
        variant="bordered"
        fullWidth
        size="md"
        radius="sm"
      />

      <Link
        href={""}
        style={{ textAlign: "right", display: "block", marginTop: 5 }}
      >
        Forgot Password?
      </Link>

      <Button type="submit" fullWidth>
        Sign In
      </Button>

      <p className="text-center">or</p>

      <Button color="secondary" radius="sm">
        Sign in with Google
      </Button>

      <Button color="secondary">Sign in with Facebook</Button>

      <Button color="default">Sign in with Apple</Button>

      <p>
        Don’t have an account? <Link href="/signup">Sign Up</Link>
      </p>
    </form>
  );
}

export default SignIn;
