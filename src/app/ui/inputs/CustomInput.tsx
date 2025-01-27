import { Input } from "@nextui-org/input";
import clsx from "clsx";
import styles from "./Input.module.scss";

function CustomInput({
  placeholder,
  register,
  label,
  type,
  className,
  variant,
}: {
  placeholder?: string;
  register: any;
  label?: string;
  type?: "number" | "text" | "email" | "date";
  className?: string;
  variant?: "bordered" | "underlined";
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
