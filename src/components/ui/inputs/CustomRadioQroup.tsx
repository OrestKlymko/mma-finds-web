"use client";

import clsx from "clsx";
import { useLayoutEffect, useRef, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

function CustomRadioGroup({
  items,
  register,
  className,
  label,
  name,
  bgColor,
  width,
  onChange,
  containerWidth,
  checked,
  type,
}: {
  items: { key: string; label?: string; value?: string }[];
  register?: UseFormRegisterReturn;
  className?: string;
  label?: string;
  name?: string;
  bgColor?: "gray" | "green";
  width?: "auto" | "fit";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  containerWidth?: number;
  checked?: string | null;
  type?: "radio" | "checkbox";
}) {
  const [optionsList, setOptionsList] = useState(items);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!containerWidth) return;
    const updateList = () => {
      if (ref.current) {
        if (ref.current.offsetWidth > 450) {
          setOptionsList((prev) => prev.slice(0, prev.length - 1));
          return;
        } else {
          setIsVisible(true);
        }
      }
    };

    updateList();

    window.addEventListener("resize", updateList);
    return () => window.removeEventListener("resize", updateList);
  }, [optionsList, containerWidth]);

  return (
    <div
      className={clsx(className, "w-fit", {
        "opacity-0": !isVisible && containerWidth,
      })}
      ref={ref}
    >
      {label && <p className="text-[0.75rem] leading-none mb-3">{label}</p>}
      <div className={clsx("flex gap-2 items-end")}>
        {optionsList.map((item) => (
          <label
            id={name}
            className={clsx({
              "flex-1": width === "auto" || undefined,
              "w-fit": width === "fit",
            })}
            key={item.key}
          >
            <input
              className="hidden peer"
              type={type || "radio"}
              name={name}
              value={item.key}
              checked={checked === item.key ? true : false}
              onChange={onChange}
              {...register}
            />
            <span
              className={clsx(
                "flex bg-gray items-center justify-center h-10 rounded-md cursor-pointer text-nowrap whitespace-nowrap",
                {
                  "peer-checked:bg-gray-dark": bgColor === "gray" || undefined,
                  "peer-checked:bg-green peer-checked:text-white":
                    bgColor === "green",
                  "px-4": width === "fit",
                }
              )}
            >
              {item.label || item.value}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default CustomRadioGroup;
