"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  children,
  className,
  disableHover,
  includes,
  hovered,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  disableHover?: boolean;
  includes?: boolean;
  hovered?: boolean;
}) => {
  const pathname = usePathname();
  const isActive = !includes ? pathname === href : pathname.includes(href);

  return (
    <Link
      href={href}
      className={clsx("text-base text-nowrap whitespace-nowrap", className, {
        "text-green": isActive,
        underline_hover: !disableHover && !isActive && !hovered,
        underlined: hovered && isActive,
      })}
    >
      {children}
    </Link>
  );
};

export default NavLink;
