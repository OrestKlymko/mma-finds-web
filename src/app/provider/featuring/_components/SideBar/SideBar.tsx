'use client';
import ProfileBox from '../../../../../components/ui/ProfileBox';
import { navigation } from './sideBarNavigation';
import NavLink from '../../../../../components/ui/NavigatinLink';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function SideBar() {
  const pathname = usePathname();

  const [isOpened, setIsOpened] = useState(false);

  const openMenu = () => {
    setIsOpened(!isOpened);
  };

  useEffect(() => {
    setIsOpened(false);
  }, [pathname]);

  return (
    <>
      <div
        className={clsx(
          'sidebar min-w-[400px] shrink-0 mb:absolute mb:inset-0 bg-white mb:h-fit z-40 transition-transform duration-300 mb:max-w-[88vw] mb:min-w-1',
          {
            'mb:translate-x-0': isOpened,
            'mb:-translate-x-full': !isOpened,
          },
        )}
      >
        <ProfileBox />
        <div className="flex flex-col gap-8 mt-8">
          {navigation.map((item) => (
            <div key={item.title} className="flex flex-col gap-2">
              <h6 className="text-xl">{item.title}</h6>
              <ul className="flex flex-col">
                {item.items.map((item) => (
                  <li
                    className="flex items-center gap-2 py-4 px-6 border-b border-gray"
                    key={item.title}
                  >
                    <item.icon
                      className={clsx('w-6 h-6', {
                        'text-black': !pathname.includes(item.link),
                        'text-green': pathname.includes(item.link),
                      })}
                    />
                    <NavLink includes href={item.link} className="text-base">
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        className="hidden mb:flex fixed bottom-8 left-1/2 -translate-x-1/2 rounded-xl p-4 bg-gray-dark items-center justify-center z-50"
        onClick={openMenu}
      >
        <h6>OPEN MENU</h6>
      </div>
    </>
  );
}

export default SideBar;
