'use client';
import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { IoTrashOutline } from 'react-icons/io5';
import { MdInsertLink } from 'react-icons/md';
import DeleteSubaccountModal from '../../../../../components/Modal/components/DeleteSubaccountModal';
import { useModal } from '../../../../../components/Providers/ModalProvider';

type TaskCardProps = {
  data: {
    title: string;
    date: string;
    task: string;
    disabled?: boolean;
    completed?: boolean;
  };
};
function TaskCard({ data }: TaskCardProps) {
  const [isOpened, setIsOpened] = useState(false);
  const { openModal } = useModal();
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsOpened(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popupRef]);

  return (
    <div
      className={clsx('p-4 flex justify-between bg-gray-light rounded-md', {
        'opacity-50 pointer-events-none': data.completed,
      })}
    >
      <div className="flex flex-col">
        <h4>
          {data.title} | {data.date}
        </h4>
        <div className="flex items-center gap-1">
          {!data.completed && (
            <IoIosCheckmarkCircleOutline className="text-xs" />
          )}
          <p className="text-xs">{data.task}</p>
        </div>
      </div>
      <div className="relative" ref={popupRef}>
        <HiOutlineDotsHorizontal
          className="text-base cursor-pointer"
          onClick={() => setIsOpened(!isOpened)}
        />
        {isOpened && (
          <div className="z-10 absolute top-[50%] right-0 bg-white p-2 rounded-md shadow-md w-[17.1875rem] animate-appearance-in">
            <ul>
              <li className="flex items-center gap-2 p-2 border-b-2 border-gray-light cursor-pointer rounded-md hover:bg-gray-light">
                <IoIosCheckmarkCircleOutline className="text-xs" />
                <p className="text-xs">Mark Completed</p>
              </li>
              <li className="flex items-center gap-2 p-2 border-b-2 border-gray-light cursor-pointer hover:bg-gray-light">
                <MdInsertLink className="text-xs" />
                <p className="text-xs">Copy Link</p>
              </li>
              <li
                className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-light"
                onClick={() => {
                  openModal(<DeleteSubaccountModal />);
                }}
              >
                <IoTrashOutline className="text-xs text-red" />
                <p className="text-xs text-red"> Delete Task</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskCard;
