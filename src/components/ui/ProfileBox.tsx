"use client";

import Image from "next/image";
import { useUser } from "../Providers/UserProvider";
import Avatar from "./Avatar";

function ProfileBox() {
  const { user } = useUser();
  return (
    <div className="flex items-center gap-2">
      <Avatar className="w-16" src={user?.avatar} isOnline />
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <h6 className="text-xl">{user?.name}</h6>
          <Image src="/icons/star-icon.svg" width={12} height={12} alt="icon" />
          <Image
            src="/icons/check-icon.svg"
            width={12}
            height={12}
            alt="icon"
          />
        </div>
        <p>Subscription Ends 1.1.2025 </p>
      </div>
    </div>
  );
}

export default ProfileBox;
