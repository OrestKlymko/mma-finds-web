import { ReactNode } from 'react';
import NavLink from '../../../../components/ui/NavigatinLink';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full bg-gray-light p-4 rounded-md self-start">
        <h6 className="text-2xl text-center">Support</h6>
      </div>
      <ul className="flex gap-8 border-b border-gray-light">
        <li>
          <NavLink
            className="text-base font-medium pb-2 block h-full"
            href="/provider/featuring/support"
            hovered
          >
            FAQs
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-base font-medium  block h-full"
            href="/provider/featuring/support/ticket-submission"
            hovered
          >
            Ticket Submission
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-base font-medium  block h-full"
            href="/provider/featuring/support/my-tickets"
            hovered
          >
            My Tickets
          </NavLink>
        </li>
      </ul>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
