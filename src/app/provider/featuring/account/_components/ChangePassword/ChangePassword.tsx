"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import ConfirmInput from "../../../../../../components/ui/inputs/ConfirmInput";
import Password from "../../../../../../components/ui/inputs/Pasword";
import { Inputs } from "../../../../../../types/inputs";
import { useEffect } from "react";
import { Button } from "@nextui-org/button";

function ChangePassword() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    getValues,
  } = useForm<Inputs>({ mode: "all" });

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
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <h6>Change Password</h6>
        <p>Update your password for enhanced account security.</p>
        <Password
          label="Current password*"
          register={register("password", { required: true })}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
          <Password
            label="New password*"
            validation
            register={register("new-password", { required: true })}
          />
          <ConfirmInput
            isPassword
            checkValue={() => getValues("password")}
            label="Confirm password*"
            register={register("confirmPassword", {
              required: true,
              validate: (value) => value === getValues("password"),
            })}
          ></ConfirmInput>
        </div>

        <Button className="bg-black text-white mt-6  max-w-[25%]" type="submit">
          Change Password
        </Button>
      </form>
    </>
  );
}

export default ChangePassword;
