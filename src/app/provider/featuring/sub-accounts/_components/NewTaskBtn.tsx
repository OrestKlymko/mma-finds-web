'use client';
import { Button } from '@nextui-org/button';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { RiCalendarScheduleLine } from 'react-icons/ri';
import { useModal } from '../../../../../components/Providers/ModalProvider';
import ChooseEventModal from '../../../../../components/Modal/components/ChooseEventModal';
import clsx from 'clsx';

function NewTaskBtn({
  pageRef,
}: {
  pageRef: React.RefObject<HTMLDivElement | null> | null;
}) {
  const [isOpened, setIsOpened] = useState(false);
  const { openModal, modalData } = useModal();
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef?.current) return;
    const currentRef = pageRef.current;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current instanceof HTMLElement &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsOpened(false);
      }
    };
    currentRef.addEventListener('mousedown', handleClickOutside);
    return () => {
      currentRef.removeEventListener('mousedown', handleClickOutside);
    };
  }, [pageRef]);

  return (
    <div className="relative max-w-[18.75rem] w-full z-20" ref={popupRef}>
      <Button
        fullWidth
        className="ml-auto max-w-[18.75rem]"
        color="secondary"
        onPress={() => setIsOpened(!isOpened)}
      >
        + New Task
      </Button>
      {isOpened && (
        <div className="animate-appearance-in absolute top-[110%] right-0 bg-white p-4 rounded-md shadow-md w-full flex flex-col gap-2">
          <button
            className="w-fit"
            onClick={() => openModal(<ChooseEventModal />)}
          >
            <h6 className="text-sm pl-2">
              {modalData.eventID ? 'New Task' : 'Choose an event'}{' '}
              <span>{modalData.eventID || ''}</span>
            </h6>
          </button>
          <ul className="">
            <li className="p-2 border-b-2 border-gray-light">
              <input
                className="focus:outline-none"
                placeholder="Enter your task here"
              />
            </li>
            <li className="p-2 border-b-2 border-gray-light">
              <div className="flex gap-2 items-center">
                <div className="rounded-full overflow-hidden h-6 aspect-square">
                  <Image
                    className="w-full h-full object-cover object-center"
                    src="/images/boxer-avatar.jpg"
                    width={24}
                    height={24}
                    alt="avatar"
                  />
                </div>
                <p className="text-green">Alice Jones</p>
              </div>
            </li>
            <li className="p-2 border-b-2 border-gray-light flex gap-2 items-center">
              <RiCalendarScheduleLine className="text-xl" />
              <input
                type="date"
                className="focus:outline-none"
                placeholder="Set a Due Date"
              />
            </li>
          </ul>
          <Button
            className={clsx('text-white ml-auto text-sm self-end', {
              'bg-green': modalData.eventID,
              'bg-black': !modalData.eventID,
            })}
          >
            Create Task
          </Button>
        </div>
      )}
    </div>
  );
}

export default NewTaskBtn;
