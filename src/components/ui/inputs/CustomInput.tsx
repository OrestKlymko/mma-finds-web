import { Input } from "@nextui-org/input";
import clsx from "clsx";
import styles from "./Input.module.scss";
import { UseFormRegisterReturn } from "react-hook-form";

function CustomInput({
  placeholder,
  register,
  label,
  type,
  className,
  variant,
  endContent,
  onChange,
  value,
}: {
  placeholder?: string;
  register?: UseFormRegisterReturn;
  label?: string;
  type?: "number" | "text" | "email" | "date";
  className?: string;
  variant?: "bordered" | "underlined";
  endContent?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}) {
  return (
    <Input
      className={clsx(className, styles.input)}
      type={type}
      {...register}
      labelPlacement="outside"
      label={label}
      placeholder={placeholder}
      fullWidth
      variant={variant ? variant : "bordered"}
      size="md"
      endContent={endContent}
      onChange={onChange}
      value={value}
      classNames={{
        input: "z-10",
        inputWrapper: clsx("border border-black", {
          "border-none shadow-[0_1px_0px_0_#00000040]":
            variant === "underlined",
        }),
        label: clsx("text-[0.75rem]", {
          "text-black": variant === "underlined",
        }),
      }}
    />
  );
}

export default CustomInput;
