'use client';

import { Select, SelectItem } from '@heroui/select';

function CustomSelectControlled({
  items,
  label,
  className,
  value,
}: {
  className?: string;
  items: { key: string; label?: string; value?: string }[];
  label?: string;
  value: string;
}) {
  return (
    <Select
      className={className}
      selectedKeys={value}
      variant="bordered"
      label={label}
      labelPlacement="outside"
      fullWidth
      size="md"
      classNames={{
        selectorIcon: 'scale-[1.4] rotate-[270deg]',
        trigger: 'border border-black',
        label: 'text-[0.75rem]',
      }}
    >
      {items.map((item) => (
        <SelectItem key={item.key}>{item.label || item.value}</SelectItem>
      ))}
    </Select>
  );
}

export default CustomSelectControlled;
