'use client';
import Image from 'next/image';
import TaskCard from './_components/TaskCard';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import NewTaskBtn from './_components/NewTaskBtn';
import { useRef } from 'react';

function Page() {
  const pageRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="w-full flex flex-col gap-8" ref={pageRef}>
      <div className="w-full bg-gray-light p-4 rounded-md self-start">
        <h6 className="text-2xl text-center">Sub-accounts</h6>
      </div>
      <p>
        Efficiently manage all fight-related tasks and improve tracking
        efficiency within your organization using our comprehensive platform.
      </p>
      <div className="flex justify-between items-center  mb:flex-col gap-4 ">
        <div className="flex gap-4 items-center shrink-0">
          <div className="rounded-full overflow-hidden h-24 aspect-square">
            <Image
              className="w-full h-full object-cover object-center"
              src="/images/boxer-avatar.jpg"
              width={24}
              height={24}
              alt="avatar"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h6>Alice Jones</h6>
            <p className="font-medium text-xs">
              Job Function: Head of Event Operations
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1 items-end mb:items-center">
          <NewTaskBtn pageRef={pageRef} />
          <button className="text-red max-w-[18.75rem] w-full mb:max-w-full">
            Delete Sub-Account
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between  max-w-[18.75rem]">
          <h6>Current Tasks:</h6>
          <HiOutlineDotsHorizontal className="text-base" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TaskCard
            data={{
              title: 'Oktagon 52',
              date: '20.03.2023',
              task: 'Arrange flight tickets for John Doe and his team.',
            }}
          />
          <TaskCard
            data={{
              title: 'Oktagon 52',
              date: '20.03.2023',
              task: 'Arrange flight tickets for John Doe and his team.',
            }}
          />
          <TaskCard
            data={{
              title: 'Oktagon 52',
              date: '20.03.2023',
              task: 'Arrange flight tickets for John Doe and his team.',
            }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between  max-w-[18.75rem]">
          <h6>Completed Tasks:</h6>
          <HiOutlineDotsHorizontal className="text-base" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TaskCard
            data={{
              title: 'Oktagon 52',
              date: '20.03.2023',
              task: 'Arrange flight tickets for John Doe and his team.',
              completed: true,
            }}
          />
          <TaskCard
            data={{
              title: 'Oktagon 52',
              date: '20.03.2023',
              task: 'Arrange flight tickets for John Doe and his team.',
              completed: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
