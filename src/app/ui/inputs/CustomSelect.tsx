"use client";

import { Select, SelectItem } from "@heroui/select";

function CustomSelect({
  items,
  register,
  label,
  className,
}: {
  className?: string;
  items: { key: string; label: string }[];
  register: any;
  label?: string;
}) {
  return (
    <Select
      className={className}
      {...register}
      label={label}
      variant="bordered"
      fullWidth
      size="sm"
      classNames={{ selectorIcon: "scale-[1.4] rotate-[270deg]" }}
    >
      {items.map((item) => (
        <SelectItem key={item.key}>{item.label}</SelectItem>
      ))}
    </Select>
  );
}

export default CustomSelect;
