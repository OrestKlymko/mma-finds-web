"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import Password from "../../ui/inputs/Pasword";
import CustomInput from "../../ui/inputs/CustomInput";
import { ModalType, useModal } from "../../Providers/ModalProvider";
import FileInput from "../../ui/inputs/FileInput";
import { Input, Textarea } from "@nextui-org/input";
import CustomSelect from "../../ui/inputs/CustomSelect";
import CustomRadioGroup from "../../ui/inputs/CustomRadioQroup";
import SwitchCustom from "../../ui/inputs/Switch";

type Inputs = {
  name: string;
  password: string;
  nickname: string;
  sex: string;
  file: { file: File; width: number; height: number } | null;
  birth: string;
  age: string;
  weightClass: string;
  weightClassOption: string;
  weightClassOption2: string;
  weightClass2: string;
  weightClass3: string;
  gim: string;
  nationality: string;
  based: string;
  professionalRecord: string;
  amateurRecord: string;
  foundation: string;
  topology: string;
  sherdog: string;
  socials: string;
  about: string;
  isAgree: boolean;
};

function CreateFighterForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<Inputs>();
  const { openModal } = useModal();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
        style={{ margin: "0 auto" }}
      >
        <FileInput
          register={register("file", { required: true })}
          label="Photo*"
          className="w-1/2"
          setValue={setValue}
        />

        <Input
          className="w-1/2 cursor-default"
          radius="sm"
          readOnly
          label="Manager*"
          value="David MMA"
          size="lg"
          labelPlacement="outside"
          classNames={{
            label: "text-[0.75rem] text-light pointer-events-none",
            input: "text-black cursor-default",
            inputWrapper: "bg-gray cursor-default",
            mainWrapper: "cursor-default",
            base: "cursor-default",
            innerWrapper: "cursor-default",
          }}
        />

        <h4>Fighter details</h4>

        <CustomInput
          label="Name and Surname*"
          register={register("name", { required: true })}
        />

        <CustomInput label="Nickname" register={register("nickname")} />

        <div className="flex gap-2">
          <CustomSelect
            className="w-1/2"
            label="Gender*"
            items={[
              { key: "male", label: "Male" },
              { key: "female", label: "Female" },
            ]}
            register={register("sex", { required: true })}
          />
          <CustomInput
            className="w-1/3"
            type="date"
            register={register("birth", { required: true })}
            label="Date of Birth*"
          />
          <CustomInput
            className="w-1/4"
            type="number"
            label="Age*"
            register={register("age", { required: true })}
          />
        </div>

        <CustomSelect
          label="Weight class*"
          register={register("weightClass", { required: true })}
          items={[
            { key: "light", label: "Light" },
            { key: "middle", label: "Middle" },
            { key: "heavy", label: "Heavy" },
          ]}
        />

        <div className="flex gap-2">
          <div className="flex gap-1 flex-1">
            <CustomInput
              className="w-4/5 flex-shrink-0"
              label="Weight class*"
              register={register("weightClass2", { required: true })}
            />
            <CustomRadioGroup
              className="w-full text-[0.75rem]"
              items={[
                { key: "cm", label: "cm" },
                { key: "inch", label: "inch" },
              ]}
              register={register("weightClassOption", { required: true })}
            />
          </div>
          <div className="flex gap-1 flex-1">
            <CustomInput
              className="w-4/5 flex-shrink-0"
              label="Weight class*"
              register={register("weightClass3", { required: true })}
            />
            <CustomRadioGroup
              className="w-full text-[0.75rem]"
              items={[
                { key: "cm", label: "cm" },
                { key: "inch", label: "inch" },
              ]}
              register={register("weightClassOption2", { required: true })}
            />
          </div>
        </div>

        <CustomInput register={register("gim")} label="Gim name" />

        <div className="flex gap-2">
          <CustomSelect
            label="Nationality*"
            register={register("nationality", { required: true })}
            items={[
              { key: "light", label: "Light" },
              { key: "middle", label: "Middle" },
              { key: "heavy", label: "Heavy" },
            ]}
          />
          <CustomSelect
            label="Based In*"
            register={register("based", { required: true })}
            items={[
              { key: "light", label: "Light" },
              { key: "middle", label: "Middle" },
              { key: "heavy", label: "Heavy" },
            ]}
          />
        </div>

        <CustomRadioGroup
          label="Professional MMA Record*"
          items={[
            { key: "win", label: "Win" },
            { key: "lose", label: "Lose" },
            { key: "draw", label: "Draw" },
          ]}
          register={register("professionalRecord", { required: true })}
        />

        <CustomRadioGroup
          label="Amateur MMA Record*"
          items={[
            { key: "win", label: "Win" },
            { key: "lose", label: "Lose" },
            { key: "draw", label: "Draw" },
          ]}
          register={register("amateurRecord", { required: true })}
        />

        <CustomSelect
          label="Foundation style*"
          register={register("foundation", { required: true })}
          items={[
            { key: "light", label: "Light" },
            { key: "middle", label: "Middle" },
            { key: "heavy", label: "Heavy" },
          ]}
        />

        <h4>Links</h4>

        <div className="flex gap-2">
          <CustomInput
            label="Topology Link*"
            register={register("topology", { required: true })}
          ></CustomInput>
          <CustomInput
            label="Sherdog Link"
            register={register("sherdog")}
          ></CustomInput>
        </div>

        <CustomSelect
          label="Social Media*"
          register={register("socials", { required: true })}
          items={[
            { key: "light", label: "Light" },
            { key: "middle", label: "Middle" },
            { key: "heavy", label: "Heavy" },
          ]}
        />

        <h4>About</h4>

        <Textarea
          {...register("about")}
          label="About the Fighter"
          radius="sm"
          variant="bordered"
        />

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

        <Button
          className="bg-black text-white mt-5 w-1/2"
          type="submit"
          fullWidth
        >
          Create Fighter's Profile
        </Button>
      </form>
    </>
  );
}

export default CreateFighterForm;
