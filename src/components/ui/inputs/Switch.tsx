import { Switch } from "@nextui-org/switch";

import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

function SwitchCustom({
  children,
  register,
}: {
  children: ReactNode;
  register: UseFormRegisterReturn;
}) {
  return (
    <div className="pt-[1.5rem] flex gap-2 items-center">
      <Switch
        size="sm"
        {...register}
        color="secondary"
        classNames={{
          wrapper: "bg-[#949494] rounded-[0.2rem]",
          thumb: "scale-[1.2]",
        }}
      ></Switch>
      {children}
    </div>
  );
}

export default SwitchCustom;
