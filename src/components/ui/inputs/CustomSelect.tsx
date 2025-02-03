"use client";

import { Select, SelectItem } from "@heroui/select";
import { UseFormRegisterReturn } from "react-hook-form";

function CustomSelect({
  items,
  register,
  label,
  className,
}: {
  className?: string;
  items: { key: string; label: string }[];
  register: UseFormRegisterReturn;
  label?: string;
}) {
  return (
    <Select
      className={className}
      {...register}
      variant="bordered"
      label={label}
      labelPlacement="outside"
      fullWidth
      size="md"
      classNames={{
        selectorIcon: "scale-[1.4] rotate-[270deg]",
        trigger: "border border-black",
        label: "text-[0.75rem]",
      }}
    >
      {items.map((item) => (
        <SelectItem key={item.key}>{item.label}</SelectItem>
      ))}
    </Select>
  );
}

export default CustomSelect;
