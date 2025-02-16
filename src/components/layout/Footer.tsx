"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { useUser } from "../Providers/UserProvider";
import FooterNavigationHome from "./FooterNavigation/FooterNavigationHome";
import FooterNavigationManager from "./FooterNavigation/FooterNavigationManager";
import Subscribe from "../Subscribe/Subscribe";

function Footer() {
  const { user } = useUser();
  return (
    <footer>
      <div className="max-w-screen-xl mx-auto py-20 flex justify-between gap-10">
        <div className={clsx({ "order-5": user })}>
          <Subscribe />
        </div>
        {!user ? <FooterNavigationHome /> : <FooterNavigationManager />}
      </div>
      {!user && (
        <div className="pb-7">
          <p className="text-center text-base">
            You privacy matter to us. We are committed to protection your data.
            Read our{" "}
            <a className="font-medium" href="">
              Privacy Policy
            </a>{" "}
            &{" "}
            <a className="font-medium" href="">
              Terms and Conditions
            </a>{" "}
            for more information.
          </p>
        </div>
      )}
      <div
        className={clsx(" py-4 px-6 flex justify-between", {
          "bg-black": !user,
          "bg-gray": user,
        })}
      >
        <Link href={"/"}>
          <Image
            className={clsx("h-full", { invert: !user })}
            src="/logo.svg"
            alt="Logo"
            width={170}
            height={34}
          />
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex gap-4">
            <li>
              <a
                className={clsx("p-1 h-fit aspect-square  rounded-sm block", {
                  "bg-green": user,
                  "bg-white": !user,
                })}
                href="#"
              >
                <Image
                  className={clsx("h-full", { invert: !user })}
                  src="/icons/instagram.svg"
                  alt="Logo"
                  width={18}
                  height={18}
                />
              </a>
            </li>

            <li>
              <a
                className={clsx("p-1 h-fit aspect-square  rounded-sm block", {
                  "bg-green": user,
                  "bg-white": !user,
                })}
                href="#"
              >
                <Image
                  className={clsx("h-full", { invert: !user })}
                  src="/icons/facebook.svg"
                  alt="Logo"
                  width={18}
                  height={18}
                />
              </a>
            </li>
            <li>
              <a
                className={clsx("p-1 h-fit aspect-square  rounded-sm block", {
                  "bg-green": user,
                  "bg-white": !user,
                })}
                href="#"
              >
                <Image
                  className={clsx("h-full", { invert: !user })}
                  src="/icons/linkedin.svg"
                  alt="Logo"
                  width={18}
                  height={18}
                />
              </a>
            </li>
          </ul>
          <p className={clsx({ "text-white": !user })}>English</p>
          <p className={clsx({ "text-white": !user })}>€ EUR</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
