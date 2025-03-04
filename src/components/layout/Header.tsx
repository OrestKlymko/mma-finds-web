'use client';

import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Link from 'next/link';
import { ModalType, useModal } from '../Providers/ModalProvider';
import {
  HOME_HEADER_LINKS,
  MANAGER_HEADER_LINKS,
  PROVIDER_HEADER_LINKS,
} from '../../mock/headerLinks';
import clsx from 'clsx';
import NavLink from '../ui/NavigatinLink';
import { useUser } from '../Providers/UserProvider';
import NotificationButton from './NotificationButton/NotificationButton';
import MailButton from './MailButton/MailButton';
import Avatar from '../ui/Avatar';
import { useEffect, useState } from 'react';
import SearchButton from './SearchButton/SearchButton';
import { RxHamburgerMenu } from 'react-icons/rx';

function Header() {
  const [path, setPath] = useState('/');
  const { openModal } = useModal();
  const { user } = useUser();
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    if (!user) return;
    if (user.type === 'manager') {
      setPath('/manager');
    }
    if (user.type === 'provider') {
      setPath('/provider');
    }
  }, [user]);

  const navigationLinks = !user
    ? HOME_HEADER_LINKS
    : user.type === 'manager'
    ? MANAGER_HEADER_LINKS
    : PROVIDER_HEADER_LINKS;

  return (
    <>
      <header className="flex items-center p-4 px-6 gap-12 relative top-0 lg:static">
        <Link href={path}>
          <Image src="/logo.svg" alt="Logo" width={170} height={34} />
        </Link>
        <nav
          className={clsx('hidden lg:flex items-center gap-7 text-base', {
            'mr-auto': user,
            'ml-auto': !user,
          })}
        >
          {navigationLinks.map((link) => (
            <NavLink key={link.name} href={link.href} includes>
              {link.name}
            </NavLink>
          ))}
        </nav>
        {!user ? (
          <div className="hidden lg:flex gap-3">
            <Button
              className="px-6"
              radius="sm"
              color="secondary"
              onPress={() => openModal(ModalType.SignUp)}
            >
              Sign Up
            </Button>
            <Button
              className="px-6"
              radius="sm"
              color="primary"
              onPress={() => openModal(ModalType.FightersList)}
            >
              Sign In
            </Button>
          </div>
        ) : (
          <div className="hidden lg:flex gap-3">
            <SearchButton />
            <NotificationButton />
            <MailButton />
            <Link href={`${path}/featuring`} className="h-full">
              <Avatar
                className="h-[2.2rem] w-auto"
                isOnline
                src={user.avatar}
              />
            </Link>
          </div>
        )}
        {user && (
          <div className="hidden mb:flex gap-3">
            {/* <SearchButton /> */}
            <NotificationButton />
            <MailButton />
            <Link href={`${path}/featuring`} className="h-full">
              <Avatar
                className="h-[2.2rem] w-auto"
                isOnline
                src={user.avatar}
              />
            </Link>
          </div>
        )}
        <div className="lg:hidden block ml-auto z-50">
          <RxHamburgerMenu
            className="text-xl "
            onClick={() => setIsMenuOpened(!isMenuOpened)}
          />
          {isMenuOpened && (
            <div className="absolute w-dvw h-fit bg-white top-full left-0 p-4">
              <nav
                className={clsx(
                  'flex flex-col items-start gap-7 text-base mb-5',
                  {
                    'mr-auto': user,
                    'ml-auto': !user,
                  },
                )}
              >
                {navigationLinks.map((link) => (
                  <NavLink
                    className="text-xl"
                    key={link.name}
                    href={link.href}
                    includes
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>
              {!user ? (
                <div className="flex flex-col gap-3">
                  <Button
                    className="px-6"
                    radius="sm"
                    color="secondary"
                    onPress={() => openModal(ModalType.SignUp)}
                  >
                    Sign Up
                  </Button>
                  <Button
                    className="px-6"
                    radius="sm"
                    color="primary"
                    onPress={() => openModal(ModalType.FightersList)}
                  >
                    Sign In
                  </Button>
                </div>
              ) : (
                <div className="flex gap-3">
                  {/* <SearchButton /> */}
                  <NotificationButton />
                  <MailButton />
                  <Link href={`${path}/featuring`} className="h-full">
                    <Avatar
                      className="h-[2.2rem] w-auto"
                      isOnline
                      src={user.avatar}
                    />
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
