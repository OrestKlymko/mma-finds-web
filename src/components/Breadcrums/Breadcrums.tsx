"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const getPathName = (path: string) => {
    switch (path) {
      case "manager":
        return "Home";
      case "offers":
        return "Fight Offers Feed";
      default:
        return path;
    }
  };

  return (
    <nav className="text-base max-w-screen-xl mx-auto">
      <ul className="flex gap-2">
        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;
          return (
            <div className="flex items-center gap-2" key={segment}>
              <li className="flex items-center">
                {!isLast ? (
                  <Link href={href} className="hover:underline capitalize">
                    {getPathName(decodeURIComponent(segment))}
                  </Link>
                ) : (
                  <span className="text-green capitalize cursor-default">
                    {getPathName(decodeURIComponent(segment))}
                  </span>
                )}
              </li>
              {!isLast && <span>/</span>}
            </div>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
