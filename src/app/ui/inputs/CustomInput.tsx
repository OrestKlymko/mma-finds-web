import { Input } from "@nextui-org/input";
import { useState } from "react";

function CustomInput({
  placeholder,
  register,
}: {
  placeholder: string;
  register: any;
}) {
  return (
    <Input
      {...register}
      placeholder={placeholder}
      fullWidth
      variant="bordered"
      size="md"
    />
  );
}

export default CustomInput;
