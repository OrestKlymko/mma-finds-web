import { AiOutlineDollar } from "react-icons/ai";
import { FaHandFist } from "react-icons/fa6";
import { RiUserAddLine } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { LuScale } from "react-icons/lu";
import { HiSupport } from "react-icons/hi";
import { BiCommentEdit } from "react-icons/bi";

export const navigation = [
  {
    title: "MMA Finds Center ",
    items: [
      {
        title: "Balance Overview",
        icon: AiOutlineDollar,
        link: "/manager/featuring/balance",
      },
      {
        title: "My Fighters",
        icon: FaHandFist,
        link: "/manager/featuring/fighters",
      },
      {
        title: "Invite Friends",
        icon: RiUserAddLine,
        link: "/manager/featuring/friends",
      },
      {
        title: "Featured Fighters",
        icon: FaRegStar,
        link: "/manager/featuring/feature",
      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        title: "Account",
        icon: VscAccount,
        link: "/manager/featuring/account",
      },
      {
        title: "Preferences",
        icon: IoSettingsOutline,
        link: "/manager/featuring/preferences",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Legal",
        icon: LuScale,
        link: "/manager/featuring/legal",
      },
      {
        title: "Support",
        icon: HiSupport,
        link: "/manager/featuring/support",
      },
      {
        title: "Share Feedback!",
        icon: BiCommentEdit,
        link: "/manager/featuring/feedback",
      },
    ],
  },
];
