import Link from "next/link";
import ProfileBox from "../../../../../components/ui/ProfileBox";
import { navigation } from "./sideBarNavigation";
import NavLink from "../../../../../components/ui/NavigatinLink";

function SideBar() {
  return (
    <div className="sidebar min-w-[400px] shrink-0">
      <ProfileBox />
      <div className="flex flex-col gap-8 mt-8">
        {navigation.map((item) => (
          <div key={item.title} className="flex flex-col gap-2">
            <h6 className="text-xl">{item.title}</h6>
            <ul className="flex flex-col ">
              {item.items.map((item) => (
                <li
                  className="flex items-center gap-2 py-4 px-6 border-b border-gray"
                  key={item.title}
                >
                  <item.icon className="w-6 h-6" />
                  <NavLink href={item.link} className="text-base">
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
