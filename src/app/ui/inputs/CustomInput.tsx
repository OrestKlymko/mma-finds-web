import { Input } from "@nextui-org/input";
import clsx from "clsx";
import styles from "./Input.module.scss";

function CustomInput({
  placeholder,
  register,
  label,
  type,
  className,
}: {
  placeholder?: string;
  register: any;
  label?: string;
  type?: "number" | "text" | "email" | "date";
  className?: string;
}) {
  return (
    <div className={clsx("relative", className)}>
      <Input
        className={clsx(className, styles.input)}
        type={type}
        {...register}
        placeholder={placeholder}
        fullWidth
        variant="bordered"
        size="md"
        classNames={{
          input: "z-10",
        }}
      />
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default CustomInput;
