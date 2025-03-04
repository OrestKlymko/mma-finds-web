'use client';
import { GiSettingsKnobs } from 'react-icons/gi';
import MailItem from '../../../../components/ui/MailItem';
import { useState } from 'react';
import clsx from 'clsx';

import {
  IoBanOutline,
  IoMailOpenOutline,
  IoMailOutline,
} from 'react-icons/io5';
import { RiArchiveStackLine } from 'react-icons/ri';
import { MdBlock } from 'react-icons/md';
import { BsTrash3 } from 'react-icons/bs';
import DropdownWrapper from '../../../DropDownWrapper/DropDownWrapper';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';

function SideBar() {
  const messages = [
    {
      name: 'Sara',
      message: 'Hello world...',
      avatar: '/images/boxer-avatar.jpg',
      date: '01.02.2024',
    },
    {
      name: 'Sarae',
      message: 'Hello world...',
      avatar: '/images/boxer-avatar.jpg',
      date: '01.02.2024',
    },
    {
      name: 'Sarafe',
      message: 'Hello world...',
      avatar: '/images/boxer-avatar.jpg',
      date: '01.02.2024',
    },
    {
      name: 'Sarawe',
      message: 'Hello world...',
      avatar: '/images/boxer-avatar.jpg',
      date: '01.02.2024',
    },
    {
      name: 'Sarafew',
      message: 'Hello world...',
      avatar: '/images/boxer-avatar.jpg',
      date: '01.02.2024',
    },
    {
      name: 'Sarfwa',
      message: 'Hello world...',
      avatar: '/images/boxer-avatar.jpg',
      date: '01.02.2024',
    },
    {
      name: 'Sarfewa',
      message: 'Hello world...',
      avatar: '/images/boxer-avatar.jpg',
      date: '01.02.2024',
    },
    {
      name: 'Safewra',
      message: 'Hello world...',
      avatar: '/images/boxer-avatar.jpg',
      date: '01.02.2024',
    },
    {
      name: 'Safwra',
      message: 'Hello world...',
      avatar: '/images/boxer-avatar.jpg',
      date: '01.02.2024',
    },
    {
      name: 'Safwra',
      message: 'Hello world...',
      avatar: '/images/boxer-avatar.jpg',
      date: '01.02.2024',
    },
  ];

  const [activeMessage, setActiveMessage] = useState(0);
  const [checkedMessages, setCheckedMessages] = useState<string[]>([]);
  const [isEditable, setIsEditable] = useState(false);
  const [isMore, setIsMore] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (checkedMessages.includes(value)) {
      setCheckedMessages((prev) => prev.filter((item) => item !== value));
    } else {
      setCheckedMessages((prev) => [...prev, value]);
    }
  };

  return (
    <div className="w-full h-full max-w-[20.3125rem] relative overflow-hidden grid grid-rows-[auto,1fr]">
      <div className="flex items-center justify-between sticky top-0 z-10 bg-white pb-4">
        <button
          className="text-sm text-green font-medium"
          onClick={() => setIsEditable(!isEditable)}
        >
          Edit
        </button>
        <h6>Messages</h6>
        <div className="relative">
          <button className="relative">
            <GiSettingsKnobs
              className="text-base rotate-90"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            />
          </button>
          {isFilterOpen && (
            <DropdownWrapper
              className="w-[13.625rem] right-0 top-[215%] shadow-md bg-white py-2 rounded-md animate-appearance-in"
              onClose={() => setIsFilterOpen(false)}
            >
              <ul>
                <li>
                  <button className="flex items-center gap-2 px-4 py-2">
                    <IoMailOutline className="text-base" />
                    <p>All</p>
                  </button>
                  <span className="block h-[2px] w-full bg-gray-light"></span>
                </li>
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
                    <IoBanOutline className="text-base " />
                    <p className="">Spam</p>
                  </button>
                  <span className="block h-[2px] w-full bg-gray-light"></span>
                </li>
                <li>
                  <button className="flex items-center gap-2 px-4 pt-2">
                    <HiOutlineClipboardDocumentList className="text-base " />
                    <p className="">Exclusive Offers</p>
                  </button>
                </li>
              </ul>
            </DropdownWrapper>
          )}
        </div>
      </div>
      <div className="h-full overflow-y-auto">
        <div className="">
          {messages.map((message, index) => (
            <div className="w-full" key={index}>
              <div
                className="flex items-center gap-2 w-full"
                key={index}
                onClick={() => setActiveMessage(index)}
              >
                {isEditable && (
                  <label>
                    <div
                      className={clsx(
                        'w-3 h-3 block rounded-full shrink-0 cursor-pointer',
                        {
                          'bg-[#4DB847]': checkedMessages.includes(
                            message.name,
                          ),
                          'bg-[#3D3D3D]': !checkedMessages.includes(
                            message.name,
                          ),
                        },
                      )}
                    ></div>
                    <input
                      className="hidden"
                      type="checkbox"
                      name="message"
                      value={message.name}
                      onChange={handleCheck}
                      checked={checkedMessages.includes(message.name)}
                    />
                  </label>
                )}
                <MailItem
                  isActive={index === activeMessage}
                  name={message.name}
                  message={message.message}
                  avatar={message.avatar}
                  date={message.date}
                />
              </div>
              <span className="block h-[2px] w-full rounded-lg bg-gray-light"></span>
            </div>
          ))}
        </div>
      </div>
      {isEditable && (
        <div className="w-full sticky bottom-0 bg-green grid grid-cols-3 p-2">
          <button className="text-white">Archive</button>
          <button className="text-white">Mark as read</button>
          <div className="relative flex items-center justify-center">
            <button className="text-white" onClick={() => setIsMore(!isMore)}>
              More
            </button>
            {isMore && (
              <DropdownWrapper
                onClose={() => setIsMore(false)}
                className="absolute w-[15.625rem] right-0 bottom-[135%] shadow-md bg-white p-2 rounded-md animate-appearance-in"
              >
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
                  </li>
                </ul>
              </DropdownWrapper>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar;
