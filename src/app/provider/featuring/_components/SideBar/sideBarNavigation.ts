import { AiOutlineDollar } from 'react-icons/ai';
import { RiUserAddLine } from 'react-icons/ri';
import { FaRegStar } from 'react-icons/fa6';
import { VscAccount } from 'react-icons/vsc';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuScale } from 'react-icons/lu';
import { HiOutlineClipboardList, HiSupport } from 'react-icons/hi';
import { BiCommentEdit } from 'react-icons/bi';
import { LuCalendarDays } from 'react-icons/lu';
import { IoPeopleOutline } from 'react-icons/io5';

export const navigation = [
  {
    title: 'MMA Finds Center ',
    items: [
      {
        title: 'Balance Overview',
        icon: AiOutlineDollar,
        link: '/provider/featuring/balance',
      },
      {
        title: 'My Events',
        icon: LuCalendarDays,
        link: '/provider/featuring/events',
      },
      {
        title: 'Sub-accounts',
        icon: IoPeopleOutline,
        link: '/provider/featuring/sub-accounts',
      },
      {
        title: 'Task Center',
        icon: HiOutlineClipboardList,
        link: '/provider/featuring/task-center',
      },
      {
        title: 'Invite Friends',
        icon: RiUserAddLine,
        link: '/provider/featuring/friends',
      },
      {
        title: 'Featured Fighters',
        icon: FaRegStar,
        link: '/provider/featuring/feature',
      },
    ],
  },
  {
    title: 'Settings',
    items: [
      {
        title: 'Account',
        icon: VscAccount,
        link: '/provider/featuring/account',
      },
      {
        title: 'Preferences',
        icon: IoSettingsOutline,
        link: '/provider/featuring/preferences',
      },
    ],
  },
  {
    title: 'Resources',
    items: [
      {
        title: 'Legal',
        icon: LuScale,
        link: '/provider/featuring/legal',
      },
      {
        title: 'Support',
        icon: HiSupport,
        link: '/provider/featuring/support',
      },
      {
        title: 'Share Feedback!',
        icon: BiCommentEdit,
        link: '/provider/featuring/feedback',
      },
    ],
  },
];
