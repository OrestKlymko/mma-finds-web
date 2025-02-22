"use client";

import { Button } from "@nextui-org/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input, Textarea } from "@nextui-org/input";

import CustomInput from "../ui/inputs/CustomInput";
import CustomSelect from "../ui/inputs/CustomSelect";
import { CustomRadioGroup } from "../ui/inputs/CustomRadioQroup";
import SwitchCustom from "../ui/inputs/Switch";
import { Inputs } from "../../types/inputs";
import PhotoInput from "../ui/inputs/PhotoInput";

function CreateFighterForm() {
  const { register, handleSubmit, setValue, getValues } = useForm<Inputs>();

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
        <PhotoInput
          register={register("photo", { required: true })}
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
          size="md"
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

        <div className="flex gap-2 flex-col">
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
            <div className="flex gap-1 items-end flex-1">
              <CustomInput
                className="w-4/5 flex-shrink-0"
                label="Weight class*"
                register={register("weightClass2", { required: true })}
              />
              <CustomRadioGroup
                className="w-full text-[0.75rem]"
                checked={getValues("weightClassOption")}
                items={[
                  { key: "cm", label: "cm" },
                  { key: "inch", label: "inch" },
                ]}
                register={register("weightClassOption", { required: true })}
              />
            </div>
            <div className="flex items-end gap-1 flex-1">
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
            className="mb-1 mt-1"
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
        </div>
        <div className="flex gap-2 flex-col">
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
        </div>
        <div className="flex gap-6 flex-col">
          <h4>About</h4>

          <Textarea
            {...register("about")}
            label="About the Fighter"
            radius="sm"
            classNames={{
              inputWrapper: "border border-black",

              label: "text-sm",
            }}
            variant="bordered"
          />
        </div>

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
          Create Fighter&apos;s Profile
        </Button>
      </form>
    </>
  );
}

export default CreateFighterForm;
