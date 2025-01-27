import { Switch } from "@nextui-org/switch";

import { ReactNode } from "react";

function SwitchCustom({
  children,
  register,
}: {
  children: ReactNode;
  register: any;
}) {
  return (
    <div className="pt-[1.5rem]">
      <Switch
        size="sm"
        {...register}
        color="secondary"
        classNames={{
          wrapper: "bg-[#949494] rounded-[0.2rem]",
          thumb: "scale-[1.2]",
        }}
      >
        {children}
      </Switch>
    </div>
  );
}

export default SwitchCustom;
