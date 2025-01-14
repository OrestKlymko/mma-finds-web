import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "../../ui/inputs/CustomInput";
import Password from "../../ui/inputs/Pasword";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import FileInput from "../../ui/inputs/FileInput";
import { Switch } from "@nextui-org/switch";
import SwitchCustom from "../../ui/inputs/Switch";
import ConfirmInput from "../../ui/inputs/ConfirmInput";
import { get } from "http";

type Inputs = {
  name: string;
  management: string;
  email: string;
  password: string;
  isFighter: boolean;
  about: string;
  based: string;
  social: string;
  confirmEmail: string;
};

function SignUp() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
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
      <h2>Sign Up as Manager</h2>
      <p>Enter your registration email and password.</p>

      <FileInput setValue={setValue} />

      <CustomInput
        placeholder="Name and Surname*"
        register={register("name", { required: true })}
      ></CustomInput>

      <CustomInput
        placeholder="Management Company Name"
        register={register("management", {})}
      ></CustomInput>

      <CustomInput
        placeholder="Based In*"
        register={register("based", { required: true })}
      ></CustomInput>

      <CustomInput
        placeholder="Social Media*"
        register={register("social", { required: true })}
      ></CustomInput>

      <CustomInput
        placeholder="About Me"
        register={register("about", { required: true })}
      ></CustomInput>

      <SwitchCustom register={register("isFighter", { required: true })}>
        I am a fighter representing myself
      </SwitchCustom>

      <CustomInput
        placeholder="Email*"
        register={register("email", { required: true })}
      ></CustomInput>

      <ConfirmInput
        checkValue={() => getValues("email")}
        placeholder="Confirm Your Email*"
        register={register("confirmEmail", {
          required: true,
          validate: (value) => value === getValues("email"),
        })}
      ></ConfirmInput>

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

      <p>
        Don’t have an account?{" "}
        <Link className="text-green" href="/signup">
          Sign Up
        </Link>
      </p>
    </form>
  );
}

export default SignUp;
