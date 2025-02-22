import { ReactNode } from "react";
import NavLink from "../../../../components/ui/NavigatinLink";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full bg-gray-light p-4 rounded-md self-start">
        <h6 className="text-2xl text-center">Legal</h6>
      </div>
      <ul className="flex gap-8 border-b border-gray-light">
        <li>
          <NavLink
            className="text-base font-medium pb-2 block h-full"
            href="/manager/featuring/legal"
            hovered
          >
            Terms and Conditions
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-base font-medium  block h-full"
            href="/manager/featuring/legal/privacy-policy"
            hovered
          >
            Privacy Policy
          </NavLink>
        </li>
      </ul>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
