"use client";

import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import Portal from "../../components/Portal/Portal";
import { useState } from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

function Header() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

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
            onPress={() => setIsSignUp(true)}
          >
            Sign Up
          </Button>
          <Button
            className="px-6"
            radius="sm"
            color="primary"
            onPress={() => setIsSignIn(true)}
          >
            Sign In
          </Button>
        </div>
      </header>

      {isSignUp && (
        <Portal onClose={() => setIsSignUp(false)}>
          <div className="w-[700px] h-[600px] bg-gray overflow-y-auto">
            <SignUp />
          </div>
        </Portal>
      )}

      {isSignIn && (
        <Portal onClose={() => setIsSignIn(false)}>
          <div className="w-[700px] h-[600px] bg-gray overflow-y-auto">
            <SignIn />
          </div>
        </Portal>
      )}
    </>
  );
}

export default Header;
