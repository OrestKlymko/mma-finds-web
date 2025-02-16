"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "../../../../../../types/inputs";
import { useEffect } from "react";
import FileInput from "../../../../../../components/ui/inputs/FileInput";
import CustomInput from "../../../../../../components/ui/inputs/CustomInput";
import SwitchCustom from "../../../../../../components/ui/inputs/Switch";
import ConfirmInput from "../../../../../../components/ui/inputs/ConfirmInput";
import PhoneInput from "../../../../../../components/ui/inputs/PhoneInput";
import { Button } from "@nextui-org/button";
import CustomSelect from "../../../../../../components/ui/inputs/CustomSelect";
import { countries } from "../../../../../../constants/contries";
import SocialMedia from "../../../../../../components/ui/inputs/SocialMedia";
import { Textarea } from "@nextui-org/input";

function ChangeAccountDetailsForm() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setValue,
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
        <h6 className="mb-6">Change Account Details</h6>
        <FileInput
          className="w-1/2"
          register={register("photo", { required: true })}
          label="Your profile picture*"
          setValue={setValue}
        />
        <div className="flex gap-2">
          <CustomInput
            label="Name and Surname*"
            register={register("name", { required: true })}
          ></CustomInput>
          <CustomInput
            label="Management Company Name"
            register={register("management")}
          ></CustomInput>
        </div>

        <CustomSelect
          items={countries}
          label="Base In*"
          register={register("based", { required: true })}
        />

        <SocialMedia
          registerInstagram={register("instagram")}
          registerFacebook={register("facebook")}
          registerX={register("x")}
        ></SocialMedia>

        <div className="mt-4">
          <Textarea
            {...register("about")}
            label="About Me"
            radius="sm"
            labelPlacement="outside"
            classNames={{
              inputWrapper: "border border-black",

              label: "text-sm",
            }}
            variant="bordered"
          />
        </div>

        <CustomInput
          label="About Me"
          register={register("about")}
        ></CustomInput>

        <SwitchCustom register={register("isFighter")}>
          I am a fighter representing myself
        </SwitchCustom>

        <div className="grid grid-cols-2 gap-2">
          <CustomInput
            label="Email*"
            register={register("email", {
              required: true,
              pattern: /^\S+@\S+$/,
            })}
          ></CustomInput>
          <ConfirmInput
            checkValue={() => getValues("email")}
            label="Confirm Your Email*"
            register={register("confirmEmail", {
              required: true,
              validate: (value) => value === getValues("email"),
            })}
          ></ConfirmInput>
        </div>

        <PhoneInput
          register={register("phone", {
            required: true,
          })}
        ></PhoneInput>

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

        <Button className="bg-black text-white mt-6 max-w-[25%]" type="submit">
          Save Changes
        </Button>
      </form>
    </>
  );
}

export default ChangeAccountDetailsForm;
