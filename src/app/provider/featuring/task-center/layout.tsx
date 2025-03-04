import { ReactNode } from 'react';

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full bg-gray-light p-4 rounded-md self-start">
        <h6 className="text-2xl text-center">Task Center</h6>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default layout;
