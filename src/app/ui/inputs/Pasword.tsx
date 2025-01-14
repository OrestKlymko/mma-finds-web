import { Input } from "@nextui-org/input";
import { useState } from "react";
import { RegisterOptions } from "react-hook-form";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

function Password({
  register,
  option,
}: {
  register: any;
  option?: RegisterOptions;
}) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Input
      endContent={
        <button
          aria-label="toggle password visibility"
          className="focus:outline-none"
          type="button"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? (
            <IoEyeOffOutline className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <IoEyeOutline className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      {...register("password", option)}
      placeholder="Password*"
      type={isVisible ? "text" : "password"}
      variant="bordered"
      fullWidth
      size="md"
      radius="sm"
    />
  );
}

export default Password;
