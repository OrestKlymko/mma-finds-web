import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
  name,
  href,
  children,
}: {
  name: string;
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      key={name}
      href={href}
      className={clsx(
        "text-base text-nowrap whitespace-nowrap underline_hover",
        {
          "text-green": isActive,
        }
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
