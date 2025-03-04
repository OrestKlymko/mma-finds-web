import { ReactNode } from 'react';
import NavLink from '../../../../components/ui/NavigatinLink';

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full bg-gray-light p-4 rounded-md self-start">
        <h6 className="text-2xl text-center">Invite Friends</h6>
      </div>
      <ul className="flex gap-8 border-b border-gray-light flex-wrap">
        <li>
          <NavLink
            className="text-base font-medium pb-2 block h-full"
            href="/manager/featuring/friends"
            hovered
          >
            Your Unique Referral Link
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-base font-medium  block h-full"
            href="/manager/featuring/friends/how-it-works"
            hovered
          >
            How It Works
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-base font-medium  block h-full"
            href="/manager/featuring/friends/referrals"
            hovered
          >
            Your Referrals
          </NavLink>
        </li>
      </ul>
      <div>{children}</div>
    </div>
  );
}

export default layout;
