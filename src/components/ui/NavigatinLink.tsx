"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  children,
  className,
  disableHover,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  disableHover?: boolean;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx("text-base text-nowrap whitespace-nowrap", className, {
        "text-green": isActive,
        underline_hover: !disableHover && !isActive,
      })}
    >
      {children}
    </Link>
  );
};

export default NavLink;
