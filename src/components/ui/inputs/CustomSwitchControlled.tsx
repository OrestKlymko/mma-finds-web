"use client";
import { Switch } from "@nextui-org/switch";

function CustomSwitchControlled({
  onChange,
  value,
}: {
  onChange: (a: boolean) => void;
  value: boolean;
}) {
  return (
    <Switch
      size="sm"
      onValueChange={onChange}
      color="secondary"
      isSelected={value}
      classNames={{
        wrapper: "bg-[#949494] rounded-[0.2rem]",
        thumb: "scale-[1.2]",
      }}
    ></Switch>
  );
}

export default CustomSwitchControlled;
