"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { motion } from "motion/react";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import FighterFilter from "../../../components/FighterFilter/FighterFilter";
import { Suspense, useEffect, useState } from "react";
import { useCloseModal } from "../../../hooks/useCloseModal";
import { useRouter, useSearchParams } from "next/navigation";
import Breadcrumbs from "../../../components/Breadcrums/Breadcrums";
import OfferCard from "../../../components/ui/OfferCard";

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Saved />
    </Suspense>
  );
}

function Saved() {
  const [isOpened, setIsOpened] = useState(false);
  const modalRef = useCloseModal(() => setIsOpened(false));
  const [arrOfParams, setArrOfParams] = useState<
    { key: string; value: string }[]
  >([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  const createArrOfParams = () => {
    const paramsArray: { key: string; value: string }[] = [];
    searchParams.forEach((value, key) => {
      paramsArray.push({ key, value });
    });
    setArrOfParams(paramsArray);
  };

  useEffect(() => {
    createArrOfParams();
  }, [searchParams]);

  const deleteParam = (key: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete(key);
    router.replace(`?${newParams.toString()}`, { scroll: false });
  };
  return (
    <>
      <section className="bg-black flex flex-col items-center justify-center  min-h-[340px] gap-6">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-white text-3xl font-semibold">Recently Saved</h1>
          <p className="text-medium text-white">
            Finds all your recently saved offers easily in one place.
          </p>
        </div>
        <div className="w-full max-w-[550px] relative">
          <div className="flex items-center gap-1 w-full">
            <Input
              placeholder="Find fight offer by..."
              fullWidth
              endContent={
                <div className="flex items-center gap-1 h-[86%]">
                  {arrOfParams.map((param) => (
                    <div
                      key={param.key}
                      className="h-full px-4 py-1 bg-green rounded-md relative flex items-center justify-center cursor-auto select-none"
                    >
                      <p className="capitalize text-white text-sm font-light whitespace-nowrap">
                        {param.value}
                      </p>
                      <IoMdClose
                        className="text-white absolute top-1 right-1 w-[10px] h-[10px] cursor-pointer"
                        onClick={() => deleteParam(param.key)}
                      />
                    </div>
                  ))}
                  <button>
                    <IoIosSearch className="text-xl" />
                  </button>
                </div>
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
              className="absolute z-10 max-h-[432px] top-full left-0 w-full translate-y-2 p-4 bg-white rounded-md shadow-md overflow-hidden"
            >
              <FighterFilter />
            </motion.div>
          )}
        </div>
      </section>
      <section className="py-4 border-b-2 border-gray">
        <Breadcrumbs />
      </section>
      <section className="py-7 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <OfferCard
            title="OKTAGON 50"
            date="20.03.2023"
            image="/images/fighter-modal-bg.jpg"
            organization="Oktagon MMA"
            weightClass="Lightweight"
            place="Prague, Czech Republic"
            purse="€5000-€6000"
            isSaved
          />
        </div>
      </section>
    </>
  );
}

export default Page;
