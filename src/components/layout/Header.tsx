"use client";

import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import { ModalType, useModal } from "../Providers/ModalProvider";
import {
  HOME_HEADER_LINKS,
  MANAGER_HEADER_LINKS,
} from "../../mock/headerLinks";
import clsx from "clsx";
import NavLink from "../ui/NavigatinLink";
import { useUser } from "../Providers/UserProvider";
import { IoIosSearch } from "react-icons/io";
import NotificationButton from "./NotificationButton/NotificationButton";
import MailButton from "./MailButton/MailButton";

function Header() {
  const { openModal } = useModal();
  const { user } = useUser();
  const navigationLinks = user ? MANAGER_HEADER_LINKS : HOME_HEADER_LINKS;

  return (
    <>
      <header className="flex items-center p-4 px-6 gap-12">
        <Link href={"/"}>
          <Image src="/logo.svg" alt="Logo" width={170} height={34} />
        </Link>
        <nav
          className={clsx("flex items-center gap-7 text-base", {
            "mr-auto": user,
            "ml-auto": !user,
          })}
        >
          {navigationLinks.map((link) => (
            <NavLink key={link.name} href={link.href} includes>
              {link.name}
            </NavLink>
          ))}
        </nav>
        {!user ? (
          <div className="flex gap-3">
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
            <div className="bg-gray-light rounded-full p-2">
              <IoIosSearch className="text-xl" />
            </div>
            <NotificationButton />
            <MailButton />
            <div
              className={clsx("h-full avatar_container relative", {
                " avatar_container_online ": user.isOnline,
                " avatar_container_offline ": !user.isOnline,
              })}
            >
              <div
                className={clsx("avatar_online_detector", {
                  "bg-green": user.isOnline,
                  "bg-gray-dark": !user.isOnline,
                })}
              ></div>
              <div className="rounded-full h-full overflow-hidden">
                <Image src={user.avatar} alt="avatar" width={34} height={34} />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
