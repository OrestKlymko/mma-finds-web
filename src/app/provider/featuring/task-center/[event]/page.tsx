'use client';
import { useRef } from 'react';
import TaskCard from '../_componetns/TaskCard';
import NewTaskBtn from '../_componetns/NewTaskBtn';

function Page() {
  const pageRef = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={pageRef} className="flex flex-col gap-8">
      <div className="p-3 bg-green">
        <p className="text-center text-white text-base font-medium">
          Oktagon 58
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h6>To Do:</h6>
        <NewTaskBtn pageRef={pageRef} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TaskCard
            data={{
              name: 'Alisa Jones',
              avatar: '/images/boxer-avatar.jpg',

              task: 'Arrange flight tickets for John Doe and his team.',
            }}
          />
          <TaskCard
            data={{
              name: 'Alisa Jones',
              avatar: '/images/boxer-avatar.jpg',

              task: 'Arrange flight tickets for John Doe and his team.',
            }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h6>Completed:</h6>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TaskCard
            data={{
              name: 'Alisa Jones',
              avatar: '/images/boxer-avatar.jpg',
              task: 'Arrange flight tickets for John Doe and his team.',
              completed: true,
            }}
          />
          <TaskCard
            data={{
              name: 'Alisa Jones',
              avatar: '/images/boxer-avatar.jpg',
              task: 'Arrange flight tickets for John Doe and his team.',
              completed: true,
            }}
          />
        </div>
      </div>
      <button className="w-fit">
        <h6 className="text-green">Add Section</h6>
      </button>
    </div>
  );
}

export default Page;
