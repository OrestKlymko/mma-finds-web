"use client";

import { Select, SelectItem } from "@heroui/select";
import { UseFormRegisterReturn } from "react-hook-form";

function CustomSelect({
  items,
  register,
  label,
  className,
  onChange,
}: {
  className?: string;
  items: { key: string; label?: string; value?: string }[];
  register?: UseFormRegisterReturn;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <Select
      className={className}
      {...register}
      variant="bordered"
      label={label}
      labelPlacement="outside"
      fullWidth
      onChange={onChange}
      size="md"
      classNames={{
        selectorIcon: "scale-[1.4] rotate-[270deg]",
        trigger: "border border-black",
        label: "text-[0.75rem]",
      }}
    >
      {items.map((item) => (
        <SelectItem key={item.key}>{item.label || item.value}</SelectItem>
      ))}
    </Select>
  );
}

export default CustomSelect;
