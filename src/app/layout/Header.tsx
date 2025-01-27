"use client";

import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import { ModalType, useModal } from "../Providers/ModalProvider";

function Header() {
  const { openModal } = useModal();

  return (
    <>
      <header className="flex items-center p-4 px-6 gap-12">
        <Link href={"/"}>
          <Image src="/logo.svg" alt="Logo" width={170} height={34} />
        </Link>
        <nav className="flex items-center gap-7 text-base ml-auto">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Features</Link>
          <Link href={"/"}>Pricing plans</Link>
          <Link href={"/"}>FAQs</Link>
          <Link href={"/"}>News</Link>
          <Link href={"/"}>Contacts</Link>
        </nav>
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
      </header>
    </>
  );
}

export default Header;
