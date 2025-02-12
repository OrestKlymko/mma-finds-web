"use client";
import { Input } from "@nextui-org/input";
import { IoIosSearch } from "react-icons/io";
import Breadcrumbs from "../../../../../components/Breadcrums/Breadcrums";
import { Button } from "@nextui-org/button";
import clsx from "clsx";
import { useState } from "react";
import SubmissionCard from "../../../../../components/ui/SubmissionCard";
enum Tab {
  ACTIVE = "active",
  INACTIVE = "inactive",
  HISTORY = "history",
}
function Submissions() {
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
            offers.
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
          </div>
        </div>
      </section>
      <section className="py-4 border-b-2 border-gray">
        <Breadcrumbs />
      </section>
      <section className="py-7 px-4">
        <div className="max-w-screen-xl mx-auto">
          <h3 className="font-normal text-xl text-center mb-6">
            Submissions of{" "}
            <span className="text-green">John "The Punisher" Smith</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
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
            <Button
              className={clsx("w-full", {
                "bg-green text-white": tab === Tab.HISTORY,
                "bg-gray-light text-black": tab !== Tab.HISTORY,
              })}
              onPress={() => setTab(Tab.HISTORY)}
            >
              History
            </Button>
          </div>
        </div>
      </section>
      <section className="py-7 px-4">
        <div className="max-w-screen-xl mx-auto">
          <SubmissionCard
            name="Oktagon 74"
            date="23.03.2034"
            type="Public"
            overviewDate="5 day"
          />
        </div>
      </section>
    </>
  );
}

export default Submissions;
