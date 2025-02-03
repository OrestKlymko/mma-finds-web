"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import FighterFilter from "../../components/FighterFilter";
import { Suspense, useState } from "react";
import { motion } from "motion/react";
import { useCloseModal } from "../../../hooks/useCloseModal";

function OffersPage() {
  const [isOpened, setIsOpened] = useState(false);
  const modalRef = useCloseModal(() => setIsOpened(false));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="bg-black flex flex-col items-center justify-center  min-h-[340px] gap-6">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-white text-3xl font-semibold">
            Fight Offers Feed
          </h1>
          <p className="text-medium text-white">
            Track all your active and inactive fighter submissions to specific
            offers.
          </p>
        </div>
        <div className="w-full max-w-[550px] relative">
          <div className="flex items-center gap-1 w-full">
            <Input
              placeholder="Find fight offer by..."
              fullWidth
              endContent={
                <button>
                  <IoIosSearch className="text-xl" />
                </button>
              }
            />

            <Button
              className="min-w-9 px-2"
              color="secondary"
              onPress={() => setIsOpened(!isOpened)}
            >
              <Image
                src="/icons/filter.svg"
                width={16}
                height={16}
                alt="settings"
              />
            </Button>
          </div>
          {isOpened && (
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 8 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute max-h-[432px] top-full left-0 w-full translate-y-2 p-4 bg-white rounded-md shadow-md overflow-hidden"
            >
              <FighterFilter />
            </motion.div>
          )}
        </div>
      </section>
    </Suspense>
  );
}

export default OffersPage;
