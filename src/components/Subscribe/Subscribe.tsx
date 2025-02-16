"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { useUser } from "../Providers/UserProvider";

function Subscribe() {
  const { user } = useUser();
  return (
    <form className="max-w-[16rem]">
      <h6 className="capitalize mb-7">Subscribe our newsletter</h6>
      <div className="flex mb-2">
        <Input placeholder="Enter Your Email" variant="flat" />
        <Button className="text-sm" color="secondary">
          Subscribe
        </Button>
      </div>
      <p className="text-sm text-gray-text">
        By subscribing to our newsletters, you agree to our{" "}
        <a className="text-green" href="">
          terms and privacy
        </a>
      </p>
      {user && (
        <div className="flex gap-2 max-w-sm mt-7">
          <Button className="rounded-md bg-black" fullWidth radius="none">
            <Image
              src="/icons/apple-logo.svg"
              alt="Play Market"
              width={20}
              height={20}
            />
            <div className="text-white ml-1 flex flex-col items-start leading-none gap-1">
              <span className="text-[0.6rem]">Get it on</span>
              <span className="text-[0.8rem]">Google Play</span>
            </div>
          </Button>
          <Button className="rounded-md bg-black" fullWidth radius="none">
            <Image
              src="/icons/google-play.svg"
              alt="Play Market"
              width={20}
              height={20}
            />
            <div className="text-white ml-1 flex flex-col items-start leading-none gap-1">
              <span className="text-[0.6rem]">Get it on</span>
              <span className="text-[0.8rem]">Google Play</span>
            </div>
          </Button>
        </div>
      )}
    </form>
  );
}

export default Subscribe;
