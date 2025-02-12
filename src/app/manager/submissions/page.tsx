"use client";
import { Button } from "@nextui-org/button";
import Breadcrumbs from "../../../components/Breadcrums/Breadcrums";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { Input } from "@nextui-org/input";
import clsx from "clsx";
import { useState } from "react";
import OfferCard from "../../../components/ui/OfferCard";

enum Tab {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

function Page() {
  const [tab, setTab] = useState("active");
  return (
    <>
      <section className="bg-black flex flex-col items-center justify-center  min-h-[340px] gap-6">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-white text-3xl font-semibold">
            Manage Submissions
          </h1>
          <p className="text-medium text-white">
            Track all your active and inactive fighter submissions to specific
            offers
          </p>
        </div>
        <div className="w-full max-w-[550px] relative">
          <div className="flex items-center gap-1 w-full">
            <Input
              placeholder="Search for Fighter..."
              fullWidth
              endContent={
                <button>
                  <IoIosSearch className="text-xl" />
                </button>
              }
            />
            <Button className="min-w-9 px-2" color="secondary">
              <Image
                src="/icons/filter.svg"
                width={16}
                height={16}
                alt="settings"
              />
            </Button>
          </div>
        </div>
      </section>
      <section className="py-4 border-b-2 border-gray">
        <Breadcrumbs />
      </section>
      <section className="py-7 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 w-2/3 mx-auto">
            <Button
              className={clsx("w-full", {
                "bg-green text-white": tab === Tab.ACTIVE,
                "bg-gray-light text-black": tab !== Tab.ACTIVE,
              })}
              onPress={() => setTab(Tab.ACTIVE)}
            >
              Active
            </Button>
            <Button
              className={clsx("w-full", {
                "bg-green text-white": tab === Tab.INACTIVE,
                "bg-gray-light text-black": tab !== Tab.INACTIVE,
              })}
              onPress={() => setTab(Tab.INACTIVE)}
            >
              Inactive
            </Button>
          </div>
        </div>
      </section>
      <section className="py-7 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <OfferCard
            title="Oktagon 53"
            date="20.03.25"
            image="/images/fighter-modal-bg.jpg"
            applied="John 'The Punisher' Smith"
            reviewDate="2 Days"
          />
        </div>
      </section>
    </>
  );
}

export default Page;
