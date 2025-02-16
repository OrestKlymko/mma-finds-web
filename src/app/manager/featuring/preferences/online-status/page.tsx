"use client";
import { useState } from "react";
import CustomSwitchControlled from "../../../../../components/ui/inputs/CustomSwitchControlled";

function Page() {
  const [onlineStatus, setOnlineStatus] = useState(true);
  return (
    <div>
      <h6 className="mb-6">Email Notifications</h6>
      <div className="w-1/2">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-light">
          <p className="text-sm">
            You’ll remain online for as long as the app is open.
          </p>
          <CustomSwitchControlled
            onChange={setOnlineStatus}
            value={onlineStatus}
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
