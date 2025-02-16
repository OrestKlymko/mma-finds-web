"use client";

import { LiaCopySolid } from "react-icons/lia";
import { RiReplyLine } from "react-icons/ri";

function CopyLink({ link }: { link: string }) {
  return (
    <div>
      <p className="text-base font-semibold pb-2">Your Unique Referral Link</p>
      <div className="flex gap-1">
        <div className="py-3 px-2 rounded-md bg-gray-light w-1/2">
          <p>{link}</p>
        </div>
        <button
          className="py-3 px-2 rounded-md bg-gray-light w-fit active:scale-95"
          onClick={() => navigator.clipboard.writeText(link)}
        >
          <LiaCopySolid
            className="w-4 h-4"
            style={{ transform: "rotateY(180deg)" }}
          />
        </button>
        <button className="py-3 px-2 rounded-md bg-gray-light w-fit active:scale-95">
          <RiReplyLine
            className="w-4 h-4"
            style={{ transform: "rotateY(180deg)" }}
          />
        </button>
      </div>
    </div>
  );
}

export default CopyLink;
