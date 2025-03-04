'use client';
import { ReactNode } from 'react';
import NavLink from '../../../../components/ui/NavigatinLink';
import { useModal } from '../../../../components/Providers/ModalProvider';
import SignOutModal from '../../../../components/Modal/components/SignOutModal';

function Layout({ children }: { children: ReactNode }) {
  const { openModal } = useModal();
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full bg-gray-light p-4 rounded-md self-start">
        <h6 className="text-2xl text-center">Account</h6>
      </div>
      <ul className="flex justify-between gap-8 border-b border-gray-light mb:flex-wrap mb:justify-start">
        <li>
          <NavLink
            className="text-base font-medium pb-2 block h-full"
            href="/provider/featuring/account"
            hovered
          >
            Account Info
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-base font-medium block h-full"
            href="/provider/featuring/account/subscriptions"
            hovered
          >
            Subscriptions
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-base font-medium  block h-full"
            href="/provider/featuring/account/payment-methods"
            hovered
          >
            Payment Methods
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-base font-medium  block h-full"
            href="/provider/featuring/account/management"
            hovered
          >
            Account Management
          </NavLink>
        </li>
        <li>
          <button
            className="text-red text-base font-medium  block h-full"
            onClick={() => openModal(<SignOutModal />)}
          >
            Sign Out
          </button>
        </li>
      </ul>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
