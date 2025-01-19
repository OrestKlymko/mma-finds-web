import { Input } from "@nextui-org/input";
import clsx from "clsx";
import { div } from "framer-motion/client";
import { ChangeEvent, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

function ConfirmInput({
  placeholder,
  register,
  checkValue,
  isPassword,
  label,
}: {
  label?: string;
  placeholder?: string;
  isPassword?: boolean;
  register: any;
  checkValue: () => string;
}) {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsCorrect(e.target.value === checkValue());
  };

  return (
    <Input
      type={isVisible && !isPassword ? "text" : "password"}
      {...register}
      label={label}
      placeholder={placeholder}
      onChange={onChange}
      fullWidth
      variant="bordered"
      size="sm"
      classNames={{ innerWrapper: "relative" }}
      endContent={
        <div className="flex items-center gap-2 absolute right-0 top-1/2 -translate-y-1/2">
          <FaCheckCircle
            className={clsx(
              !isCorrect ? "opacity-40" : "fill-green",
              "w-4 h-4"
            )}
          />
          {isPassword && (
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
          )}
        </div>
      }
    />
  );
}

export default ConfirmInput;
