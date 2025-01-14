import { Input } from "@nextui-org/input";
import clsx from "clsx";
import { ChangeEvent, useState } from "react";
import { set } from "react-hook-form";
import { FaRegCheckCircle } from "react-icons/fa";

function ConfirmInput({
  placeholder,
  register,
  checkValue,
}: {
  placeholder: string;
  register: any;
  checkValue: () => string;
}) {
  const [isCorrect, setIsCorrect] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsCorrect(e.target.value === checkValue());
  };

  return (
    <Input
      {...register}
      placeholder={placeholder}
      onChange={onChange}
      fullWidth
      variant="bordered"
      size="md"
      endContent={
        <FaRegCheckCircle
          className={clsx(!isCorrect ? "opacity-40" : "fill-green")}
        />
      }
    />
  );
}

export default ConfirmInput;
