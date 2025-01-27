"use client";

import clsx from "clsx";

function CustomRadioGroup({
  items,
  register,
  className,
  label,
}: {
  items: { key: string; label: string }[];
  register: any;
  className?: string;
  label?: string;
}) {
  return (
    <div className={className}>
      {label && <p className="text-[0.75rem] leading-none mb-3">{label}</p>}
      <div className={clsx("flex gap-2 items-end")}>
        {items.map((item) => (
          <label className="flex-1" key={item.key}>
            <input
              className="hidden peer"
              type="radio"
              value={item.key}
              {...register}
            />
            <span className="flex items-center bg-gray justify-center h-10 rounded-md cursor-pointer peer-checked:bg-gray-dark">
              {item.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default CustomRadioGroup;
