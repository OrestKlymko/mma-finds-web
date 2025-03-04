import Image from 'next/image';
import { BsTrash3 } from 'react-icons/bs';

import { IoMailOpenOutline } from 'react-icons/io5';
import { MdBlock } from 'react-icons/md';
import { RiArchiveStackLine } from 'react-icons/ri';

interface MessageInfoProps {
  image: string;
  title: string;
  date: string;
  organization?: string;
  place?: string;
  weightClass?: string;
  purse?: string;
  isTitle?: boolean;
}

function MessageInfo({
  image,
  title,
  date,
  organization,
  place,
  weightClass,
  purse,
  isTitle,
}: MessageInfoProps) {
  return (
    <div className="w-[350px] shrink-0">
      <p className="font-medium mb-2">This message is related to:</p>
      <div className="bg-gray w-full flex overflow-hidden rounded-md relative mb-6">
        {isTitle && (
          <div className="text-xs absolute top-0 right-0 py-1 px-5 bg-yellow flex items-center justify-center">
            <p>Title Fight</p>
          </div>
        )}
        <div className="w-[33%] overflow-hidden shrink-0">
          <Image
            className="h-full w-full object-cover object-center"
            src={image}
            width={28}
            height={28}
            alt="avatar"
          />
        </div>
        <div className="p-4 w-full py-6">
          <h4 className="uppercase mb-3">
            {title} | {date}
          </h4>
          {organization && (
            <p className="font-medium">Organization: {organization}</p>
          )}
          {place && <p className="font-medium">Event Place: {place}</p>}
          {weightClass && (
            <p className="font-medium">Weight Class: {weightClass}</p>
          )}
          {purse && <p className="font-medium">Purse: {purse}</p>}
        </div>
      </div>
      <p className="font-medium mb-2">Manage This Chat:</p>
      <ul>
        <li>
          <button className="flex items-center gap-2 px-4 py-2">
            <IoMailOpenOutline className="text-base" />
            <p>Unread</p>
          </button>
          <span className="block h-[2px] w-full bg-gray-light"></span>
        </li>
        <li>
          <button className="flex items-center gap-2 px-4 py-2">
            <RiArchiveStackLine className="text-base" />
            <p>Archive</p>
          </button>
          <span className="block h-[2px] w-full bg-gray-light"></span>
        </li>
        <li>
          <button className="flex items-center gap-2 px-4 py-2">
            <MdBlock className="text-base" />
            <p>Block</p>
          </button>
          <span className="block h-[2px] w-full bg-gray-light"></span>
        </li>
        <li>
          <button className="flex items-center gap-2 px-4 py-2">
            <BsTrash3 className="text-base text-red" />
            <p className="text-red">Delete</p>
          </button>
          <span className="block h-[2px] w-full bg-gray-light"></span>
        </li>
      </ul>
    </div>
  );
}

export default MessageInfo;
