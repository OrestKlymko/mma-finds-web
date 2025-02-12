import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { Suspense } from "react";
import { IoIosSearch } from "react-icons/io";
import Breadcrumbs from "../../../components/Breadcrums/Breadcrums";
import FighterCard from "../../../components/ui/FighterCard";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";

function FightersPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="bg-black flex flex-col items-center justify-center  min-h-[340px] gap-6">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-white text-3xl font-semibold">My Fighters</h1>
          <p className="text-medium text-white">
            Finds all your recently saved offers easily in one place.
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
      <section className="py-7 px-4 min-h-[60dvh]">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FighterCard />
          <FighterCard />
          <FighterCard />
          <FighterCard />
          <Link
            href="/manager/fighters/create"
            className="w-[28%] bg-green flex flex-col gap-2 items-center justify-center h-full text-white rounded-md hover:bg-emerald-800"
          >
            <FiPlus className="w-8 h-8" color="white" />
            <div className="flex flex-col items-center">
              <p>Create Fighter</p>
              <p>Profile</p>
            </div>
          </Link>
        </div>
      </section>
    </Suspense>
  );
}

export default FightersPage;
